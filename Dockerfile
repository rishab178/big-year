# BUILD STAGE
FROM node:20-alpine AS builder

RUN apk add --no-cache openssl

WORKDIR /app

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm install

RUN npm run build



# RUN STAGE
FROM node:20-alpine AS runner

RUN apk add --no-cache openssl
RUN apk add --no-cache netcat-openbsd

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_PUBLIC_VERCEL=false
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 bigyear && adduser --system --uid 1001 bigyear

COPY --from=builder --chown=bigyear:bigyear /app/.next ./.next
COPY --from=builder --chown=bigyear:bigyear /app/public ./public
COPY --from=builder --chown=bigyear:bigyear /app/node_modules ./node_modules
COPY --from=builder --chown=bigyear:bigyear /app/package.json ./package.json
COPY --from=builder --chown=bigyear:bigyear /app/prisma ./prisma

COPY --chown=bigyear:bigyear entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

USER bigyear

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]
