async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    await fetch("/user", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/explore");
    } else {
      alert(response.statusText);
    }
    console.log(username, email, password);
  }
}

async function loginFormHandler(event) {
  event.preventDefault();
  console.log("Clicking Login button");
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(email, password);
  if (email && password) {
    console.log("Email & PW exists", email, password);
    console.log("Clicking Login button");
    const response = await fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
        console.log("ghesris");
      return response;
      //   document.location.replace('/explore');
    } else {
      alert(response.statusText);
      console.log(alert);
    }
  }
}

//document.querySelector('.login-form').addEventListener('submit', signupFormHandler)
document
  .querySelector(".login-form")
  .addEventListener("click", loginFormHandler);
