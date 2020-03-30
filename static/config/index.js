; (function (win, doc) {
  debugger

  var loadRes = function (preload, href, as, type) {
    var head =doc.head||doc.getElementsByTagName('head')[0]
    var body =doc.body||doc.getElementsByTagName('body')[0]

    if (preload) {
      var preload = doc.createElement('link')
      preload.rel = 'preload'
      preload.as = as
      preload.href = href
      if (type) preload.type = type
      head.appendChild(preload)
    }

    switch (as) {
      case 'script': { var child = doc.createElement('script'); child.src = href; child.async = true; child.charset = 'utf-8'; body.appendChild(child) } break
      case 'style': { var child = doc.createElement('link'); child.href = href; child.rel = 'stylesheet'; child.media = 'none'; child.onload = function () { child.media = 'all' };
      }
  }

  loadRes(1, './config/r.css', 'style')
  loadRes(1, './config/vw2rem.js', 'script')
})(window, document)
