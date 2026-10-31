/* =========================================================
   CTRL+Z — TRANSITION SYSTEM
   Scene & Sprite Animations (Crossfade, Glitch, Slide, Blur)
========================================================= */

window.VNTransitions = {

    async wait(duration = 300) {
        return new Promise(resolve => {
            setTimeout(resolve, duration);
        });
    },

    async dissolve(element, duration = 500) {
        if (!element) return;
        element.style.transition = `opacity ${duration}ms ease, filter ${duration}ms ease`;
        element.style.opacity = "0";
        element.style.filter = "blur(4px)";
        await this.wait(30);
        element.style.opacity = "1";
        element.style.filter = "blur(0)";
        await this.wait(duration);
        element.style.transition = "";
        element.style.filter = "";
    },

    async fade(element, duration = 600) {
        if (!element) return;
        element.style.transition = `opacity ${duration / 2}ms ease`;
        element.style.opacity = "0";
        await this.wait(duration / 2);
        element.style.opacity = "1";
        await this.wait(duration / 2);
        element.style.transition = "";
    },

    async crossfade(element, duration = 600) {
        if (!element) return;
        element.classList.remove("transition-crossfade", "transition-glitch", "transition-digital");
        void element.offsetWidth;
        element.classList.add("transition-crossfade");
        await this.wait(duration);
        element.classList.remove("transition-crossfade");
    },

    async glitch(element, duration = 650) {
        if (!element) return;
        if (window.VNUI && typeof VNUI.glitch === "function") {
            VNUI.glitch(duration);
        }
        element.classList.remove("transition-crossfade", "transition-glitch", "transition-digital");
        void element.offsetWidth;
        element.classList.add("transition-glitch");
        await this.wait(duration);
        element.classList.remove("transition-glitch");
    },

    async digital(element, duration = 600) {
        if (!element) return;
        element.classList.remove("transition-crossfade", "transition-glitch", "transition-digital");
        void element.offsetWidth;
        element.classList.add("transition-digital");
        await this.wait(duration);
        element.classList.remove("transition-digital");
    },

    async slideBottom(element, duration = 500) {
        if (!element) return;
        element.classList.remove("anim-slide-bottom", "anim-fade-blur");
        void element.offsetWidth;
        element.classList.add("anim-slide-bottom");
        await this.wait(duration);
    },

    async fadeInBlur(element, duration = 500) {
        if (!element) return;
        element.classList.remove("anim-slide-bottom", "anim-fade-blur");
        void element.offsetWidth;
        element.classList.add("anim-fade-blur");
        await this.wait(duration);
    },

    async slideLeft(element, duration = 500) {
        if (!element) return;
        element.style.transition = "none";
        element.style.opacity = "0";
        element.style.transform = "translateX(-80px)";
        await this.wait(30);
        element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
        element.style.opacity = "1";
        element.style.transform = "translateX(0)";
        await this.wait(duration);
        element.style.transition = "";
    },

    async play(name, element) {
        if (!element) return;

        switch (name) {
            case "crossfade":
                await this.crossfade(element);
                break;

            case "glitch":
                await this.glitch(element);
                break;

            case "digital":
                await this.digital(element);
                break;

            case "slide-bottom":
            case "slide-in":
            case "slide-up":
                await this.slideBottom(element);
                break;

            case "fade-blur":
            case "blur":
                await this.fadeInBlur(element);
                break;

            case "dissolve":
                await this.dissolve(element);
                break;

            case "fade":
                await this.fade(element);
                break;

            case "slide-left":
                await this.slideLeft(element);
                break;

            default:
                if (element.classList && element.classList.contains("character-sprite")) {
                    await this.slideBottom(element);
                } else if (element.classList && element.classList.contains("scene-background")) {
                    await this.crossfade(element);
                } else {
                    element.style.opacity = "1";
                }
        }
    }

};
