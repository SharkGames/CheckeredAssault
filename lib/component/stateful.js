const Component = require('../../system/component');
const Stateful = new Component({
  init: function (entity) {
    entity.set('states', new Set());
  },
  properties: {
    states: {
    }
  }
});
module.exports = Stateful;
