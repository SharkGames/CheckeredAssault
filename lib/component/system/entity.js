// new Entity(Living, {health: 10})
const hasOwn = require('has');
class Entity {
  constructor(components, properties) {
    this.properties = Object.create(null);
    this.watchers = Object.create(null);
    const seen_properties = new Set();
    const with_inits = [];
    this.components = new Set();
    for (const component of components) {
      applyComponentToEntity(component, this, properties, this.components, seen_properties, with_inits);
    }
    for (const property_name of seen_properties) {
      this.properties[name] = properties[name];
    }
    for (const components of with_inits) {
      component.init(this);
    }
    for (const property_name of seen_properties) {
      this.notify(property_name);
    }
  }
  has(property) {
    return hasOwn(this.properties, property);
  }
  notify(property) {
    if (!has(property)) throw new Error(`entity does not have a property ${property}`);
    if (this.watchers[property]) {
      for (const watcher of this.watchers[property]) {
        watcher(this, this.properties[property]);
      }
    }
  }
  set(property, value) {
    if (!has(property)) throw new Error(`entity does not have a property ${property}`);
    this.properties[property] = value;
    this.notify(property);
  }
  get(property) {
    if (!has(property)) throw new Error(`entity does not have a property ${property}`);
    return this.properties[property];
  }
}
function applyComponentToEntity(
    component,
    entity,
    properties,
    seen_components = new Set(),
    seen_properties = new Set(),
    with_inits = []
) {
  if (seen_components.has(component)) {
    return;
  }
  seen_components.add(component);
  if (component.hasInit) {
    with_inits.add(component);
  }
  for (const prop of component.properties()) {
    const name = prop.name;
    seen_properties.add(name);
    if (prop.hasWatcher) {
      const watchers = entity.watchers[name] = entity.watchers[name] || [];
      watchers.push(prop.watcher);
    }
  }
  if (component.hasImplies) {
    for (const implication of component.implies) {
      applyComponentToEntity(implication, entity, seen_components);
    }
  }
}
