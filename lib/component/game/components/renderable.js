const Component = require('../../system/component');
const Positioned = require('./positioned');
const Renderable = new Component({
  implies: [Positioned],
  init(entity) {
    entity.__animations = [];
    entity.queueVisualization = function (animation, timing, done) {
      entity.view.queue(animation, done);
    };
  }
});
module.exports = Renderable;
