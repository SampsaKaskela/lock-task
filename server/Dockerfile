# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:10.16.0

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Change workdir
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

ENTRYPOINT npm install && npm start
