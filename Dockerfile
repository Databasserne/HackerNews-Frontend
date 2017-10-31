FROM node:7.8.0

COPY . .
RUN npm install 
RUN npm install -g serve

RUN npm run build --production

EXPOSE 5000
CMD serve -s build
