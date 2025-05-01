#!/bin/bash

# Define the root directory
ROOT_DIR="ticket-service"

# Define the structure
mkdir -p $ROOT_DIR/src/{controllers,routes,services,models}
mkdir -p $ROOT_DIR/config

# Create base files
touch $ROOT_DIR/src/app.js
touch $ROOT_DIR/src/controllers/ticket.controller.js
touch $ROOT_DIR/src/routes/ticket.routes.js
touch $ROOT_DIR/src/routes/index.js
touch $ROOT_DIR/src/services/ticket.service.js
touch $ROOT_DIR/src/models/db.js

touch $ROOT_DIR/config/default.json
touch $ROOT_DIR/server.js
touch $ROOT_DIR/package.json

echo "🎉 Project structure created under ./$ROOT_DIR"

