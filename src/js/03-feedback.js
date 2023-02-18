import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};
const savedValues = localStorage.getItem(STORAGE_KEY);
const savedDataObject = JSON.parse(savedValues);

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

  const savedDatas = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedDatas);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function reloadPage() {
  if (load(STORAGE_KEY)) {
    const outputForm = load(STORAGE_KEY);
    const formKeys = Object.keys(outputForm);
    formKeys.map(element => {
        document.querySelector(`[name='${element}']`).value = outputForm[element];
    });
  }
}
  // if (savedValues) {
  //     (refs.input.value = savedDataObject.email || ''),
  //    (refs.textarea.value = savedDataObject.message || '');
  // }
// }


