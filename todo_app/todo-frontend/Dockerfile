FROM node:16
WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV REACT_APP_API_PINGPONG_URI=http://localhost:8081/pingapi
ENV REACT_APP_API_TODO_URI=http://localhost:8081/todoapi

CMD ["npm", "start"]