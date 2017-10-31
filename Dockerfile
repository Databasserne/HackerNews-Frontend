FROM node:7.8.0

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .
RUN npm install -g serve

RUN npm run build --production

EXPOSE 5000
CMD serve -s build
