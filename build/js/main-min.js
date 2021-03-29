(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=2)})([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"default",function(){return DotsCanvas});class DotsCanvas{constructor(payload){this.importElem=payload.importElem;this.class=payload.class;this.width=payload.width;this.height=payload.height;this.canvas=document.createElement("CANVAS");this.canvas.width=this.width;this.canvas.height=this.height;this.canvas.classList.add(this.class);this.importElem.appendChild(this.canvas);this.ctx=this.canvas.getContext("2d");this.ctx.fillStyle="rgb(255, 201, 25)";for(let i=5.5;i<this.width;i+=32){for(let j=5.5;j<this.height;j+=32){this.drawDot(i,j,5.5)}}}drawDot(X,Y,Rad){this.ctx.beginPath();this.ctx.arc(X,Y,Rad,0,Math.PI*2,true);this.ctx.fill()}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__.d(__webpack_exports__,"default",function(){return hideList});class hideList{constructor(listBlock,autoHeight=false){this.autoHeight=autoHeight;this.listBlock=listBlock;this.list=this.listBlock.querySelector("[data-block]");this.listBlock.querySelector("[data-btn]").addEventListener("click",()=>{this.showBlock()});if(this.listBlock.querySelector("[data-btn]").classList.contains("active")){this.list.style.height=`${this.list.scrollHeight}px`;this.list.classList.add("active")}}showBlock(){let blockHeight=parseInt(window.getComputedStyle(this.list).getPropertyValue("height"));if(blockHeight===0){if(this.autoHeight){this.list.style.height=`auto`}else{this.list.style.height=`${this.list.scrollHeight}px`}this.listBlock.querySelector("[data-btn]").classList.add("active");this.list.classList.add("active")}else{this.listBlock.querySelector("[data-btn]").classList.remove("active");this.list.classList.remove("active");this.list.style.height=`0`}}}},function(module,exports,__webpack_require__){__webpack_require__(3);__webpack_require__(0);module.exports=__webpack_require__(1)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _components_hideList__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);var _components_dots__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0);if(document.querySelector("[data-hide]")){document.querySelectorAll("[data-hide]").forEach(list=>{setTimeout(()=>{new _components_hideList__WEBPACK_IMPORTED_MODULE_0__["default"](list)},500)})}if(document.querySelector("[data-hide-auto]")){document.querySelectorAll("[data-hide-auto]").forEach(list=>{setTimeout(()=>{new _components_hideList__WEBPACK_IMPORTED_MODULE_0__["default"](list,true)},500)})}if(document.querySelector("section.top-catalog")){function closeMenu(e){console.log(e.target.closest(".catalog"));if(!e.target.closest(".catalog")){document.querySelectorAll("section.top-catalog .catalog .has-child.active").forEach(elem=>{elem.classList.remove("active")});window.removeEventListener("click",closeMenu)}}document.querySelectorAll("section.top-catalog .catalog .has-child span").forEach(elem=>{elem.addEventListener("click",function(e){let activeClass;e.stopPropagation();elem.parentNode.classList.contains("active")?activeClass=true:activeClass=false;elem.parentNode.closest("ul").querySelectorAll(".has-child").forEach(child=>child.classList.remove("active"));if(activeClass){this.classList.add("active")}else{window.addEventListener("click",closeMenu)}elem.parentNode.classList.toggle("active")})});new _components_dots__WEBPACK_IMPORTED_MODULE_1__["default"]({importElem:document.querySelector("section.top-catalog .dots-canvas"),class:"top-block-dots",width:204,height:108})}if(document.querySelector("section.product-slider")){document.querySelectorAll("section.product-slider").forEach(elem=>{let block=elem.querySelector(".swiper-container");let swiper=new Swiper(block,{slidesPerView:4,spaceBetween:30,slidesPerGroup:4,loop:true,loopFillGroupWithBlank:true,pagination:{el:elem.querySelector(".pagination"),clickable:true},navigation:{nextEl:elem.querySelector(".arrow.next"),prevEl:elem.querySelector(".arrow.prev")}})})}if(document.querySelector("section.features")){new _components_dots__WEBPACK_IMPORTED_MODULE_1__["default"]({importElem:document.querySelector("section.features .dots-canvas"),class:"top-block-dots",width:430,height:108})}if(document.querySelector("section.about-company")){new _components_dots__WEBPACK_IMPORTED_MODULE_1__["default"]({importElem:document.querySelector("section.about-company .dots-canvas"),class:"top-block-dots",width:430,height:108})}if(document.querySelector("section.solutions")){new _components_dots__WEBPACK_IMPORTED_MODULE_1__["default"]({importElem:document.querySelector("section.solutions .dots-canvas"),class:"top-block-dots",width:430,height:108})}if(document.querySelector("section.contacts")){new _components_dots__WEBPACK_IMPORTED_MODULE_1__["default"]({importElem:document.querySelector("section.contacts .dots-canvas"),class:"top-block-dots",width:108,height:76})}}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibW9kdWxlcyIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJnZXREZWZhdWx0IiwiZ2V0TW9kdWxlRXhwb3J0cyIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fd2VicGFja19leHBvcnRzX18iLCJEb3RzQ2FudmFzIiwiW29iamVjdCBPYmplY3RdIiwicGF5bG9hZCIsInRoaXMiLCJpbXBvcnRFbGVtIiwiY2xhc3MiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImoiLCJkcmF3RG90IiwiWCIsIlkiLCJSYWQiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiaGlkZUxpc3QiLCJsaXN0QmxvY2siLCJhdXRvSGVpZ2h0IiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd0Jsb2NrIiwiY29udGFpbnMiLCJzdHlsZSIsInNjcm9sbEhlaWdodCIsImJsb2NrSGVpZ2h0IiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInJlbW92ZSIsIl9jb21wb25lbnRzX2hpZGVMaXN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfY29tcG9uZW50c19kb3RzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNldFRpbWVvdXQiLCJjbG9zZU1lbnUiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImNsb3Nlc3QiLCJlbGVtIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUNsYXNzIiwic3RvcFByb3BhZ2F0aW9uIiwicGFyZW50Tm9kZSIsImNoaWxkIiwidG9nZ2xlIiwiYmxvY2siLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyR3JvdXAiLCJsb29wIiwibG9vcEZpbGxHcm91cFdpdGhCbGFuayIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiXSwibWFwcGluZ3MiOiJDQUFTLFNBQVVBLFNBRVQsSUFBSUMsaUJBQW1CLEdBR3ZCLFNBQVNDLG9CQUFvQkMsVUFHNUIsR0FBR0YsaUJBQWlCRSxVQUFXLENBQzlCLE9BQU9GLGlCQUFpQkUsVUFBVUMsUUFHbkMsSUFBSUMsT0FBU0osaUJBQWlCRSxVQUFZLENBQ3pDRyxFQUFHSCxTQUNISSxFQUFHLE1BQ0hILFFBQVMsSUFJVkosUUFBUUcsVUFBVUssS0FBS0gsT0FBT0QsUUFBU0MsT0FBUUEsT0FBT0QsUUFBU0YscUJBRy9ERyxPQUFPRSxFQUFJLEtBR1gsT0FBT0YsT0FBT0QsUUFLZkYsb0JBQW9CTyxFQUFJVCxRQUd4QkUsb0JBQW9CUSxFQUFJVCxpQkFHeEJDLG9CQUFvQlMsRUFBSSxTQUFTUCxRQUFTUSxLQUFNQyxRQUMvQyxJQUFJWCxvQkFBb0JZLEVBQUVWLFFBQVNRLE1BQU8sQ0FDekNHLE9BQU9DLGVBQWVaLFFBQVNRLEtBQU0sQ0FBRUssV0FBWSxLQUFNQyxJQUFLTCxXQUtoRVgsb0JBQW9CaUIsRUFBSSxTQUFTZixTQUNoQyxVQUFV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QixLQUFLdkIsY0FBYyxlQUN2QndDLFVBQVcsTUFFZkMsV0FBWSxDQUNSQyxPQUFRbkIsS0FBS3ZCLGNBQWMsZUFDM0IyQyxPQUFRcEIsS0FBS3ZCLGNBQWMsb0JBSzNDLEdBQUl0QixTQUFTc0IsY0FBYyxvQkFBb0IsQ0FDM0MsSUFBSWEsOENBQThDLFdBQVcsQ0FDekR4QyxXQUFZSyxTQUFTc0IsY0FBYyxpQ0FDbkMxQixNQUFPLGlCQUNQQyxNQUFPLElBQ1BDLE9BQVEsTUFHaEIsR0FBSUUsU0FBU3NCLGNBQWMseUJBQXlCLENBQ2hELElBQUlhLDhDQUE4QyxXQUFXLENBQ3pEeEMsV0FBWUssU0FBU3NCLGNBQWMsc0NBQ25DMUIsTUFBTyxpQkFDUEMsTUFBTyxJQUNQQyxPQUFRLE1BR2hCLEdBQUlFLFNBQVNzQixjQUFjLHFCQUFxQixDQUM1QyxJQUFJYSw4Q0FBOEMsV0FBVyxDQUN6RHhDLFdBQVlLLFNBQVNzQixjQUFjLGtDQUNuQzFCLE1BQU8saUJBQ1BDLE1BQU8sSUFDUEMsT0FBUSxNQUdoQixHQUFJRSxTQUFTc0IsY0FBYyxvQkFBb0IsQ0FDM0MsSUFBSWEsOENBQThDLFdBQVcsQ0FDekR4QyxXQUFZSyxTQUFTc0IsY0FBYyxpQ0FDbkMxQixNQUFPLGlCQUNQQyxNQUFPLElBQ1BDLE9BQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gRG90c0NhbnZhczsgfSk7XG5jbGFzcyBEb3RzQ2FudmFzIHtcclxuICAgIGNvbnN0cnVjdG9yKHBheWxvYWQpIHtcclxuICAgICAgICB0aGlzLmltcG9ydEVsZW0gPSBwYXlsb2FkLmltcG9ydEVsZW07XHJcbiAgICAgICAgdGhpcy5jbGFzcyA9IHBheWxvYWQuY2xhc3M7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHBheWxvYWQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBwYXlsb2FkLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0NBTlZBUycpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3MpO1xyXG4gICAgICAgIHRoaXMuaW1wb3J0RWxlbS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2IoMjU1LCAyMDEsIDI1KSc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDUuNTsgaSA8IHRoaXMud2lkdGg7IGkgKz0gMzIpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gNS41OyBqIDwgdGhpcy5oZWlnaHQ7IGogKz0gMzIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3RG90KGksIGosIDUuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkcmF3RG90KFgsIFksIFJhZCl7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKFgsIFksIFJhZCwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKVxyXG4gICAgfVxyXG59XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gaGlkZUxpc3Q7IH0pO1xuY2xhc3MgaGlkZUxpc3R7XHJcbiAgICBjb25zdHJ1Y3RvcihsaXN0QmxvY2ssIGF1dG9IZWlnaHQgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuYXV0b0hlaWdodCA9IGF1dG9IZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5saXN0QmxvY2sgPSBsaXN0QmxvY2s7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5saXN0QmxvY2sucXVlcnlTZWxlY3RvcignW2RhdGEtYmxvY2tdJyk7XHJcbiAgICAgICAgdGhpcy5saXN0QmxvY2sucXVlcnlTZWxlY3RvcignW2RhdGEtYnRuXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9Pnt0aGlzLnNob3dCbG9jaygpfSlcclxuICAgICAgICBpZiAodGhpcy5saXN0QmxvY2sucXVlcnlTZWxlY3RvcignW2RhdGEtYnRuXScpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0LnN0eWxlLmhlaWdodCA9IGAke3RoaXMubGlzdC5zY3JvbGxIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93QmxvY2soKXtcclxuICAgICAgICBsZXQgYmxvY2tIZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmxpc3QpLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpKTtcclxuICAgICAgICBpZiAoYmxvY2tIZWlnaHQgPT09IDApe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvSGVpZ2h0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5zdHlsZS5oZWlnaHQgPSBgYXV0b2A7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3Quc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5saXN0LnNjcm9sbEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5saXN0QmxvY2sucXVlcnlTZWxlY3RvcignW2RhdGEtYnRuXScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RCbG9jay5xdWVyeVNlbGVjdG9yKCdbZGF0YS1idG5dJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB0aGlzLmxpc3Quc3R5bGUuaGVpZ2h0ID0gYDBgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NvbXBvbmVudHNfaGlkZUxpc3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NvbXBvbmVudHNfZG90c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxyXG5cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1oaWRlXScpKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1oaWRlXScpLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBuZXcgX2NvbXBvbmVudHNfaGlkZUxpc3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0obGlzdCk7XHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgfSk7XHJcbn1cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWhpZGUtYXV0b10nKSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaGlkZS1hdXRvXScpLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBuZXcgX2NvbXBvbmVudHNfaGlkZUxpc3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0obGlzdCwgdHJ1ZSk7XHJcbiAgICAgICAgfSwgNTAwKVxyXG4gICAgfSk7XHJcbn1cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24udG9wLWNhdGFsb2cnKSl7XHJcbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUoZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuY2xvc2VzdCgnLmNhdGFsb2cnKSk7XHJcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuY2F0YWxvZycpKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbi50b3AtY2F0YWxvZyAuY2F0YWxvZyAuaGFzLWNoaWxkLmFjdGl2ZScpLmZvckVhY2goIGVsZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNZW51KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24udG9wLWNhdGFsb2cgLmNhdGFsb2cgLmhhcy1jaGlsZCBzcGFuJykuZm9yRWFjaCggZWxlbSA9PiB7XHJcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVDbGFzcztcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyBhY3RpdmVDbGFzcyA9IHRydWUgOiBhY3RpdmVDbGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBlbGVtLnBhcmVudE5vZGUuY2xvc2VzdCgndWwnKS5xdWVyeVNlbGVjdG9yQWxsKCcuaGFzLWNoaWxkJykuZm9yRWFjaCggY2hpbGQgPT4gY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG4gICAgbmV3IF9jb21wb25lbnRzX2RvdHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0oe1xyXG4gICAgICAgIGltcG9ydEVsZW06IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24udG9wLWNhdGFsb2cgLmRvdHMtY2FudmFzJyksXHJcbiAgICAgICAgY2xhc3M6ICd0b3AtYmxvY2stZG90cycsXHJcbiAgICAgICAgd2lkdGg6IDIwNCxcclxuICAgICAgICBoZWlnaHQ6IDEwOCxcclxuICAgIH0pXHJcbn1cclxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24ucHJvZHVjdC1zbGlkZXInKSl7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uLnByb2R1Y3Qtc2xpZGVyJykuZm9yRWFjaCggZWxlbSA9PiB7XHJcbiAgICAgICAgbGV0IGJsb2NrID0gZWxlbS5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKGJsb2NrLCB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiA0LFxyXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgICAgICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiB0cnVlLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBlbDogZWxlbS5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG5leHRFbDogZWxlbS5xdWVyeVNlbGVjdG9yKCcuYXJyb3cubmV4dCcpLFxyXG4gICAgICAgICAgICAgICAgcHJldkVsOiBlbGVtLnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy5wcmV2JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufVxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5mZWF0dXJlcycpKXtcclxuICAgIG5ldyBfY29tcG9uZW50c19kb3RzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKHtcclxuICAgICAgICBpbXBvcnRFbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmZlYXR1cmVzIC5kb3RzLWNhbnZhcycpLFxyXG4gICAgICAgIGNsYXNzOiAndG9wLWJsb2NrLWRvdHMnLFxyXG4gICAgICAgIHdpZHRoOiA0MzAsXHJcbiAgICAgICAgaGVpZ2h0OiAxMDgsXHJcbiAgICB9KVxyXG59XHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmFib3V0LWNvbXBhbnknKSl7XHJcbiAgICBuZXcgX2NvbXBvbmVudHNfZG90c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXSh7XHJcbiAgICAgICAgaW1wb3J0RWxlbTogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5hYm91dC1jb21wYW55IC5kb3RzLWNhbnZhcycpLFxyXG4gICAgICAgIGNsYXNzOiAndG9wLWJsb2NrLWRvdHMnLFxyXG4gICAgICAgIHdpZHRoOiA0MzAsXHJcbiAgICAgICAgaGVpZ2h0OiAxMDgsXHJcbiAgICB9KVxyXG59XHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLnNvbHV0aW9ucycpKXtcclxuICAgIG5ldyBfY29tcG9uZW50c19kb3RzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKHtcclxuICAgICAgICBpbXBvcnRFbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLnNvbHV0aW9ucyAuZG90cy1jYW52YXMnKSxcclxuICAgICAgICBjbGFzczogJ3RvcC1ibG9jay1kb3RzJyxcclxuICAgICAgICB3aWR0aDogNDMwLFxyXG4gICAgICAgIGhlaWdodDogMTA4LFxyXG4gICAgfSlcclxufVxyXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5jb250YWN0cycpKXtcclxuICAgIG5ldyBfY29tcG9uZW50c19kb3RzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKHtcclxuICAgICAgICBpbXBvcnRFbGVtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNvbnRhY3RzIC5kb3RzLWNhbnZhcycpLFxyXG4gICAgICAgIGNsYXNzOiAndG9wLWJsb2NrLWRvdHMnLFxyXG4gICAgICAgIHdpZHRoOiAxMDgsXHJcbiAgICAgICAgaGVpZ2h0OiA3NixcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTsiXSwiZmlsZSI6Im1haW4tbWluLmpzIn0=