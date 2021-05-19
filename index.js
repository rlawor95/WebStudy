const Koa = require('koa');
const Router = require('koa-router');
//const mysql = require('mysql');

const getConnection = require('./dbpool.js');

const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');

//   const pool = mysql.createPool({
//     connectionLimit: 5000,
//     host     : 'localhost',
//     user     : 'user',
//     password : 'worud0370',
//     database : 'TESTDB',
//   });

// pool.getConnection((err, connection) => {
//     if (err) {
//         switch (err.code) {
//             case "PROTOCOL_CONNECTION_LOST":
//                 console.error("Database connection was closed.");
//                 break;
//             case "ER_CON_COUNT_ERROR":
//                 console.error("Database has too many connections.");
//                 break;
//             case "ECONNREFUSED":
//                 console.error("Database connection was refused.");
//                 break;
//         }
//     }
//     if (connection)
//         return connection.release();
// });

app.use(router.routes()).use(router.allowedMethods());
app.use(bodyParser()); 

router.get('/', (ctx, next) => {
    ctx.body = '홈';
});

router.get('/about', (ctx, next) => {
    ctx.body = '소개';
});

router.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params; // 라우트 경로에서 :파라미터명 으로 정의된 값이 ctx.params 안에 설정됩니다.
    ctx.body = name + '의 소개';
});

router.post('/insert', (ctx, next) => {
    //const { id } = ctx.request.query; // 주소 뒤에 ?id=10 이런식으로 작성된 쿼리는 ctx.request.query 에 파싱됩니다.
    const id = 16;
    ctx.body = id;
    if (id) {
        console.log(id);
        getConnection((connection) => {
            connection.query(`INSERT INTO hitable(id, data_, strdata) VALUES(${id}, 11, 'hi')`, function (error, result, fields) {
                if (error) {
                    console.log(error);
                }
                else {
                    ctx.body = `id : ${id}`;
                    console.log("success");
                }
            });
            connection.release;
        });
    }
    else 
    {
        ctx.body = '포스트 아이디가 없습니다.';
    }
});



app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});
