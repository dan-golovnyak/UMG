var cssIncluder = function() {};

cssIncluder.prototype.process = function (local, imgUrl, git) {
  var isDev = this.getCookie('devMachine');
  
  if (isDev != null) {
    this.doInclude((isDev == 1 ? local : git));
    return;
  }
  // Instance reference
  var classInstance = this;
  
  var testImg = new Image();
  testImg.onload = function() {
    classInstance.setCookie('devMachine', '1');
    classInstance.doInclude(local);
  }
  testImg.onerror = function() {
    classInstance.setCookie('devMachine', 0);
    classInstance.doInclude(git);
  }
  
  testImg.src = imgUrl;
} 

cssIncluder.prototype.doInclude = function (src) {
  var newLink = document.createElement('link');
  newLink.rel = 'stylesheet';
  newLink.href = src;
  newLink.type = 'text/css';
  document.getElementsByTagName("head")[0].appendChild(newLink);
}

cssIncluder.prototype.setCookie = function (name, value, expires, path, domain, secure) {
  document.cookie = name + "=" + escape(value) +
  ((expires) ? "; expires=" + expires : "") +
  ((path) ? "; path=" + path : "; path=/") +
  ((domain) ? "; domain=" + domain : "") +
  ((secure) ? "; secure" : "");
}

cssIncluder.prototype.getCookie = function (name) {
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset)
      if (end == -1) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return setStr;
}

/**
* Wrapper for cssIncluder
*/
function includeCSS(local, imgUrl, git) {
  new cssIncluder().process(local, imgUrl, git);
}

/**
* And now we call the function
*/
includeCSS(
  "http://localhost/UMG/umg-styles.css",
  "http://localhost/UMG/images/1x1.gif",
  "http://mkorostoff.github.com/UMG/umg-styles.css"
);
