import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name=email]'),
  textarea: document.querySelector('textarea[name=message]'),
};

refs.form.addEventListener('input', throttle(storageFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

reloadPage();

function storageFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('Please fill in all the fields!');
  }
}

function reloadPage() {
  
  const savedDataObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedDataObject) {
    refs.input.value = savedDataObject.email || '';
    refs.textarea.value = savedDataObject.message || '';
  }
}

// const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
// Object.entries(savedForm).forEach(([name, value]) => {
//   formData[name] = value;
//   formEl.elements[name].value = value;
// });
// 
// if (load(STORAGE_KEY)) {
//   const outputForm = load(STORAGE_KEY);
//   const formKeys = Object.keys(outputForm);
//   formKeys.map(element => {
//       document.querySelector(`[name='${element}']`).value = outputForm[element];
//   });
