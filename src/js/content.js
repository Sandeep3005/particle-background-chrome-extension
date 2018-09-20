(function run() { initContentJS() } ());


function createNewElement(element) {
  return document.createElement(element);
}

function addNewElement(element) {
  document.body.appendChild(element);
}

function runParticleCode() {
  setTimeout(() => {
    particlesJS.load('particles-js', 'https://api.jsonbin.io/b/5ba3b4910fbf2833e22911b5/2', function () {
      console.log('callback - particles.js config loaded');
    });
  }, 1000);

}

function initContentJS() {
  console.log('inside itinti');
  let newDiv = createNewElement('div');
  console.log('newDiv', newDiv);
  newDiv.id = 'particles-js';
  newDiv.classList.add('main-particles');
  addNewElement(newDiv);
  runParticleCode();
}
