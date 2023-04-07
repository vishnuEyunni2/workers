
try {

  const webWorker = new Worker('worker.js');

  notifyWorker('Init!')
  webWorker.onmessage = (e) => { logMessage(e.data); }

  function notifyWorker(msg) {
    webWorker.postMessage(msg);
  }

  function buttonClicked() {
    // get Input details
    let el = document.getElementById('input_msg');
    if (el.value) {
      notifyWorker('Value entered is: ' + el.value);
      el.value = '';
    }
    notifyWorker('Button Clicked !')
  }

  function logMessage(msg) {
    let target = document.getElementById('msg-logger');
    let el = document.createElement('p');
    el.textContent = msg;
    if (target)
      target.appendChild(el);
  }

  function clearLogBtn() {
    let target = document.getElementById('msg-logger');
    target.replaceChildren();
  }

} catch (err) {
  console.error('Your browser doesnt support Workers. Please check error log for more details.');
  console.error(err);
}
