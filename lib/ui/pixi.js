const PIXI = require('pixi.js');

// TODO better scaling
// VIEW interactions (like zoom / drag map behavior)
class PixiRenderer {
  constructor(scale = 50) {
    this.scale = scale;
    this.renderer = PIXI.autoDetectRenderer(10 * scale, 10 * scale);

    this.stage = new PIXI.Stage();
    this.container = null;

    this.map = [];
    this.people = new Map();
    this.uuid = 0;
  }

  get view() {
    return this.renderer.view;
  }

  getNewUUID() {
    return this.uuid++;
  }

  addPerson(state) {
    const id = this.getNewUUID();
    let graphics = new PIXI.Graphics();
    this.people.set(id, {state,graphics});
    graphics.beginFill(0xFFFF00);
    graphics.drawRect(0, 0, 1, 1);
    graphics.endFill();
    this.container.addChild(graphics);
    this.renderPerson(id);
    return id;
  }

  renderPerson(id) {
    let person = this.people.get(id);
    let graphics = person.graphics;
    let state = person.state;
    graphics.position.x = state.left;
    graphics.position.y = state.top;
  }

  updatePerson(id, newState) {
    let person = this.people.get(id);
    // todo, moving animations rather than clobber
    person.state = newState;
    this.renderPerson(id);
  }

  loadMap(arr, width) {
    if (arr.length % width != 0) {
      throw new Error('map space count is not a multiple of width');
    }
    this.state = new PIXI.Stage();
    this.container = new PIXI.DisplayObjectContainer();
    this.container.scale.x = this.scale;
    this.container.scale.y = this.scale;
    this.stage.addChild(this.container);
    const map = [];
    for (let i = 0; i < arr.length; i++) {
      let graphics = map[i] = new PIXI.Graphics();
      // TODO gfx per space, walls height, etc.
      // mouseovers blah blah
      graphics.beginFill(0x00FF00);
      let col = i % width;
      let row = Math.floor(i / width);
      graphics.drawRect(col * this.scale, row * this.scale, this.scale, this.scale);
      graphics.endFill();
      this.container.addChild(graphics);
    }
  }

  render() {
    this.renderer.render(this.stage);
  }
}

module.exports = PixiRenderer;

// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer` 
// which will try to choose the best renderer for the environment you are in. 
