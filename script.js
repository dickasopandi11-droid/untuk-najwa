document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // BUKA SURAT
    // =========================

    const openLetter = document.getElementById("openLetter");
    const letter = document.getElementById("letter");

    openLetter.addEventListener("click", () => {

        letter.scrollIntoView({
            behavior: "smooth"
        });

    });


    // =========================
    // MUSIK
    // =========================

    const music = document.getElementById("music");
    const musicBtn = document.getElementById("musicBtn");

    musicBtn.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicBtn.textContent = "❚❚";

        } else {

            music.pause();

            musicBtn.textContent = "▶";

        }

    });


    // =========================
    // ANIMASI SAAT SCROLL
    // =========================

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach((element) => {
        observer.observe(element);
    });


    // =========================
    // MUSIK SAAT PERTAMA KALI
    // DISENTUH
    // =========================

    document.addEventListener("click", () => {

        if (music.paused) {

            music.play()
                .then(() => {

                    musicBtn.textContent = "❚❚";

                })
                .catch(() => {});

        }

    }, { once: true });


});