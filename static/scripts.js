document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 🔊 SOUND ENGINE (GLOBAL)
    // =========================
    const Sound = {
        click: new Audio("/static/sounds/click.mp3"),
        hover: new Audio("/static/sounds/hover.mp3"),
        success: new Audio("/static/sounds/success.mp3"),
        danger: new Audio("/static/sounds/delete.mp3"),
    };

    function play(soundName) {
        const sound = Sound[soundName];
        if (!sound) return;

        sound.currentTime = 0;
        sound.volume = 0.4;
        sound.play().catch(() => {});
    }


    // =========================
    // 🗑 DELETE CONFIRM (SMART + SOUND)
    // =========================
    document.querySelectorAll("a[href*='delete']").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            play("danger");

            const ok = confirm("⚠ Ushbu userni o‘chirishga ishonchingiz komilmi?");
            if (ok) {
                setTimeout(() => {
                    window.location.href = link.href;
                }, 200);
            }
        });
    });


    // =========================
    // ✨ INPUT UX (SMOOTH + SOUND)
    // =========================
    document.querySelectorAll("input").forEach(input => {

        input.addEventListener("focus", () => {
            play("hover");
            input.style.transition = "0.3s";
            input.style.transform = "scale(1.02)";
            input.style.boxShadow = "0 0 15px rgba(118,75,162,0.4)";
        });

        input.addEventListener("blur", () => {
            input.style.transform = "scale(1)";
            input.style.boxShadow = "none";
        });

    });


    // =========================
    // 🔘 BUTTON SYSTEM (PRO LEVEL)
    // =========================
    document.querySelectorAll("button").forEach(btn => {

        btn.addEventListener("mouseenter", () => {
            play("hover");
            btn.style.transition = "0.2s";
            btn.style.transform = "scale(1.05)";
            btn.style.filter = "brightness(1.15)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
            btn.style.filter = "brightness(1)";
        });

        btn.addEventListener("mousedown", () => {
            play("click");
            btn.style.transform = "scale(0.97)";
        });

        btn.addEventListener("mouseup", () => {
            btn.style.transform = "scale(1.05)";
        });

    });


    // =========================
    // 🔔 TOAST NOTIFICATION SYSTEM (PRO)
    // =========================
    function showToast(message, type = "success") {

        const colors = {
            success: "#4CAF50",
            error: "#f44336",
            info: "#2196F3"
        };

        const toast = document.createElement("div");

        toast.innerText = message;

        toast.style.position = "fixed";
        toast.style.bottom = "20px";
        toast.style.right = "20px";
        toast.style.padding = "12px 18px";
        toast.style.borderRadius = "10px";
        toast.style.color = "white";
        toast.style.background = colors[type];
        toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
        toast.style.zIndex = "9999";
        toast.style.opacity = "0";
        toast.style.transform = "translateY(20px)";
        toast.style.transition = "0.3s";

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "1";
            toast.style.transform = "translateY(0)";
        }, 100);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(20px)";
            setTimeout(() => toast.remove(), 300);
        }, 2500);

        play(type === "error" ? "danger" : "success");
    }


    // =========================
    // 🔔 AUTO ALERT CLEANER
    // =========================
    document.querySelectorAll(".alert").forEach(alert => {
        play("success");

        setTimeout(() => {
            alert.style.opacity = "0";
            alert.style.transform = "translateY(-10px)";
            alert.style.transition = "0.5s";

            setTimeout(() => alert.remove(), 500);
        }, 2000);
    });


    // =========================
    // 🔍 SEARCH UX (SMART ANIMATION)
    // =========================
    const searchInput = document.querySelector("input[name='q']");

    if (searchInput) {

        searchInput.addEventListener("focus", () => {
            searchInput.style.transition = "0.3s";
            searchInput.style.width = "240px";
            play("hover");
        });

        searchInput.addEventListener("blur", () => {
            searchInput.style.width = "160px";
        });

    }


    // =========================
    // 🌟 GLOBAL API (optional use later)
    // =========================
    window.showToast = showToast;

});