// ============================================================
// CUSTOMIZE
// ============================================================

const PASSWORD = "122007";
const REQUIRED_NAME = "بسملة";

const romanticMessage = `يا بسبوسة 😍❤️❤️❤️

النهارده هنكون اتممنا شهرين هما عدو عليا اكنهم سنتين وبتمني من ربنا إنهم يتمو سنتين بجد بس سعتها تكوني في بيتي مراتي ام عيالي

احلي شهرين قضيتهم في حياتي معاكي وربنا يديمها طول العمر، والي اكدلي إنهم احلي شهرين اننا قبلنا بدل المشكله عشره وبدل الخناقه ميه، ومع كل دا كنا بنعديه أنا ونتي، ودا في حد زاتو حاجه كبيره لأننا باقين علي بعض ومحتاجين بعض، ومهما مشكله ولا خناقه قابلناها قدام هنعديها عشان بنحب بعض وباقين علي بعض

لو طلعت من الكليه الي أنا فيها دي بحاجه حلوه، فأنا طلعت بيكي بسم الله، حب عمري، حياتي، عشيقتي، اميرتي، مغرمي، جميلتي، ملكتي، سنيني وعمري ❤️❤️❤️❤️🫂

(أنا أبيع الناس ولا افرط فيكي) ❤️🫂👩‍❤️‍💋

const finalMessage = `لسه في حاجة أخيرة...

يمكن أنا مش بعرف أقول كل اللي جوايا،
بس عايزك تعرفي إن وجودك في حياتي فرق معايا بجد.

ضحكنا، هزارنا، زعلنا، خناقاتنا، وكل لحظة عدت بينا...
كلها بقت جزء من حكاية أنا مش عايزها تخلص.

ومن يوم 20/6/2026 وإنتي بقيتي واحدة من أجمل الحاجات اللي حصلتلي.

كل يوم معاكي بيبان ليا هدية.

