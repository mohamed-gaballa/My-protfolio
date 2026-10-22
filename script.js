// ==================================
// 1 - TYPING ANIMATION
// ==================================

let words = [
    "Front-End Developer",
    "React Developer",
    "JavaScript Developer",
    "Web Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

let typingElement = document.getElementById("typing");

function typing() {

    let currentWord = words[wordIndex];

    if (deleting == false) {

        typingElement.textContent = currentWord.slice(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex == currentWord.length) {

            deleting = true;

            setTimeout(typing, 1500);

            return;
        }

    } else {

        typingElement.textContent = currentWord.slice(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex == 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex == words.length) {
                wordIndex = 0;
            }
        }
    }

    let speed = deleting ? 60 : 110;

    setTimeout(typing, speed);
}

typing();


// ==================================
// 2 - FILTER PROJECTS
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

            let projectCategory = project.getAttribute("data-category");

            if (category == "all" || category == projectCategory) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    };

});


// ==================================
// 3 - BACK TO TOP
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
// 4 - CONTACT FORM
// ==================================

// ضع بريدك هنا لتفعيل إرسال الرسائل
let myEmail = "mhmgalj542@gmail.com";

let contactForm = document.getElementById("contactForm");

contactForm.onsubmit = function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let subject = document.getElementById("subject").value;

    let message = document.getElementById("message").value;

    if (myEmail == "") {

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
// 5 - CV BUTTON
// ==================================

let cvBtn = document.getElementById("cvBtn");

cvBtn.onclick = function () {

    alert("السيرة الذاتية ستكون متاحة قريباً");

};


// ==================================
// 6 - PROFILE IMAGE
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
// 7 - SCROLL ANIMATIONS
// ==================================

let animatedElements = document.querySelectorAll(
    ".info-card, .skill-card, .project-card, .about-text"
);

animatedElements.forEach(function (element) {

    element.classList.add("reveal");

});

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


// ==================================
// 8 - FOOTER YEAR
// ==================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==================================
// 9 - SOCIAL LINKS
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