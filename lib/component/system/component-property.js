class ComponentProperty {
  constructor(name, watcher = null) {
    this.name = String(name);
    this.hasWatcher = typeof watcher === 'function';
    this.watcher = watcher;
  }
}
module.exports = ComponentProperty;
