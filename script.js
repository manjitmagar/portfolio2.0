function openPopup(imgElement) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = imgElement.src;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}



    function toggleHighlight(element) {
  element.classList.toggle('highlighted');
}


    const scrollBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

    function sayNamaste() {
    alert("Hahahahaha");
    window.location.href = "https://github.com/manjitmagar"; // replace with your link
  }
  // Preventing browser from restoring scroll position
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  // Scrolling to top on load
  window.addEventListener('load', () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
  
  );

  const glowCursor = document.getElementById('glow-cursor');

  window.addEventListener('mousemove', e => {
    glowCursor.style.left = e.clientX + 'px';
    glowCursor.style.top = e.clientY + 'px';
  });

  window.addEventListener('mousedown', () => {
    glowCursor.style.background = 'rgba(0, 255, 150, 1)';
    glowCursor.style.boxShadow =
      '0 0 12px 6px rgba(0, 255, 150, 1), 0 0 20px 10px rgba(0, 255, 150, 0.7)';
  });

  window.addEventListener('mouseup', () => {
    glowCursor.style.background = 'rgba(0, 200, 255, 0.8)';
    glowCursor.style.boxShadow =
      '0 0 8px 4px rgba(0, 200, 255, 0.7), 0 0 15px 8px rgba(0, 200, 255, 0.5)';
  });

  // Select elements
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});


  

  
