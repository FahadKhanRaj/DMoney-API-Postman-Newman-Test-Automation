const newman = require('newman');

newman.run({
    collection:'https://api.postman.com/collections/42906001-f57866b9-1864-44aa-bfa0-15abcc0f30e8?access_key=PMAT-01JP33RVNE7JP3BRK2J4H7CZX3',
    reporters: 'htmlextra',
    interationCount: 1,
    reporter: {
        htmlextra: {
            export:'./Reports/report.html',
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});