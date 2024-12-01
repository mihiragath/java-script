// Immediately Invoked Function Expressions (IIFE)
//why need iife?
//->iife is needed bcz using iife we reduce globle scop polution

(function hello() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("mihir");
