
const Router = require('koa-router');
const apiCtrl = require('./apiController');

const api = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

api.get('/select', apiCtrl.list);

api.post('/insert', apiCtrl.insert);

api.get('/delete', apiCtrl.delete);

api.patch('/', apiCtrl.update);

module.exports = api;


