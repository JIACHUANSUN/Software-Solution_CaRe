document.addEventListener("DOMContentLoaded", function() {
  function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;
  }

  if (isMobileDevice()) {
      window.location.href = 'careh5.html';  // Mobile version
  } else {
      window.location.href = 'care.html';    // Desktop version
  }
});
