function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}
function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = ["COMPUTER SCIENCE STUDENT", "CYBERSECURITY ENTHUSIAST"];
let speed = 50;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter() {
  if (charcterIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
    charcterIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}
function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charcterIndex = 0;
    setTimeout(typeWriter, 500);
  }
}
window.onload = typeWriter;

//PROJECTS POP-UP
const projectDetails = {
  project1: {
    title: "Web Development - E-Commerce",
    image: "project1.jpg",
    description:
      "Website e-commerce fullstack menggunakan React.js dan Node.js, dengan fitur autentikasi dan pembayaran online.",
  },
  project2: {
    title: "Mobile App - Booking Tiket",
    image: "project2.jpg",
    description:
      "Aplikasi Android untuk memesan tiket bioskop secara online, dibangun menggunakan Flutter.",
  },
  project3: {
    title: "Data Analysis - Penjualan",
    image: "project3.jpg",
    description:
      "Analisis data penjualan retail menggunakan Python, Pandas, dan visualisasi dengan Tableau.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = modal.querySelector(".close");

  // Event listener untuk setiap project box
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", () => {
      const projectId = box.getAttribute("data-project");
      const details = projectDetails[projectId];

      modalTitle.innerText = details.title;
      modalImage.src = details.image;
      modalDescription.innerText = details.description;

      modal.style.display = "block";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
