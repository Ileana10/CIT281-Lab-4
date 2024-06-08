//Require the fastify framework and instantiate it 
const fastify = require("fastify")();
//handel GET verb for / route using fastify
// Note use if "chain" dot notation syntax

fastify.get("/", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send("<h1>Hello from lab 4 </h1>");
});

fastify.get("/name", (request, reply) => {
    const {first, last} = request.query 
    const name = first & last ? `${first } ${last}` : "Guest" // Just a different way to write a conditional statement 
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h1>Hello ${name} </h1>`);
});

// start server and listen to fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
