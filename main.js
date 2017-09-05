var Crawler = require('simplecrawler');
var crawler = new Crawler("http://olx.ro");


crawler.on('fetchcomplete', function(queueItem) {
    console.log(queueItem.url);
    
});

crawler.interval = 1000;
crawler.maxConcurrency = 4;
//crawler.maxDepth = 2;
crawler.start();