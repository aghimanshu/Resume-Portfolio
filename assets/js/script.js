'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



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
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

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

select.addEventListener("click", function () { elementToggleFunc(this); });

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

}

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
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

document.addEventListener('DOMContentLoaded', function () {
  const skillsData = [
      { name: '.Net Core', category: 'web-development', percentage: 80 },
      { name: '.Net', category: 'web-development', percentage: 80 },
      { name: 'C', category: 'web-development', percentage: 70 },
      { name: 'LINQ', category: 'web-development', percentage: 80 },
      { name: 'Dot Net MVC', category: 'web-development', percentage: 80 },
      { name: 'SQL Server', category: 'web-development', percentage: 80 },
      { name: 'Angular JS', category: 'web-development', percentage: 60 },
      { name: 'Javascript', category: 'web-development', percentage: 80 },
      { name: 'JQuery', category: 'web-development', percentage: 80 },
      { name: 'AJAX', category: 'web-development', percentage: 80 },
      { name: 'Admin LTE', category: 'web-development', percentage: 80 },
      { name: 'HTML/CSS', category: 'web-development', percentage: 80 },
      { name: 'Bootstrap', category: 'web-development', percentage: 80 },
      { name: 'GIT', category: 'applications', percentage: 80 },
      { name: 'Jira', category: 'applications', percentage: 60 },
      { name: 'Slack', category: 'applications', percentage: 60 },
      { name: 'Teams', category: 'applications', percentage: 80 },
      { name: 'Power BI', category: 'applications', percentage: 50 },
      { name: 'Label Studio', category: 'applications', percentage: 50 },
      { name: 'Java', category: 'web-development', percentage: 80 },
      { name: 'VBA Macro', category: 'web-development', percentage: 80 },
      { name: 'Problem-Solving', category: 'web-design', percentage: 90 },
      { name: 'Visual Studio', category: 'applications', percentage: 90 },
      { name: 'Sql Server', category: 'applications', percentage: 90 },
      { name: 'Github', category: 'applications', percentage: 90 },
      { name: 'Netbeans', category: 'applications', percentage: 75 },
      { name: 'Eclipse', category: 'applications', percentage: 75 },
      { name: 'Slack', category: 'applications', percentage: 80 },
      { name: 'Teams', category: 'applications', percentage: 90 },
      { name: 'Zoom', category: 'applications', percentage: 90 },
      { name: 'TFS', category: 'applications', percentage: 80 },
      { name: 'Visual Studio Code', category: 'applications', percentage: 85 },
      { name: 'Microsoft Office', category: 'applications', percentage: 80 },
      { name: 'Outlook', category: 'applications', percentage: 80 },
      { name: 'Google Meet', category: 'applications', percentage: 90 },
      { name: 'Sublime Text', category: 'applications', percentage: 85 },
      { name: 'PyCharm', category: 'applications', percentage: 50 },
      { name: 'Communication', category: 'web-design', percentage: 85 },
      { name: 'Teamwork', category: 'web-design', percentage: 85 },
      { name: 'Critical Thinking', category: 'web-design', percentage: 85 },
      { name: 'C++', category: 'web-development', percentage: 70 },
      { name: 'C#', category: 'web-development', percentage: 70 },
      { name: 'JScript .NET', category: 'web-development', percentage: 60 },
      { name: 'OOPS', category: 'web-development', percentage: 80 },
      { name: 'SQL', category: 'web-development', percentage: 85 },
      { name: 'Database', category: 'web-development', percentage: 85 },
      { name: 'VB.NET', category: 'web-development', percentage: 80 },
      { name: 'ASP.NET', category: 'web-development', percentage: 80 },
      { name: 'ASP.NET Core', category: 'web-development', percentage: 80 },
      { name: 'Dataset', category: 'web-development', percentage: 80 },
      { name: 'Datatable', category: 'web-development', percentage: 80 },
      { name: 'Time Management', category: 'web-design', percentage: 80 },
    ];

  const skillsList = document.querySelector('.skills-list');

  // Function to populate skills based on category
  function populateSkills(category) {
      skillsList.innerHTML = ''; // Clear existing skills

      skillsData.forEach(skill => {
          if (category === 'all' || skill.category === category) {
              const skillItem = `
                  <li class="skills-item">
                      <div class="title-wrapper">
                          <h5 class="h5">${skill.name}</h5>
                          <data value="${skill.percentage}">${skill.percentage}%</data>
                      </div>
                      <div class="skill-progress-bg">
                          <div class="skill-progress-fill" style="width: ${skill.percentage}%;"></div>
                      </div>
                  </li>
              `;
              skillsList.insertAdjacentHTML('beforeend', skillItem);
          }
      });
  }

  // Initial population of skills (All category)
  populateSkills('all');

  // Event listeners for category filtering
  const filterButtons = document.querySelectorAll('[data-filter-btn]');
  filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
          const category = this.getAttribute('data-filter-btn');
          populateSkills(category);
          // Toggle active class
          filterButtons.forEach(button => button.classList.remove('active'));
          this.classList.add('active');
      });
  });

  // Event listener for select box filtering
  const selectItems = document.querySelectorAll('[data-select-item]');
  selectItems.forEach(item => {
      item.addEventListener('click', function () {
          const category = this.getAttribute('data-select-item');
          populateSkills(category);
          // Update select box text
          const selectValue = document.querySelector('.select-value');
          selectValue.textContent = this.textContent;
          // Toggle active class
          selectItems.forEach(selectItem => selectItem.classList.remove('active'));
          this.classList.add('active');
      });
  });
});