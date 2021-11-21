FROM node:16
WORKDIR /usr/src/app

COPY . .

RUN npm install

ENV REACT_APP_API_PINGPONG_URL=http://localhost:8081/pingapi
ENV REACT_APP_API_TODO_URL=http://localhost:8081/todoapi
ENV REACT_APP_API_LOGOUT_URL=http://localhost:8081/logapi

CMD ["npm", "start"]