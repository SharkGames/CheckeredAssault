const Component = require('../../system/component');
module.exports = function (space = {}) {
  const Grouped = new Component({
    init(entity) {
      entity.groupSpace = space;
    }
  });
  return Grouped;
}
