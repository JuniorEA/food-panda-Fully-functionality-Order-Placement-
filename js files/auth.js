function initAuth() {
  const userName = localStorage.getItem("userName");

  const loginBtn = document.querySelector(".btn-log")?.parentElement;
  const signupBtn = document.querySelector(".delivery-btn")?.parentElement;
  const accountSection = document.getElementById("account-section");
  const userNameSpan = document.getElementById("userName");

  if (userName) {
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";

    if (accountSection) {
      accountSection.style.display = "block";
      if (userNameSpan) {
        userNameSpan.textContent = userName;
      }
    }
  } else {
    if (loginBtn) loginBtn.style.display = "block";
    if (signupBtn) signupBtn.style.display = "block";

    if (accountSection) {
      accountSection.style.display = "none";
    }
  }
}

function logout() {
  localStorage.removeItem("userName");
  window.location.href = "index.html";
}
