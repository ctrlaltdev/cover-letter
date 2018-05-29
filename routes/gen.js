var express = require('express');
var router = express.Router();

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

router.post('/', function(req, res, next) {
  console.log(req.body);

  let info = {
    city: req.body["info.city"],
    date: formatDate(new Date(req.body["info.date"])),
    position: req.body["info.position"]
  };

  let personalinfo = {
    phone: {
      txt: req.body["personalinfo.phone.txt"],
      value: req.body["personalinfo.phone.value"]
    },
    email: req.body["personalinfo.email"],
    github: req.body["personalinfo.github"],
    linkedin: req.body["personalinfo.linkedin"],
    website: req.body["personalinfo.website"]
  };

  let recipient = {
    company: req.body["recipient.company"],
    address: req.body["recipient.address"],
    city: req.body["recipient.city"],
    state: req.body["recipient.state"],
    zip: req.body["recipient.zip"]
  };

  if(req.body["recipient.name"] !== ""){
    recipient.name = req.body["recipient.name"];
  }

  let content = {
    body: req.body["content.body"],
    closing: req.body["content.closing"]
  };

  switch(req.body["content.intro"]) {
    case '0':
      content.intro = "Dear "+recipient.company+","
      break;
    case '1':
      content.intro = "Dear "+recipient.name+","
      break;
    case '2':
      content.intro = "Dear "+recipient.company+" Team,"
      break;
    case '3':
      content.intro = "Dear Hiring Manager,"
      break;
    case '4':
      content.intro = "To Whom It May Concern,"
      break;
    case '5':
      content.intro = "Dear Human Resources Manager,"
      break;
  }

  res.render('cover', {
    title: 'Cover Letter',
    info: info,
    personalinfo: personalinfo,
    recipient: recipient,
    content: content
  });
});

module.exports = router;