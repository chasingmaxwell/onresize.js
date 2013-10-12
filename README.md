onresize.js
================

A simple framework for executing JavaScript functions when the browser window is resized.

### Why onresize.js?

- Simple usage. No media queries. No complicated options. Just queue functions to run when the window resizes.
- Functions run only once per resize with built-in debounce delay.
- No dependencies.
- It's tiny (777 bytes minified).

### How to use:

```javascript
// Create instance of OnResize object.
var oR = new OnResize();

// Optionally set debounce delay in milliseconds. Default is 250.
oR.delay = 300;

// Add your functions to the list of behaviors to be executed when the window resizes.
// The first argument is the current browser width.
var myFunction = function(width) {
  alert('The window width is ' + width + 'px');
}
oR.add(myFunction);

// Retrieve the current window width at anytime.
windowWidth = oR.width;
```

