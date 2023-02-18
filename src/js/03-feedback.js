import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('input', throttle(storageFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

reloadPage();

function storageFormData(evt) {
  formData[evt.target.name] = evt.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('Please fill in all the fields!');
  }
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function reloadPage() {
  const savedDataObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedDataObject) {
    refs.input.value = savedDataObject.email || '';
    refs.textarea.value = savedDataObject.message || '';
  }
}
