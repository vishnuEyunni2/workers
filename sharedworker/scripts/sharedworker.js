// 

onconnect = (ev) => {
  console.log('1')
  const [port] = ev.ports;

  port.onmessage = e => {
    const [first, second] = e.data;
    let sum = +first + +second;
    if (isNaN(sum)) {
      port.postMessage("Both inputs should be numbers");
      console.log('2')
    }
    else {
      const workerResult = `Result: ${sum} `;
      console.log('3')
      port.postMessage(workerResult);
    }
  }
}