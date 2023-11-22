.PHONY: build-ptu
build-ptu: ## Build the ptu docker image.
	@echo "\033[1;36mPrepare build\033[0m"
	cp ./.env.ptu.sample ./.env.ptu.build
	@echo $(shell git rev-parse --short HEAD) >> ./.env.ptu.build
	@echo "\033[1;36mStart build\033[0m"
	docker compose -f docker/ptu/docker-compose.yml build
	@echo "\033[1;36mRemove anything from build\033[0m"
	rm ./.env.ptu.build
	@echo "\033[1;36mTag docker images\033[0m"
	docker tag ariscorp/ariscorp-website:ptu ariscorp/ariscorp-website:ptu-$(shell git rev-parse --short HEAD)
	@echo "\033[1;36mPublish docker images\033[0m"
	docker push ariscorp/ariscorp-website:ptu-$(shell git rev-parse --short HEAD)
	docker push ariscorp/ariscorp-website:ptu
	@echo "\033[1;36mRemove docker build-image\033[0m"
	docker image rm ariscorp/ariscorp-website:ptu-$(shell git rev-parse --short HEAD)
	make cleanup
	@echo "\033[1;32mBuild-Number: $(shell git rev-parse --short HEAD)\033[0m"

.PHONY: start-ptu
start-ptu: ## Start the ptu docker container.
	docker compose -f docker/ptu/docker-compose.yml up -d

.PHONY: stop-ptu
stop-ptu: ## Stop the ptu docker container.
	docker compose -f docker/ptu/docker-compose.yml down

.PHONY: build-staging
build-staging: ## Build the staging docker image.
	@echo "\033[1;36mPrepare build\033[0m"
	cp ./.env.staging.sample ./.env.staging.build
	@echo $(shell git rev-parse --short HEAD) >> ./.env.staging.build
	@echo "\033[1;36mStart build\033[0m"
	docker compose -f docker/staging/docker-compose.yml build
	@echo "\033[1;36mRemove anything from build\033[0m"
	rm ./.env.staging.build
	@echo "\033[1;36mTag docker images\033[0m"
	docker tag ariscorp/ariscorp-website:staging ariscorp/ariscorp-website:staging-$(shell git rev-parse --short HEAD)
	@echo "\033[1;36mPublish docker images\033[0m"
	docker push ariscorp/ariscorp-website:staging-$(shell git rev-parse --short HEAD)
	docker push ariscorp/ariscorp-website:staging
	@echo "\033[1;36mRemove docker build-image\033[0m"
	docker image rm ariscorp/ariscorp-website:staging-$(shell git rev-parse --short HEAD)
	make cleanup
	@echo "\033[1;32mBuild-Number: $(shell git rev-parse --short HEAD)\033[0m"

.PHONY: start-staging
start-staging: ## Start the staging docker container.
	docker compose -f docker/staging/docker-compose.yml up -d

.PHONY: stop-staging
stop-staging: ## Stop the staging docker container.
	docker compose -f docker/staging/docker-compose.yml down
  
.PHONY: build-live
build-live: ## Build the live docker image.
	@echo "\033[1;36mPrepare build\033[0m"
	cp ./.env.live.sample ./.env.live.build
	@echo $(shell git rev-parse --short HEAD) >> ./.env.live.build
	@echo "\033[1;36mStart build\033[0m"
	docker compose -f docker/live/docker-compose.yml build
	@echo "\033[1;36mRemove anything from build\033[0m"
	rm ./.env.live.build
	@echo "\033[1;36mTag docker images\033[0m"
	docker tag ariscorp/ariscorp-website:live ariscorp/ariscorp-website:live-$(shell git rev-parse --short HEAD)
	@echo "\033[1;36mPublish docker images\033[0m"
	docker push ariscorp/ariscorp-website:live-$(shell git rev-parse --short HEAD)
	docker push ariscorp/ariscorp-website:live
	@echo "\033[1;36mRemove docker build-image\033[0m"
	docker image rm ariscorp/ariscorp-website:live-$(shell git rev-parse --short HEAD)
	make cleanup
	@echo "\033[1;32mBuild-Number: $(shell git rev-parse --short HEAD)\033[0m"

.PHONY: start-live
start-live: ## Start the live docker container.
	docker compose -f docker/live/docker-compose.yml up -d

.PHONY: stop-live
stop-live: ## Stop the live docker container.
	docker compose -f docker/live/docker-compose.yml down

.PHONY: cleanup
cleanup:
	$(info Cleaning everything up)
	docker rm $(shell docker stop $(shell docker ps -a --filter ancestor=moby/buildkit:buildx-stable-1 --format="{{.ID}}"))
	docker rmi $(shell docker images --filter dangling=true -q --no-trunc)