; (function () {

  let htmlNodes = []

  // 判断文件是否存在
  function fileExist (files, url) {
    for (var i = 0; i < files.length; i++) {
      if (files[i] == url) {
        return true
      }
    }
    return false
  }

  // 获取文件后缀名
  function getFileExtension (url) {
    return url.substr(url.lastIndexOf(".")).toLowerCase()
  }

  function loadFile (url, success) {
    if (!fileExist(htmlNodes, url)) {
      let extension = getFileExtension(url)
      let element = null
      if (extension == ".js") {
        element = document.createElement('script')
        element.src = url
        element.type = 'text/javascript'
      } else {
        element = document.createElement('link')
        element.href = url
        element.rel = "stylesheet"
        element.type = "text/css"
      }

      success = success || function () { }
      element.onload = element.onreadystatechange = function () {
        if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
          success()
          htmlNodes.push(url)
        }
      }

      document.head.appendChild(element)
    } else {
      success()
    }
  }

  function Uploader (options) {

  }
})()