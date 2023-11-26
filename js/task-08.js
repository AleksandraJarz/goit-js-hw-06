const loginForm = document.querySelector(".login-form");

function handleSumbit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Complete all fields!");
  } else {
    const user = {
      email,
      password,
    };
    console.log(user);
    form.reset();
  }
}

loginForm.addEventListener("submit", handleSumbit);
