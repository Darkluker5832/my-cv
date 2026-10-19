# Phillip — Staff Software Engineer & System Architect CV

Online resume and portfolio website for **Phillip**, Staff Software Engineer specializing in backend engineering, distributed systems, system architecture, and enterprise application modernization.

Designed with a modern, high-performance aesthetic (Linear/Vercel inspired), responsive layout, Dark/Light mode, and a print stylesheet optimized for exporting clean PDF resumes.

---

## 🚀 Quick Local Preview

You can preview the website immediately without installing any dependencies (Node.js/npm is not required):

### In PowerShell / Windows Terminal:
```powershell
start index.html
```
Or simply double-click [index.html](index.html) in Windows File Explorer.

---

## 🌐 How to Publish to GitHub & GitHub Pages

Follow these simple steps to put your CV online with a public URL:

### 1. Initialize Git & Commit
Open your terminal in `d:\Projects\MyCV` and run:

```powershell
# 1. Initialize git repository
git init

# 2. Stage all files
git add .

# 3. Create your initial commit
git commit -m "feat: initial commit for staff engineer cv portfolio"

# 4. Set main branch
git branch -M main
```

### 2. Create a Repository on GitHub
1. Go to [GitHub - New Repository](https://github.com/new).
2. Set repository name (e.g. `my-cv` or `cv` or `<your-username>.github.io`).
3. Choose **Public** so anyone (recruiters, hiring managers) can access it.
4. Leave "Add a README file" unchecked (since we already have one).
5. Click **Create repository**.

### 3. Push your code to GitHub
Run the commands shown on GitHub:

```powershell
# Replace <YOUR-GITHUB-USERNAME> and <REPO-NAME> with your actual GitHub info:
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<REPO-NAME>.git
git push -u origin main
```

### 4. Enable GitHub Pages

#### Option A: Automatic via GitHub Actions (Recommended)
1. In your GitHub repository, click **Settings** > **Pages** (in the left sidebar).
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! The included `.github/workflows/deploy.yml` workflow will automatically deploy your CV on every commit.

#### Option B: Deploy from Branch
1. In your GitHub repository, click **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Select Branch: `main` and Folder: `/ (root)`.
4. Click **Save**.

### 5. Access your Public URL
After 1–2 minutes, your website will be live at:
```
https://<YOUR-GITHUB-USERNAME>.github.io/<REPO-NAME>/
```
*(If you named your repository `<YOUR-GITHUB-USERNAME>.github.io`, it will be live directly at `https://<YOUR-GITHUB-USERNAME>.github.io/`)*

---

## 🛠️ Personalization / Customization

Before sharing with recruiters or clients, make sure to update your contact details in [index.html](index.html):

| Placeholder | Where to edit in `index.html` |
|---|---|
| Email | Search for `[Your email]` and update `copyToClipboard('...')` |
| Phone | Search for `[Your phone]` and update `copyToClipboard('...')` |
| LinkedIn URL | Search for `[Your LinkedIn]` and update the `href="#"` attribute |
| GitHub URL | Search for `[Your GitHub]` and update the `href="#"` attribute |
| University & Year | Update the Education section at the bottom of `index.html` |

---

## 🖨️ PDF Exporting
- Click the **Print / PDF** button on the top navigation bar, or press `Ctrl + P`.
- Select **Save as PDF** as destination.
- Ensure "Background graphics" is enabled.
- The built-in print CSS automatically suppresses navigation elements and formats the content cleanly for A4/Letter page breaks.
