# build environment
FROM node:12-alpine as build
WORKDIR /web
COPY ./package.json /web/package.json
COPY ./yarn.lock /web/yarn.lock
RUN apk add --no-cache git
RUN yarn global add react-scripts@3.2.0 -g
RUN yarn install
COPY ./ /web/
RUN yarn build


FROM nginx:1.17.4-alpine
COPY --from=build /web/build /web
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
