
const fs = require('fs')
const DOC = require('pdfkit')
const doc = new DOC({size:"a4",font:"Times-Roman"});

const name  = '1'

doc.pipe(fs.createWriteStream(`${name}.pdf`));
doc.fontSize(18).text('naaye',100,100)
doc.end()
