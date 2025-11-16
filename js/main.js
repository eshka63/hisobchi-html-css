AOS.init({
    once: true,
    offset: 100,
    duration: 800
});

document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach((header, index) => {
        const content = header.nextElementSibling;
        const icon = header.querySelector(".accordion-icon");

        if (index === 0) {
            content.classList.add("show");
            content.style.maxHeight = content.scrollHeight + "px";
            icon.textContent = "−";
            icon.classList.add("open");
        }

        header.addEventListener("click", () => {
            headers.forEach(h => {
                const c = h.nextElementSibling;
                const i = h.querySelector(".accordion-icon");
                if (h !== header) {
                    c.classList.remove("show");
                    c.style.maxHeight = null;
                    i.textContent = "+";
                    i.classList.remove("open");
                }
            });

            const isOpen = content.classList.contains("show");
            if (isOpen) {
                content.classList.remove("show");
                content.style.maxHeight = null;
                icon.textContent = "+";
                icon.classList.remove("open");
            } else {
                content.classList.add("show");
                content.style.maxHeight = content.scrollHeight + "px";
                icon.textContent = "−";
                icon.classList.add("open");
            }
        });
    });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {

    /*** MOBILE LANGUAGE ***/
    const mobileToggle = document.querySelector(".mobile-lang .lang-toggle");
    const mobileMenu = document.querySelector(".mobile-lang .lang-menu");

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            mobileMenu.style.display =
                mobileMenu.style.display === "block" ? "none" : "block";
        });
    }

    /*** DESKTOP LANGUAGE ***/
    const desktopToggle = document.querySelector(".language-dropdown .lang-toggle");
    const desktopMenu = document.querySelector(".language-dropdown .lang-menu");

    if (desktopToggle && desktopMenu) {
        desktopToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            desktopMenu.style.display =
                desktopMenu.style.display === "block" ? "none" : "block";
        });
    }

    /*** CLOSE WHEN CLICK OUTSIDE ***/
    document.addEventListener("click", () => {
        if (mobileMenu) mobileMenu.style.display = "none";
        if (desktopMenu) desktopMenu.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const nav = document.getElementById("navbarNav");
    const mobileLang = document.querySelector(".mobile-lang");

    nav.addEventListener("shown.bs.collapse", () => {
        mobileLang.classList.add("hide-on-open");
    });

    nav.addEventListener("hidden.bs.collapse", () => {
        mobileLang.classList.remove("hide-on-open");
    });

});

document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.querySelector(".navbar-toggler");
    const nav    = document.getElementById("navbarNav");
    const icon   = toggler.querySelector("img");

    nav.addEventListener("show.bs.collapse", () => {
        toggler.classList.add("opened");
        icon.src = "img/svg/up-circle.svg";     // ← твой крестик
        icon.style.width = "30px";
        icon.style.height = "30px";
    });

    nav.addEventListener("hide.bs.collapse", () => {
        toggler.classList.remove("opened");
        icon.src = "img/svg/icn-menu.svg";  // ← меню обратно
    });
});

document.querySelectorAll('.service-block').forEach(block => {
    block.addEventListener('click', () => {

        const content = block.querySelector('.service-content');

        // ОТКРЫТИЕ
        if (block.classList.contains('closed')) {

            // ставим текущую высоту для плавности
            content.style.maxHeight = content.scrollHeight + "px";

            block.classList.remove('closed');
            block.classList.add('open');

            content.classList.remove('preview');

            setTimeout(() => {
                content.style.maxHeight = "1000px"; // фиксируем для дальнейшей прокрутки
            }, 300);
        }

        // ЗАКРЫТИЕ
        else if (block.classList.contains('open')) {

            // плавно закрываем
            content.style.maxHeight = content.scrollHeight + "px";
            setTimeout(() => {
                content.style.maxHeight = "85px";
            }, 10);

            block.classList.remove('open');
            block.classList.add('closed');

            content.classList.add('preview');
        }
    });
});