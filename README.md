# FMS
Simple fleet management system, based on nest.js, microservices, docker, postgres, kafka and redis

IN PROGRESS

## DEVELOP

How to install dependencies and build all packages locally:

1. npm i lerna -g

2. npm lerna bootstrap --hoist

3. npm run build

After that microservice-core package is linked to other packages

4. 

### Management service

* Create an environment:
  0. Go to ./packages/management
  1. Create .env file by template
    ```console
    touch .env & cp .env.template .env
    ```
  2. Fill .env file

* Setup services
  1. install docker (v20.10.5) and docker-compose (v1.28.6)
  2. Run
  ```console
  docker-compose build
  ```
  3. Run
  ```console 
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
  ```

* Debug
  1. If you are using M1 processor (as I am) by Apple, you can't use debugging inside docker container via vscode. Here is an open issue https://github.com/microsoft/vscode-remote-release/issues/4462.
  As workaround you need launch all services via docker (except which you want to debug)
   ```console 
  docker-compose -f docker-compose.yml -f docker-compose.dev-general.yml -f NOT_DEBUGGING_SERVICE_COMPOSE_FILE_1 up -d
  ```
  TODO add scripts-aliases
  
  And after that launch service in your vscode with usual debug (it requires you to install node.js on your pc)

  2. If you are not using m1 processor - just launch all services via docker-compose, install VSCode plugin remote-containers and debug

* Testing

If you want to start e2e tests for management package:
  0. go to ./packages/management
  1. create .e2e_test.env file by template
    ```console
    touch .e2e_test.env & cp .env.template .e2e_test.env
    ```
  2. Fill .e2e_test.env file
  3. Run test databases from root
  ```console 
  docker-compose -f ./docker-compose.test.yml up -d
  ```
  4. Then
    1. If you want to run tests in docker: TODO:
    2. If you want to debug - run 'Test Management service' debug command in vscode
