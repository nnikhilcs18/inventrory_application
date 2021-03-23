
export function createProperties(property) {
  const contentDiv = document.querySelector(".property-container");
  let rowDiv = document.createElement('div');
  rowDiv.classList.add('row');


  let propertiesLabel = document.createElement('span');
  propertiesLabel.classList.add('type');
  let propertiesLabelText = document.createElement('input');

  propertiesLabelText.type = 'text';
  propertiesLabelText.classList.add('prop-box');
  propertiesLabel.appendChild(propertiesLabelText);
  rowDiv.appendChild(propertiesLabel);

  let propertiesDefault = document.createElement('span');
  propertiesDefault.classList.add('serial');
  let propertiesDefaultText = document.createElement('input');
  propertiesDefaultText.type = 'text';
  propertiesDefaultText.classList.add('prop-box');
  propertiesDefault.appendChild(propertiesDefaultText);
  rowDiv.appendChild(propertiesDefault);

  let propertiesName = document.createElement('span');
  propertiesName.classList.add('asset-name');
  let propertiesNameChecked = document.createElement('input');
  propertiesNameChecked.type = 'checkbox';
  propertiesName.appendChild(propertiesNameChecked);
  rowDiv.appendChild(propertiesName);

  let propertiesRequired = document.createElement('span');
  propertiesRequired.classList.add('from-date');
  let propertiesRequiredChecked = document.createElement('input');
  propertiesRequiredChecked.type = 'checkbox';
  propertiesRequired.appendChild(propertiesRequiredChecked);
  rowDiv.appendChild(propertiesRequired);


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
    btn.addEventListener('click', deleteProperty);
  }


  return [propertiesLabelText, propertiesDefaultText];



}

function deleteProperty(event) {
  event.preventDefault();
  document.querySelector(".row").remove();
}