/*
 * Copyright (c) 2013 "chasingmaxwell" Peter Sieg
 * The MIT License (MIT).
 */

function OnResize() {

  'use strict';

  var t, s = this;

  this.width = 0;
  this.delay = 250;
  this.behaviors = [];

  this.getWidth = function() {
    var width = 0;
    if (document.body && document.body.offsetWidth) {
      width = document.body.offsetWidth;
    }
    if (document.compatMode=='CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth ) {
          width = document.documentElement.offsetWidth;
        }
    this.width = width;
  };

  this.add = function(b) {
    this.behaviors.push(b);
  };

  this.run = function() {
    this.getWidth();
    for (var i = 0, len = this.behaviors.length; i < len; i++) {
      if (typeof this.behaviors[i] == 'function') {
        this.behaviors[i](this.width);
      }
    }
  };

  this.getWidth();
  window.onresize = function() {
    if (typeof t !== 'undefined') {
      clearTimeout(t);
    }
    t = setTimeout(function() { s.run(); }, s.delay);
  };

}

