// This works mainly because the ANSI range 0x00-0xFF
// as the equivalent UTF16 code range 0x0000-0x00FF.
define(function () {
  "use strict";
  var n = String.fromCharCode(0);
  return function atou(v) {
	  var a = v.split(''), o = [];
	  a.forEach(function(v) { o.push(n); o.push(v); });
	  return o.join('');
  };
});
