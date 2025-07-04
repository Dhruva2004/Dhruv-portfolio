// Toggle sidebar
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const navLinks = document.querySelectorAll('.nav');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove('open');
  }
});

// Add active class to clicked nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    navLinks.forEach(nav => nav.classList.remove('active'));
    // Add active class to the clicked link
    link.classList.add('active');
    // Close sidebar if in mobile view
    sidebar.classList.remove('open');
  });
});

// home page ///
var stars = document.getElementById("stars");
var moon = document.getElementById("moon");
var mountains_behind = document.getElementById("mountains_behind");
var text = document.getElementById("text");
var btn = document.getElementById("btn");
var mountains_front = document.getElementById("mountains_front");
var header = document.querySelector("header");


window.addEventListener('scroll', function () {
  var value = window.scrollY;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.Top = value * 0.5 + 'px';
})
// home page end///

// buttons
var all = document.getElementById("all_project");
var application = document.getElementById("application");
var appdesign_btn = document.getElementById("app_design_btn");
var web_design = document.getElementById("web_design");
var ai = document.getElementById("ai");

// projects
var container = document.querySelector('.project-container');
var apps = document.getElementById("apps");
var apps1 = document.getElementById("apps1");
var web = document.getElementById('web');
var ai_project = document.getElementById("ai_project");
var app_design = document.getElementById("app_design");
var app_design_1 = document.getElementById("app_design_1");


const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
  const percent = parseInt(card.dataset.percent);
  const skill = card.dataset.skill;
  const week = card.dataset.week;
  const month = card.dataset.month;

  card.innerHTML = `
        <h3>${skill}</h3>
        <div class="progress-circle">
          <svg viewBox="0 0 140 140">
            <circle class="circle-bg" cx="70" cy="70" r="60"></circle>
            <circle class="circle-progress" cx="70" cy="70" r="60"></circle>
          </svg>
          <div class="progress-value">0%</div>
        </div>
        <div class="stat">${week}%<br><small>Last week</small></div>
        <div class="stat">${month}%<br><small>Last month</small></div>
      `;

  const progressCircle = card.querySelector('.circle-progress');
  const percentText = card.querySelector('.progress-value');
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;

  let current = 0;
  const speed = 20;

  const animate = setInterval(() => {
    if (current <= percent) {
      const offset = circumference - (current / 100) * circumference;
      progressCircle.style.strokeDashoffset = offset;
      percentText.textContent = `${current}%`;
      current++;
    } else {
      clearInterval(animate);
    }
  }, speed);
});




function all_btn() {
  if (apps.style.display = "block") {
    apps.style.width = "330px";
    apps1.style.width = "330px";
    ai_project.style.width = "330px";
    web.style.width = "330px";
    app_design.style.width = "330px";
    app_design_1.style.width = "330px";
    web.style.display = "block";
    ai_project.style.display = "block";
    app_design_1.style.display = "block";
    app_design.style.display = "block";
    apps1.style.display = "block";
    all.style.background = "white";
    application.style.background = "none";
    appdesign_btn.style.background = "none";
    web_design.style.background = "none";
    ai.style.background = "none";

  }
}
function application_btn() {
  if ((apps.style.display = "block") && (apps1.style.display = "block")) {
    apps.style.width = "380px";
    apps1.style.width = "380px";
    all.style.background = "none";
    application.style.background = "white";
    appdesign_btn.style.background = "none";
    web.style.display = "none";
    ai_project.style.display = "none";
    app_design_1.style.display = "none";
    app_design.style.display = "none";
  }
}

function app_btn() {
  if ((app_design.style.display = "block") && (app_design_1.style.display = "block")) {
    app_design.style.width = "380px";
    app_design_1.style.width = "380px";
    all.style.background = "none";
    application.style.background = "none";
    appdesign_btn.style.background = "#f0f0f0";
    web_design.style.background = "none";
    ai_project.style.display = "none";
    web.style.display = "none";
    apps.style.display = "none";
    apps1.style.display = "none";
  }
}
function web_btn() {
  if (web.style.display = "block") {
    web.style.width = "400px";
    all.style.background = "none";
    application.style.background = "none";
    appdesign_btn.style.background = "none";
    web_design.style.background = "#f0f0f0";
    ai.style.background = "none";
    apps.style.display = "none";
    apps1.style.display = "none";
    app_design.style.display = "none";
    app_design_1.style.display = "none";
    ai_project.style.display = "none";

  }
}
function ai_btn() {
  if (ai_project.style.display = "block") {
    all.style.background = "none";
    application.style.background = "none";
    appdesign_btn.style.background = "none";
    web_design.style.background = "none";
    ai.style.background = "#f0f0f0";
    apps.style.display = "none";
    apps1.style.display = "none";
    app_design.style.display = "none";
    app_design_1.style.display = "none";
    web.style.display = "none";
    ai_project.style.width = "400px";

  }
}


// contact form js
document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Reset error messages
            document.querySelectorAll('.validation-message').forEach(el => {
                el.style.display = 'none';
            });

            // Validate name
            const name = document.getElementById('name_contact').value.trim();
            if (!name) {
                document.getElementById('name-error').style.display = 'block';
                isValid = false;
            }

            // Validate email
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }

            // Validate message
            const message = document.getElementById('message').value.trim();
            if (!message) {
                document.getElementById('message-error').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                // Here you would typically send the form data to a server
                // For this example, we'll just show a success message
                alert('Thank you for reaching out! I\'ll respond within 24 hours.');
                this.reset();
                
                // Add animation effect on success
                const submitBtn = document.querySelector('.submit-btn');
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'linear-gradient(to right, #4CAF50, #2E7D32)';
                
                setTimeout(() => {
                    submitBtn.textContent = 'Send Message';
                    submitBtn.style.background = 'linear-gradient(to right, #757ede, #9183e0)';
                }, 2000);
            }
        });

        // Add focus effects programmatically
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'translateY(-5px)';
            });
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'translateY(0)';
            });
        });