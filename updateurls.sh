#!/bin/bash
echo $1 > /usr/share/nginx/html/assets/urls.json
nginx -g "daemon off;"
