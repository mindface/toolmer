window.addEventListener('DOMContentLoaded', () => {
  const replace = (selector, text) => {
    const element = document.getElementById(selector)
    if(element) element.innerText = text
  }

  for (const dependecy of ['chrome','node','electron']) {
    replaceText(`${dependecy}-version`, process.version[dependecy])   
  }
})