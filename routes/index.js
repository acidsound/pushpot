var fs = require('fs');
var uuid = require('node-uuid');
exports.index = function(req, res){
  var data = !!req.files ? fs.readFileSync(req.files.fileupload.path) : req.method==='POST' ? JSON.stringify(req.body) : req.query['data'];
  var id = req.params['uuid'] || uuid.v1().split('-').join('');
  if (!!data) fs.writeFileSync(__dirname + '/../repo/'+id+'.json', data);
  res.json(req.params['uuid'] ? {"result":"ok"} : {"id":id});
};
exports.read = function(req, res){
  var renderResult = function (err, data) {
    try {
      res.json(JSON.parse(data.toString()));
    } catch (e) {
      res.send(text);
    }
  };
  fs.readFile(__dirname + '/../repo/'+req.params.uuid+'.json', renderResult);
};
