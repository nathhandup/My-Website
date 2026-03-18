/* takes an HTML type: string, and numerous child arguments for the HTML type. 
creates the corrosponding requested type within the document */
function elt(type, ...children) {
    let node = document.createElement(type);
    for (let child of children) {
      if (typeof child != "string") node.appendChild(child);
      else node.appendChild(document.createTextNode(child));
    }
    return node;
  }

