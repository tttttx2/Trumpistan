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
  value = value.replace(/USA/gi, 'Trumpistan');
  value = value.replace(/U.S./gi, 'Trumpistan');
  value = value.replace(/United States of America/gi, 'Trumpistan');
  value = value.replace(/United States/gi, 'Trumpistan');
  value = value.replace(/the Trumpistan/gi, 'Trumpistan');
  value = value.replace(/The Trumpistan/gi, 'Trumpistan');
  node.nodeValue = value;
}

findAndReplace();
