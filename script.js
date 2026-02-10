// Elements
const setupContainer = document.getElementById("setupContainer");
const linkContainer = document.getElementById("linkContainer");
const questionContainer = document.getElementById("questionContainer");
const successContainer = document.getElementById("successContainer");
const setupForm = document.getElementById("setupForm");
const skipBtn = document.getElementById("skipBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const previewBtn = document.getElementById("previewBtn");
const resetBtn = document.getElementById("resetBtn");
const shareableLink = document.getElementById("shareableLink");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Notification settings (will be filled from setup or URL params)
let notificationConfig = {
  email: "",
};

// Track mouse position
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Check URL parameters on load
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  // Check if config is in URL (someone opened a shared link)
  if (urlParams.has("e")) {
    notificationConfig.email = urlParams.get("e") || "";

    // Show card directly (recipient view)
    showValentineCard();
  } else {
    // No URL params - this is the creator opening the page
    // Check if they already created a card before
    const savedConfig = localStorage.getItem("valentineConfig");
    if (savedConfig) {
      notificationConfig = JSON.parse(savedConfig);
      // Show the link page so they can copy their link again
      const shareUrl = generateShareableLink();
      showLinkPage(shareUrl);
    }
    // Otherwise, setup form is already showing (default)
  }
});

// Handle setup form submission
setupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  notificationConfig.email = document.getElementById("emailInput").value.trim();

  // Save to localStorage
  localStorage.setItem("valentineConfig", JSON.stringify(notificationConfig));

  // Generate shareable URL and show link page
  const shareUrl = generateShareableLink();
  showLinkPage(shareUrl);
});

// Handle skip button
skipBtn.addEventListener("click", () => {
  showValentineCard();
});

function showLinkPage(url) {
  setupContainer.classList.add("hidden");
  linkContainer.classList.remove("hidden");
  shareableLink.value = url;
}

function showValentineCard() {
  setupContainer.classList.add("hidden");
  linkContainer.classList.add("hidden");
  questionContainer.classList.remove("hidden");
}

function generateShareableLink() {
  const baseUrl = window.location.origin + window.location.pathname;
  const params = new URLSearchParams();

  if (notificationConfig.email) params.set("e", notificationConfig.email);

  const shareUrl = params.toString()
    ? `${baseUrl}?${params.toString()}`
    : baseUrl;

  return shareUrl;
}

// Copy link functionality
if (copyLinkBtn) {
  copyLinkBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(shareableLink.value);
      const icon = document.getElementById("copyIcon");
      const originalText = copyLinkBtn.innerHTML;

      copyLinkBtn.innerHTML = "<span>✅</span> Copied!";
      copyLinkBtn.classList.add("copied");

      setTimeout(() => {
        copyLinkBtn.innerHTML = originalText;
        copyLinkBtn.classList.remove("copied");
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      shareableLink.select();
      document.execCommand("copy");
      alert("Link copied to clipboard!");
    }
  });
}

// Preview button
if (previewBtn) {
  previewBtn.addEventListener("click", () => {
    showValentineCard();
  });
}

// Reset button
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    if (
      confirm(
        "Are you sure you want to start over? This will clear your settings.",
      )
    ) {
      localStorage.removeItem("valentineConfig");
      location.reload();
    }
  });
}

// Handle Yes button click
yesBtn.addEventListener("click", () => {
  // Hide question container
  questionContainer.classList.add("hidden");
  // Show success container
  successContainer.classList.remove("hidden");

  // Add confetti effect
  createConfetti();

  // Send notification
  sendNotification();
});

// Make No button run away from cursor
noBtn.addEventListener("mouseenter", () => {
  moveNoButton();
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// For touch devices
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

function moveNoButton() {
  const btnRect = noBtn.getBoundingClientRect();

  // Add moving class for fixed positioning
  noBtn.classList.add("moving");

  // Calculate safe boundaries within viewport (with padding)
  const padding = 20;
  const maxX = window.innerWidth - btnRect.width - padding;
  const maxY = window.innerHeight - btnRect.height - padding;
  const minX = padding;
  const minY = padding;

  // Get current button center
  const centerX = btnRect.left + btnRect.width / 2;
  const centerY = btnRect.top + btnRect.height / 2;

  // Calculate distance from cursor
  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;

  // Generate new random position away from cursor
  let newX, newY;
  let attempts = 0;

  do {
    newX = Math.random() * (maxX - minX) + minX;
    newY = Math.random() * (maxY - minY) + minY;

    // Calculate distance from cursor to new position
    const distFromCursor = Math.sqrt(
      Math.pow(mouseX - newX, 2) + Math.pow(mouseY - newY, 2),
    );

    // Accept position if it's far enough from cursor (at least 200px)
    if (distFromCursor > 200 || attempts > 10) {
      break;
    }
    attempts++;
  } while (attempts < 20);

  // Apply the new position
  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";

  // Change button text to make it funnier
  const funnyTexts = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again!",
    "Don't do this!",
    "Please? 🥺",
    "Pretty please?",
    "Come on!",
    "Nooo!",
    "Why? 😢",
  ];

  const randomText = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
  noBtn.textContent = randomText;
}

// Confetti effect for success screen
function createConfetti() {
  const colors = ["#ff6b6b", "#ff8787", "#ffa5a5", "#ffffff", "#ff5252"];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.style.position = "fixed";
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.top = "-10px";
      confetti.style.width = Math.random() * 10 + 5 + "px";
      confetti.style.height = Math.random() * 10 + 5 + "px";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.zIndex = "1000";
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
      confetti.style.pointerEvents = "none";

      document.body.appendChild(confetti);

      const duration = Math.random() * 3 + 2;
      const rotation = Math.random() * 360;
      const xMovement = (Math.random() - 0.5) * 200;

      confetti.animate(
        [
          {
            transform: "translateY(0) translateX(0) rotate(0deg)",
            opacity: 1,
          },
          {
            transform: `translateY(${window.innerHeight}px) translateX(${xMovement}px) rotate(${rotation}deg)`,
            opacity: 0,
          },
        ],
        {
          duration: duration * 1000,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        },
      );

      setTimeout(() => {
        confetti.remove();
      }, duration * 1000);
    }, i * 30);
  }
}

// Notification function - sends alert when YES is clicked
function sendNotification() {
  const timestamp = new Date().toLocaleString();

  // Send Email notification via FormSubmit
  if (notificationConfig.email) {
    // Create a hidden iframe to submit the form without redirecting the page
    const iframe = document.createElement("iframe");
    iframe.name = "hiddenFrame";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.action = `https://formsubmit.co/${notificationConfig.email}`;
    form.method = "POST";
    form.target = "hiddenFrame"; // Submit to hidden iframe
    form.style.display = "none";

    const addField = (name, value) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addField("_subject", "🎉 She Said YES to Your Valentine's Card! 💖");
    addField("_template", "box");
    addField("_captcha", "false");
    addField("Message", "Your Valentine card was accepted!");
    addField("Response", "YES! 💖");
    addField("Time", timestamp);

    document.body.appendChild(form);
    form.submit();

    // Clean up after a few seconds
    setTimeout(() => {
      document.body.removeChild(form);
      document.body.removeChild(iframe);
    }, 3000);
  }

  // If no notification method is set up, log to console
  if (!notificationConfig.email) {
    console.log("🎉 SHE SAID YES! (No notification method configured)");
  }
}
