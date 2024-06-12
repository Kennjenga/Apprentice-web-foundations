//asynchronous
//Callback -- parallel programming. a func passed as an argument to
//other func and executed after an operation completes.

//
let order = (callP) => {
  console.log(`order placed start production`);
  callP();
};

let production = () => {
  setTimeout(() => {
    console.log(`start production`);
    setTimeout(() => {
      console.log(`food is done`);
    }, 2000);
  }, 2000);
};

order(production);
