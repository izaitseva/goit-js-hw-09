!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(e){timerId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0})),e.addEventListener("click",(function(e){clearInterval(timerId),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.78c6a22d.js.map