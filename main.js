var Crawler = require('simplecrawler');
var crawler = Crawler('http://lajumate.ro');
crawler.on('fetchcomplete', function(queueItem) {
    while (/[0-9].html$/.test(queueItem.url.toString()), function() {
        console.log(queueItem.url);
//        break();
    });
});

crawler.maxConcurrency = 20;
crawler.interval = 2000;
crawler.start();