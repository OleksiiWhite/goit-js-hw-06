const form = document.querySelector('.login-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Not all form fields are filled!');
  }
  console.log(`Login: ${login.value}, Password: ${password.value}`);
  e.currentTarget.removeEventListener();
});
