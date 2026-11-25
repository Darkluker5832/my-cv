"""Build a concise English CV directly from the published English profile."""
from pathlib import Path
from html.parser import HTMLParser
from xml.sax.saxutils import escape
import re
from reportlab.platypus import SimpleDocTemplate, Paragraph, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
class Node:
    def __init__(self, tag, attrs=()):
        self.tag, self.attrs, self.children = tag, dict(attrs), []
    def find(self, tag=None, **attrs):
        for child in self.children:
            if isinstance(child, Node):
                if (tag is None or child.tag == tag) and all(child.attrs.get(k) == v for k,v in attrs.items()):
                    yield child
                yield from child.find(tag, **attrs)
    def text(self):
        parts=[]
        for child in self.children:
            if isinstance(child, Node):
                parts.append(child.text())
            else:
                value=child.strip()
                if value: parts.append(value)
        return re.sub(r'\s+',' ',' '.join(parts)).strip()
class Parser(HTMLParser):
    def __init__(self):
        super().__init__(); self.root=Node('root'); self.stack=[self.root]
    def handle_starttag(self, tag, attrs):
        node=Node(tag,attrs); self.stack[-1].children.append(node)
        if tag not in {'br','meta','link','img','hr','input','source','wbr'}: self.stack.append(node)
    def handle_startendtag(self,tag,attrs):
        self.handle_starttag(tag,attrs)
        if self.stack[-1].tag==tag: self.stack.pop()
    def handle_endtag(self,tag):
        if self.stack[-1].tag==tag: self.stack.pop()
    def handle_data(self,data): self.stack[-1].children.append(data)
parser=Parser(); parser.feed((ROOT/'index.html').read_text(encoding='utf-8'))
profile=next(parser.root.find('section',id='profile'))
font_pairs=[(Path('C:/Windows/Fonts/arial.ttf'),Path('C:/Windows/Fonts/arialbd.ttf')),
            (Path('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'),Path('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))]
regular,bold=next((a,b) for a,b in font_pairs if a.exists() and b.exists())
pdfmetrics.registerFont(TTFont('CV',str(regular))); pdfmetrics.registerFont(TTFont('CVBold',str(bold)))
pdfmetrics.registerFontFamily('CV',normal='CV',bold='CVBold',italic='CV',boldItalic='CVBold')
styles={
 'name':ParagraphStyle('name',fontName='CVBold',fontSize=23,leading=28,spaceAfter=3),
 'title':ParagraphStyle('title',fontName='CVBold',fontSize=12,leading=16,spaceAfter=6),
 'body':ParagraphStyle('body',fontName='CV',fontSize=9.5,leading=12.5,spaceAfter=4),
 'small':ParagraphStyle('small',fontName='CV',fontSize=9,leading=11.5,spaceAfter=4),
 'section':ParagraphStyle('section',fontName='CVBold',fontSize=12,leading=16,spaceBefore=11,spaceAfter=7,textColor=HexColor('#17644e'),keepWithNext=True),
 'job':ParagraphStyle('job',fontName='CVBold',fontSize=10,leading=14,spaceBefore=5,spaceAfter=4,keepWithNext=True),
}
def clean(s): return s.replace('—','-').replace('–','-').replace('‑','-').replace('→','to').replace('↗','').replace('·',' | ')
def para(value,style='body'):
    return Paragraph(escape(clean(value)),styles[style])
story=[]
def add(value,style='body'): story.append(para(value,style))
name=next(profile.find('h1')).text().split('.')[0]
add(name,'name'); add('Staff Software Engineer | Tech Lead | .NET Backend','title')
add('Ho Chi Minh City, Vietnam | tht5832@gmail.com | +84 933 772 668','small')
portfolio=next(a.attrs['href'] for a in profile.find('a') if a.attrs.get('href','').startswith('https://darkluker5832.github.io/'))
story.append(Paragraph('Portfolio: <link href="'+escape(portfolio)+'" color="#17644e"><u>'+escape(portfolio)+'</u></link>',styles['small']))
add('PROFESSIONAL SUMMARY','section'); add(next(profile.find('p',**{'class':'lead'})).text())
add('TECHNICAL SKILLS','section')
skills=next(profile.find('ul',**{'class':'tech-stacks'}))
for li in skills.find('li'): add(li.text(),'small')
# Supplementary skills are folded into one short line, retaining actual scope.
extras=list(profile.find('ul',**{'class':'tech-stacks'}))[1]
add(' '.join(li.text() for li in extras.find('li')),'small')
add('PROFESSIONAL EXPERIENCE','section')
timeline=next(profile.find('div',**{'class':'timeline'}))
for article in timeline.find('article'):
    date=next(article.find('div',**{'class':'small muted'})).text()
    title=next(article.find('h3')).text()
    paragraphs=list(article.find('p'))
    company=paragraphs[0].text()
    add(f'{company} | {title} | {date}','job')
    for paragraph in paragraphs[1:]: add(paragraph.text())
story.append(PageBreak())
add('SELECTED PROJECTS','section')
projects=list(profile.find('article',**{'class':'project'}))
featured_names={'Customer Setting','Game Aggregator','Mail Station','Data Warehouse'}
featured=[project for project in projects if next(project.find('h3')).text() in featured_names]
for project in featured:
    title=next(project.find('h3')).text()
    role=next(project.find('div',**{'class':'small muted'})).text()
    add(title,'job'); add(role,'small')
    for paragraph in project.find('p'): add(paragraph.text())
    tech=[n.text() for n in project.find('div',**{'class':'small'})]
    if tech: add(tech[-1],'small')
# The short CV prioritizes four case studies; additional project summaries remain on the website.
add('EDUCATION & CERTIFICATIONS','section')
sections=[n for n in profile.children if isinstance(n,Node) and n.tag=='section']
education=next(n for n in sections if 'AWS Certified' in n.text())
for child in education.find('h3'):
    add(child.text(),'job')
    # The plain paragraphs immediately following each heading carry issuer/date/context.
    container=next(n for n in education.find('div') if child in n.children)
    index=container.children.index(child)+1
    for following in container.children[index:]:
        if isinstance(following,Node) and following.tag=='h3': break
        if isinstance(following,Node) and following.tag=='p': add(following.text(),'small')
add('RECOGNITION','section')
awards=[n for n in profile.find('article',**{'class':'card'}) if 'Employee of the' in n.text()]
add('; '.join(n.text() for n in awards),'small')
out=ROOT/'output/pdf/Thinh-Truong-CV.pdf'; out.parent.mkdir(parents=True,exist_ok=True)
document=SimpleDocTemplate(str(out),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=35,bottomMargin=35,title='Truong Huy Thinh - Software Engineer CV',author='Truong Huy Thinh')
document.build(story)
print('Created',out)
