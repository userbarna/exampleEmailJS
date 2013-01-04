//Setup basic email credentials
var email = require('emailjs'),
    server = email.server.connect({
      user:	"<USERNAME>@gmail.com",
      password:	"<PASSWORD>",
      host:	"smtp.gmail.com",
      ssl:	true
    });
    
//Send message. Callback tells us whether there's been an error or not
server.send({
  text: "<TEXTO TO BE SENT - BODY",
  from: "<USERNAME>@gmail.com",
  to:	"<EMAIL OF DESTINATION> (separated by commas)",
  cc:	"<EMAIL OF CC> (separated by commas)",
  subject: "<SUBJECT>"
}, function(err,message){ console.log(err || message);}); 

/* If you want to send an email everytime an error happens replace node global console.error() function:
console.error = function(msg) {
  // send email
  // ...
    
  // additionaly log
  process.stderr.write(msg);
};
SOURCE: http://stackoverflow.com/questions/7204474/how-do-i-send-an-email-for-every-error-that-occurs-in-node-js
 */ 