# Stop and remove existing containers
docker compose -f docker-compose.yml down

# Build and start the containers using Docker Compose
docker compose -f docker-compose.yml build
docker compose -f docker-compose.yml up -d