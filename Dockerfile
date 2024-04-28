FROM node:18.16.0 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:latest
COPY --from=builder /app/dist/nats-ui /usr/share/nginx/html
COPY updateurls.sh /usr/share/nginx/html/updateurls.sh
RUN chmod +x /usr/share/nginx/html/updateurls.sh
CMD ["bash", "-c", "/usr/share/nginx/html/updateurls.sh \"$URL_JSON\""]
