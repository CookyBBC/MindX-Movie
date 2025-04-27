const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const toggle =document.querySelector(".toggle")
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

/* Mãi mới tìm đc cách làm login/sign up 😭 */
document.addEventListener('DOMContentLoaded', function() {
  const signupButton = document.getElementById('signup-button');
  const loginButton = document.getElementById('login-button');
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  const signupSubmit = document.getElementById('signup-submit');
  const loginSubmit = document.getElementById('login-submit');

  signupButton.addEventListener('click', () => toggleForm(signupForm, loginForm));
  loginButton.addEventListener('click', () => toggleForm(loginForm, signupForm));

  signupSubmit.addEventListener('click', handleSignup);
  loginSubmit.addEventListener('click', handleLogin);

  function toggleForm(formToToggle, otherForm) {
      if (formToToggle.style.display === 'none' || formToToggle.style.display === '') {
          formToToggle.style.display = 'block';
          otherForm.style.display = 'none';
      } else {
          formToToggle.style.display = 'none';
      }
  }

  function handleSignup() {
      const username = document.getElementById('signup-username').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;

      if (username && email && password) {
          // Simulate database storage
          localStorage.setItem('user_' + username, JSON.stringify({username, email, password}));
          alert('Đăng ký tài khoản thành công! Hãy đăng nhập để tiếp tục.');
          toggleForm(loginForm, signupForm);
      } else {
          alert('Xin hãy điền hết thông tin vào.');
      }
  }

  function handleLogin() {
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;

      const storedUser = localStorage.getItem('user_' + username);
      if (storedUser) {
          const user = JSON.parse(storedUser);
          if (user.password === password) {
              alert('Đăng nhập thành công!');
              // Here you would typically set a session or token
              loginForm.style.display = 'none';
          } else {
              alert('Mật khẩu sai. Hãy thử lại');
          }
      } else {
          alert('Không tìm thấy người dùng. Hãy đăng kí nếu chưa có tài khoản');
      }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const movieItems = document.querySelectorAll('.movie-list-item');
  movieItems.forEach((item, index) => {
    item.style.setProperty('--item-index', index);
  });
});


