//promises

let is_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
      //this proves other parts of code continue concurrently until the promise is resolved
      console.log(`pizza shop open`);
    } else {
      reject(console.log(`shop is closed`));
    }
  });
};
order(2000, () => {
  console.log(`banana shake was selected`);
})
  .then(() => {
    return order(2000, () => console.log(`cones was selected`));
  })
  .then(() => {
    return order(2000, () => console.log(`dates was topped`));
  })
  .catch((err) => {
    console.log(`come during operation hours`);
  })
  .finally(() => {
    console.log(`day end shop closed`);
  });
