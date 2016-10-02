function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')

  for (var i = 0; i < lis.length; i++) {
    var childrenText = lis[i].children

    for (var j = 0; j < childrenText.length; j++) {
      childrenText[j].innerHTML = parseInt(childrenText[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  var node = document.getElementById('grand-node')
  var childNode = node.children[0]

  while (childNode) {
    node = childNode
    childNode = node.children[0]
  }

  return node
}
