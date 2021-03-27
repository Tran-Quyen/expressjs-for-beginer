# Setup NodeJS: nodejs + npm (node package manager)

https://nodejs.org/en/

# Check setup successfully

$ node -v
$ npm -v
=> version => OK

# Create package.json

$ npm init

# Setup Express

Reference: https://expressjs.com/en/starter/installing.html
$ npm i express
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

Link: https://www.npmjs.com/package/nodemon
$ npm i nodemon --save-dev

# Add this to script in package.json (flag --inspect to debug so good)

"start": "nodemon --inspect index.js",
=> Just use: 'npm start' to run server

# Morgan help we can see logger HTTP request through middleware

$ npm i morgan --save-dev

# Template engines (express-handlebars)

Link: https://www.npmjs.com/package/express-handlebars
$ npm install express-handlebars

# Create folder src and move file index.js to src

# Go to package.json

"main": "src/index.js",
"scripts": {
"start": "nodemon --inspect src/index.js",
"test": "echo \"Error: no test specified\" && exit 1"
},
=> Run to check

# Install SASS (SCSS) need for development(use --save-dev)

Link: https://www.npmjs.com/package/node-sass
$ npm i node-sass --save-dev

# Go to package.json add this line to script bellow to start command

$ node-sass [options] <input> [output]
"watch": "node-sass --watch src/resources/scss/app.scss src/public/css/app.css",
=> This command will compile scss to css

# Fix bugs cant listen \_variables.scss

create nodemon.json and add this
{
"ext": "js mjs json"
}
=> Then fix command watch on package.json to listen folder
"watch": "node-sass --watch src/resources/scss --output src/public/css",

# Add Bootstrap 4

Link: https://getbootstrap.com/docs/4.0/
