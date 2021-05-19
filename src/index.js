
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const bodyParser = require('koa-bodyparser');


const app = new Koa();
const router = new Router();
const api = require('./api');

router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.use(serve(path.resolve(__dirname, '../view/')));

app.use(ctx => {
  ctx.body = '디폴트';
});

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});