بحبك يا بسبوسة ❤️`;

const backgroundImage = "assets/background.jpg";


// ============================================================
// START
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================
  // ELEMENTS
  // ==========================================================

  const loginScreen = document.getElementById("login-screen");
  const introScreen = document.getElementById("intro-screen");
  const mainScreen = document.getElementById("main-screen");

  const loginForm = document.getElementById("login-form");
  const nameInput = document.getElementById("name-input");
  const passwordInput = document.getElementById("password-input");
  const loginError = document.getElementById("login-error");

  const greeting = document.getElementById("greeting");

  const bgPhoto = document.getElementById("bg-photo");

  const music = document.getElementById("bg-music");
  const musicControl = document.getElementById("music-control");
  const musicToggle = document.getElementById("music-toggle");

  const iconPlay = document.getElementById("music-icon-play");
  const iconPause = document.getElementById("music-icon-pause");

  const typewriterEl = document.getElementById("typewriter-text");
  const cursorEl = document.getElementById("cursor");

  const finalSection = document.getElementById("final-section");
  const finalLine = document.getElementById("final-line");

  const memoryBtn = document.getElementById("memory-btn");
  const memoryBox = document.getElementById("memory-box");
  const memoryText = document.getElementById("memory-text");

  const oneMoreBtn = document.getElementById("one-more-btn");
  const finalOverlay = document.getElementById("final-overlay");
  const finalOverlayText = document.getElementById("final-overlay-text");
  const closeFinalBtn = document.getElementById("close-final");

  const canvas = document.getElementById("atmosphere");

  // ==========================================================
  // BACKGROUND
  // ==========================================================

  if (bgPhoto) {
    bgPhoto.style.backgroundImage = `url("${backgroundImage}")`;
  }

  // ==========================================================
  // MUSIC
  // ==========================================================

  if (music) {
    music.loop = true;
    music.volume = 0.55;
    music.preload = "auto";
  }

  function updateMusicIcon() {

    if (!music || !iconPlay || !iconPause) return;

    const playing = !music.paused;

    iconPlay.classList.toggle("hidden", playing);
    iconPause.classList.toggle("hidden", !playing);
  }

  function startMusic() {

    if (!music) return;

    try {
      music.currentTime = 14;
    } catch (error) {
      console.log("Cannot set music time yet.");
    }

    music.play()
      .then(() => {
        updateMusicIcon();
      })
      .catch(() => {
        console.log("اضغطي زر الموسيقى لتشغيلها.");
        updateMusicIcon();
      });
  }

  if (musicToggle) {

    musicToggle.addEventListener("click", () => {

      if (!music) return;

      if (music.paused) {

        music.play()
          .then(() => {
            updateMusicIcon();
          })
          .catch(() => {});

      } else {

        music.pause();
        updateMusicIcon();

      }

    });

  }

  // ==========================================================
  // ARABIC NORMALIZATION
  // ==========================================================

  function normalizeArabic(str) {

    return str
      .trim()
      .replace(/[\u064B-\u0652]/g, "")
      .replace(/[أإآ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .replace(/\s+/g, "");

  }

  // ==========================================================
  // LOGIN
  // ==========================================================

  if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

      e.preventDefault();

      const enteredName = nameInput.value.trim();
      const enteredPassword = passwordInput.value;

      const passwordOk =
        enteredPassword === PASSWORD;

      const nameOk =
        normalizeArabic(enteredName) ===
        normalizeArabic(REQUIRED_NAME);

      if (passwordOk && nameOk) {

        loginError.textContent = "";
        loginError.classList.remove("show");

        revealWebsite(enteredName);

      } else {

        loginError.textContent =
          "هممم… إنتِ متأكدة إنك بسبوسة؟ 😂❤️";

        loginError.classList.remove("show");

        void loginError.offsetWidth;

        loginError.classList.add("show");

        passwordInput.value = "";

      }

    });

  }

  // ==========================================================
  // REVEAL WEBSITE
  // ==========================================================

  function revealWebsite(name) {

    // إخفاء Login
    loginScreen.classList.add("fading-out");

    setTimeout(() => {

      loginScreen.classList.add("hidden");

      // إظهار Intro
      if (introScreen) {

        introScreen.classList.remove("hidden");

        introScreen.classList.remove("intro-hide");

      }

      // تشغيل الموسيقى
      startMusic();

      // بعد 3 ثواني نفتح الصفحة الرئيسية
      setTimeout(() => {

        if (introScreen) {

          introScreen.classList.add("intro-hide");

        }

        setTimeout(() => {

          if (introScreen) {
            introScreen.classList.add("hidden");
          }

          // إظهار الصفحة الرئيسية
          mainScreen.classList.remove("hidden");

          // إظهار زر الموسيقى
          if (musicControl) {
            musicControl.classList.remove("hidden");
          }

          // الاسم
          if (greeting && name) {
            greeting.textContent = `إلى ${name} ❤️`;
          }

          // تشغيل العداد
          startRelationshipCounter();

          // بدء الرسالة
          startTypewriter();

        }, 900);

      }, 3000);

    }, 1100);

  }

  // ==========================================================
  // RELATIONSHIP COUNTER
  // ==========================================================

  let counterStarted = false;

  function startRelationshipCounter() {

    if (counterStarted) return;

    counterStarted = true;

    const startDate =
      new Date("2026-06-20T00:00:00");

    function updateCounter() {

      const now = new Date();

      let difference =
        now.getTime() -
        startDate.getTime();

      if (difference < 0) {
        difference = 0;
      }

      const totalSeconds =
        Math.floor(difference / 1000);

      const days =
        Math.floor(totalSeconds / 86400);

      const hours =
        Math.floor(
          (totalSeconds % 86400) / 3600
        );

      const minutes =
        Math.floor(
          (totalSeconds % 3600) / 60
        );

      const seconds =
        totalSeconds % 60;

      const daysEl =
        document.getElementById("counter-days");

      const hoursEl =
        document.getElementById("counter-hours");

      const minutesEl =
        document.getElementById("counter-minutes");

      const secondsEl =
        document.getElementById("counter-seconds");

      if (daysEl) {
        daysEl.textContent = days;
      }

      if (hoursEl) {
        hoursEl.textContent = hours;
      }

      if (minutesEl) {
        minutesEl.textContent = minutes;
      }

      if (secondsEl) {
        secondsEl.textContent =
          seconds.toString().padStart(2, "0");
      }

    }

    updateCounter();

    setInterval(updateCounter, 1000);

  }

  // ==========================================================
  // TYPEWRITER
  // ==========================================================

  let typewriterStarted = false;

  function startTypewriter() {

    if (typewriterStarted) return;

    typewriterStarted = true;

    if (!typewriterEl) return;

    const paragraphs =
      romanticMessage
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(Boolean);

    let paraIndex = 0;
    let charIndex = 0;
    let currentText = "";

    const CHAR_DELAY = 42;
    const PARA_PAUSE = 700;

    function typeNextChar() {

      if (paraIndex >= paragraphs.length) {

        if (cursorEl) {
          cursorEl.classList.add("done");
        }

        showFinalSection();

        return;
      }

      const chars =
        Array.from(paragraphs[paraIndex]);

      if (charIndex < chars.length) {

        currentText += chars[charIndex];

        typewriterEl.textContent = currentText;

        charIndex++;

        setTimeout(
          typeNextChar,
          CHAR_DELAY
        );

      } else {

        paraIndex++;

        charIndex = 0;

        currentText += "\n\n";

        setTimeout(
          typeNextChar,
          PARA_PAUSE
        );

      }

    }

    typeNextChar();

  }

  // ==========================================================
  // FINAL SECTION
  // ==========================================================

  function showFinalSection() {

    if (!finalSection) return;

    setTimeout(() => {

      if (finalLine) {
        finalLine.textContent =
          "وهذه الزاوية الصغيرة ستبقى لكِ دائمًا ❤️";
      }

      finalSection.classList.remove("hidden");

    }, 500);

  }

  // ==========================================================
  // MEMORY BUTTON
  // ==========================================================

  let memoryShown = false;

  if (memoryBtn && memoryBox) {

    memoryBtn.addEventListener("click", () => {

      if (!memoryShown) {

        memoryBox.classList.remove("hidden");

        memoryShown = true;

        if (memoryText) {

          memoryText.innerHTML = `
            عارفة أكتر حاجة بحبها في حكايتنا؟ ❤️
            <br><br>

            إننا مش بس ضحكنا مع بعض...
            إحنا كمان زعلنا واتخانقنا ورجعنا لبعض.
            <br><br>

            فاكرة هزارنا وضحكنا على حاجات
            يمكن محدش غيرنا كان هيضحك عليها؟
            <br><br>

            وفاكرة لما كنا بنتخانق ونبقى متضايقين،
            وبعدها بكام ساعة نرجع نتكلم
            كأن مفيش حاجة حصلت؟
            <br><br>

            يمكن وقتها المشاكل كانت بتضايقنا،
            بس دلوقتي لما أبص عليها
            بحس إنها كانت جزء من الحكاية.
            <br><br>

            أنا مش فاكر الأيام الحلوة بس...
            أنا فاكر كل حاجة.
            <br><br>

            ضحكتك، هزارك، رخمك عليا،
            خناقاتنا، صلحنا،
            وكل لحظة خلتني أتمسك بيكي أكتر. ❤️
          `;

        }

        memoryBtn.textContent =
          "دي واحدة من ذكرياتنا ❤️";

      } else {

        if (memoryText) {

          memoryText.innerHTML = `
            وأجمل حاجة في الموضوع كله؟ ❤️
            <br><br>

            إن الحكاية دي لسه في أولها.
            <br><br>

            لسه في ضحك كتير،
            ولسه في أيام كتير،
            ولسه في ذكريات أكتر
            مستنيين نعملها سوا.
            <br><br>

            وأنا نفسي أكون موجود في كل واحدة منها. ❤️
          `;

        }

      }

    });

  }

  // ==========================================================
  // FINAL OVERLAY
  // ==========================================================

  if (oneMoreBtn && finalOverlay) {

    oneMoreBtn.addEventListener("click", () => {

      if (finalOverlayText) {
        finalOverlayText.textContent = "";
      }

      finalOverlay.classList.remove("hidden");

      burstHearts();

      createFlowerRain();

      typeFinalMessage();

    });

  }

  if (closeFinalBtn && finalOverlay) {

    closeFinalBtn.addEventListener("click", () => {

      finalOverlay.classList.add("hidden");

    });

  }

  function typeFinalMessage() {

    if (!finalOverlayText) return;

    const chars =
      Array.from(finalMessage);

    let index = 0;

    finalOverlayText.textContent = "";

    function write() {

      if (index >= chars.length) {
        return;
      }

      finalOverlayText.textContent += chars[index];

      index++;

      setTimeout(write, 45);

    }

    write();

  }

  // ==========================================================
  // ATMOSPHERE
  // ==========================================================

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  let W = 0;
  let H = 0;

  function resize() {

    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;

  }

  window.addEventListener("resize", resize);

  resize();

  const prefersReducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const PARTICLE_COUNT =
    prefersReducedMotion
      ? 0
      : window.innerWidth < 600
        ? 14
        : 26;

  const shapes = [
    "heart",
    "petal",
    "spark"
  ];

  const particles = [];

  function spawnParticle(initial = true) {

    const type =
      shapes[
        Math.floor(
          Math.random() * shapes.length
        )
      ];

    return {

      type,

      x: Math.random() * W,

      y: initial
        ? Math.random() * H
        : H + 40,

      size:
        type === "spark"
          ? 1 + Math.random() * 1.6
          : 6 + Math.random() * 9,

      speed:
        0.15 + Math.random() * 0.35,

      drift:
        (Math.random() - 0.5) * 0.4,

      sway:
        Math.random() * Math.PI * 2,

      swaySpeed:
        0.005 + Math.random() * 0.01,

      opacity:
        0.15 + Math.random() * 0.35,

      rotation:
        Math.random() * Math.PI * 2,

      rotSpeed:
        (Math.random() - 0.5) * 0.01

    };

  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(spawnParticle(true));
  }

  function drawHeart(p) {

    const s = p.size / 10;

    ctx.save();

    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.scale(s, s);

    ctx.beginPath();

    ctx.moveTo(0, 3);

    ctx.bezierCurveTo(
      -6, -4,
      -12, 2,
      0, 10
    );

    ctx.bezierCurveTo(
      12, 2,
      6, -4,
      0, 3
    );

    ctx.fillStyle =
      `rgba(230,184,190,${p.opacity})`;

    ctx.fill();

    ctx.restore();

  }

  function drawPetal(p) {

    ctx.save();

    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    ctx.beginPath();

    ctx.ellipse(
      0,
      0,
      p.size / 2,
      p.size / 3.2,
      0,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(201,166,104,${p.opacity * 0.8})`;

    ctx.fill();

    ctx.restore();

  }

  function drawSpark(p) {

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.size,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(242,232,218,${p.opacity})`;

    ctx.fill();

  }

  function animate() {

    ctx.clearRect(
      0,
      0,
      W,
      H
    );

    particles.forEach(p => {

      p.y -= p.speed;

      p.sway += p.swaySpeed;

      p.x +=
        Math.sin(p.sway) * 0.3 +
        p.drift * 0.1;

      p.rotation += p.rotSpeed;

      if (p.y < -40) {

        Object.assign(
          p,
          spawnParticle(false)
        );

      }

      if (p.type === "heart") {

        drawHeart(p);

      } else if (p.type === "petal") {

        drawPetal(p);

      } else {

        drawSpark(p);

      }

    });

    if (!prefersReducedMotion) {
      requestAnimationFrame(animate);
    }

  }

  animate();

  // ==========================================================
  // HEART BURST
  // ==========================================================

  function burstHearts() {

    if (prefersReducedMotion) return;

    for (let i = 0; i < 18; i++) {

      const p = spawnParticle(true);

      p.type = "heart";

      p.x =
        W / 2 +
        (Math.random() - 0.5) * 200;

      p.y = H * 0.7;

      p.speed =
        0.6 +
        Math.random() * 0.8;

      p.size =
        8 +
        Math.random() * 10;

      p.opacity =
        0.5 +
        Math.random() * 0.4;

      particles.push(p);

    }

  }

  // ==========================================================
  // FLOWER RAIN
  // ==========================================================

  function createFlowerRain() {

    if (prefersReducedMotion) return;

    const container =
      document.createElement("div");

    container.className =
      "flower-rain";

    document.body.appendChild(container);

    for (let i = 0; i < 35; i++) {

      const petal =
        document.createElement("span");

      petal.className =
        "falling-petal";

      petal.textContent =
        Math.random() > 0.5
          ? "🌹"
          : "🌸";

      petal.style.left =
        Math.random() * 100 + "%";

      petal.style.animationDuration =
        4 + Math.random() * 5 + "s";

      petal.style.animationDelay =
        Math.random() * 2 + "s";

      petal.style.fontSize =
        12 + Math.random() * 15 + "px";

      container.appendChild(petal);

    }

    setTimeout(() => {
      container.remove();
    }, 10000);

  }

});