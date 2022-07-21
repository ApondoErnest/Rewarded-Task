#stage 1
FROM node:16.15.0 as ngBuild

WORKDIR /watchAdd

ENV PORT 80

RUN npm install -g @angular/cli

COPY package.json /watchAdd/package.json

RUN npm install 

COPY . /watchAdd/

#RUN npm i  @angular-devkit/build-angular:browser -g

RUN ng build

#stage 2
FROM nginx:alpine
COPY --from=ngBuild /watchAdd/dist/rewarded /usr/share/nginx/html
