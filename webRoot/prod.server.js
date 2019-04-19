var express = require('express');
var config = require('./config/index');
// var axios = require('axios');

/* 跨域*/
var app = express();
// var apiRoutes = express.Router();
// apiRoutes.get('/getDiscList', (req, res) => {
//   var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
//   axios.get(url, {
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'referer': 'https://c.y.qq.com/',
//       'host': 'c.y.qq.com'
//     },
//     params: req.query
//   }).then((response) => {
//     console.log(response)
//     res.json(response.data)
//   }).catch((e) => {
//     consle.log(e)
//   })
// });
// app.use('/api', apiRoutes);

/*入口*/
app.use(express.static('./dist'));

/*端口号监听*/
var port = process.env.PORT || config.build.port;
module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('listening at http://localhost:' + port + '\n');
})
