'use strict';

// write your code here
const thead = document.querySelector('thead');
const theadRows = Array.from(thead.children);
const tbody = document.querySelector('tbody');
const people = Array.from(tbody.children);
const tfoot = document.querySelector('tfoot');
const tfootRows = Array.from(tfoot.children);

function duplicateSecondColumn(list, elementToCreate) {
  for (const char of list) {
    if (char.children.length === 0) {
      continue;
    }

    const position = char.children[1];
    const preLast = char.children[char.children.length - 1];
    const clone = document.createElement(elementToCreate);

    clone.textContent = position.textContent;

    preLast.before(clone);
  }
}

duplicateSecondColumn(theadRows, 'th');
duplicateSecondColumn(people, 'td');
duplicateSecondColumn(tfootRows, 'th');
