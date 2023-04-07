// listen to message

self.onmessage = (e) => {
  console.log('MSSG:: ', e.data);
  if (e.data == 'Init') {
    self.postMessage(`...`);
    self.postMessage(`Worker thread Initiated !`);
  } else {
    self.postMessage(`...`);
    self.postMessage(e.data);
  }
}
