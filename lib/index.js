const Renderer = require('./ui/pixi');
const Game = require('./logic');

const renderer = new Renderer(); 
document.body.appendChild(renderer.view);
renderer.loadMap(new Array(5*5), 5);
let top = 1, left = 1;
let p = renderer.addPerson({top,left});
setInterval(_=> {
  top = (top + 1) % 5;
  left = (left + 1) % 5;
  renderer.updatePerson(p, {top,left});
}, 1e3);

(null).x;

function animate() {
    // start the timer for the next animation loop 
    requestAnimationFrame(animate);
    // this is the main render call that makes pixi draw your container and its children. 
    renderer.render();
}
animate();
