(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/game-over-sound-effect.7ce51a00.mp3"},21:function(e,t,n){e.exports=n.p+"static/media/vac.a7f51a68.jpg"},23:function(e,t,n){e.exports=n.p+"static/media/easterEgg.5255f166.PNG"},24:function(e,t,n){e.exports=n(62)},29:function(e,t,n){},33:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(14),r=n.n(c),l=(n(29),n(7)),i=n.n(l),s=n(10),u=n(2),m=n(3),d=n(5),p=n(4),h=n(6),E=n(1),b=(n(33),n(11)),f=n.n(b),y=(n(45),n(20)),g=n.n(y),_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={counter:0},n.updateCount=function(e){var t={id:e},n={headers:{"Content-Type":"application/json"},body:JSON.stringify(t),method:"POST"};fetch("http://localhost:51634/api/EndingRecord/",n).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},n.getCount=function(e){fetch("http://localhost:51634/api/EndingRecord/"+e).then(function(e){return e.json()}).then(function(e){n.setState({counter:e.SceneCount})})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.getCount(this.props.sceneId),this.updateCount(this.props.sceneId);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",null,"hi",this.state.counter)}}]),t}(a.Component),v=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){"bad"===this.props.endingType.trim()&&this.changeTheme()}},{key:"changeTheme",value:function(){document.getElementsByClassName("gameHeader")[0].style="background-color: black",document.getElementsByTagName("body")[0].style="background-color: black",document.getElementsByTagName("div")[0].style="color: red",document.getElementsByClassName("sceneList")[0].lastElementChild.style="color: red"}},{key:"render",value:function(){var e=this.props.endingType;return"bad"===e.trim()?o.a.createElement("div",null,o.a.createElement("audio",{ref:"audio_tag",src:g.a,style:{display:"none"},controls:!0,autoPlay:!0}),o.a.createElement("pre",{className:"gameOver"},"  ",",--,     .--.           ,---.    .---..-.   .-.,---.  ,---.    ",o.a.createElement("br",null),".' .'     / /\\ \\ |\\    /| | .-'   / .-. )\\ \\ / / | .-'  | .-.\\   ",o.a.createElement("br",null),"|  |  __ / /__\\ \\|(\\  / | | `-.   | | |(_)\\ V /  | `-.  | `-'/   ",o.a.createElement("br",null),"\\  \\ ( _)|  __  |(_)\\/  | | .-'   | | | |  ) /   | .-'  |   (    ",o.a.createElement("br",null)," ","\\  `-) )| |  |)|| \\  / | |  `--. \\ `-' / (_)    |  `--.| |\\ \\   ",o.a.createElement("br",null)," ",")\\____/ |_|  (_)| |\\/| | /( __.'  )---'         /( __.'|_| \\)\\  ",o.a.createElement("br",null),"(__)             '-'  '-'(__)     (_)           (__)        (__) ",o.a.createElement("br",null)),o.a.createElement(_,{sceneId:this.props.sceneId})):"good"===e.trim()?o.a.createElement("div",null,o.a.createElement("pre",{className:"theEnd"},"_______ .-. .-.,---.    ,---.  .-. .-. ,'|\"\\   ",o.a.createElement("br",null),"|__   __||  |||| .-'    | .-'  |  \\| | | |\\ \\  ",o.a.createElement("br",null)," )| |   | `-' || `-.    | `-.  |   | | | | \\ \\ ",o.a.createElement("br",null),"   (_) |   | .-. || .-'    | .-'  | |\\  | | |  \\ \\   ",o.a.createElement("br",null),"   | |   | | |)||  `--.  |  `--.| | |)| /(|`-' / ",o.a.createElement("br",null),"  `-'   /(  (_)/( __.'  /( __.'/(  (_)(__)`--' ",o.a.createElement("br",null),"     (__)   (__)     (__)   (__)             ",o.a.createElement("br",null))):null}}]),t}(a.Component),O=n(21),w=n.n(O),k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).componentDidMount=function(){window.scrollTo(0,document.body.scrollHeight)},e.choiceClick=function(e,t){fetch("http://localhost:51634/api/scenes/"+e).then(function(e){return e.json()}).then(function(e){t(e)})},e.attachOptions=function(t,n,a){return a?o.a.createElement("br",null):t.map(function(a,c){return o.a.createElement("p",{key:c},o.a.createElement("button",{key:c,onClick:e.choiceClick.bind(Object(E.a)(Object(E.a)(e)),a.Consequent,n)},t[c].Text))})},e.createSceneImage=function(t){var n="none"==t.SceneImage?"":t.SceneImage;return 1==t.SceneId?o.a.createElement("pre",{onClick:e.handleOpenModal},o.a.createElement(f.a,{ariaHideApp:!1,isOpen:e.state.showModal,contentLabel:"Minimal Modal Example"},o.a.createElement("img",{src:w.a,className:"modal"})),n):o.a.createElement("pre",null,n)},e.handleOpenModal=function(){var t=!e.state.showModal;e.setState({showModal:t})},e.state={showModal:!1},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sceneHandler,n=e.sceneData,a=e.buttonHidden;return o.a.createElement("div",{className:"sceneBox"},n.SceneContent.split("\n").map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("br",null))}),this.createSceneImage(n),o.a.createElement("div",{className:"buttonContainer"},this.attachOptions(n.Choices,t,a,n.EndingType)),o.a.createElement(v,{endingType:n.EndingType,sceneId:n.SceneId}))}}]),t}(a.Component),j=n(22),S=n.n(j),C=(n(9),function(e){var t=[["^","|","=","=","=","=","=","=","=","|","^"],["^","|","D","=","|","=","|","=","=","|","^"],["^","|","=","=","|","=","|","=","=","|","^"],["^","|","B","=","|","=","|","=","E","|","^"],["^","|","=","=","|","=","|","=","=","|","^"],["^","\\","=","=","=","e","=","=","=","/","^"],["^","^","\\","-","-","-","-","-","/","^","^"],["^","^","^","^","^","^","^","^","^","^","^"]];return o.a.createElement("p",{className:"mapBox"},function(){for(var n="",a=function(e){switch(e){case"room":return{x:6,y:0};case"dom":return{x:3,y:1};case"hall":return{x:5,y:3};case"ball":return{x:3,y:3};case"deck":return{x:4,y:5};case"elroom":return{x:7,y:3}}}(e.playerPosition),o=0;o<t.length;o++){for(var c=0;c<t[o].length;c++)c==a.x&&o==a.y?n+="@":n+=t[o][c];n+="\n"}return n}().split("\n").map(function(e,t){return o.a.createElement("span",{key:t},e,o.a.createElement("br",null))}))}),M=n(23),x=n.n(M),N=function(e){return o.a.createElement("div",{className:"map"},o.a.createElement("strong",null,"Map legend")," ",o.a.createElement("br",null),"@: Player ",o.a.createElement("br",null),"D: Dom's room ",o.a.createElement("br",null),"B: Ballroom ",o.a.createElement("br",null),"E: Eleanor's room ",o.a.createElement("br",null),"e: Eleanor ",o.a.createElement("br",null),o.a.createElement("div",{onClick:e.handleOpenModal},o.a.createElement(f.a,{className:"modal",ariaHideApp:!1,isOpen:e.showModal,contentLabel:"Minimal Modal Example"},o.a.createElement("img",{className:"modal",src:x.a})),o.a.createElement(C,{playerPosition:e.playerPosition})))},B=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).startGame=function(){e.setState({playerPosition:"room"});var t=[];fetch("http://localhost:51634/api/scenes/1").then(function(e){return e.json()}).then(function(n){t.push(n),e.setState({context:t}),document.getElementsByClassName("gameHeader")[0].style="background-color: white",document.getElementsByTagName("body")[0].style="background-color: white",document.getElementsByTagName("div")[0].style="color: black"}).catch(function(e){return console.log(e)})},e.addScene=function(t){var n=e.state.context;n.push({SceneId:t.SceneId,SceneContent:t.SceneContent,Choices:t.Choices,EndingType:t.EndingType,SceneImage:t.SceneImage,SceneLocation:t.SceneLocation}),e.setState({context:n}),e.setState({playerPosition:t.SceneLocation})},e.hiddenButton=function(t){return t!==e.state.context.length-1},e.makeSceneComponent=function(t,n){return o.a.createElement(k,{key:n,sceneData:t,sceneHandler:e.addScene,buttonHidden:e.hiddenButton.call(Object(E.a)(Object(E.a)(e)),n)})},e.handleOpenModal=function(){var t=!e.state.showModal;e.setState({showModal:t})},e.mute=function(){var t;t=e.state.playing?{muteBtnText:"Unmute",playing:!1}:{muteBtnText:"Mute",playing:!0},e.setState(t)},e.state={context:[],playing:!1,muteBtnText:"Mute",playerPosition:"room",showModal:!1},e.handleOpenModal=e.handleOpenModal.bind(Object(E.a)(Object(E.a)(e))),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:document.title="Murder in the Pacific",this.startGame(),setTimeout(this.setState({playing:!0}),3e3);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"gameContainer"},o.a.createElement("div",{className:"gameHeader"},o.a.createElement("h1",null,"Murder in the Pacific"),o.a.createElement("button",{onClick:this.startGame,className:"startOverButton"},"Start over"),o.a.createElement("button",{onClick:this.mute,className:"muteButton"},this.state.muteBtnText),o.a.createElement(N,{handleOpenModal:this.handleOpenModal,playerPosition:this.state.playerPosition,showModal:this.state.showModal})),o.a.createElement(S.a,{id:"music-player",url:"https://www.youtube.com/watch?v=wsKKd8cw7s8",loop:!0,playing:this.state.playing,width:"0px",height:"0px"}),o.a.createElement("div",{className:"sceneList"},this.state.context.map(this.makeSceneComponent)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.a7d94bbb.chunk.js.map