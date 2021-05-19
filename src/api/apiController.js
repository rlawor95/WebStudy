
 const getConnection = require('../dbpool.js');


exports.list = (ctx) => {
    
    getConnection((connection) => {
            connection.query(`select * from hitable`, function (error, result, fields) {
                if (error) {
                    console.log(error);
                }
                else {
                   console.log("result ", result);
                   console.log("result ", result[0].id);
                   console.log("fields " , fields)
                    console.log("success");
                 var v = result[0].id;
                 console.log(v);
                 ctx.body = v; // 화면에 어떻게 뿌리지 ?
                }
            });
            connection.release;
        });

   
    
};

exports.insert = (ctx) => {
    var param = ctx.request.body;
    console.log(param.id, " ", param.data_);

    var id = param.id;
    var data = param.data_;

    getConnection((connection) => {
        connection.query(`INSERT INTO hitable(id, data_, strdata) VALUES(${id}, ${data}, 'temp')`, function (error, result, fields) {
            if (error) {
                console.log(error);
            }
            else {
                ctx.body = 'success';
                console.log("success");
            }
        });
        connection.release;
    });
};

exports.delete = (ctx) => {
    ctx.body = 'deleted';
};

exports.update = (ctx) => {
    ctx.body = 'updated';
};

