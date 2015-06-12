//
// let Living = new Component({
//   properties: Component.propertiesFromObject({
//     health: {
//       watch(entity, value) {
//         if (value === 0) {
//           const states = entity.get('states');
//           if (states.has('dead')) {
//             return;
//           }
//           states.add('dead');
//           entity.notify('states');
//         }
//       }
//     }
//   }),
//   init: function (entity) {
//     if (entity.get('health') < 0)) {
//       entity.set('health', 0);
//     }
//   },
//   implies: [Stateful]
// });
//
const ComponentProperty = require('./ComponentProperty');
class Component {
  constructor({properties, init=null, implies=null}) {
    this.__properties = Component.propertiesFromObject(properties);
    this.hasInit = typeof init === 'function';
    this.__init = init;
    this.hasImplies = Array.isArray(implies);
    this.__implies = implies;
  }
  *properties() {
    for (const property of this.__properties) {
      yield property;
    }
  }
}
Component.propertiesFromObject = function (obj) {
  const keys_seen = new Set();
  function scrape(proto, arr) {
    if (proto === null) {
      return arr;
    }
    for (const key in Object.keys(proto)) {
      if (keys_seen.has(key)) continue;
      else {
        keys_seen.add(key);
        var prop = proto[key];
        arr.push(new ComponentProperty(key, prop.watcher));
      }
    }
    return scrape(Object.getPrototypeOf(proto), arr);
  }
  return scrape(obj, []);
}
module.exports = Component;
