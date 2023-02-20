import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = { email: '', message: '' };
const savedDataObject = JSON.parse(localStorage.getItem(STORAGE_KEY));

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input[name=email]'),
  textarea: document.querySelector('textarea[name=message]'),
};
reloadPage();
refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onInput(evt) {
  formData.email = refs.input.value.trim();
  formData.message = refs.textarea.value.trim();
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
  
function reloadPage() {
  
    if (savedDataObject) {
      refs.input.value = savedDataObject.email || '';
      refs.textarea.value = savedDataObject.message || '';
      return reloadPage;
    };
  }

function onFormSubmit(evt) {
  evt.preventDefault();
  
  if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('Please fill in all the fields!');
  }
  console.log(savedDataObject);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  
}


// function reloadPage() {
  // const savedDataObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   formData.email = refs.input.value;
//   formData.message = refs.textarea.value;
    
//       return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
//   }
