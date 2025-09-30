document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (e) => {
      const errors = [];
      const fullName = document.getElementById("name").value.trim();
      const phone    = document.getElementById("phone").value.trim();
      const email    = document.getElementById("email").value.trim();
      const userTypeEl = document.querySelector('input[name="userType"]:checked');
      const userType = userTypeEl ? userTypeEl.value : "";
      const message  = document.getElementById("message").value.trim(); 
      // Name: required, letters and3–50 chars
      if (!fullName) {
        errors.push("❌ Name is required.");
      } else if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]{3,50}$/.test(fullName)) {
        errors.push("❌ Name must be 3–50 letters and spaces only.");
      }
      // Phone: required, format +51 +9 numbers
      if (!phone) {
        errors.push("❌ Phone number is required.");
      } else if (!/^\+51\s?\d{9}$/.test(phone)) {
        errors.push("❌ Phone must be in format +51 987654321.");
      } 
      //Email required, valid format
      if (!email) {
        errors.push("❌ Email is required.");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("❌ Enter a valid email address.");
      }  
      // User type: required
      if (!userType) {
        errors.push("❌ Please select a user type.");
      }
      // Message: requred, max 500 chars
      if (!message) {
        errors.push("❌ Message is required.");
      } else if (message.length > 500) {
        errors.push("❌ Message cannot exceed 500 characters.");
      }
      if (errors.length > 0) {
        e.preventDefault();
        alert("Please fix the following errors:\n\n" + errors.join("\n"));
      }
    });

      // FAQ Logic
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });

  });


  //Logica del navbar
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-bar');
    const links = document.querySelectorAll('.nav-menu ul li a');
    const logoText = document.querySelector('.logo-text');
    const loginButtons = document.querySelectorAll('.register-login a');

    if (window.scrollY > 50) {
        nav.classList.add('nav-white');
        logoText.style.color = "#00606C";
        links.forEach(link => link.style.color = "#00606C");
        loginButtons.forEach(btn => btn.style.border = "1px solid #00606C");
    } else {
        nav.classList.remove('nav-white');
        logoText.style.color = "#FFF";
        links.forEach(link => link.style.color = "#FFF");
        loginButtons.forEach(btn => btn.style.border = "none");
    }
});
