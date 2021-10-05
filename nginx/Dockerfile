FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

ADD default.conf ./etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]