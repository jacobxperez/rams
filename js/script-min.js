/* RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded",(()=>{!function(){const t=document.querySelectorAll("[data-toggle]"),e=document.querySelectorAll("[data-tooltip]");function a(t){t.addEventListener("click",(e=>{t.hasAttribute("data-state","active")?t.removeAttribute("data-state"):t.setAttribute("data-state","active"),e.stopPropagation()}))}function o(t,e,a){a.target!==t&&t.matches(e)&&t.removeAttribute("data-state")}t.forEach(a),e.forEach(a),document.addEventListener("click",(a=>{t.forEach((t=>o(t,'[data-toggle="pop"]',a))),e.forEach((t=>o(t,"[data-tooltip]",a)))}))}()}));