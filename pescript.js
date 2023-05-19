function tag(name, ...children) {
  const result = document.createElement(name);
  
  for (const child of children) {
    console.log(child);
    result.appendChild(child);
  }

  result.att = function(name, value) {
    this.setAttribute(name, value);
    return this;
  };
  console.log("result", result);
  return result;
}

function text(s) {
  return document.createTextNode(s);
}

function h1(...children) {
  return tag("h1", ...children);
}

function h2(...children) {
  return tag("h2", ...children);
}

function p(...children) {
  return tag("p", ...children);
}

function div(...children) {
  return tag("div", ...children);
}

function blogpost() {
  return div(
    h1(text("The title")),
    // h2(text("The subtitle")),
    // p(text("Some text here"))
  ).att("id", "example");
}

window.onload = () => {
  const entry = document.getElementById('entry');
  entry.appendChild(blogpost());
}