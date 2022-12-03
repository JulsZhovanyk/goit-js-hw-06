const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("Усі поля мають бути заповнені!");
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);
  event.currentTarget.reset();
}
