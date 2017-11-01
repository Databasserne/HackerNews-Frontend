FROM node:8:8.1

ENV NPM_CONFIG_LOGLEVEL warn

COPY ./build ./build
RUN npm install -g serve

EXPOSE 5000
CMD serve -s build
