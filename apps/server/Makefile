docker-build:
	docker build -t alumni-porta-server:1.0 .
docker-run:
	docker run --env-file .env -d -p 8080:8080 --name alumni-porta-server alumni-porta-server:1.0
mongo-local:
	docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password --name mongo-docker --net mongo-network mongo
mongoexpress-local:
	docker run -d -p 8081:8081 \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=root \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
  -e ME_CONFIG_MONGODB_SERVER=mongo-docker \
  -e ME_CONFIG_BASICAUTH_USERNAME=user \
  -e ME_CONFIG_BASICAUTH_PASSWORD=password \
  --net=mongo-network \
  --name mongo-express \
  mongo-express