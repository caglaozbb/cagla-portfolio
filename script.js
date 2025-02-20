document.addEventListener("DOMContentLoaded", function () {
  showLocalDate();
});

function showLocalDate() {
  const dateElement = document.getElementById("date");

  if (!dateElement) {
    console.error("Hata: 'date' ID'sine sahip öğe bulunamadı!");
    return;
  }

  const now = new Date();

  const weekday = now.toLocaleString('en-US', { weekday: 'long' });

  const month = `${now.getMonth() + 1}-${now.getDate()}`;

  const hourMinute = now.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  const formattedDate = `${weekday} ${month} ${hourMinute}`;

  dateElement.textContent = formattedDate;
}


const openModal = document.getElementById("about-section");
const modal = document.getElementById("myModal");

openModal.addEventListener("click", function (event) {
  event.stopPropagation();
  modal.style.display = "flex";
});

window.addEventListener("click", function(event) {
  if (!modal.contains(event.target)) {
    modal.style.display = "none";
  }
});

const openModal2 = document.getElementById("manual-section");
const modal2 = document.getElementById("myModal2");

openModal2.addEventListener("click", function (event) {
  event.stopPropagation();
  modal2.style.display = "flex";
});

window.addEventListener("click", function(event) {
  if (!modal2.contains(event.target)) {
    modal2.style.display = "none";
  }
});