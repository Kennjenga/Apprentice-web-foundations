//creating async functions
function time(sev) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, sev);
  });
}

async function order() {
  try {
    await time(2000);
    console.log(`ha`);
  } catch (err) {
    console.log(err);
  }
}
order();
