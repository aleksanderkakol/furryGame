!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(e,t){e.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(e,t,n){var r=n(1),i=n(0);e.exports=function(){this.board=document.querySelectorAll("#board div");var e=new i,t=new r,n=0;this.index=function(e,t){return e+10*t},this.showFurry=function(){this.board[this.index(e.x,e.y)].classList.add("furry")},this.showCoin=function(){return this.board[this.index(t.x,t.y)].classList.add("coin")},this.hideFurry=function(){document.querySelector(".furry").classList.remove("furry")},this.checkCoin=function(){e.x===t.x&&e.y===t.y&&(document.querySelector(".coin").classList.remove("coin"),n++,document.querySelector("#score strong").innerText=n,t=new r,this.showCoin())};var o=this;this.moveFurry=function(){"right"===e.direction?e.x=e.x+1:"left"===e.direction?e.x=e.x-1:"up"===e.direction?e.y=e.y-1:"down"===e.direction&&(e.y=e.y+1),o.gameOver(),o.hideFurry(),o.showFurry(),o.checkCoin()},this.turnFurry=function(t){switch(t.which){case 37:e.direction="left";break;case 38:e.direction="up";break;case 39:e.direction="right";break;case 40:e.direction="down"}},this.gameOver=function(){if(e.x<0||e.y<0||e.x>9||e.y>9){clearInterval(this.idSetInterval),this.hideFurry();var t=document.querySelector("#over"),r=document.createElement("div"),i=document.createElement("div");return t.classList.remove("invisible"),t.appendChild(r),t.appendChild(i),t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.style.flexDirection="column",r.innerText="Game Over \n",r.style.fontSize="50px",r.style.color="red",i.innerText=n+" points",n}},this.startGame=function(){this.idSetInterval=window.setInterval(function(){o.moveFurry()},250)}}},function(e,t,n){var r=new(n(2));document.addEventListener("keydown",function(e){r.turnFurry(e)}),r.showFurry(),r.showCoin(),r.startGame()}]);