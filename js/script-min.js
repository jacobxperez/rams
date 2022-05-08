/* RAMs <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2022 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded",(()=>{!function(){const t=document.querySelectorAll("[data-toggle]"),e=document.querySelectorAll("[data-tooltip]");function a(t){t.addEventListener("click",(e=>{!1===t.hasAttribute("data-state","active")?t.setAttribute("data-state","active"):t.removeAttribute("data-state"),e.stopPropagation()}))}t.forEach(a),e.forEach(a),document.addEventListener("click",(a=>{t.forEach((t=>{a.target!==t&&t.matches('[data-toggle="pop"]')&&t.removeAttribute("data-state")})),e.forEach((t=>{a.target!==t&&t.removeAttribute("data-state")}))}))}()}));
