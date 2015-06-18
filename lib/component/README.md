# Component Entity System

## Entity

Used to describe a UI component. This could be a player character, a level, a prompt, etc.

```javascript
new Entity([...Components], {
  initial: properties,
  go: here
})
```

### `Boolean entity.has(String propertyName)`

### `Value entity.get(String propertyName)`

### `void entity.notify(String propertyName)`

### `void entity.set(String propertyName, Value value)`

## Component

A component is a behavior that needs to be associated with an entity. Since `Entity` describes visual actors on screen, these behaviors should represent some part of rendering information on the UI or adjusting behaviors of other components.

```javascript
const Component = require('./component/system/Component.js');
let my_component = new Component({
  implies: [...OtherComponents],
  init: function (entity) {},
  properties: {
    propertyName: {
      watch: function (entity, currentValue) {}
    }
  }
})
```

### implies

Implies will allow you to pull in components necessary for your component to work, the components in implies will be loaded *before* your component.

### init

Init is used after an `Entity` is created with your component. This will be fired after the properties passed to the entity constructor have been setup.

### properties[name].watch

This will be fired whenever an `Entity` with this component invokes `entity.notify(name)`. This can be used to manage interaction with other components.
