!function(e){jQuery.fn.extend({slimScroll:function(i){var o=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},i);return this.each(function(){function s(t){t=t||window.event;var i=0;t.wheelDelta&&(i=-t.wheelDelta/120),t.detail&&(i=t.detail/3),e(t.target||t.srcTarget||t.srcElement).closest("."+o.wrapperClass).is(y.parent())&&r(i,!0),t.preventDefault&&!m&&t.preventDefault(),m||(t.returnValue=!1)}function r(e,t,i){m=!1;var s=e,r=y.outerHeight()-C.outerHeight();t&&(s=parseInt(C.css("top"))+e*parseInt(o.wheelStep)/100*C.outerHeight(),s=Math.min(Math.max(s,0),r),s=e>0?Math.ceil(s):Math.floor(s),C.css({top:s+"px"})),v=parseInt(C.css("top"))/(y.outerHeight()-C.outerHeight()),s=v*(y[0].scrollHeight-y.outerHeight()),i&&(s=e,e=s/y[0].scrollHeight*y.outerHeight(),e=Math.min(Math.max(e,0),r),C.css({top:e+"px"})),y.scrollTop(s),y.trigger("slimscrolling",~~s),n(),c()}function a(){window.addEventListener?(this.addEventListener("DOMMouseScroll",s,!1),this.addEventListener("mousewheel",s,!1)):document.attachEvent("onmousewheel",s)}function l(){f=Math.max(y.outerHeight()/y[0].scrollHeight*y.outerHeight(),w),C.css({height:f+"px"});var e=f==y.outerHeight()?"none":"block";C.css({display:e})}function n(){l(),clearTimeout(p),v==~~v?(m=o.allowPageScroll,b!=v&&y.trigger("slimscroll",0==~~v?"top":"bottom")):m=!1,b=v,f>=y.outerHeight()?m=!0:(C.stop(!0,!0).fadeIn("fast"),o.railVisible&&H.stop(!0,!0).fadeIn("fast"))}function c(){o.alwaysVisible||(p=setTimeout(function(){o.disableFadeOut&&h||u||d||(C.fadeOut("slow"),H.fadeOut("slow"))},1e3))}var h,u,d,p,g,f,v,b,w=30,m=!1,y=e(this);if(y.parent().hasClass(o.wrapperClass)){var x=y.scrollTop(),C=y.parent().find("."+o.barClass),H=y.parent().find("."+o.railClass);if(l(),e.isPlainObject(i)){if("height"in i&&"auto"==i.height){y.parent().css("height","auto"),y.css("height","auto");var S=y.parent().parent().height();y.parent().css("height",S),y.css("height",S)}if("scrollTo"in i)x=parseInt(o.scrollTo);else if("scrollBy"in i)x+=parseInt(o.scrollBy);else if("destroy"in i)return C.remove(),H.remove(),void y.unwrap();r(x,!1,!0)}}else{o.height="auto"==i.height?y.parent().height():i.height,x=e("<div></div>").addClass(o.wrapperClass).css({position:"relative",overflow:"hidden",width:o.width,height:o.height}),y.css({overflow:"hidden",width:o.width,height:o.height});var H=e("<div></div>").addClass(o.railClass).css({width:o.size,height:"100%",position:"absolute",top:0,display:o.alwaysVisible&&o.railVisible?"block":"none","border-radius":o.railBorderRadius,background:o.railColor,opacity:o.railOpacity,zIndex:90}),C=e("<div></div>").addClass(o.barClass).css({background:o.color,width:o.size,position:"absolute",top:0,opacity:o.opacity,display:o.alwaysVisible?"block":"none","border-radius":o.borderRadius,BorderRadius:o.borderRadius,MozBorderRadius:o.borderRadius,WebkitBorderRadius:o.borderRadius,zIndex:99}),S="right"==o.position?{right:o.distance}:{left:o.distance};H.css(S),C.css(S),y.wrap(x),y.parent().append(C),y.parent().append(H),o.railDraggable&&C.bind("mousedown",function(i){var o=e(document);return d=!0,t=parseFloat(C.css("top")),pageY=i.pageY,o.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,C.css("top",currTop),r(0,C.position().top,!1)}),o.bind("mouseup.slimscroll",function(e){d=!1,c(),o.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(e){return e.stopPropagation(),e.preventDefault(),!1}),H.hover(function(){n()},function(){c()}),C.hover(function(){u=!0},function(){u=!1}),y.hover(function(){h=!0,n(),c()},function(){h=!1,c()}),y.bind("touchstart",function(e,t){e.originalEvent.touches.length&&(g=e.originalEvent.touches[0].pageY)}),y.bind("touchmove",function(e){m||e.originalEvent.preventDefault(),e.originalEvent.touches.length&&(r((g-e.originalEvent.touches[0].pageY)/o.touchScrollStep,!0),g=e.originalEvent.touches[0].pageY)}),l(),"bottom"===o.start?(C.css({top:y.outerHeight()-C.outerHeight()}),r(0,!0)):"top"!==o.start&&(r(e(o.start).position().top,null,!0),o.alwaysVisible||C.hide()),a()}}),this}}),jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})}(jQuery);