
const fs = require('fs');
const { url } = require('inspector');
const DOC = require('pdfkit')
const doc = new DOC({size:"a4",font:"Times-Roman"});

//input details

const blue = '#187187'
const black = '#101010'
let name  = 'Nived'
let accounts = {email:"nived187@outlook.com",phone:"",github:"http://github.com/Nived187",linkedin:"http://linkedin.com/in/nived-cv-792455239/"}
let profile = "Tech enthusiast with high natural problem solving ability. Focuses on web development , has projects with nodejs,express and mongodb on github."
let skills = ["JAVA","C","C++"]
let experience = ["worked at bakery"]
let projects = ["something please","TaskManager App : A simple task managing web app built using nodejs,javascript and mongodb. Demonstartes basic CRUD operations to cloud server and updating UI."]
let education= ["10th","12th","UG"]
let languages = ["english","malayalam","hindi"]
let accountstxt = 400;
const accountsimg = accountstxt-25

doc.pipe(fs.createWriteStream(`${name}.pdf`));

// begin writing pdf

if(accounts.email)
doc.image('./resources/email.png',accountsimg,95,{width:20})
if(accounts.github)
doc.image('./resources/github.png',accountsimg,120,{width:20})
if(accounts.linkedin)
doc.image('./resources/linkedin.png',accountsimg,148,{width:20})

if(accounts.phone)
doc.image('./resources/call.png',accountsimg,176,{width:20})


doc.fontSize(12).text(accounts.email,accountstxt,100)
doc.moveDown()
doc.fontSize(12).text(name,{link:accounts.github})
doc.moveDown()
doc.fontSize(12).text(name,{link:accounts.linkedin})
doc.moveDown()
doc.fontSize(12).text(accounts.phone)
doc.moveDown()

// CANDIDATE NAME
doc.font('Times-Bold').fontSize(36).fillColor(blue).text(name,100,100).moveDown(2)


doc.font('Times-Bold').fontSize(12).fillColor(blue).text('PROFILE').moveDown()
doc.font('Times-Roman').fillColor(black).text(profile,{align:"justified"}).moveDown(2)


doc.font('Times-Bold').fontSize(12).fillColor(blue).text('SKILLS').moveDown()
doc.font('Times-Roman').fillColor(black).list(skills).moveDown(2)

doc.font('Times-Bold').fontSize(12).fillColor(blue).text('EXPERIENCE').moveDown()
doc.font('Times-Roman').fillColor(black).list(experience).moveDown(2)

doc.font('Times-Bold').fontSize(12).fillColor(blue).text('PROJECTS').moveDown()
doc.font('Times-Roman').fillColor(black).list(projects).moveDown(2)

doc.font('Times-Bold').fontSize(12).fillColor(blue).text('EDUCATION').moveDown()
doc.font('Times-Roman').fillColor(black).list(education).moveDown(2)

doc.font('Times-Bold').fontSize(12).fillColor(blue).text('KNOWN LANGUAGES').moveDown()
doc.font('Times-Roman').fillColor(black).list(languages).moveDown(2)




doc.end()

