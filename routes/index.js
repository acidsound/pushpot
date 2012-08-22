var fs = require('fs');
var uuid = require('node-uuid');
exports.index = function(req, res){
  var id = req.params['uuid'] || uuid.v1().split('-').join('');
  fs.writeFileSync(__dirname + '/../repo/'+id+'.json', req.query['data']);
  res.json(req.params['uuid'] ? {"result":"ok"} : {"id":id});
};
exports.read = function(req, res){
  var text = fs.readFileSync(__dirname + '/../repo/'+req.params.uuid+'.json').toString(); 
  var result;
  try {
    result = JSON.parse(text);
  } catch(e) {
    console.log("plain text:"+text);
    res.send(text); 
  } finally {
    if (typeof result==='object') res.json(result);
  }
}
