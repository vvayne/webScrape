var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
// var selectedTicker = "YOYO";

app.get('/scrape', function(req, res){

  var tickerSymbol = ['CSCO', 'GOOG',
'VCI',
'AMER',
'OLCMF',
'MWHS',
'FMDAY',
'MACR',
'NAVR',
'ITGI',
'NETC',
'ISFEA',
'TSAI',
'UUNT',
'SPYG',
'NSCP',
'TWTR',
]

  for( i = 0; i<tickerSymbol.length; i++){
    var selectedTicker = tickerSymbol[i];
   url = "http://www.sec.gov/cgi-bin/browse-edgar?CIK="+selectedTicker+"&Find=Search&owner=exclude&action=getcompany";
  request(url, function(error,response,html){

    if(!error){
      var json = {symbol:"",company:"",address:""};
      var $ = cheerio.load(html);
      var company,address;
      json.symbol = selectedTicker;
      console.log("in here");
    $('.companyInfo').filter(function(){
      var data = $(this);
       company = data.children().first().text();
       var lastOfRelevantTextIndex = company.indexOf("#")-5; //5 because 4 will be a part of CIK# and then one space. last index will be last relevant
      company = company.substring(0,lastOfRelevantTextIndex+1);
      json.company = company;
      console.log(company);
    })

    $('.mailer').first().filter(function(){
      var data = $(this);
      address = data.children().eq(0).text();
      address += data.children().eq(1).text();
      json.address = address;
      console.log(address);
    })


  fs.appendFile('test9.json',JSON.stringify(json,null,4),function(err) {
    if(err) throw err;
  })

}

})
setTimeout(function(){

},4000)

}
 console.log('File Successfully Written');
    res.send('check your console')
  });

app.listen('8000')

exports = module.exports = app;
