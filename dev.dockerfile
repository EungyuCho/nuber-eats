FROM node:12.16.2
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN cd /usr/src/app
COPY package.json /usr/src/apP
RUN npm install
COPY . /usr/src/apP

CMD ["npm", "run", "start"]