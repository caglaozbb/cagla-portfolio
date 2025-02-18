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

document.addEventListener("DOMContentLoaded", showLocalDate);

setInterval(showLocalDate, 1000);
