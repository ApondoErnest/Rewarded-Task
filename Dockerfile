FROM node:16.15.0

WORKDIR /watchAdd

ENV PORT 4200

COPY package.json /watchAdd/package.json

RUN npm install

COPY . /watchAdd/

CMD ["npm", "serve"]
