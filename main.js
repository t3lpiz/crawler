var Crawler = require('simplecrawler');
var cheerio = require('cheerio');
var crawler = new Crawler("http://olx.ro");


crawler.on('fetchcomplete', function(queueItem, buffer) {
//    console.log(queueItem.url);
    var $ = cheerio.load(buffer.toString('utf8'));
    titlu = $('div.offer-titlebox h1').text();
    descriere = $('div.clr p').text().trim();
    pret = $('div.price-label strong').text();
    console.log("Titlu anunt: %s", titlu);
    console.log("Pret: %s", pret);
    console.log("Descriere: %s", descriere);
});

crawler.interval = 1000;
crawler.maxConcurrency = 4;
//crawler.maxDepth = 2;
crawler.start();