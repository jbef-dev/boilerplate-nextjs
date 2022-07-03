FROM --platform=linux/amd64 node:latest

WORKDIR /app

COPY package.json ./

RUN npm install
RUN npm install -g netlify-cli

COPY . .

CMD ["netlify", "deploy", "--build", "--prod"]
