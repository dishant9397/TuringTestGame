FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /TuringTestGame
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --force
COPY . .
EXPOSE 3000
RUN chown -R node /TuringTestGame
USER node
CMD ["npm", "start"]
