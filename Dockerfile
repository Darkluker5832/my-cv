FROM nginx:alpine

# Xóa các file mặc định của Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy mã nguồn trang web vào thư mục phục vụ của Nginx
COPY index.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
