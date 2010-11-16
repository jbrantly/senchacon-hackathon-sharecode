
var connect = require('connect');
var validation = require('./public/validation');

var server = connect.createServer();

server.use('/validate',
    connect.bodyDecoder(),       
    function(req, res){
        var response = {};
        
        var errors = validation.validateEmail(req.body.email);
        
        if (errors && errors.length) {
            response.success = false;
            response.msg = errors[0];
        }
        else {
            response.success = true;
        }
        
        var body = JSON.stringify(response)
        res.writeHead(200, {
            'Content-Type': 'text/plain'
          , 'Content-Length': body.length
        });
        res.end(body);
    }
);

server.use('/', connect.staticProvider({ root: __dirname + '/public', cache: true }));
server.listen(3000);

console.log('Connect server listening on port 3000');