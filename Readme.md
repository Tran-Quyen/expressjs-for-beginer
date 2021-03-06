# Design By Dang Tran Quyen - SDT:0337846412

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

# Prettier Extension
# lint-staged and husky => Co the tim hieu them dung khi xai git ma chua dung format prettier se auto format
$ npm i lint-staged husky --save-dev
# Install mongoose => interact with mongodb
$ npm i mongoose
# Library
mongoose-delete => soft delete
mongoose-slug-generator => generator slug for path in uri
mongoose-sequence => auto increment field in db for sort
# vendor
bs4 suggest => iconic => icon font
# Middleware
### ?? ngh??a
- Ph???n m???m trung gian (?????ng gi???a c??c th??nh ph???n trong m?? h??nh ph???n m???m)
- Browser (client) ============= Request ==============> Server(Node)
  ||                                                          ||
  ||                                                          ||
  ||                                                          ||
- Browser (client) <============ Response =============== Server(Node)
### Vai tr??
- Gi???ng nh?? 'Ng?????i G??c C???ng' => Guard
- Home ===========================> Guard 1(middleware 1):Guard 2(middleware 2):Guard n(middleware n): Event
  ||                                  ||
  ||                                  ||
  ||                                  ||
- Home <=========================== Event
1. So??t v?? (ki???m so??t -> Validation)
2. Kh??ng cho v??o
3. Cho ph??p v??o (Validation passed -> cho v??o)
4. Ch???nh s???a/thay ?????i
5. C?? th??? c?? nhi???u Guard (middleware) (multiple guard hay multiple middleware)

### ???ng d???ng
- D???ng ch???c n??ng x??c th???c (Authentication)
- D???ng ch???c n??ng ph??n quy???n (Authorization)
- ????? share c??c gi?? tr??? c???a bi???n t???i t???t c??? c??c views (BE)