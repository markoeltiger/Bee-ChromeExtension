(function () {

  const importPath = /*@__PURE__*/JSON.parse('"app.js"');
  import(chrome.runtime.getURL(importPath));
})();
