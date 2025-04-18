document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailRegex = /^[^\s@]+@CAES\.edu\.ph$/i;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
    // Email validation
    if (!emailRegex.test(email)) {
      alert("Email must end with '@CAES.edu.ph'.");
      return;
    }
  
    if (email.includes(" ")) {
      alert("Email cannot contain spaces.");
      return;
    }
  
    // Password validation
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and include at least one uppercase letter and one number.");
      return;
    }
  
    if (password.includes(" ")) {
      alert("Password cannot contain spaces.");
      return;
    }
  
    // All validations passed
    alert("Login successful!");
  });
  