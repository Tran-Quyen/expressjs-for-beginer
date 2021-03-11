# Setup NodeJS: nodejs + npm (node package manager)

https://nodejs.org/en/

# Check setup successfully

$ node -v
$ npm -v
=> version => OK

# Create package.json

$ npm init

# Setup Express

$ npm i express
Reference: https://expressjs.com/en/starter/installing.html
=> We can see new item: node_modules and package-lock.json

# Check Express is installed

1. Go to package.json find dependencies
2. If have express and version => successfully

# Hello world to start Express follow this link

https://expressjs.com/en/starter/hello-world.html
=> Run: node index.js

# Ctrl + C => Exit server

# Nodemon => Automatic restart server if change

# Dev Runtime because realworld not need it (just dev)

$ npm i nodemon --save-dev
https://www.npmjs.com/package/nodemon

# Add this to script in package.json (flag --inspect to debug so good)

"start": "nodemon --inspect index.js",
=> Just use: 'npm start' to run server

# Debug by nodemon tool
