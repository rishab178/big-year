default:
	echo "Use make build to build the docker image!"

build: 
	docker build . --tag "big_year:latest"

stop:
	docker compose stop

start:
	docker compose up -d

prune:
	docker image prune -f

rollout: build stop start prune

restart: stop start