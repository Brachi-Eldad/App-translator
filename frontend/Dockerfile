FROM nginx:alpine

# הסרת כל הגדרה קודמת שיכולה להפריע
RUN rm -rf /etc/nginx/conf.d/* /usr/share/nginx/html/*

# העתקת הקונפיגורציה למקום הראשי
COPY nginx.conf /etc/nginx/http.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# העתקת הקבצים
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# הרשאות גורפות
RUN chmod -R 777 /usr/share/nginx/html