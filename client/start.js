const express = require('express');

const app = express();
app.use(express.static('./dist'))
app.listen(8080,function(err){
	if(err){
		console.log('err')
	}else{
		console.log('項目啟動成功')
	}
})