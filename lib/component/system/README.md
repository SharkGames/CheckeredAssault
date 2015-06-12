# Component

## new Component({properties, init, implies})

```javascript
let myComp = new Component({
  properties: {
    compProp: {
      watch: function (entity, compProp) {
        if (compProp === 0) {
          entity.alert();
          compProp = 123;
        }
      }
    }
  },
  init: function () {
    this.compProp = 123;
  },
  implies: [OtherComponent]
})
```

# Entity

## new Entity([components],properties)

```javascript
new Entity([myComponent], {
  alert: function () {
    console.log('compProp reset');
  }
})
```
