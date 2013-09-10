
/*
 * GET home page.
 */
var redis = require('redis');
var client = redis.createClient();

exports.index = function(req, res){
  res.render('index', { title: 'RedisAdmin', serverInfo: client.server_info});
};
