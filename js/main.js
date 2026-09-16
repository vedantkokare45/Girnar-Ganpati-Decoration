/* ==============================================================
   Girnar Darshan — siteContent, 3D depth particles & section tracking
================================================================= */

const siteContent = {
  hero: {
    mantra: "ॐ गं गणपतये नमः",
    title: "गणपती बाप्पा मोरया",
    sub: "गिरनार पर्वत व मंदिर सजावट",
    image: "./assets/images/motion_photo_8126643403072949802.jpg"
  },

  girnar: {
    title: "गिरनारची पावन भूमी",
    bgImage: "./assets/images/girnar-mountain-3d.jpg",
    showcaseImage: "./assets/images/girnar-mountain-3d.jpg",
    mountainImage: "./assets/images/girnar-mountain.jpg",
    peaks: [
      {
        id: 1,
        name: "१. अंबा माता मंदिर शिखर",
        shortName: "अंबा माता",
        steps: "५,००० पायऱ्या",
        stepCount: 5000,
        height: "२,३०० फूट",
        deity: "अंबा माता शक्तिपीठ",
        desc: "गिरनार चढणाचा पहिला प्रमुख पावन टप्पा. येथे जगज्जननी अंबा मातेचे प्राचीन शक्तिपीठ वसलेले असून नवविवाहित जोडपे व भाविक आशीर्वादासाठी येतात.",
        badge: "शक्तिपीठ दर्शन"
      },
      {
        id: 2,
        name: "२. गुरु गोरखनाथ शिखर",
        shortName: "गोरखनाथ शिखर",
        steps: "७,००० पायऱ्या",
        stepCount: 7000,
        height: "३,६६६ फूट (सर्वोच्च)",
        deity: "सिद्ध गुरु गोरखनाथ",
        desc: "गुजरातमधील सर्वोच्च नैसर्गिक शिखर (३,६६६ फूट). नाथ संप्रदायाचे मूळ पीठ आणि सिद्ध साधूंच्या अखंड तपश्चर्येचे पवित्र स्पंदन स्थान.",
        badge: "सर्वोच्च उंच शिखर"
      },
      {
        id: 3,
        name: "३. नेमिनाथ जैन मंदिर",
        shortName: "नेमिनाथ मंदिर",
        steps: "८,२०० पायऱ्या",
        stepCount: 8200,
        height: "३,१०० फूट",
        deity: "२२ वे तीर्थंकर नेमिनाथ",
        desc: "१२ व्या शतकातील अलौकिक संगमरवरी वास्तुकला. भगवान नेमिनाथ यांनी येथे मोक्ष प्राप्त केला होता. अखंड शांतता आणि ध्यानधारणेसाठी प्रसिद्ध.",
        badge: "संगमरवरी स्थापत्य"
      },
      {
        id: 4,
        name: "४. रामचन्द्र व अघोर शिखर",
        shortName: "रामचन्द्र शिखर",
        steps: "८,८०० पायऱ्या",
        stepCount: 8800,
        height: "३,३०० फूट",
        deity: "प्रभू रामचंद्र स्थान",
        desc: "अथांग दऱ्या आणि ढगांनी व्यापलेली शिखरे. अवधूत संप्रदायाच्या प्राचीन गुहा आणि निसर्गरम्य विहंगम दृश्य अनुभवता येते.",
        badge: "नैसर्गिक सौंदर्य"
      },
      {
        id: 5,
        name: "५. श्री गुरु दत्तात्रेय पादुका",
        shortName: "गुरु दत्तात्रेय",
        steps: "९,९९९ पायऱ्या",
        stepCount: 9999,
        height: "३,६०० फूट",
        deity: "साक्षात गुरु दत्तात्रेय",
        desc: "गिरनारचे अंतिम व परमपावन शिखर. १०,००० वी पायरी गाठून मिळणारे श्री दत्तात्रेयांच्या पवित्र पादुकांचे दर्शन भक्तांचे जीवन कृतार्थ करते.",
        badge: "अंतिम महादर्शन"
      }
    ],
    milestones: [
      { steps: 0, title: "गिरनार पायथ्याशी आगमन", mantra: "ॐ गं गणपतये नमः", note: "भव्य गिरनार चढणाचा संकल्प." },
      { steps: 2500, title: "प्रथम टप्पा — मालकौश दरी", mantra: "जय गिरनारी!", note: "२,५०० पायऱ्या पूर्ण. चहुबाजूला दाट निसर्ग." },
      { steps: 5000, title: "अंबा माता दर्शन", mantra: "जय अंबे माता!", note: "५,००० वी पायरी. शक्तिपीठाचा दिव्य आशीर्वाद." },
      { steps: 7000, title: "गोरखनाथ शिखर (सर्वोच्च)", mantra: "अलख निरंजन!", note: "३,६६६ फूट उंचीवरील सर्वोच्च शिखरावर आगमन." },
      { steps: 8500, title: "कमंडलू कुंड व धुनी स्थान", mantra: "ॐ नमो नारायण!", note: "सिद्ध साधूंची अखंड धुनी व कमंडलू कुंड." },
      { steps: 9999, title: "गुरु दत्तात्रेय पादुका शिखर", mantra: "दिगंबरा दिगंबरा श्रीपाद वल्लभ दिगंबरा!", note: "१०,००० पायऱ्या पूर्ण! परमपावन गुरुदर्शन प्राप्त." }
    ]
  },

  team: [
    {
      index: "01",
      name: "प्रफुल पाषाणकर",
      role: "Founder & Project Visionary",
      note: "गिरनार देखाव्याचे मुख्य संकल्पनाकार, कल्पक संकल्पनेचे मूळ जनक आणि संपूर्ण उत्सवाचे मुख्य आयोजक.",
      image: "./assets/images/Praful-Pashankar.webp"
    },
    {
      index: "02",
      name: "विराज जाधव",
      role: "Creative Director & Art Lead",
      note: "देखाव्याचे मुख्य कलात्मक दिग्दर्शक, वास्तुकलेचे सूक्ष्म नक्षीकाम आणि देखावा रचनेचे मुख्य मार्गदर्शन.",
      image: "./assets/images/viraj-jadhav.webp"
    },
    {
      index: "03",
      name: "ऋषी आंद्रे",
      role: "Lead Set Architect & Concept Realization",
      note: "संकल्पनेला प्रत्यक्ष जिवंत रूप देणारे मुख्य कलाकार, भव्य गिरनार पर्वताची उभारणी आणि सृजनशील मंच रचना.",
      image: "./assets/images/Andre.jpg"
    },
    {
      index: "04",
      name: "वेदांत कोकरे",
      role: "Lead Web Developer & Creative Assistant",
      note: "गिरनार दर्शन वेबसाईटचे मुख्य निर्माते, डिजिटल सादरीकरण व देखावा उभारणीतील सर्वांगीण सहाय्यक.",
      image: "./assets/images/Vedant.webp"
    },
    {
      index: "05",
      name: "वैष्णवी जाधव",
      role: "Color Aesthetics & Creative Dept Head",
      note: "नयनरम्य रंगसंगतीचे संयोजन, कलात्मक रंगकाम आणि मंदिराच्या मुख्य सुशोभीकरणाचे नेतृत्व.",
      image: "./assets/images/vaishnavi.jpeg"
    },
    {
      index: "06",
      name: "आकांक्षा धुमाळ",
      role: "Temple Development & Structure Stylist",
      note: "मंदिर वास्तुकला विकास, सूक्ष्म नक्षीकाम देखावा आणि रचनात्मक सौंदर्याचे नियोजन.",
      image: "./assets/images/akansha.jpeg"
    },
    {
      index: "07",
      name: "अपर्णा धुमाळ",
      role: "Floral Design & Decor Executive",
      note: "उत्कृष्ट पुष्पसजावट, आकर्षक आभूषण मांडणी आणि मंदिराच्या सजावटीचे अंतिम फिनिशिंग.",
      image: "./assets/images/aparna.jpeg"
    },
    {
      index: "08",
      name: "भूमिका गावडे",
      role: "Temple Development & Structure Stylist",
      note: "मंदिर वास्तुकला विकास, सूक्ष्म नक्षीकाम देखावा आणि रचनात्मक सौंदर्याचे नियोजन.",
      image: "./assets/images/IMG-20260915-WA0039.jpg"
    },
    {
      index: "09",
      name: "शुभम जाधव",
      role: "Logistics Manager & Material Supply Lead",
      note: "देखाव्यासाठी लागणाऱ्या कच्च्या साहित्याची खरेदी, पुरवठा आणि वाहतूक व्यवस्थेचे मुख्य नियंत्रण.",
      image: "./assets/images/Shubham.jpeg"
    },
    {
      index: "10",
      name: "सत्यम जाधव",
      role: "Resource Supply Coordinator",
      note: "साहित्याची प्रत्यक्ष जागेवर मांडणी, देखावा उभारणीतील लॉजिस्टिक्स आणि संचलन नियोजन.",
      image: "./assets/images/Satyam.webp"
    },
    {
      index: "11",
      name: "अथर्व दुर्गावळे",
      role: "Event Execution & Support Lead",
      note: "उत्सव व्यवस्थापन, देखावा उभारणी आणि सर्व कार्यात मोलाचे सहकार्य.",
      image: "./assets/images/atharv.png"
    },
    {
      index: "12",
      name: "विराज खातू",
      role: "Event Execution & Support Lead",
      note: "उत्सव व्यवस्थापन, देखावा उभारणी आणि सर्व कार्यात मोलाचे सहकार्य.",
      image: "./assets/images/khatu.jpeg"
    },
    {
      index: "13",
      name: "स्वस्तिक सोळसे",
      role: "Event Execution & Support Lead",
      note: "उत्सव व्यवस्थापन, देखावा उभारणी आणि सर्व कार्यात मोलाचे सहकार्य.",
      image: "./assets/images/IMG-20260914-WA0008.jpg"
    },
    {
      index: "14",
      name: "यश धुमाळ",
      role: "Event Execution & Support Lead",
      note: "उत्सव व्यवस्थापन, देखावा उभारणी आणि सर्व कार्यात मोलाचे सहकार्य.",
      image: "./assets/images/yash.jpeg"
    },
    {
      index: "15",
      name: "शिवार्थ पाषाणकर",
      role: "",
      note: "",
      image: "./assets/images/IMG-20260915-WA0011.jpg"
    },
    {
      index: "16",
      name: "अन्वी पाषाणकर",
      role: "",
      note: "",
      image: "./assets/images/IMG-20260915-WA0004.jpg"
    },
    {
      index: "17",
      name: "प्रशांत पाषाणकर",
      role: "Chief Sponsor & Executive Patron",
      note: "गिरनार गणेशोत्सवाचे मुख्य प्रायोजक, उत्सवासाठी अमूल्य आर्थिक योगदान, मार्गदर्शन आणि सततचा पाठिंबा.",
      image: "./assets/images/Prashant.png"
    }
  ],

  gallery: [
    {
      id: 1,
      type: "video",
      category: "video",
      videoSrc: "IMG_0108.MP4"
    },
    {
      id: 2,
      type: "video",
      category: "video",
      videoSrc: "VID-20260915-WA0000.mp4"
    },
  //   {
  //     id: 3,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0049.mp4"
  //   },
  //   {
  //     id: 4,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0050.mp4"
  //   },
  //   {
  //     id: 5,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0051.mp4"
  //   },
  //   {
  //     id: 6,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0052.mp4"
  //   },
  //   {
  //     id: 7,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0053.mp4"
  //   },
  //   {
  //     id: 8,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0054.mp4"
  //   },
  //   {
  //     id: 9,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0055.mp4"
  //   },
  //   {
  //     id: 10,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0056.mp4"
  //   },
  //   {
  //     id: 11,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0057.mp4"
  //   },
  //   {
  //     id: 112,
  //     type: "video",
  //     category: "video",
  //     videoSrc: "./assets/videos/VID-20260915-WA0058.mp4"
  //   }
  ]
};

