const Component = require('../../system/component');
const Positioned = new Component({
  init(entity) {
    entity.top = entity.top || 0;
    entity.left = entity.left || 0;
  }
});
module.exports = Positioned;
