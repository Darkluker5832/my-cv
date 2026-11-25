FROM nginx:alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy the static portfolio and downloadable CV
COPY index.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets/
COPY output/pdf /usr/share/nginx/html/output/pdf/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
