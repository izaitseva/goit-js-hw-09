const formRef = document.querySelector('.form');
let submitRef = document.querySelector('№submit');

submitRef.addEventListener('submit', onBtnClick);

function onBtnClick() {
  let firstDelay = Number(formRef.delay.value);
  const delayStep = Number(formRef.step.value);
  const promisesAmount = Number(formRef.amount.value);
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });