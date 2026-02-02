const password = "03112025";

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === password) {
    document.getElementById("passwordScreen").classList.add("hidden");
    document.getElementById("feb3Screen").classList.remove("hidden");
    document.getElementById("feb3Music").play();
  }
}

function goToTiles() {
  document.getElementById("feb3Screen").classList.add("hidden");
  document.getElementById("tilesScreen").classList.remove("hidden");
}

function backToTiles() {
  document.getElementById("memoryScreen").classList.add("hidden");
  document.getElementById("tilesScreen").classList.remove("hidden");
}

const memories = [
  {
    img: "images/rose_day.jpg",
    text: `This rose is just the beginning.
I made this whole space so we can save and relive our moments together.
Don’t worry, my love — I’m going to make your very first Valentine truly special. — Utsav`
  },
  {
    img: "images/propose_day.jpg",
    text: `The day I went down on my knees for you.
My knee still remembers it… but my heart loves that moment even more.
I love you, darling. Truly. Always. — Utsav`
  },
  {
    img: "images/chocolate_day.jpg",
    text: `I know I don’t like sugar much…
But seeing how much you love it makes me love it too.
Crispello and Milky Bar toh pakka khilaunga 😘 — Utsav`
  },
  {
    img: "images/teddy_day.jpg",
    text: `My teddy bear is you, not gonna lie.
Soft to squeeze, and even softer from the inside.
I love you, darling. — Utsav`
  },
  {
    img: "images/promise_day.jpg",
    text: `This was 14 November — the day I promised you something special.
And I’m still keeping that promise, step by step, with all my heart. — Utsav`
  },
  {
    img: "images/hug_day.jpg",
    text: `I don’t have a photo from that 20-minute meet…
But hugging you always felt like discovering what “home in a human” really means. — Utsav`
  }
];

function openMemory(index) {
  const today = new Date();
  const unlockDate = new Date(`2026-02-0${6 + index}T00:00:00+05:30`);
  if (today >= unlockDate) {
    document.getElementById("tilesScreen").classList.add("hidden");
    document.getElementById("memoryScreen").classList.remove("hidden");
    document.getElementById("memoryImage").src = memories[index - 1].img;
    document.getElementById("memoryText").innerText = memories[index - 1].text;
  }
}

function openFinal() {
  const today = new Date();
  const unlockDate = new Date(`2026-02-13T00:00:00+05:30`);
  if (today >= unlockDate) {
    document.getElementById("tilesScreen").classList.add("hidden");
    document.getElementById("finalScreen").classList.remove("hidden");
  }
}

function uploadPolaroid() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("polaroidImage", reader.result);
      document.getElementById("polaroidImage").src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

window.onload = () => {
  const saved = localStorage.getItem("polaroidImage");
  if (saved) {
    document.getElementById("polaroidImage").src = saved;
  }
};
