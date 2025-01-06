 ## Node Typescript Boilerplate with Express & MongoDB

 0th step:
 ```
 npm init -y
 ```
 
 1st step:
 ```
 npm i typescript -D
 ```

 2nd step:
 ```
 npm i express cors dotenv mongoose cookie-parser bcryptjs
 npm i --save-dev typescript @types/express @types/mongoose @types/cors @types/dotenv @types/bcryptjs ts-node nodemon @types/cookie-parser
 ```

 3rd step:
 Add nodemon.json inside root folder
 ```
 {
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node ./src/index.ts"
}
```

 4th step:
 Add .env
 PORT=4000
 MONGODB_URI=""

 5th step:
 Add tsconfig.json as shown in the repo
