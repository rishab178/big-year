#!/bin/sh
set -e

echo "Waiting for Postgres..."
until nc -z db 5432; do
  sleep 1
done

echo "Postgres is ready"

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Starting app..."
exec npm start
