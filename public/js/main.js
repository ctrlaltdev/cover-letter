console.warn("I have become self aware!");

function addParagraph() {
  let textarea = document.createElement('textarea');
  textarea.setAttribute('name', 'content.body');

  document.querySelector('fieldset.contentbody').appendChild(textarea);
}

document.querySelector('button#btncontentbody').addEventListener('click', addParagraph)