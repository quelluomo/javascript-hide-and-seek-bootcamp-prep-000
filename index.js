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
  let parent = document.querySelector('div#grand-node');
  let child = parent.querySelectorAll('div')[3];
  return parent;
}