/* ==============================================================
   Girnar Darshan — GSAP & ScrollTrigger Animations
   Scroll-driven 3D depth, camera pull-back, layered parallax,
   and dynamic section reveals.
================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger library not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.innerWidth <= 768;

  /* ── 0. INTERACTIVE 3D MOUSE & TOUCH TILT ENGINE ────────────── */
  function initInteractive3DTilt() {
    const tiltElements = document.querySelectorAll("[data-tilt]");

    tiltElements.forEach((el) => {
      let reqId = null;
      let mouseX = 0, mouseY = 0;
      let currentRotateX = 0, currentRotateY = 0;
      let isHovered = false;

      const maxRotate = el.dataset.tilt === "hero" ? 6 : 10;

      function onMouseMove(e) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mouseX = (x / rect.width - 0.5) * 2;
        mouseY = (y / rect.height - 0.5) * 2;

        el.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
        el.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
      }

      function renderTilt() {
        const targetRotateX = -mouseY * maxRotate;
        const targetRotateY = mouseX * maxRotate;

        currentRotateX += (targetRotateX - currentRotateX) * 0.12;
        currentRotateY += (targetRotateY - currentRotateY) * 0.12;

        if (isHovered) {
          if (el.id === "stage") {
            gsap.set("#ganpati", {
              rotationX: currentRotateX * 0.6,
              rotationY: currentRotateY * 0.8,
              transformPerspective: 1000
            });
            gsap.set(".layer--mountain-far", { x: currentRotateY * -6, y: currentRotateX * -4 });
            gsap.set(".layer--mountain-mid", { x: currentRotateY * -10, y: currentRotateX * -7 });
          } else {
            el.style.transform = `perspective(1000px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateZ(12px)`;
          }
          reqId = requestAnimationFrame(renderTilt);
        } else {
          currentRotateX += (0 - currentRotateX) * 0.1;
          currentRotateY += (0 - currentRotateY) * 0.1;

          if (Math.abs(currentRotateX) > 0.05 || Math.abs(currentRotateY) > 0.05) {
            if (el.id === "stage") {
              gsap.set("#ganpati", { rotationX: currentRotateX, rotationY: currentRotateY });
            } else {
              el.style.transform = `perspective(1000px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateZ(0px)`;
            }
            reqId = requestAnimationFrame(renderTilt);
          } else {
            if (el.id !== "stage") el.style.transform = "";
          }
        }
      }

      el.addEventListener("mouseenter", (e) => {
        isHovered = true;
        onMouseMove(e);
        cancelAnimationFrame(reqId);
        reqId = requestAnimationFrame(renderTilt);
      });

      el.addEventListener("mousemove", onMouseMove);

      el.addEventListener("mouseleave", () => {
        isHovered = false;
        mouseX = 0;
        mouseY = 0;
      });
    });
  }

  initInteractive3DTilt();

  /* ── 1. PINNED HERO STAGE & CAMERA PULL-BACK TIMELINE ────────── */
  const stage = document.getElementById("hero");
  const ganpati = document.getElementById("ganpati");
  const heroCopy = document.getElementById("heroCopy");
  const scrollCue = document.getElementById("scrollCue");

  const mtnFar = document.querySelector(".layer--mountain-far");
  const mtnMid = document.querySelector(".layer--mountain-mid");
  const temple = document.querySelector(".layer--temple");
  const sky = document.querySelector(".layer--sky");
  const fog = document.querySelector(".layer--fog");

  if (stage && ganpati) {
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: "top top",
        end: isMobile ? "+=60%" : "+=100%",
        scrub: 0.5,
        pin: !isMobile,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (self.progress < 0.7) {
            updateRailNav("hero");
          } else {
            updateRailNav("girnar");
          }
        }
      }
    });

    // Step A: Fade copy & scroll cue quickly
    heroTl.to(heroCopy, {
      opacity: 0,
      y: -30,
      ease: "power2.inOut",
      duration: 0.3
    }, 0);

    heroTl.to(scrollCue, {
      opacity: 0,
      y: 15,
      duration: 0.2
    }, 0);

    // Step B: Camera pulls back — Ganpati recedes into 3D space
    heroTl.to(ganpati, {
      scale: isMobile ? 0.75 : 0.65,
      y: isMobile ? "4%" : "2%",
      opacity: 0.7,
      ease: "power1.inOut",
      duration: 0.8
    }, 0.1);
  }

  /* ── 3. GIRNAR SECTION SCROLL TRIGGER ────────────────────────── */
  const girnarSec = document.getElementById("girnar");
  if (girnarSec) {
    ScrollTrigger.create({
      trigger: girnarSec,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => {
        updateRailNav("girnar");
      },
      onLeave: () => {
        // section leave
      },
      onEnterBack: () => {
        updateRailNav("girnar");
      }
    });
  }

  /* ── 3.5. VIDEO SECTION SCROLL TRIGGER ────────────────────────── */
  const videoSec = document.getElementById("video");
  if (videoSec) {
    ScrollTrigger.create({
      trigger: videoSec,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => {
        updateRailNav("video");
      },
      onEnterBack: () => {
        updateRailNav("video");
      }
    });
  }

  /* ── 4. TEAM SECTION SCROLL TRIGGER ──────────────────────────── */
  const teamSec = document.getElementById("team");
  if (teamSec) {
    ScrollTrigger.create({
      trigger: teamSec,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => {
        updateRailNav("team");
      },
      onEnterBack: () => {
        updateRailNav("team");
      }
    });
  }

  /* ── 4.5. GALLERY SECTION SCROLL TRIGGER ──────────────────────── */
  const gallerySec = document.getElementById("gallery");
  if (gallerySec) {
    ScrollTrigger.create({
      trigger: gallerySec,
      start: "top 60%",
      end: "bottom 40%",
      onEnter: () => {
        updateRailNav("gallery");
      },
      onEnterBack: () => {
        updateRailNav("gallery");
      }
    });
  }

  /* ── 5. FINAL DARSHAN REANIMATION ────────────────────────────── */
  const finalSec = document.getElementById("final");
  const finalCopy = document.getElementById("finalCopy");
  const finalGanpati = document.querySelector(".final-ganpati");

  if (finalSec) {
    const finalTl = gsap.timeline({
      scrollTrigger: {
        trigger: finalSec,
        start: "top 75%",
        onEnter: () => {
          updateRailNav("final");
        },
        onLeaveBack: () => {
          // section leave
        }
      }
    });

    if (finalGanpati) {
      finalTl.fromTo(finalGanpati,
        { opacity: 0, scale: 0.7, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out(1.2)" }
      );
    }

    if (finalCopy) {
      finalTl.fromTo(finalCopy,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
        "-=0.6"
      );
    }
  }

  /* ── Helper: Update Side Rail Navigation Active State ───────── */
  function updateRailNav(sectionId) {
    const items = document.querySelectorAll(".rail li");
    items.forEach((item) => {
      if (item.dataset.target === sectionId) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });
  }
});
