// ==================================
// 1 - TYPING ANIMATION
// ==================================

let words = [
    "Front-End Developer",
    "JavaScript Developer",
    "Web Developer",
    "Responsive Web Designer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

let typingElement = document.getElementById("typing");

function typing() {

    let currentWord = words[wordIndex];

    if (deleting === false) {

        typingElement.textContent =
            currentWord.slice(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typing, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.slice(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    let speed = deleting ? 60 : 110;

    setTimeout(typing, speed);
}

if (typingElement) {
    typing();
}


// ==================================
// 2 - HEADER MENU
// ==================================

let menuToggle = document.getElementById("menuToggle");

let navMenu = document.getElementById("navMenu");

menuToggle.onclick = function () {

    navMenu.classList.toggle("active");

    let isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {

        menuToggle.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

};


// ==================================
// 3 - CLOSE MENU AFTER CLICK
// ==================================

let navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.onclick = function () {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    };

});


// ==================================
// 4 - CLOSE MENU OUTSIDE
// ==================================

document.addEventListener("click", function (event) {

    if (
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});


// ==================================
// 5 - DARK / LIGHT MODE
// ==================================

let themeToggle = document.getElementById("themeToggle");

let savedTheme = localStorage.getItem("portfolioTheme");

function updateThemeIcon() {

    if (document.body.classList.contains("light")) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fa-regular fa-moon"></i>';

    }

}

if (savedTheme === "light") {

    document.body.classList.add("light");

}

updateThemeIcon();

themeToggle.onclick = function () {

    document.body.classList.toggle("light");

    let currentTheme =
        document.body.classList.contains("light")
            ? "light"
            : "dark";

    localStorage.setItem("portfolioTheme", currentTheme);

    updateThemeIcon();

};


// ==================================
// 6 - FILTER PROJECTS
// ==================================

let filterButtons = document.querySelectorAll(".filter-btn");

let projects = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.onclick = function () {

        filterButtons.forEach(function (item) {

            item.classList.remove("active");

        });

        button.classList.add("active");

        let category = button.getAttribute("data-filter");

        projects.forEach(function (project) {

            let projectCategory =
                project.getAttribute("data-category");

            if (
                category === "all" ||
                category === projectCategory
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    };

});


// ==================================
// 7 - BACK TO TOP
// ==================================

let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ==================================
// 8 - CONTACT FORM
// ==================================

let myEmail = "mhmgalj542@gmail.com";

let contactForm = document.getElementById("contactForm");

contactForm.onsubmit = function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let subject = document.getElementById("subject").value;

    let message = document.getElementById("message").value;

    if (myEmail === "") {

        alert("نموذج التواصل غير مفعل حالياً");

        return;
    }

    let body =
        "الاسم: " + name + "\n" +
        "البريد الإلكتروني: " + email + "\n\n" +
        "الرسالة:\n" + message;

    let mailLink =
        "mailto:" + myEmail +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = mailLink;

};


// ==================================
// 9 - CV BUTTON
// ==================================

let cvBtn = document.getElementById("cvBtn");

cvBtn.onclick = function () {

    alert("السيرة الذاتية ستكون متاحة قريباً");

};


// ==================================
// 10 - PROFILE IMAGE
// ==================================

let profileImage = document.getElementById("profileImage");

let imagePlaceholder = document.getElementById("imagePlaceholder");

profileImage.onload = function () {

    profileImage.style.display = "block";

    imagePlaceholder.style.display = "none";

};

profileImage.onerror = function () {

    profileImage.style.display = "none";

    imagePlaceholder.style.display = "flex";

};

if (profileImage.complete && profileImage.naturalWidth > 0) {

    profileImage.onload();

}


// ==================================
// 11 - SCROLL ANIMATIONS
// ==================================

let animatedElements = document.querySelectorAll(
    ".info-card, .skill-card, .project-card, .about-text, .contact-info"
);

animatedElements.forEach(function (element) {

    element.classList.add("reveal");

});

if ("IntersectionObserver" in window) {

    let observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.1
    });

    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    animatedElements.forEach(function (element) {

        element.classList.add("show");

    });

}


// ==================================
// 12 - FOOTER YEAR
// ==================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==================================
// 13 - SOCIAL LINKS
// ==================================

let emptySocialLinks = document.querySelectorAll(
    ".social-placeholder"
);

emptySocialLinks.forEach(function (link) {

    link.onclick = function (event) {

        event.preventDefault();

        alert("سيتم إضافة رابط الحساب قريباً");

    };

});


// ==================================
// 14 - HEADER SCROLL EFFECT
// ==================================

let header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 30px rgba(0, 0, 0, 0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});
