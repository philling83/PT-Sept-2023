const { sayHelloTo } = require('./say-hello-to')

function giveMessageToMrsPotato(message) {
  sayHelloTo("Mrs. Potato");
  console.log(`(Psst... ${message})`)
}

giveMessageToMrsPotato("Hi Buzz");

//!!START SILENT
module.exports = giveMessageToMrsPotato;
//!!END
