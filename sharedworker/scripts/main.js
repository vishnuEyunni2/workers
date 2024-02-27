const sharedworker = new SharedWorker('scripts/sharedworker.js');

const first = document.getElementById('#1')
const second = document.getElementById('#2')
const res = document.getElementById('res')

sharedworker.port.start();

first.onkeyup = () => {
  sharedworker.port.postMessage([first.value, second.value]);
}

second.onkeyup = () => {
  sharedworker.port.postMessage([first.value, second.value]);
};

sharedworker.port.onmessage = e => {
  res.textContent = e.data;
};

