FROM node:17.6.0

# Create app directory
RUN mkdir -p /usr/app/
WORKDIR /usr/app

# Copy all files less .dockerignore
COPY ./ ./

# Installing dependencies
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "dev"]