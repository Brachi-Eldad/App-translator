FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
RUN chmod 644 /usr/share/nginx/html/index.html /usr/share/nginx/html/script.js
EXPOSE 80