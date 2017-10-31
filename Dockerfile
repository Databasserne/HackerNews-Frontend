FROM node:7.8.0

ENV NPM_CONFIG_LOGLEVEL warn

COPY ./build ./build
RUN npm install -g serve

EXPOSE 5000
CMD serve -s build