/* Global cursor tracker for 3D depth calculation */
window.mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2, targetX: 0, targetY: 0 };
window.addEventListener("mousemove", (e) => {
  window.mousePos.x = e.clientX;
  window.mousePos.y = e.clientY;
  window.mousePos.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
  window.mousePos.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
}, { passive: true });

/* ── 3D Depth Particle System ────────────────────────────────── */
function initDustParticles() {
  const canvas = document.getElementById("dust");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const focalLength = 350;
  const count = window.innerWidth < 600 ? 35 : 85;

  const particles = Array.from({ length: count }, () => ({
    x: (Math.random() - 0.5) * width * 1.5,
    y: (Math.random() - 0.5) * height * 1.5,
    z: Math.random() * 500 + 20,
    baseRadius: Math.random() * 2.2 + 0.8,
    alpha: Math.random() * 0.7 + 0.2,
    vx: (Math.random() - 0.5) * 0.5,
    vy: -Math.random() * 0.8 - 0.2,
    vz: (Math.random() - 0.5) * 0.3,
    pulseSpeed: Math.random() * 0.02 + 0.005,
    pulse: Math.random() * Math.PI
  }));

  function onResize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", onResize, { passive: true });

  function render() {
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const parallaxX = window.mousePos.targetX * 35;
    const parallaxY = window.mousePos.targetY * 35;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;
      p.pulse += p.pulseSpeed;

      if (p.y < -height / 2) {
        p.y = height / 2;
        p.x = (Math.random() - 0.5) * width * 1.5;
        p.z = Math.random() * 500 + 20;
      }
      if (p.z <= 0) p.z = 500;
      if (p.z > 550) p.z = 20;

      // 3D Perspective calculation
      const scale = focalLength / (focalLength + p.z);
      const projX = centerX + (p.x + parallaxX * (1 - scale)) * scale;
      const projY = centerY + (p.y + parallaxY * (1 - scale)) * scale;
      const radius = Math.max(0.4, p.baseRadius * scale * 1.5);
      const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse)) * Math.min(1, scale * 1.3);

      if (projX >= 0 && projX <= width && projY >= 0 && projY <= height) {
        ctx.beginPath();
        ctx.arc(projX, projY, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 182, 92, ${currentAlpha})`;
        ctx.shadowBlur = 10 * scale;
        ctx.shadowColor = "rgba(230, 182, 92, 0.9)";
        ctx.fill();
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ── Render Hero ─────────────────────────────────────────────── */
function renderHero() {
  const mantraEl = document.querySelector(".hero-copy__mantra");
  const titleEl = document.querySelector(".hero-copy__title");
  const subEl = document.querySelector(".hero-copy__sub");

  if (mantraEl) mantraEl.textContent = siteContent.hero.mantra;
  if (titleEl) titleEl.textContent = siteContent.hero.title;
  if (subEl) subEl.textContent = siteContent.hero.sub;

  const img = document.querySelector(".ganpati__img");
  if (img) {
    img.style.backgroundImage = `url('${siteContent.hero.image}')`;
  }
  const finalImg = document.querySelector(".ganpati__img--final");
  if (finalImg) {
    finalImg.style.backgroundImage = `url('${siteContent.hero.image}')`;
  }

  // Render actual mountain photos into 3D parallax layers
  const mtnFar = document.querySelector(".layer--mountain-far");
  if (mtnFar) {
    mtnFar.style.backgroundImage = `radial-gradient(ellipse at bottom, rgba(9,7,6,0.2) 0%, rgba(9,7,6,0.85) 100%), url('${siteContent.girnar.showcaseImage}')`;
  }

  const mtnMid = document.querySelector(".layer--mountain-mid");
  if (mtnMid) {
    mtnMid.style.backgroundImage = `radial-gradient(ellipse at bottom, rgba(36,16,17,0.3) 0%, rgba(12,6,5,0.9) 100%), url('${siteContent.girnar.mountainImage}')`;
  }

  const temple = document.querySelector(".layer--temple");
  if (temple) {
    temple.style.backgroundImage = `radial-gradient(ellipse at bottom, rgba(58,13,18,0.4) 0%, rgba(9,7,6,0.95) 100%), url('${siteContent.girnar.showcaseImage}')`;
  }
}

function renderGirnar() {
  // Audio narration removed
}

/* ── Section 2 Function 1: Time of Day Atmosphere Switcher ─── */
function initTimeSwitcher() {
  const section = document.getElementById("girnar");
  const buttons = document.querySelectorAll(".time-pill");
  if (!section || !buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.time;
      buttons.forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");

      section.classList.remove("theme-dawn", "theme-day", "theme-dusk", "theme-night");
      section.classList.add(`theme-${mode}`);
    });
  });
}

/* ── Section 2 Function 2: Interactive 5 Sacred Peaks Explorer ── */
function initPeakExplorer() {
  const tabsContainer = document.getElementById("peakTabs");
  const cardContainer = document.getElementById("peakCardDetail");
  if (!tabsContainer || !cardContainer) return;

  const peaks = siteContent.girnar.peaks;
  let activePeakId = 1;

  function renderTabs() {
    tabsContainer.innerHTML = peaks.map(p => `
      <button class="peak-tab ${p.id === activePeakId ? 'is-active' : ''}" data-peak="${p.id}" aria-label="${p.name}">
        <span class="peak-tab__num">${p.id}</span>
        <span class="peak-tab__name">${p.shortName}</span>
      </button>
    `).join("");

    tabsContainer.querySelectorAll(".peak-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        const id = parseInt(tab.dataset.peak, 10);
        if (id !== activePeakId) {
          activePeakId = id;
          renderTabs();
          renderCard();
        }
      });
    });
  }

  function renderCard() {
    const peak = peaks.find(p => p.id === activePeakId) || peaks[0];
    cardContainer.innerHTML = `
      <div class="peak-card" data-reveal-active>
        <div class="peak-card__header">
          <span class="peak-card__badge">${peak.badge}</span>
          <h3 class="peak-card__title">${peak.name}</h3>
        </div>
        <p class="peak-card__desc">${peak.desc}</p>
        <div class="peak-card__meta">
          <div class="peak-meta-item">
            <span class="peak-meta-item__lbl">पवित्र स्थान / दैवत</span>
            <span class="peak-meta-item__val">${peak.deity}</span>
          </div>
          <div class="peak-meta-item">
            <span class="peak-meta-item__lbl">पायऱ्यांची संख्या</span>
            <span class="peak-meta-item__val">${peak.steps}</span>
          </div>
          <div class="peak-meta-item">
            <span class="peak-meta-item__lbl">उंची (समुद्रसपाटीपासून)</span>
            <span class="peak-meta-item__val">${peak.height}</span>
          </div>
        </div>
      </div>
    `;
  }

  renderTabs();
  renderCard();
}

/* ── Section 2 Function 3: Virtual Step Climber & Pilgrimage Simulator ── */
function initStepClimber() {
  const slider = document.getElementById("stepSlider");
  const countEl = document.getElementById("stepCountVal");
  const elevationEl = document.getElementById("elevationVal");
  const barEl = document.getElementById("stepProgressBar");
  const milestoneTitle = document.getElementById("milestoneTitle");
  const milestoneMantra = document.getElementById("milestoneMantra");
  const milestoneNote = document.getElementById("milestoneNote");
  const quickBtns = document.querySelectorAll("[data-add-steps]");

  if (!slider || !countEl) return;

  function updateClimber(steps) {
    steps = Math.min(9999, Math.max(0, parseInt(steps, 10) || 0));
    slider.value = steps;

    countEl.textContent = steps.toLocaleString("mr-IN");

    // Altitude math: 0 to 3600 feet proportionally
    const feet = Math.round((steps / 9999) * 3600);
    if (elevationEl) elevationEl.textContent = `${feet.toLocaleString("mr-IN")} फूट`;

    const pct = ((steps / 9999) * 100).toFixed(1);
    if (barEl) barEl.style.width = `${pct}%`;

    // Find milestone
    const milestones = siteContent.girnar.milestones;
    let currentMilestone = milestones[0];
    for (let i = milestones.length - 1; i >= 0; i--) {
      if (steps >= milestones[i].steps) {
        currentMilestone = milestones[i];
        break;
      }
    }

    if (milestoneTitle) milestoneTitle.textContent = currentMilestone.title;
    if (milestoneMantra) milestoneMantra.textContent = currentMilestone.mantra;
    if (milestoneNote) milestoneNote.textContent = currentMilestone.note;
  }

  slider.addEventListener("input", (e) => {
    updateClimber(e.target.value);
  });

  quickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const add = parseInt(btn.dataset.addSteps, 10);
      let current = parseInt(slider.value, 10) || 0;
      if (add === 9999) {
        current = 9999;
      } else {
        current = Math.min(9999, current + add);
      }
      updateClimber(current);
    });
  });

  // Initial calculation
  updateClimber(slider.value || 0);
}

function renderTeam() {
  const wrap = document.getElementById("teamList");
  if (!wrap) return;

  wrap.innerHTML = siteContent.team
    .map(
      (m) => `
    <article class="member" data-reveal>
      <figure class="member__photo">
        <img
          src="${m.image}"
          alt="${m.name} — ${m.role}"
          loading="lazy"
          decoding="async"
        />
        <figcaption class="member__index">${m.index}</figcaption>
      </figure>

      <div class="member__body">
        <span class="member__rule" aria-hidden="true"></span>
        <h3 class="member__name">${m.name}</h3>
        <p class="member__role">${m.role}</p>
        <p class="member__note">${m.note}</p>
      </div>
    </article>
  `
    )
    .join("");
}

/* ── Gallery & Lightbox Controller ──────────────────────────── */
function initGallery() {
  const grid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  if (!grid) return;

  const items = siteContent.gallery || [];

  // Update counts
  const countAll = document.getElementById("count-all");
  const countPhoto = document.getElementById("count-photo");
  const countVideo = document.getElementById("count-video");

  if (countAll) countAll.textContent = items.length;
  if (countPhoto) countPhoto.textContent = items.filter(i => i.category === "photo").length;
  if (countVideo) countVideo.textContent = items.filter(i => i.category === "video").length;

  let activeFilter = "all";
  let activeIndex = 0;
  let filteredItems = [...items];

  function renderCards() {
    filteredItems = activeFilter === "all"
      ? items
      : items.filter(i => i.category === activeFilter);

    grid.innerHTML = filteredItems.map((item, idx) => {
      const isVideo = item.type === "video";
      let mediaHtml = "";

      if (isVideo && item.videoSrc) {
        mediaHtml = `<video src="${item.videoSrc}#t=0.5" preload="metadata" muted playsinline class="gallery-card__video-thumb"></video>`;
      } else {
        const imgSrc = item.thumb || item.src;
        mediaHtml = `<img src="${imgSrc}" alt="गॅलरी देखावा" loading="lazy" decoding="async" />`;
      }

      return `
        <article class="gallery-card" data-index="${idx}" data-reveal>
          <div class="gallery-card__media">
            ${mediaHtml}
            ${isVideo ? `
              <div class="gallery-card__play">
                <div class="play-btn-ring">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            ` : ''}
          </div>
        </article>
      `;
    }).join("");

    // Attach click listeners to cards
    grid.querySelectorAll(".gallery-card").forEach(card => {
      card.addEventListener("click", () => {
        const idx = parseInt(card.dataset.index, 10);
        openLightbox(idx);
      });
    });
  }

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      activeFilter = btn.dataset.filter;
      renderCards();
    });
  });

  // Lightbox Modal Handling
  const modal = document.getElementById("lightboxModal");
  const backdrop = document.getElementById("lightboxBackdrop");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  const mediaContainer = document.getElementById("lightboxMedia");

  function openLightbox(idx) {
    if (idx < 0 || idx >= filteredItems.length) return;
    activeIndex = idx;
    const item = filteredItems[activeIndex];

    if (item.type === "video") {
      if (item.videoSrc) {
        mediaContainer.innerHTML = `
          <video controls autoplay class="lightbox-video-player">
            <source src="${item.videoSrc}" type="video/mp4">
            तुमच्या ब्राऊझरमध्ये व्हिडिओ चालत नाही.
          </video>
        `;
      } else if (item.youtubeId) {
        mediaContainer.innerHTML = `
          <div class="lightbox-iframe-wrap">
            <iframe src="https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0" 
                    title="मेकिंग व्हिडिओ" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
          </div>
        `;
      }
    } else {
      mediaContainer.innerHTML = `
        <img src="${item.src}" alt="गॅलरी देखावा" />
      `;
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (mediaContainer) mediaContainer.innerHTML = "";
  }

  function showNext() {
    const nextIdx = (activeIndex + 1) % filteredItems.length;
    openLightbox(nextIdx);
  }

  function showPrev() {
    const prevIdx = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
    openLightbox(prevIdx);
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (backdrop) backdrop.addEventListener("click", closeLightbox);
  if (nextBtn) nextBtn.addEventListener("click", showNext);
  if (prevBtn) prevBtn.addEventListener("click", showPrev);

  window.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });

  renderCards();
}

/* ── Loader & Smooth Scroll ──────────────────────────────────── */
function setupLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("is-done");
      document.body.classList.remove("is-loading");
    }, 600);
  });

  // Backup fallback in case load event fired early
  setTimeout(() => {
    if (document.body.classList.contains("is-loading")) {
      loader.classList.add("is-done");
      document.body.classList.remove("is-loading");
    }
  }, 2200);
}

function setupRailNav() {
  const railItems = document.querySelectorAll(".rail li");
  railItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ── Boot ──────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderGirnar();
  renderTeam();
  initGallery();
  initTimeSwitcher();
  initPeakExplorer();
  initStepClimber();
  initDustParticles();
  setupLoader();
  setupRailNav();
});

window.siteContent = siteContent;

