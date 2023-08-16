document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownContent = document.querySelector(".dropdown-content");
  
    dropdownToggle.addEventListener("mouseenter", function () {
      dropdownContent.style.display = "block";
    });
  
    dropdownContent.addEventListener("mouseleave", function () {
      dropdownContent.style.display = "none";
    });
  
    const dropdownOptions = dropdownContent.querySelectorAll("li");
    dropdownOptions.forEach((option) => {
      option.addEventListener("click", function () {
        dropdownToggle.textContent = option.textContent;
        dropdownContent.style.display = "none";
      });
    });
  });
  