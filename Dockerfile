FROM ubuntu:trusty
MAINTAINER Isaac Almanza

# Install Node.js and other dependencies
RUN apt-get update && \
    apt-get -y install curl
RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh && sudo bash nodesource_setup.sh
RUN sudo apt-get -y install nodejs && apt-get -y install build-essential

# Install PM2
RUN npm install -g pm2

# Provides cached layer for node_modules
# ADD ./server/package.json /tmp/package.json
# RUN cd /temp && npm install
# RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
RUN mkdir -p /var/www/wissen
WORKDIR /var/www/wissen
ADD ./server /var/www/wissen

EXPOSE 3000

# Install modules
CMD cd /var/www/wissen
RUN npm install

CMD pm2 start --no-daemon /var/www/wissen/app.js
