receivesAFunction = (func) => func();
func = () => console.log("I'm a callback function!");

returnsANamedFunction = () => func;

returnsAnAnonymousFunction = () => {
   return () => console.log("I'm anonymous!");
}