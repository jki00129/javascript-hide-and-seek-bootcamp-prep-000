function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested');
}  getElements(".target");

function deepestChild(){
  var nodes = document.querySelector("div#grand-node")
  while(nodes.querySelector("div") !== null){
  nodes = nodes.querySelector("div")
  }
  return nodes
  
  /*
  * <div id="grand-node">
  *    <div>
  *    </div>
  * </div>
  */
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list');
      const firstList = rankedLists[0];
      const secondList = rankedLists[1];
  let children = firstList.children;
      let start = 1;
      
     for (var i =0; i < children.length; i++){
  let secondchildren = secondList.children;
       for(var l=0; l < secondchildren.length; l++){
         return parseInt(children[l] + n);
       }
     }
}


