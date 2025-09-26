# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
RUN npm i -g serve@14.2.4
COPY --from=build /app/dist ./dist
# Heroku provides $PORT
CMD ["serve", "-s", "dist", "-l", "${PORT}"]
