(function(a,b){"use strict";var c=a.History=a.History||{},d=a.Zepto;if(typeof c.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){(new d(a)).bind(b,c)},trigger:function(a,b){(new d(a)).trigger(b)},extractEventData:function(a,c){var d=c&&c[a]||b;return d},onDomLoad:function(a){new d(a)}},typeof c.init!="undefined"&&c.init()})(window)