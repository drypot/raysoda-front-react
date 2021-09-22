(function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r
  i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date()
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]
  a.async = 1
  a.src = g
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')

let ga_tid =
  config.appNamel == 'raysoda' ? 'UA-86165221-2' :
    config.appNamel == 'rapixel' ? 'UA-86165221-3' :
      config.appNamel == 'osoky' ? 'UA-86165221-4' :
        config.appNamel == 'drypot' ? 'UA-86165221-5' :
          null

if (ga_tid) {
  ga('create', ga_tid, 'auto')
  ga('send', 'pageview')
}
