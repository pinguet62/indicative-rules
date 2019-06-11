---
permalink: plural
title: plural
category: sanitizations
---

Converts a value to it's plural version. If value is not a string
then it will return as it is.
 
```js
const sanitizationRules = {
  controllerName: 'plural'
}
 
// or
const sanitizationRules = {
  controllerName: [
    rule('plural')
  ]
}
```