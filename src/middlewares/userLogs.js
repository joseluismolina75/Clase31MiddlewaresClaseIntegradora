const {appendFileSync} = require('fs');
const {join} = require('path');
module.exports = function(req, res, next){
    let msg = `El usuario ingresó a la ruta : ${req.url} \n`;

    appendFileSync(join(__dirname, '../logs/userLogs.txt'), msg)
    next()
}