function initAuth() {
  const userName = localStorage.getItem("userName");

  // Desktop elements
  const desktopLoginBtn = document.querySelector("#navbarSupportedContent .btn-log")?.parentElement;
  const desktopSignupBtn = document.querySelector("#navbarSupportedContent .delivery-btn")?.parentElement;
  const desktopAccountSection = document.getElementById("desktop-account-section");
  const desktopUserName = document.getElementById("desktopUserName");

  // Mobile elements
  const mobileLoginBtn = document.getElementById("mobile-login-btn");
  const mobileSignupBtn = document.getElementById("mobile-signup-btn");
  const mobileAccountSection = document.getElementById("mobile-account-section");
  const mobileUserName = document.getElementById("mobileUserName");
  const mobileLogoutBtn = document.getElementById("mobileLogoutBtn");

  if (userName) {
    // Desktop
    if (desktopLoginBtn) desktopLoginBtn.style.display = "none";
    if (desktopSignupBtn) desktopSignupBtn.style.display = "none";
    if (desktopAccountSection) {
      desktopAccountSection.style.display = "flex";
      if (desktopUserName) desktopUserName.textContent = userName;
    }

    // Mobile
    if (mobileLoginBtn) mobileLoginBtn.style.display = "none";
    if (mobileSignupBtn) mobileSignupBtn.style.display = "none";
    if (mobileAccountSection) mobileAccountSection.style.display = "flex";
    if (mobileUserName) mobileUserName.textContent = userName;

  } else {
    // Desktop
    if (desktopLoginBtn) desktopLoginBtn.style.display = "block";
    if (desktopSignupBtn) desktopSignupBtn.style.display = "block";
    if (desktopAccountSection) desktopAccountSection.style.display = "none";

    // Mobile
    if (mobileLoginBtn) mobileLoginBtn.style.display = "inline-block";
    if (mobileSignupBtn) mobileSignupBtn.style.display = "inline-block";
    if (mobileAccountSection) mobileAccountSection.style.display = "none";
  }

  // Mobile logout
  if (mobileLogoutBtn) {
    mobileLogoutBtn.onclick = () => {
      localStorage.removeItem("userName");
      // Reset all sections
      if (desktopAccountSection) desktopAccountSection.style.display = "none";
      if (desktopLoginBtn) desktopLoginBtn.style.display = "block";
      if (desktopSignupBtn) desktopSignupBtn.style.display = "block";
      if (mobileAccountSection) mobileAccountSection.style.display = "none";
      if (mobileLoginBtn) mobileLoginBtn.style.display = "inline-block";
      if (mobileSignupBtn) mobileSignupBtn.style.display = "inline-block";
      window.location.href = "index.html";
    };
  }
}

// Run on page load
document.addEventListener("DOMContentLoaded", initAuth);

// Desktop logout
function logout() {
  localStorage.removeItem("userName");
  const desktopLoginBtn = document.querySelector("#navbarSupportedContent .btn-log")?.parentElement;
  const desktopSignupBtn = document.querySelector("#navbarSupportedContent .delivery-btn")?.parentElement;
  const desktopAccountSection = document.getElementById("desktop-account-section");

  if (desktopAccountSection) desktopAccountSection.style.display = "none";
  if (desktopLoginBtn) desktopLoginBtn.style.display = "block";
  if (desktopSignupBtn) desktopSignupBtn.style.display = "block";

  window.location.href = "index.html";
}
