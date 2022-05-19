// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { Titlebar, Color } = require('custom-electron-titlebar');
const path = require('path');

let titlebar;

window.addEventListener('DOMContentLoaded', () => {
  titlebar = new Titlebar({
    backgroundColor: Color.fromHex("#00ff00"),
    left: "0px",
    containerTop: "200px",
    top: "10px",
    height: "100px",
    itemBackgroundColor: Color.fromHex("#121212"),
    svgColor: Color.WHITE,
    icon: null,
    menu: null // = do not automatically use Menu.applicationMenu
  })

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
