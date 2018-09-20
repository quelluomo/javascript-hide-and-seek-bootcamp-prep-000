function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}
function increaseRankBy(n) {
  var rank = document.getElementById("app").querySelectorAll("ul.ranked-list li");
      for (let i = 0; i < rank.length; i++) {
      rank[i].innerHTML = parseInt(rank[i].innerHTML)+n;
    }
}
function deepestChild() {
  var inception = document.getElementById('grand-node');
  var nolan = inception.children[0];
  while (nolan) {
    inception = nolan;
    nolan = inception.children[0];
  }
  return inception;
} 