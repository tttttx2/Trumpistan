// Thanks to https://gist.github.com/nkhil/befbaa8a9722e92db091f47a66fde7ca#file-brexit-js

var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/USA/g, 'Trumpistan');
  value = value.replace(/U\.S\./g, 'Trumpistan');
  value = value.replace(/US /g, 'Trumpistan');
  value = value.replace(/United States of America/g, 'Trumpistan');
  value = value.replace(/United States/g, 'Trumpistan');
  value = value.replace(/the Trumpistan/g, 'Trumpistan');
  value = value.replace(/The Trumpistan/g, 'Trumpistan');
  node.nodeValue = value;
}

findAndReplace();
