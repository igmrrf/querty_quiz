(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/logo.9ed23240.bin"},31:function(e,t,n){e.exports=n.p+"static/media/correct.a8f5d622.mp3"},32:function(e,t,n){e.exports=n.p+"static/media/wrong.8839dabc.mp3"},33:function(e,t,n){e.exports=n.p+"static/media/Short Sms Tone.3a27c93c.mp3"},34:function(e,t,n){e.exports=n.p+"static/media/1 Second Tone.c6d00827.mp3"},35:function(e,t,n){e.exports=n.p+"static/media/notify.2c654e74.mp3"},38:function(e,t,n){e.exports=n(68)},43:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(27),o=n.n(r),s=(n(43),n(1)),c=n(9),i=n(10),u=n(11),m=n(12),d=n(8),p=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Welcome to QWERTY QUIZ"),l.a.createElement("div",{className:"instructions"},l.a.createElement("h3",null,"Instructions"),l.a.createElement("ul",null,l.a.createElement("li",null,"Type as fast as you can while trying to avoid mistakes"))),l.a.createElement(d.b,{to:"/game"},l.a.createElement("button",null,"Start"))))}}]),n}(a.Component),v=n(29),f=n.n(v),g=(n(48),n(30)),h=n.n(g);function E(){return l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:h.a,className:"logo-img",alt:"logo"})," Thinkerbell Labs")}function S(e){var t=e.level,n=e.score,a=e.multiplier;return l.a.createElement("div",{className:"statistics"},l.a.createElement("div",{className:"level-m"},l.a.createElement("h5",{className:"level"},"Level: ",t," "),l.a.createElement("h5",{className:"multiplier"},"Multiplier x",a," ")),l.a.createElement("h3",{className:"score"},"Score: ",n))}var b={small:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],big:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},w=n(6),O=n(5),y=n(31),T=n.n(y),k=n(32),N=n.n(k),j=n(33),C=n.n(j),P=n(34),A=n.n(P),W=n(35),I=n.n(W),K=function(e){var t=e.right,n=e.left,r=e.leveled,o=e.multiplied,s=e.end,c=Object(O.a)(T.a),i=Object(w.a)(c,1)[0],u=Object(O.a)(N.a),m=Object(w.a)(u,1)[0],d=Object(O.a)(C.a),p=Object(w.a)(d,1)[0],v=Object(O.a)(A.a),f=Object(w.a)(v,1)[0],g=Object(O.a)(I.a),h=Object(w.a)(g,1)[0];return Object(a.useEffect)((function(){t&&i(),n&&m(),r&&p(),o&&f(),s&&h()}),[t,i,m,n,r,s,h,f,p,o]),l.a.createElement("div",null)},L=n(36),x=n.n(L).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BASE_URL||"http://localhost:8080/"}),U=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).startTimer=function(){console.log("Timer Started");var e=a.state,t=(e.level,e.words,e.timer);a.intervalPointer=setInterval((function(){console.log("before",a.state.words),console.log("Before Timer",a.state.timer);var e=a.state.words.shift();a.setState({timer:t-500,words:a.state.words.filter((function(t){return t!==e})),input:"",multiplier:1}),console.log("After",a.state.words),console.log("After Timer",a.state.timer)}),t)},a.updateWords=function(){var e=a.state,t=e.level,n=(e.words,e.timer,e.score),l=e.levels;3===t||0===n?(a.setState({gameOver:!0},(function(){console.log("Game Over")})),setTimeout((function(){window.alert("Game Over\n score:".concat(n))}),1e3)):(a.setState({level:t+1,words:l[t+1]},(function(){a.startTimer()})),a.setState({leveled:!0},(function(){a.setState({leveled:!1})})))},a.setWords=function(){var e=a.state,t=e.level,n=(e.words,e.timer,e.levels);a.setState({words:n[t]})},a.start=function(){a.setWords(),a.startTimer()},a.stopTimer=function(){console.log("Timer Stopped"),clearInterval(a.intervalPointer)},a.log=function(e){return console.log(e)},a.logKey=function(e){console.log(e.key)},a.onKeyPress=function(e){console.log("Button pressed",e),a.showPressedKey(e)},a.showPressedKey=function(e){if(b.big.includes(e)){var t="[data-skbtn='".concat(e,"']");document.querySelectorAll(".hg-standardBtn").forEach((function(e){return e.classList.remove("clicked")})),document.querySelector(t).classList.add("clicked")}},a.onChange=function(e){a.setState({input:e}),console.log("Input changed",e)},a.restart=function(){a.stopTimer(),a.setState({words:[""],input:"",multiplier:1,score:0,level:1,timer:2500,gameOver:!1},(function(){console.log(a.state.words),a.start()}))},a.onChangeInput=function(e){var t=e.target.value,n=a.state,l=n.input,r=n.level,o=n.words,s=n.multiplier,c=n.score;if(console.log(t),t&&o[0]){var i=t.length,u=t[i-1].toUpperCase(),m=t.toUpperCase();if(console.log(u),b.big.includes(u)&&a.showPressedKey(u),a.setState({input:m}),m===o[0].substr(0,i)?(console.log("Still Correct"),a.setState({right:!0},(function(){a.setState({right:!1})}))):(a.setState({multiplier:1}),a.setState({left:!0},(function(){a.setState({left:!1})})),console.log("Error made")),m===o[0]){a.stopTimer(),console.log("Filtering"),a.setState({score:c+10*r*s}),a.setState({multiplier:s+1}),a.setState({multiplied:!0},(function(){a.setState({multiplied:!1})}));var d=o.filter((function(e){return e!==m}));a.setState({words:d}),a.setState({input:""}),console.log(l),a.startTimer()}a.keyboard.setInput(t)}else a.setState({input:t})},a.state={leves:null,words:[""],input:"",multiplier:1,score:0,level:1,timer:2500,left:!1,right:!1,multiplied:!1,leveled:!1,gameOver:!1,loading:!1},a.intervalPointer=null,a}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.state,t=e.words,n=(e.level,e.gameOver);0===t.length&&(console.log("No more words"),n||this.updateWords(),this.stopTimer()),document.addEventListener("keypress",this.logKey)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keypress",this.log),clearInterval(this.intervalPointer)}},{key:"componentDidMount",value:function(){var e=this;x.get("levels").then((function(t){console.log(t),e.setState({levels:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.input,a=t.level,r=t.words,o=t.multiplier,s=t.score,c=t.left,i=t.right,u=t.leveled,m=t.multiplied,d=t.gameOver;return l.a.createElement("div",{className:"App"},l.a.createElement(K,{left:c,right:i,leveled:u,multiplied:m,end:d}),l.a.createElement("header",{className:"App-header"},l.a.createElement(E,null),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.start},"Start")," ",l.a.createElement("button",{onClick:this.restart},"Restart")),l.a.createElement(S,{level:a,multiplier:o,score:s}),l.a.createElement("div",{style:{color:"black",width:"80%"}},l.a.createElement("div",{className:"slide"},r?r.slice(0,1).map((function(e,t){return l.a.createElement("h4",{key:t},e," ",l.a.createElement("span",null,t+1))})):null),l.a.createElement("input",{value:n,placeholder:"Tap",onChange:this.onChangeInput,autoFocus:!0}),l.a.createElement(f.a,{keyboardRef:function(t){return e.keyboard=t},layoutName:"default",onChange:this.onChange,onKeyPress:this.onKeyPress,layout:{default:["Q W E R T Y U I O P"," A S D F G H J K L "," Z X C V B N M "]}}))))}}]),n}(a.Component),_=(n(66),[{name:"string",score:10},{name:"string",score:10},{name:"string",score:12},{name:"string",score:44},{name:"string",score:55},{name:"string",score:14},{name:"string",score:63},{name:"string",score:53},{name:"string",score:33},{name:"string",score:88}]),B=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement("h1",null,"Leader Board"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"SN"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Score")),_.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t+1),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.score))})))))},R=function(){return l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:p}),l.a.createElement(s.a,{exact:!0,path:"/game",component:U}),l.a.createElement(s.a,{exact:!0,path:"/leaderboard",component:B}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.a,null,l.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.538bbc4b.chunk.js.map