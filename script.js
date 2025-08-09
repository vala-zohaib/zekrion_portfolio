"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    let targetPage = this.innerHTML.trim().toLowerCase();
    pages.forEach((page, index) => {
      if (page.dataset.page.trim().toLowerCase() === targetPage) {
        page.classList.add("active");
        navigationLinks[index].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[index].classList.remove("active");
      }
    });
  });
});

// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }
// 'use strict';

// // element toggle function
// const elementToggleFunc = (elem) => elem.classList.toggle("active");

// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");
// sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variables
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = () => {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// };

// // add click event to all modal items
// testimonialsItem.forEach(item => {
//   item.addEventListener("click", function () {
//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
//     testimonialsModalFunc();
//   });
// });

// // modal close
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);

// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-select-value]"); // fixed typo
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () {
//   elementToggleFunc(this);
// });

// // add event in all select items
// selectItems.forEach(item => {
//   item.addEventListener("click", function () {
//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);
//   });
// });

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = (selectedValue) => {
//   filterItems.forEach(item => {
//     if (selectedValue === "all" || selectedValue === item.dataset.category) {
//       item.classList.add("active");
//     } else {
//       item.classList.remove("active");
//     }
//   });
// };

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];
// filterBtn.forEach(btn => {
//   btn.addEventListener("click", function () {
//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);
//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;
//   });
// });

// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// formInputs.forEach(input => {
//   input.addEventListener("input", function () {
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }
//   });
// });

// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// navigationLinks.forEach(link => {
//   link.addEventListener("click", function () {
//     let targetPage = this.innerHTML.trim().toLowerCase();
//     pages.forEach((page, index) => {
//       if (page.dataset.page.trim().toLowerCase() === targetPage) {
//         page.classList.add("active");
//         navigationLinks[index].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         page.classList.remove("active");
//         navigationLinks[index].classList.remove("active");
//       }
//     });
//   });
// });

/**
 * #STATS COUNTER ANIMATION
 */

// Stats counter functionality
const statsNumbers = document.querySelectorAll(".stats-number");
let hasAnimated = false;

// Function to animate counting up
function animateCounter(element, targetValue, duration = 2000) {
  let startValue = 0;
  let startTime = null;
  const increment = targetValue / (duration / 16); // 60fps

  // Check if the original text has a plus symbol
  const originalText =
    element.textContent || element.getAttribute("data-original") || "0";
  const hasPlus = originalText.includes("+");

  function updateCounter(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = currentTime - startTime;

    if (progress < duration) {
      startValue += increment;
      if (startValue > targetValue) startValue = targetValue;

      // Update the text with proper formatting
      if (hasPlus) {
        element.textContent = Math.floor(startValue) + "+";
      } else {
        element.textContent = Math.floor(startValue);
      }

      requestAnimationFrame(updateCounter);
    } else {
      // Ensure final value is exact
      if (hasPlus) {
        element.textContent = targetValue + "+";
      } else {
        element.textContent = targetValue;
      }
      element.classList.add("animate");
    }
  }

  requestAnimationFrame(updateCounter);
}

// Intersection Observer to trigger animation when stats section is visible
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;

        statsNumbers.forEach((statsNumber, index) => {
          // Get the target value from data attribute or text content
          let targetValue = parseInt(statsNumber.getAttribute("value"));
          if (!targetValue) {
            const textContent = statsNumber.textContent || "";
            targetValue = parseInt(textContent.replace(/\D/g, "")) || 0;
          }

          if (targetValue > 0) {
            // Store original text for reference
            const originalText = statsNumber.textContent;
            statsNumber.setAttribute("data-original", originalText);

            // Reset the element
            statsNumber.textContent = "0";
            statsNumber.classList.remove("animate");

            // Start the animation with a staggered delay for each item
            setTimeout(() => {
              animateCounter(statsNumber, targetValue);
            }, index * 200); // 200ms delay between each stat
          }
        });
      }
    });
  },
  {
    threshold: 0.3, // Trigger when 30% of the stats section is visible
    rootMargin: "0px 0px -50px 0px", // Add some margin to trigger earlier
  }
);

// Observe the stats section
const statsSection = document.querySelector(".stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Alternative: Trigger animation on scroll for better compatibility
function checkStatsVisibility() {
  if (hasAnimated) return;

  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const rect = statsSection.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Check if stats section is in viewport
  if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
    hasAnimated = true;

    statsNumbers.forEach((statsNumber, index) => {
      // Get the target value from data attribute or text content
      let targetValue = parseInt(statsNumber.getAttribute("value"));
      if (!targetValue) {
        const textContent = statsNumber.textContent || "";
        targetValue = parseInt(textContent.replace(/\D/g, "")) || 0;
      }

      if (targetValue > 0) {
        // Store original text for reference
        const originalText = statsNumber.textContent;
        statsNumber.setAttribute("data-original", originalText);

        // Reset the element
        statsNumber.textContent = "0";
        statsNumber.classList.remove("animate");

        // Start the animation with a staggered delay for each item
        setTimeout(() => {
          animateCounter(statsNumber, targetValue);
        }, index * 200); // 200ms delay between each stat
      }
    });
  }
}

// Add scroll event listener as fallback
window.addEventListener("scroll", checkStatsVisibility);

// Also check on page load
document.addEventListener("DOMContentLoaded", checkStatsVisibility);
