
FROM node:18.16.0 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:latest
COPY --from=builder /app/dist/nats-ui /usr/share/nginx/html
RUN echo '[ \
    { "text": "Choose Environmet", "url": "" }, \
    { "text": "test","url": "http://localhost:8222/streaming"}, \
    { "text": "prod","url": "http://localhost:8223/streaming" }, \
    { "text": "uat","url": "http://localhost:8224/streaming" }, \
    { "text": "rc","url": ""} \
]' > /usr/share/nginx/html/assets/urls.json
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]