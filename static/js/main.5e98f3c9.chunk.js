(this["webpackJsonpadvice-app"]=this["webpackJsonpadvice-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11),i=n.n(o),r=(n(22),n(12)),l=n(13),s=n(16),d=n(15),u=(n(23),n(14)),m=n.n(u),v=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={advice:""},e.fetchAdvice=function(){m.a.get("https://api.adviceslip.com/advice").then((function(t){var n=t.data.slip.advice;e.setState({advice:n}),console.log(n)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("component did mount"),this.fetchAdvice()}},{key:"render",value:function(){var e=this.state.advice;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"card"},c.a.createElement("button",{className:"button",onClick:this.fetchAdvice},c.a.createElement("span",null,"Word Of Wisdom!")),c.a.createElement("h1",{className:"heading"},e))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5e98f3c9.chunk.js.map