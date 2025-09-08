// header js

    const closeBtn = document.querySelector('.close-btn');
    const topBanner = document.querySelector('#top-banner');

    closeBtn.addEventListener('click', () => {
topBanner.classList.add('hide-banner');
setTimeout(() => {
  topBanner.style.display = 'none';
}, 600); 
    });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".carousel-container button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const carousel = document.getElementById(targetId);

      if (!carousel) return;

      const item = carousel.querySelector(".item, .item-card");
      if (!item) return;

      const style = getComputedStyle(carousel);
      const gap = parseInt(style.gap || 0);
      const itemWidth = item.offsetWidth + gap;

      if (btn.classList.contains("next")) {
        carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
      } else if (btn.classList.contains("prev")) {
        carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let user = localStorage.getItem("loggedInUser");

  if (user) {
    // Hide login & signup
    document.getElementById("login-section").style.display = "none";
    document.getElementById("signup-section").style.display = "none";

    // Show profile with username
    document.getElementById("profile-section").style.display = "block";
    document.getElementById("userName").innerText = user;
  }
});


  // Header inject
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      // Header load hone ke baad auth.js run hoga
      const script = document.createElement("script");
      script.src = "auth.js";
      document.body.appendChild(script);
    });


    //  products
    const products = [
  {
    id: "halwa-puri",
    name: "Halwa Puri",
    image: "./assests/foods-img/258.png",
    price: 250,
    description: "Traditional breakfast combo with halwa, puri, and chana."
  },
  {
    id: "paratha",
    name: "Paratha",
    image: "./assests/foods-img/259.png",
    price: 100,
    description: "Crispy layered paratha served with chutney."
  },
  {
    id: "pasta",
    name: "Pasta",
    image: "./assests/foods-img/103.png",
    price: 350,
    description: "Italian pasta with creamy sauce and herbs."
  },
  {
    id: "nihari",
    name: "Nihari",
    image: "./assests/foods-img/252.png",
    price: 500,
    description: "Spicy beef nihari with naan."
  },
  {
    id: "haleem",
    name: "Haleem",
    image: "./assests/foods-img/250.png",
    price: 400,
    description: "Traditional haleem made with lentils and meat."
  },
  {
    id: "shawarma",
    name: "Shawarma",
    image: "./assests/foods-img/126.png",
    price: 200,
    description: "Delicious chicken shawarma wrap."
  },
  {
    id: "chinese",
    name: "Chinese",
    image: "./assests/foods-img/74.png",
    price: 600,
    description: "Chinese platter with rice and gravy."
  },
  {
    id: "fast-food",
    name: "Fast Food",
    image: "./assests/foods-img/86.png",
    price: 450,
    description: "Burger, fries, and cold drink combo."
  },
  {
    id: "biryani",
    name: "Biryani",
    image: "./assests/foods-img/193.png",
    price: 300,
    description: "Spicy chicken biryani with raita."
  },
  {
    id: "desert",
    name: "Desert",
    image: "./assests/foods-img/84.png",
    price: 150,
    description: "Sweet desserts like kheer and gulab jamun."
  },
  {
    id: "samosa",
    name: "Samosa",
    image: "./assests/foods-img/257.png",
    price: 50,
    description: "Crispy fried samosa with potato filling."
  },
  {
    id: "pulao",
    name: "Pulao",
    image: "./assests/foods-img/248.png",
    price: 280,
    description: "Traditional yakhni pulao."
  }
];

//  onclick fucntion
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cards").forEach(card => {
    card.addEventListener("click", () => {
      const productId = card.id; // ye product ka id hona chahiye
      const product = products.find(p => p.id === productId);

      if (product) {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "order.html";
      }
    });
  });
});
