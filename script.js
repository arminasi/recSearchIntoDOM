"use strict"

function recSearch(node, foo) {
  let children = node.childNodes;
  children.forEach((item, index) => {
    recSearch(children[index], foo);
  })
  foo(node);
}

recSearch(document.body, (item) => {
  if(item.tagName === "LI")
    item.innerText = item.innerText.split(" ").join("")
})