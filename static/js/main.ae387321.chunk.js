(this.webpackJsonppingr=this.webpackJsonppingr||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"player":{"English":"Player","Esperanto":"Ludanto"},"serving":{"English":"Serving","Esperanto":"Servas"},"new_game":{"English":"New Game","Esperanto":"Nova Ludo"},"wins":{"English":"Wins","Esperanto":"Venkoj"},"game":{"English":"Game","Esperanto":"Ludo"},"loss":{"English":"Loss","Esperanto":"Perdo"},"score":{"English":"Score","Esperanto":"Poentaro"},"name":{"English":"Name","Esperanto":"Nomo"},"winning_score":{"English":"Winning Score","Esperanto":"Venkanta Poentaro"},"alt_serve":{"English":"Alternate Serve Every","Esperanto":"Alternu servi \u0109iun"},"start_game":{"English":"Start Game","Esperanto":"Komencu Ludon"},"not_complete":{"English":"Not Complete","Esperanto":"Ne Kompleta"},"actions":{"English":"Actions","Esperanto":"Agoj"},"continue":{"English":"Continue","Esperanto":"Da\u016drigu"},"game_history":{"English":"Game History","Esperanto":"Ludhistorio"}}')},27:function(e,a,n){e.exports=n(56)},32:function(e,a,n){},56:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(7),c=n.n(l),o=(n(32),n(2)),s=n(6),i=n(1),u=function(e){var a=e.handleSubmit,n=e.player1Name,l=e.player2Name,c=e.winningScore,o=e.serveInterval,u=e.language,m=Object(t.useState)(n),p=Object(s.a)(m,2),g=p[0],E=p[1],d=Object(t.useState)(l),y=Object(s.a)(d,2),b=y[0],v=y[1],h=Object(t.useState)(c),f=Object(s.a)(h,2),N=f[0],w=f[1],_=Object(t.useState)(o),O=Object(s.a)(_,2),S=O[0],j=O[1];return r.a.createElement("div",{className:"container p-5"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a({player1Name:g,player2Name:b,winningScore:N,serveInterval:S})},className:"mb-4 p-5 border border-warning rounded bg-light"},r.a.createElement("h3",{className:"text-center border-bottom pb-4"},"New Game - Settings"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"player1Name"},"".concat(i.player[u]," 1 ").concat(i.name[u])),r.a.createElement("input",{className:"form-control",type:"text",id:"player1Name",value:g,onChange:function(e){return E(e.currentTarget.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"player2Name"},"".concat(i.player[u]," 2 ").concat(i.name[u])),r.a.createElement("input",{className:"form-control",type:"text",id:"player2Name",value:b,onChange:function(e){return v(e.currentTarget.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"winningScore"},"".concat(i.winning_score[u])),r.a.createElement("input",{className:"form-control",type:"number",id:"winningScore",value:N,onChange:function(e){return w(e.currentTarget.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"alternateServe"},"".concat(i.alt_serve[u],":")),r.a.createElement("select",{className:"form-control",id:"alternateServe",value:S,onChange:function(e){return j(e.currentTarget.value)}},r.a.createElement("option",null,"1"),r.a.createElement("option",null,"2"),r.a.createElement("option",null,"3"),r.a.createElement("option",null,"4"),r.a.createElement("option",null,"5"))),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"".concat(i.start_game[u]))))},m=n(21),p=n.n(m).a.create({baseURL:"https://restful.training/api/ping-pong/games",headers:{Accept:"application/json",Authorization:"Bearer ER9OO2YIiQEj44Okj74Q595RyMiS9H6TnijS5mrLJnLPaCQuRX0hg0LJERWO4pM1BClQMZodvvvD1gJT"}}),g=function(e){return function(a,n){var t=n().gameId;p.patch("".concat(t,"/score"),{player:e}).then((function(e){var n=e.data;a(function(e){var a=0;return e.player_1.won?a=1:e.player_2.won&&(a=2),{type:"UPDATE_SCORE",player1:e.player_1.score,player2:e.player_2.score,server:e.player_1.serving?1:2,winner:a}}(n.data))}))}},E=function(){return function(e){p.get("/").then((function(a){var n=a.data;e(function(e){return{type:"SAVE_HISTORY",gameHistory:e}}(n.data))}))}},d=Object(o.b)((function(e){return{player1Name:e.player1Name,player2Name:e.player2Name,winningScore:e.winningScore,serveInterval:e.serveInterval,language:e.language}}),(function(e){return{handleSubmit:function(a){return e(function(e){var a=e.player1Name,n=e.player2Name,t=e.serveInterval,r=e.winningScore;return function(e){p.post("/",{player_1:a,player_2:n,winning_score:r,change_serve:t}).then((function(a){var n=a.data;e(function(e){return{type:"START_GAME",gameId:e.id,player1Name:e.player_1.name,player2Name:e.player_2.name,winningScore:+e.winning_score,serveInterval:+e.change_serve}}(n.data))}))}}(a))}}}))(u),y=function(){return r.a.createElement("header",{className:"jumbotron mt-4 mb-0 text-center"},r.a.createElement("h1",null,"PINGR"))},b=function(e){var a=e.server,n=e.player,t=e.score,l=e.handleIncrement,c=e.gameOver,o=e.language,s=e.playerName;return r.a.createElement("div",{className:"col-md-6 mt-4"},r.a.createElement("div",{className:(a===+n?"bg-dark text-white ":"")+"card text-center"},r.a.createElement("h5",{className:"card-header"},"".concat(i.player[o]," ").concat(n,": ").concat(s)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text display-1"},t)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"form-control btn btn-success",onClick:function(){return l(n)},disabled:c},r.a.createElement("i",{class:"far fa-plus-square"})))))},v=Object(o.b)((function(e){return{language:e.language,server:e.server,score:e.player1,gameOver:0!==e.winner,playerName:e.player1Name}}),(function(e){return{handleIncrement:function(a){return e(g(a))}}}))(b),h=Object(o.b)((function(e){return{language:e.language,server:e.server,score:e.player2,gameOver:0!==e.winner,playerName:e.player2Name}}),(function(e){return{handleIncrement:function(a){return e(g(a))}}}))(b),f=function(e){var a=e.winner,n=e.language;return 0!==a?r.a.createElement("h2",{className:"alert alert-success"},"".concat(i.player[n]," ").concat(a," ").concat(i.wins[n],"!")):null},N=Object(o.b)((function(e){return{winner:e.winner,language:e.language}}))(f),w=function(e){var a=e.language,n=e.gameId,t=e.handleNewGame;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{class:"text-center bg-warning w-50 m-auto p-4 border border-warning rounded"},"".concat(i.game[a]," # ").concat(n)),r.a.createElement("div",{className:"row mb-4"},r.a.createElement(v,{player:1}),r.a.createElement(h,{player:2})),r.a.createElement(N,null),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"btn btn-primary",onClick:t},i.new_game[a])),r.a.createElement("hr",null))},_=Object(o.b)((function(e){return{gameId:e.gameId,language:e.language}}),(function(e){return{handleNewGame:function(){e({type:"NEW_GAME"}),e(E())}}}))(w),O=function(e){var a=e.gameHistory,n=e.language,t=e.handleDelete,l=e.handleContinue;return r.a.createElement("div",{className:"container"},r.a.createElement("h4",{className:"p-4 m-0 bg-info text-white border border-info rounded text-center"},i.game_history[n]),r.a.createElement("table",{className:"table border border-secondary rounded table-striped bg-light"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},i.game[n]+" #"),r.a.createElement("th",{scope:"col"},i.player[n]),r.a.createElement("th",{scope:"col"},i.wins[n]+"/"+i.loss[n]),r.a.createElement("th",{scope:"col"},i.score[n]),r.a.createElement("th",{scope:"col"},i.actions[n]))),r.a.createElement("tbody",null,a.map((function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",rowSpan:"2"},e.id),r.a.createElement("td",null,"".concat(i.player[n]," 1: ").concat(e.player_1.name)),e.complete?e.player_1.won?r.a.createElement("td",{className:"table-success"},i.wins[n]):r.a.createElement("td",{className:"table-danger"},i.loss[n]):r.a.createElement("th",{className:"table-warning",scope:"row",rowSpan:"2"},i.not_complete[n]),r.a.createElement("td",null,e.player_1.score),r.a.createElement("td",null,e.complete?null:r.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(){return l(e.id)}},i.continue[n]))),r.a.createElement("tr",null,r.a.createElement("td",null,"".concat(i.player[n]," 2: ").concat(e.player_2.name)),e.complete?e.player_2.won?r.a.createElement("td",{className:"table-success"},i.wins[n]):r.a.createElement("td",{className:"table-danger"},i.loss[n]):null,r.a.createElement("td",null,e.player_2.score),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-outline-danger btn-sm",onClick:function(){return t(e.id)}},r.a.createElement("i",{class:"fas fa-trash"})))))})))))},S=Object(o.b)((function(e){return{gameHistory:e.gameHistory,language:e.language}}),(function(e){return{handleDelete:function(a){return e(function(e){return function(a){p.delete("".concat(e)).then((function(){a(function(e){return{type:"REMOVE_GAME",id:e}}(e))}))}}(a))},handleContinue:function(a){return e(function(e){return function(a){p.get("".concat(e)).then((function(e){var n=e.data;n.data.complete?E():a(function(e){return{type:"RESUME_GAME",gameId:e.id,player1:e.player_1.score,player2:e.player_2.score,player1Name:e.player_1.name,player2Name:e.player_2.name,winningScore:+e.winning_score,serveInterval:+e.change_serve,server:e.player_1.serving?1:2}}(n.data))}))}}(a))}}}))(O),j=n(22),I=n(23),A=n(26),G=n(25),C=function(e){Object(A.a)(n,e);var a=Object(G.a)(n);function n(){return Object(j.a)(this,n),a.apply(this,arguments)}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.loaded||this.props.handleMount()}},{key:"render",value:function(){var e=this.props,a=e.children;return e.loaded?a:r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped active",style:{width:"100%"}}))}}]),n}(t.Component),L=Object(o.b)((function(e){return{loaded:e.historyLoaded}}),(function(e){return{handleMount:function(){return e(E())}}}))(C),M=function(e){var a=e.language,n=e.handleLanguage;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"btn-group btn-group-toggle pt-1","data-toggle":"buttons"},r.a.createElement("label",{className:"btn btn-sm btn-info ".concat("English"===a?"active":"")},r.a.createElement("input",{type:"radio",name:"options",id:"english",onChange:n}),"English"),r.a.createElement("div",{className:"btn btn-sm btn-secondary"},r.a.createElement("i",{class:"fas fa-globe-americas"})),r.a.createElement("label",{className:"btn btn-sm btn-info ".concat("Esperanto"===a?"active":"")},r.a.createElement("input",{type:"radio",name:"options",id:"esperanto",onChange:n}),"Esperanto")))},T=Object(o.b)((function(e){return{language:e.language}}),(function(e){return{handleLanguage:function(){return e({type:"TOGGLE_LANGUAGE"})}}}))(M),R=function(e){var a=e.showSettings;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(y,null),a?r.a.createElement(d,null):r.a.createElement(_,null),r.a.createElement(L,null,r.a.createElement(S,null)))},k=Object(o.b)((function(e){return{showSettings:e.showSettings}}))(R),x=n(5),H={gameId:"",showSettings:!0,player1:0,player2:0,player1Name:"",player2Name:"",winningScore:21,serveInterval:5,server:1,winner:0,gameHistory:[],historyLoaded:!1,language:"English"},D=n(3),P=function(e,a){switch(a.type){case"UPDATE_SCORE":return function(e,a){var n=a.player1,t=a.player2,r=a.server,l=a.winner;return Object(D.a)(Object(D.a)({},e),{},{player1:n,player2:t,server:r,winner:l})}(e,a);case"NEW_GAME":return function(e){return Object(D.a)(Object(D.a)({},H),{},{language:e.language,serveInterval:e.serveInterval,winningScore:e.winningScore,player1Name:e.player1Name,player2Name:e.player2Name})}(e);case"TOGGLE_LANGUAGE":return function(e){return Object(D.a)(Object(D.a)({},e),{},{language:"English"===e.language?"Esperanto":"English"})}(e);case"START_GAME":return function(e,a){return Object(D.a)(Object(D.a)({},e),{},{showSettings:!1,gameId:a.gameId,player1Name:a.player1Name,player2Name:a.player2Name,winningScore:a.winningScore,serveInterval:a.serveInterval})}(e,a);case"SAVE_HISTORY":return function(e,a){return Object(D.a)(Object(D.a)({},e),{},{gameHistory:a.gameHistory,historyLoaded:!0})}(e,a);case"REMOVE_GAME":return function(e,a){return Object(D.a)(Object(D.a)({},e),{},{gameHistory:e.gameHistory.filter((function(e){return e.id!==a.id}))})}(e,a);case"RESUME_GAME":return function(e,a){var n=a.gameId,t=a.player1,r=a.player2,l=a.player1Name,c=a.player2Name,o=a.winningScore,s=a.serveInterval,i=a.server;return Object(D.a)(Object(D.a)({},e),{},{showSettings:!1,gameId:n,player1:t,player2:r,player1Name:l,player2Name:c,winningScore:o,serveInterval:s,server:i})}(e,a);default:return e}},F=n(24),U=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.c,V=Object(x.d)(P,H,U(Object(x.a)(F.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:V},r.a.createElement(k,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.ae387321.chunk.js.map