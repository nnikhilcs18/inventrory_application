export function createParts(part) {
  const contentDiv = document.querySelector(".part-container");

  let rowDiv = document.createElement('div');
  rowDiv.classList.add('row');

  let partsName = document.createElement('span');
  partsName.classList.add('type');
  let partsNameText = document.createElement('input');


  partsNameText.type = 'text';
  partsNameText.classList.add('prop-box');
  partsName.appendChild(partsNameText);
  rowDiv.appendChild(partsName);

  let name = document.createElement('span');
  name.classList.add('asset-name');
  let nameChecked = document.createElement('input');
  nameChecked.type = 'checkbox';
  name.appendChild(nameChecked);
  rowDiv.appendChild(name);

  let partsDefault = document.createElement('span');
  partsDefault.classList.add('from-date');
  let partsDefaultChecked = document.createElement('input');
  partsDefaultChecked.type = 'checkbox';
  partsDefault.appendChild(partsDefaultChecked);
  rowDiv.appendChild(partsDefault);

  let btndiv = document.createElement('div');
  btndiv.classList.add('delete-btn');
  let buttonB = document.createElement('button');
  buttonB.type = 'button';
  buttonB.innerHTML = '<i class="fas fa-trash"></i>';
  btndiv.appendChild(buttonB);
  rowDiv.appendChild(btndiv);

  contentDiv.appendChild(rowDiv)

  const deleteBtns = document.querySelectorAll('.delete-btn');
  for (const btn of deleteBtns) {
    btn.addEventListener('click', deleteParts);
  }

  return partsNameText;
}

function deleteParts(event) {
  event.preventDefault();
  document.querySelector(".row").remove();
}