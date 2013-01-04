var email = require('emailjs'),
    server = email.server.connect({
      user:	"<USERNAME>@gmail.com",
      password:	"<PASSWORD>",
      host:	"smtp.gmail.com",
      ssl:	true
    });
    
//enviamos el mensaje y recibimos la callback con un error o los detalles del envio
server.send({
  text: "<TEXTO TO BE SENT - BODY",
  from: "<USERNAME>@gmail.com",
  to:	"<EMAIL OF DESTINATION> (separated by commas)",
  cc:	"<EMAIL OF CC> (separated by commas)",
  subject: "<SUBJECT>"
}, function(err,message){ console.log(err || message);}); 
 