up:
	docker-compose up -d

down:
	docker-compose down

init-db:
	docker-compose exec db bash -c "chmod 0775 docker-entrypoint-initdb.d/init-database.sh"
	docker-compose exec db bash -c "./docker-entrypoint-initdb.d/init-database.sh"