
const Router = require('koa-router');
const apiCtrl = require('./apiController');

const api = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

api.get('/', apiCtrl.list);

api.post('/', apiCtrl.create);

api.delete('/', apiCtrl.delete);

api.put('/', apiCtrl.replace);

api.patch('/', apiCtrl.update);

module.exports = api;


