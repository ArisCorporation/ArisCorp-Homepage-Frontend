.PHONY: build-ptu
build-ptu: ## Build the ptu docker image.
	$(info Prepare build)
	cp ./.env.ptu.sample ./.env.ptu.build
	@echo $(shell git rev-parse --short HEAD) >> ./.env.ptu.build
	$(info Start build)
	docker compose -f docker/ptu/docker-compose.yml build
	$(info Remove anything from build)
	rm ./.env.ptu.build
	$(info Tag docker images)
	docker tag lucasgruber/ariscorp-website:ptu lucasgruber/ariscorp-website:ptu-$(shell git rev-parse --short HEAD)
	$(info Publish docker images)
	docker push lucasgruber/ariscorp-website:ptu-$(shell git rev-parse --short HEAD)
	docker push lucasgruber/ariscorp-website:ptu
	$(info Remove docker build-image)
	docker image rm lucasgruber/ariscorp-website:ptu-$(shell git rev-parse --short HEAD)

.PHONY: start-ptu
start-ptu: ## Start the ptu docker container.
	docker compose -f docker/ptu/docker-compose.yml up -d

.PHONY: stop-ptu
stop-ptu: ## Stop the ptu docker container.
	docker compose -f docker/ptu/docker-compose.yml down

.PHONY: build-staging
build-staging: ## Build the staging docker image.
	$(info Prepare build)
	cp ./.env.staging.sample ./.env.staging.build
	@echo $(shell git rev-parse --short HEAD) >> ./.env.staging.build
	$(info Start build)
	docker compose -f docker/staging/docker-compose.yml build
	$(info Remove anything from build)
	rm ./.env.staging.build
	$(info Tag docker images)
	docker tag lucasgruber/ariscorp-website:staging lucasgruber/ariscorp-website:staging-$(shell git rev-parse --short HEAD)
	$(info Publish docker images)
	docker push lucasgruber/ariscorp-website:staging-$(shell git rev-parse --short HEAD)
	docker push lucasgruber/ariscorp-website:staging
	$(info Remove docker build-image)
	docker image rm lucasgruber/ariscorp-website:staging-$(shell git rev-parse --short HEAD)

.PHONY: start-staging
start-staging: ## Start the staging docker container.
	docker compose -f docker/staging/docker-compose.yml up -d

.PHONY: stop-staging
stop-staging: ## Stop the staging docker container.
	docker compose -f docker/staging/docker-compose.yml down
  
.PHONY: build-production
build-production: ## Build the production docker image.
	$(info Prepare build)
	cp ./.env.production.sample ./.env.production.build
	@echo $(shell git rev-parse --short HEAD) >> ./.env.production.build
	$(info Start build)
	docker compose -f docker/production/docker-compose.yml build
	$(info Remove anything from build)
	rm ./.env.production.build
	$(info Tag docker images)
	docker tag lucasgruber/ariscorp-website:production lucasgruber/ariscorp-website:production-$(shell git rev-parse --short HEAD)
	$(info Publish docker images)
	docker push lucasgruber/ariscorp-website:production-$(shell git rev-parse --short HEAD)
	docker push lucasgruber/ariscorp-website:production
	$(info Remove docker build-image)
	docker image rm lucasgruber/ariscorp-website:production-$(shell git rev-parse --short HEAD)

.PHONY: start-production
start-production: ## Start the production docker container.
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker compose -f docker/production/docker-compose.yml down

all: docker rmi $(docker images --filter dangling=true -q --no-trunc)