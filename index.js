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


