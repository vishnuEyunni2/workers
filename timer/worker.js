
self.onmessage = (e) => {
  let timerId;
  let count = 0;

  function counter() {
    count++;
    self.postMessage('count_' + count);
  }

  if (e.data === 'start') {
    timerId = setInterval(counter, 1000)
    self.postMessage('timerId_' + timerId)
  }

  if (e.data.msg === 'reset') {
    clearInterval(e.data.id);
    self.postMessage('reset')
  }
}