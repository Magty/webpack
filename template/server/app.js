/**
 * Created Date: Tuesday, October 31st 2017, 3:01:08 pm
 * Author: yugasun
 * Email: yuga.sun.bj@gmail.com
 */

const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const port = 9527

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port)

console.log(`Mock server is start on: http://localhost:${port}`)
