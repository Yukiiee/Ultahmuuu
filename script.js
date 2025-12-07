// =====================
// PAGE 1 - COUNTDOWN
// =====================
const countdownEl = document.getElementById("countdown");
const giftButton = document.getElementById("giftButton");

if (countdownEl) {
  const targetDate = new Date("2025-12-11T00:00:00").getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.textContent = `ultahmu ${days}h ${hours}j ${minutes}m ${seconds}d lagii`;
    } else {
      clearInterval(timer);
      countdownEl.textContent = "Selamat Ulang Tahun, Anjelii!!";
      giftButton.textContent = "Buka Hadiahnya yukkk!!";
      giftButton.classList.remove("locked");
      giftButton.classList.add("unlocked");
      giftButton.disabled = false;
      giftButton.addEventListener("click", () => {
        window.location.href = "page2.html";
      });
    }
  }, 1000);
}

const audio = new Audio("audio.mp3");
audio.loop = true;

document.body.addEventListener("click", () => {
  audio.play();
}, { once: true }); // biar cuma dipanggil sekali

// =====================
// PAGE 2 - HADIAH
// =====================
const giftBox = document.getElementById("giftBox");
const giftContent = document.getElementById("giftContent");
const letter = document.getElementById("letter");
const letterOpen = document.getElementById("letterOpen");

// Suratnya
const letterMessage = `Happy birthay Diarra Anjeli!!!

Hari ini bukan cuma tentang nambahnya umurmu, tapi juga tentang kamu, tentang semua proses yang udah kamu lewati, keberanian yang kamu punya, dan cara kamu tetap berdiri meskipun hari hari kadang berat dan bikin cape. Kamu mungkin nggak selalu melihat itu sebagai pencapaian, tapi aku liat itu sebagai suatu pencapaian. Kamu selalu berhasil melewati semuanya satu persatu, dan itu sesuatu yang pantas banget kamu banggain.

Di hari yang spesial ini, aku bener bener berharap kamu bisa nemuin sedikit ketenangan, sedikit lega, dan sedikit kebahagiaan… bahkan kalau datangnya dari hal hal sederhana sekalipun. Inget yaa, ngapapa buat istirahat sebentar, buat tarik napas panjang, dan menikmati hari ini tanpa beban.

Aku juga mau bilang terima kasih. Terima kasih karena pernah jadi bagian dari hidupku, karena pernah ada dan pernah ngasih warna di beberapa bab yang aku nggak bakal lupa. Kamu punya cara sendiri buat bikin orang di sekitar kamu merasa aman, dan itu sesuatu yang ga semua orang punya.

Semoga tahun ini bawa kamu ke tempat tempat yang lebih cerah, ke hal hal baik yang kamu pantas dapatkan. Semoga kamu selalu dikelilingi orang orang yang peduli, yang bisa bikin kamu ketawa, dan yang bisa nemenin kamu tumbuh tanpa rasa takut.

Nikmati harimu, Diraaa.
Kamu pantas banget buat merasa senang hari ini.`;

if (giftBox) {    
  giftBox.addEventListener("click", () => {    
    giftBox.classList.add("open");    
    setTimeout(() => {    
      giftBox.style.display = "none";    
      giftContent.classList.remove("hidden");    
      giftContent.classList.add("show");    

      // Ganti teks banner
      const banner = document.getElementById("banner");
      if (banner) {
        banner.textContent = "Yayyy!! Kamu dapet kue dan sepucuk surat!";
      }

    }, 1000);    
  });    
}

if (letter) {
  letter.addEventListener("click", () => {
    document.querySelector(".letter-closed").classList.add("hidden");
    letterOpen.classList.remove("hidden");
    letterOpen.textContent = letterMessage;
  });
}
