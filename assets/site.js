/* Eric Tech — the only script on the site: the click-to-load video facade.
   Nothing is requested from YouTube until the visitor clicks the poster. */
(function () {
  "use strict";

  document.querySelectorAll(".videobox-poster").forEach(function (poster) {
    poster.addEventListener("click", function () {
      var box = poster.parentNode;
      var src = box.getAttribute("data-embed");
      if (!src) return;

      var frame = document.createElement("iframe");
      var isYouTube = /youtube(-nocookie)?\.com/.test(src);
      frame.src = isYouTube ? src + (src.indexOf("?") === -1 ? "?" : "&") + "autoplay=1" : src;
      frame.title = box.getAttribute("data-title") || "Video";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      box.replaceChild(frame, poster);
      frame.focus();
    });
  });
})();
