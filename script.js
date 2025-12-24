// =============================
// 1. DATA DOKTER
// =============================
const doctors = [
  {
    name: "dr. Aisyah Putri, Sp.PD-KPsi",
    specialist: "Spesialis Psikosomatis",
    schedule: "Senin, Rabu, Jumat • 09.00–13.00",
    room: "Ruang Konsultasi 1",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "drg. Livia Wulandari",
    specialist: "Dokter Gigi (Spesialis TMJ)",
    schedule: "Senin–Sabtu • 10.00–18.00",
    room: "Dental Relax Room",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "dr. Clara Widya, Sp.KJ",
    specialist: "Psikiater & Mindfulness",
    schedule: "Rabu & Jumat • 17.00–20.00",
    room: "Serenity Lounge",
    photo:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Budi Santoso, S.Psi",
    specialist: "Psikolog Klinis",
    schedule: "Selasa & Kamis • 13.00–17.00",
    room: "Ruang Terapi",
    photo:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop",
  },
];

// =============================
// 2. DATA LAYANAN
// =============================
const services = [
  {
    id: "burnout",
    name: "Integrasi Umum & Burnout",
    category: "Fisik & Mental",
    price: 120000,
    icon: "fa-solid fa-battery-quarter",
    benefits: [
      "Konsultasi Dokter Umum (30 Menit)",
      "Screening Tingkat Stres Digital",
      "Obat: Vitamin B-Complex & Penenang Herbal",
      "Akses Ruang Hening 1 Jam",
    ],
  },
  {
    id: "gerd",
    name: "Lambung & Kecemasan (GERD)",
    category: "Internal Medicine",
    price: 300000,
    icon: "fa-solid fa-fire-burner",
    benefits: [
      "Pemeriksaan Fisik Lambung",
      "Sesi Hypnotherapy Singkat (Relaxation)",
      "Obat: PPI (Lambung) & Anti-Cemas Dosis Rendah",
      "Panduan Diet Anti-Inflamasi",
    ],
  },
  {
    id: "dental",
    name: "Dental Stress Relief",
    category: "Gigi & Mulut",
    price: 250000,
    icon: "fa-solid fa-tooth",
    benefits: [
      "Pijat Relaksasi Otot Rahang (TMJ)",
      "Cek Kondisi Gigi Gemeretak (Bruxism)",
      "Therapy Music saat tindakan",
      "Resep Muscle Relaxant (Jika perlu)",
    ],
  },
  {
    id: "migrain",
    name: "Terapi Migrain & Leher",
    category: "Fisioterapi",
    price: 200000,
    icon: "fa-solid fa-brain",
    benefits: [
      "Fisioterapi Leher & Pundak (Ultrasound)",
      "Akupresur Titik Fokus Sakit Kepala",
      "Krim Analgesik Khusus",
      "Edukasi Postur Kerja Ergonomis",
    ],
  },
  {
    id: "mind",
    name: "Mind & Breath Therapy",
    category: "Mental Wellness",
    price: 150000,
    icon: "fa-solid fa-wind",
    benefits: [
      "Dipandu Praktisi Mindfulness Bersertifikat",
      "Ruang Aromaterapi Lavender",
      "Teh Herbal Penenang (Chamomile)",
      "Rekaman Audio untuk Latihan di Rumah",
    ],
  },
  {
    id: "mcu",
    name: "Holistic Check-Up Lengkap",
    category: "Paket Lengkap",
    price: 650000,
    icon: "fa-solid fa-heart-pulse",
    benefits: [
      "Cek Darah Lengkap & Tensi",
      "Konsultasi Psikolog Klinis (60 Menit)",
      "Laporan Kesehatan Fisik & Mental",
      "Voucher Terapi Lanjutan 20%",
    ],
  },
  {
    id: "sleep",
    name: "Sleep Recovery Program",
    category: "Konsultasi",
    price: 280000,
    icon: "fa-solid fa-moon",
    benefits: [
      "Analisa Pola Tidur (Sleep Hygiene)",
      "Terapi Cahaya (Light Therapy)",
      "Suplemen Melatonin Alami",
      "Jurnal Tidur Digital",
    ],
  },
  {
    id: "nutrisi",
    name: "Nutrisi Mood & Energi",
    category: "Gizi Klinik",
    price: 175000,
    icon: "fa-solid fa-apple-whole",
    benefits: [
      "Analisa Komposisi Tubuh",
      "Meal Plan Pengatur Emosi (Mood Food)",
      "Suplemen Gut-Health (Probiotik)",
      "Resep Smoothie Anti-Stres",
    ],
  },
];

const formatRupiah = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

// =============================
// 3. RENDER FUNCTIONS
// =============================
const renderDoctors = () => {
  const list = document.getElementById("doctorList");
  if (!list) return;
  list.innerHTML = "";
  doctors.forEach((doc) => {
    const card = document.createElement("article");

    card.className =
      "flex items-start gap-4 p-5 rounded-2xl bg-white/80 border border-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group";

    card.innerHTML = `
            <div class="relative">
                <div class="h-16 w-16 rounded-2xl overflow-hidden bg-sage-100 ring-2 ring-white shadow-md">
                    <img src="${doc.photo}" class="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="font-bold text-sage-900 group-hover:text-sage-700 transition-colors">${doc.name}</h4>
                <p class="text-xs font-medium text-sage-600 mb-2">${doc.specialist}</p>
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sage-50 border border-sage-100 text-[10px] text-sage-500">
                    <i class="fa-regular fa-clock"></i> ${doc.schedule}
                </div>
            </div>`;
    list.appendChild(card);
  });
};

const renderServices = () => {
  const container = document.getElementById("servicesContainer");
  // Hapus referensi ke select karena elemennya sudah kita buang di HTML

  if (!container) return;

  container.innerHTML = "";

  services.forEach((s) => {
    // Render List Benefits
    const benefitsHTML = s.benefits
      .map(
        (item) => `
            <li class="flex items-start gap-2 text-[11px] text-gray-500 leading-snug">
                <i class="fa-solid fa-check text-sage-500 mt-0.5 shrink-0 text-[10px]"></i>
                <span>${item}</span>
            </li>
        `
      )
      .join("");

    const card = document.createElement("div");
    // Tambahkan data-attributes untuk memudahkan pengambilan data saat kalkulasi
    card.dataset.id = s.id;
    card.dataset.price = s.price;
    card.dataset.name = s.name;

    // Tambahkan class indentifier 'service-card'
    card.className =
      "service-card flex flex-col p-5 rounded-2xl border border-sage-100 bg-white hover:border-sage-300 hover:shadow-lg transition-all duration-200 cursor-pointer group h-full relative overflow-hidden select-none";

    // Logika Klik Multi-Select
    card.onclick = () => {
      // Toggle Class Active
      card.classList.toggle("selected-service");
      card.classList.toggle("ring-4"); // Border Tebal
      card.classList.toggle("ring-sage-500"); // Warna Sage
      card.classList.toggle("bg-sage-50"); // Background agak gelap dikit

      // Trigger Event agar Kalkulator menghitung ulang otomatis
      const event = new Event("serviceChanged");
      document.getElementById("servicesContainer").dispatchEvent(event);
    };

    card.innerHTML = `
            <div class="absolute top-0 right-0 w-24 h-24 bg-sage-50 rounded-bl-full -mr-4 -mt-4 opacity-50 group-hover:bg-sage-100 transition-colors"></div>

            <div class="flex justify-between items-start mb-3 relative z-10">
                <div class="h-10 w-10 rounded-xl bg-sage-50 flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors shadow-sm">
                    <i class="${s.icon} text-lg"></i>
                </div>
                <span class="text-[10px] font-bold tracking-wide text-nexus-teal bg-teal-50 px-2 py-1 rounded-lg border border-teal-100">
                    ${s.category}
                </span>
            </div>

            <div class="mb-4 relative z-10">
                <h4 class="font-bold text-sage-900 text-sm mb-1">${s.name}</h4>
                <p class="text-lg font-bold text-sage-700">${formatRupiah(
                  s.price
                )}</p>
            </div>

            <div class="h-px w-full bg-sage-100 mb-4"></div>

            <div class="flex-1 relative z-10">
                <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Paket Termasuk:</p>
                <ul class="space-y-2">
                    ${benefitsHTML}
                </ul>
            </div>
            
            <div class="absolute top-3 right-3 z-20 opacity-0 transform scale-50 transition-all duration-200 check-indicator">
                <div class="bg-sage-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
                    <i class="fa-solid fa-check text-xs"></i>
                </div>
            </div>
        `;
    container.appendChild(card);
  });
};

// =============================================
// 4. SPA SYSTEM
// =============================================
const setupTabSwitching = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".spa-section");

  const updateDOM = (targetId) => {
    sections.forEach((sec) => {
      if (sec.id === targetId) {
        sec.classList.remove("hidden");
      } else {
        sec.classList.add("hidden");
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.dataset.target === targetId;
      link.classList.toggle("tab-active", isActive);

      if (isActive) {
        link.classList.remove("text-sage-600");
        const icon = link.querySelector("i");
        if (icon) icon.classList.remove("text-sage-600");
      } else {
        link.classList.add("text-sage-600");
      }
    });

    window.scrollTo(0, 0);
  };

  const showSection = (targetId) => {
    if (!document.startViewTransition) {
      updateDOM(targetId);
      return;
    }
    document.startViewTransition(() => {
      updateDOM(targetId);
    });
  };

  window.showSection = showSection;

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const btn = link.closest("button");
      if (btn) showSection(btn.dataset.target);
    });
  });

  updateDOM("beranda");
};

// =============================
// 5. CALCULATOR LOGIC
// =============================
const setupCostEstimator = () => {
  const els = {
    // select: document.getElementById("serviceSelect"), // SUDAH DIHAPUS
    container: document.getElementById("servicesContainer"),
    qty: document.getElementById("quantityInput"),
    payment: document.getElementById("paymentType"),
    check: document.getElementById("followUpCheck"),
    btn: document.getElementById("calculateBtn"),
    total: document.getElementById("estimateTotal"),
    detail: document.getElementById("estimateDetail"),
  };

  // Gak perlu cek els.select lagi
  if (!els.btn || !els.container) return;

  const calculate = () => {
    // 1. Cari semua kartu yang dipilih (ada class 'selected-service')
    const selectedCards = document.querySelectorAll(
      ".service-card.selected-service"
    );

    // 2. Jika tidak ada yang dipilih
    if (selectedCards.length === 0) {
      els.total.textContent = "Rp0";
      els.detail.textContent = "Silakan pilih minimal satu layanan.";
      return;
    }

    // 3. Hitung Total Dasar (Sum Price)
    let totalBasePrice = 0;
    let selectedNames = [];

    selectedCards.forEach((card) => {
      totalBasePrice += parseInt(card.dataset.price);
      selectedNames.push(card.dataset.name);
    });

    // 4. Kalikan dengan Jumlah (Pax)
    // Asumsi: Quantity berlaku untuk paket yang dipilih (misal: 2 orang ambil paket A+B)
    const qty = parseInt(els.qty.value) || 1;
    let subtotal = totalBasePrice * qty;

    // 5. Logika Diskon / Asuransi
    let note = "";
    if (els.payment.value === "bpjs") {
      subtotal *= 0.15; // Bayar 15% aja
      note = "Cover BPJS (Bayar Admin 15%)";
    } else if (els.payment.value === "asuransi") {
      subtotal *= 0.5; // Bayar 50%
      note = "Cover Asuransi 50%";
    } else {
      note = "Pembayaran Tunai/QRIS";
    }

    // 6. Tambahan Kontrol Lanjutan (Opsional)
    // Logika: Biaya kontrol (misal 100rb fix) atau persentase?
    // Kita pakai logika lama: nambah biaya dari total
    if (els.check.checked) {
      // Misal biaya kontrol flat 50rb per layanan yg dipilih
      const controlCost = 50000 * selectedCards.length * qty;
      subtotal += controlCost;
      note += " + Kontrol Lanjutan";
    }

    // Update UI
    els.total.textContent = formatRupiah(subtotal);

    // Tampilkan detail ringkas
    const namesStr =
      selectedNames.length > 2
        ? `${selectedNames.length} Layanan Terpilih`
        : selectedNames.join(" + ");

    els.detail.textContent = `${namesStr} (${qty} Pax). ${note}`;
  };

  // Event Listeners
  els.btn.addEventListener("click", calculate);

  // Listen perubahan pada input form
  [els.qty, els.payment, els.check].forEach((e) =>
    e.addEventListener("change", calculate)
  );

  // Listen custom event dari renderServices (saat kartu diklik)
  els.container.addEventListener("serviceChanged", calculate);
};

// =============================
// SISTEM ANTREAN DENGAN LOCKING
// =============================
const SESSION_DURATION = 3 * 60 * 1000; // 3 menit dalam ms

function generateQueueNumber() {
  let lastQueue = localStorage.getItem("novaQueueNumber");
  let currentQueue = lastQueue ? parseInt(lastQueue) : 0;
  currentQueue = currentQueue + 1;
  localStorage.setItem("novaQueueNumber", currentQueue);
  return "A-" + String(currentQueue).padStart(3, "0");
}

function startSession(queueNumber) {
  const now = Date.now();
  localStorage.setItem("sessionStatus", "sedang_terapi");
  localStorage.setItem("sessionStartTime", now);
  localStorage.setItem("currentQueue", queueNumber);
}

// GANTI fungsi checkSessionStatus yang lama dengan ini:
function checkSessionStatus() {
  const status = localStorage.getItem("sessionStatus");
  const startTime = localStorage.getItem("sessionStartTime");
  const queueNumber = localStorage.getItem("currentQueue");

  if (status === "sedang_terapi" && startTime) {
    const now = Date.now();
    const elapsed = now - parseInt(startTime);
    const remainingMs = SESSION_DURATION - elapsed;

    if (remainingMs > 0) {
      // Masih dalam sesi:
      // 1. Matikan tombol antrean
      disableQueueButtons();
      updateNavbarButton(queueNumber);

      // 2. LANJUTKAN TIMER (Konversi ms ke detik)
      const remainingSeconds = Math.ceil(remainingMs / 1000);
      startTherapyTimer(remainingSeconds);

      // 3. Pindah ke halaman terapi otomatis biar user gak bingung
      if (window.showSection) window.showSection("terapi");

      // 4. Update teks judul
      const terapiTitle = document.getElementById("terapiTitle");
      if (terapiTitle) {
        terapiTitle.textContent = `Sesi Terapi ${queueNumber} - Lanjutkan Rileksasi Anda.`;
      }
    } else {
      // Sesi sudah habis saat ditinggal refresh
      finishSession();
    }
  }
}

function disableQueueButtons() {
  const queueBtn = document.getElementById("takeQueueBtn");
  const navbarQueueBtn = document.getElementById("navbarQueueBtn");

  if (queueBtn) {
    queueBtn.disabled = true;
    queueBtn.textContent = "Sesi Terapi Sedang Berlangsung";
    queueBtn.classList.add("opacity-50", "cursor-not-allowed");
  }

  if (navbarQueueBtn) {
    navbarQueueBtn.disabled = true;
    navbarQueueBtn.textContent = "Sesi Terapi Sedang Berlangsung";
    navbarQueueBtn.classList.add("opacity-50", "cursor-not-allowed");
  }
}

function enableQueueButtons() {
  const queueBtn = document.getElementById("takeQueueBtn");
  const navbarQueueBtn = document.getElementById("navbarQueueBtn");

  if (queueBtn) {
    queueBtn.disabled = false;
    queueBtn.textContent = "Ambil Antrean Sekarang";
    queueBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }

  if (navbarQueueBtn) {
    navbarQueueBtn.disabled = false;
    navbarQueueBtn.textContent = "Ambil Antrean";
    navbarQueueBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }
}

function updateNavbarButton(queueNumber) {
  const navbarQueueBtn = document.getElementById("navbarQueueBtn");
  if (navbarQueueBtn && queueNumber) {
    navbarQueueBtn.textContent = `Antrean: ${queueNumber}`;
    navbarQueueBtn.disabled = true;
    navbarQueueBtn.classList.add("opacity-50", "cursor-not-allowed");
  }
}

function handleTakeQueue() {
  const status = localStorage.getItem("sessionStatus");
  if (status === "sedang_terapi") {
    alert("Selesaikan sesi terapi Anda terlebih dahulu");
    return;
  }

  const queueNumber = generateQueueNumber();
  startSession(queueNumber);

  // Update UI
  const num = document.getElementById("queueNumberCard");
  const headNum = document.getElementById("queueNumberHeader");
  const statusCard = document.getElementById("queueStatusCard");
  const headStatus = document.getElementById("queueStatusHeader");
  const terapiTitle = document.getElementById("terapiTitle");

  if (num) num.textContent = queueNumber;
  if (headNum) headNum.textContent = queueNumber;
  if (statusCard) statusCard.textContent = "Sedang Terapi";
  if (headStatus) headStatus.textContent = "Terapi Aktif";

  if (num) {
    num.classList.add("queue-pulse");
    setTimeout(() => num.classList.remove("queue-pulse"), 600);
  }

  // Redirect ke Terapi
  if (window.showSection) {
    window.showSection("terapi");
  }

  // Update Navbar
  updateNavbarButton(queueNumber);

  // Start Timer
  startTherapyTimer();

  // Auto Start Breathing
  startBreathing();

  if (terapiTitle) {
    terapiTitle.textContent = `Sesi Terapi ${queueNumber} - Rileks dan Ikuti Instruksi.`;
  }
}

let therapyInterval; // Simpan interval di variabel global biar bisa di-clear kalau perlu

function startTherapyTimer(remainingSeconds) {
  const timerDisplay = document.getElementById("timerDisplay");
  const timerText = document.getElementById("timerText");
  const finishBtn = document.getElementById("finishSessionBtn");

  if (timerDisplay) timerDisplay.classList.remove("hidden");
  if (finishBtn) finishBtn.classList.add("hidden");

  // Kalau tidak ada parameter, pakai default durasi penuh
  let remaining = remainingSeconds || SESSION_DURATION / 1000;

  // Clear interval sebelumnya (jika ada) biar gak tabrakan
  if (therapyInterval) clearInterval(therapyInterval);

  // Fungsi update tampilan timer
  const updateDisplay = () => {
    const minutes = Math.floor(remaining / 60);
    const seconds = Math.floor(remaining % 60);
    if (timerText) {
      timerText.textContent = `${String(minutes).padStart(2, "0")}:${String(
        seconds
      ).padStart(2, "0")}`;
    }
  };

  updateDisplay(); // Jalankan sekali di awal biar gak nunggu 1 detik

  therapyInterval = setInterval(() => {
    remaining--;
    updateDisplay();

    if (remaining <= 0) {
      clearInterval(therapyInterval);
      if (timerDisplay) timerDisplay.classList.add("hidden");
      if (finishBtn) {
        finishBtn.classList.remove("hidden");
        finishBtn.replaceWith(finishBtn.cloneNode(true));
        document
          .getElementById("finishSessionBtn")
          .addEventListener("click", finishSession);
      }
    }
  }, 1000);
}

function finishSession() {
  localStorage.removeItem("sessionStatus");
  localStorage.removeItem("sessionStartTime");
  localStorage.removeItem("currentQueue");

  enableQueueButtons();

  const navbarQueueBtn = document.getElementById("navbarQueueBtn");
  if (navbarQueueBtn) {
    navbarQueueBtn.textContent = "Ambil Antrean";
  }

  // Reset UI
  const num = document.getElementById("queueNumberCard");
  const headNum = document.getElementById("queueNumberHeader");
  const statusCard = document.getElementById("queueStatusCard");
  const headStatus = document.getElementById("queueStatusHeader");
  const terapiTitle = document.getElementById("terapiTitle");

  if (num) num.textContent = "--";
  if (headNum) headNum.textContent = "--";
  if (statusCard) statusCard.textContent = "Menunggu Check-in";
  if (headStatus) headStatus.textContent = "Silakan Check-in";

  if (terapiTitle) {
    terapiTitle.textContent = "Ruang Tenang Digital";
  }

  // Hide timer and finish button
  const timerDisplay = document.getElementById("timerDisplay");
  const finishBtn = document.getElementById("finishSessionBtn");
  if (timerDisplay) timerDisplay.classList.add("hidden");
  if (finishBtn) finishBtn.classList.add("hidden");
}

// =============================
// 6. TERAPI NAPAS LOGIC
// =============================
let isBreathing = false;
let breatheInterval;

const breatheAudio = new Audio("nafas-manual.mp3");
breatheAudio.volume = 0.3;

function startBreathing() {
  const circle = document.getElementById("breathe-circle");
  const text = document.getElementById("breathe-text");
  const sub = document.getElementById("breathe-sub");

  if (isBreathing) {
    clearInterval(breatheInterval);
    isBreathing = false;
    text.innerText = "Mulai";
    sub.innerText = "Sentuh Lingkaran";
    circle.style.transform = "scale(1)";
    circle.style.opacity = "0.2";
    text.classList.remove("text-white");
    text.classList.add("text-sage-800");

    breatheAudio.pause();
    breatheAudio.currentTime = 0;

    return;
  }

  isBreathing = true;

  text.innerText = "Tarik...";
  sub.innerText = "Lewat Hidung";
  circle.style.transform = "scale(1.5)";
  circle.style.opacity = "0.6";

  breatheAudio.play();

  let phase = "inhale";
  breatheInterval = setInterval(() => {
    breatheAudio.pause();
    breatheAudio.currentTime = 0;
    breatheAudio.play();

    if (phase === "inhale") {
      text.innerText = "Hembus...";
      sub.innerText = "Lewat Mulut";
      circle.style.transform = "scale(1)";
      phase = "exhale";
    } else {
      text.innerText = "Tarik...";
      sub.innerText = "Lewat Hidung";
      circle.style.transform = "scale(1.5)";
      phase = "inhale";
    }
  }, 4000);
}

// =============================
// 7. SMART TRIAGE & QUEUE
// =============================
function analyzeSymptoms() {
  const physicalEl = document.getElementById("physicalSymptom");
  const mentalEl = document.getElementById("mentalSymptom");
  const resultBox = document.getElementById("recommendationResult");

  if (!physicalEl || !mentalEl || !resultBox) return;
  const physical = physicalEl.value;
  const mental = mentalEl.value;

  if (!physical || !mental) {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `
            <div class="p-3 rounded-xl border border-red-200 bg-red-50 text-xs text-red-800 flex items-center gap-2 animate-pulse">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>Mohon lengkapi data fisik dan mental.</span>
            </div>`;
    return;
  }

  // Logic Analisis
  let diagnosis = "Gangguan Psikosomatis Umum";
  let desc =
    "Terdeteksi ketidakseimbangan antara respons tubuh terhadap beban pikiran.";
  let riskText = "Rendah";
  let riskClass = "bg-sage-100 text-sage-600 border-sage-200";
  let recommendation = "Konsultasi Screening Umum";
  let doctorType = "Dokter Umum";

  if (physical === "maag" && (mental === "stres" || mental === "cemas")) {
    diagnosis = "Gastritis Psikosomatis";
    desc = "Stres memicu saraf vagus meningkatkan asam lambung secara drastis.";
    riskText = "Sedang";
    riskClass = "bg-yellow-100 text-yellow-700 border-yellow-200";
    recommendation = "Paket Gastric-Calm";
    doctorType = "Internis + Hypnotherapy";
  } else if (
    (physical === "gigi" || physical === "headache") &&
    mental === "stres"
  ) {
    diagnosis = "Tension & Bruxism";
    desc = "Otot rahang dan leher menegang akibat penekanan emosi bawah sadar.";
    riskText = "Menengah";
    riskClass = "bg-orange-100 text-orange-700 border-orange-200";
    recommendation = "Terapi Dental-Relief";
    doctorType = "Dokter Gigi (TMJ)";
  } else if (
    physical === "jantung" &&
    (mental === "cemas" || mental === "burnout")
  ) {
    diagnosis = "Cardiac Anxiety";
    desc =
      "Respons 'fight or flight' memacu jantung berlebih. Butuh penanganan segera.";
    riskText = "Tinggi";
    riskClass = "bg-red-100 text-red-700 border-red-200";
    recommendation = "Pemeriksaan Jantung & Pikiran";
    doctorType = "Kardiolog + Psikiater";
  }

  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
        <div class="mt-4 border border-sage-200 rounded-2xl overflow-hidden shadow-sm bg-white animate-fade-in-up">
            <div class="bg-sage-50 p-3 border-b border-sage-100 flex justify-between items-center">
                <p class="text-[10px] font-bold text-sage-600 uppercase tracking-widest">
                    <i class="fa-solid fa-microchip mr-1"></i> Analisis AI
                </p>
                <span class="text-[10px] px-2 py-0.5 rounded border font-bold ${riskClass}">
                    Urgensi: ${riskText}
                </span>
            </div>
            <div class="p-4 space-y-3">
                <div>
                    <p class="text-xs text-gray-400 mb-1">Indikasi Diagnosis:</p>
                    <h4 class="text-sm font-bold text-sage-900 leading-tight">${diagnosis}</h4>
                    <p class="text-xs text-gray-600 mt-1 leading-relaxed border-l-2 border-sage-300 pl-2">
                        "${desc}"
                    </p>
                </div>
                <div class="h-px bg-sage-100 w-full"></div>
                <div class="flex justify-between items-end gap-2">
                    <div>
                        <p class="text-xs text-gray-400 mb-1">Saran Tindakan:</p>
                        <p class="text-sm font-semibold text-nexus-teal">${recommendation}</p>
                        <p class="text-[10px] text-gray-500">${doctorType}</p>
                    </div>
                    <button type="button" id="autoQueueBtn" class="bg-sage-600 hover:bg-sage-700 text-white text-[10px] px-3 py-2 rounded-lg transition shadow-lg shadow-sage-200 shrink-0">
                        Ambil Antrean
                    </button>
                </div>
            </div>
            <div class="mt-3 pt-3 border-t border-sage-100">
                <p class="text-[10px] text-gray-400 italic text-center">
                    *Analisis ini adalah simulasi berdasarkan algoritma logika, bukan pengganti diagnosis medis profesional. Segera hubungi dokter jika gejala berlanjut.
                </p>
            </div>
        </div>
    `;

  setTimeout(() => {
    const autoBtn = document.getElementById("autoQueueBtn");
    const queueBtn = document.getElementById("takeQueueBtn");

    if (autoBtn && queueBtn) {
      autoBtn.addEventListener("click", () => {
        queueBtn.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          queueBtn.click();
          queueBtn.classList.add("ring-2", "ring-sage-500");
          setTimeout(
            () => queueBtn.classList.remove("ring-2", "ring-sage-500"),
            1000
          );
        }, 600);
      });
    }
  }, 100);
}

// =============================
// INIT
// =============================
document.addEventListener("DOMContentLoaded", () => {
  renderDoctors();
  renderServices();
  setupTabSwitching();
  setupCostEstimator();
  checkSessionStatus(); // Cek status antrean saat load

  const queueBtn = document.getElementById("takeQueueBtn");
  const navbarQueueBtn = document.getElementById("navbarQueueBtn");

  if (queueBtn) {
    queueBtn.addEventListener("click", handleTakeQueue);
  }

  if (navbarQueueBtn) {
    navbarQueueBtn.addEventListener("click", handleTakeQueue);
  }

  const analyzeBtn = document.getElementById("analyzeBtn");
  if (analyzeBtn) {
    analyzeBtn.addEventListener("click", analyzeSymptoms);
  }
});

// =============================
// REVISI: DATA ANATOMI (5 TITIK)
// =============================
const anatomyData = {
    kepala: {
        title: "Tension Headache",
        desc: "Sakit kepala tipe tegang. Sering dipicu stres kronis yang bikin otot leher kaku.",
        tip: "Pijat area pelipis & kurangi screen-time.",
        icon: '<i class="fa-solid fa-brain"></i>',
        color: "border-nexus-teal"
    },
    bahu: {
        title: "Shoulder Burden",
        desc: "Rasa berat di pundak sering dikaitkan dengan perasaan memikul tanggung jawab berlebih.",
        tip: "Lakukan peregangan bahu tiap 2 jam kerja.",
        icon: '<i class="fa-solid fa-dumbbell"></i>',
        color: "border-orange-400"
    },
    jantung: {
        title: "Cardiac Anxiety",
        desc: "Jantung berdebar bukan selalu sakit jantung, tapi respon 'fight or flight' tubuh.",
        tip: "Teknik pernapasan 4-7-8 untuk menenangkan saraf.",
        icon: '<i class="fa-solid fa-heart-pulse text-red-500"></i>',
        color: "border-red-500"
    },
    paru: {
        title: "Shortness of Breath",
        desc: "Sesak napas tanpa sebab fisik (Psikosomatis) sering muncul saat panik atau cemas.",
        tip: "Fokus pada ekshalasi (buang napas) panjang.",
        icon: '<i class="fa-solid fa-lungs text-blue-400"></i>',
        color: "border-blue-400"
    },
    lambung: {
        title: "GERD & Gastritis",
        desc: "Stres meningkatkan asam lambung secara drastis. Ada koneksi kuat Gut-Brain Axis.",
        tip: "Hindari kopi saat stres & makan porsi kecil.",
        icon: '<i class="fa-solid fa-fire-burner text-yellow-500"></i>',
        color: "border-yellow-500"
    }
};

function showAnatomyInfo(part) {
    const data = anatomyData[part];
    const box = document.getElementById("anatomyInfoBox");
    const defaultContent = document.getElementById("defaultAnatomyContent");
    const dynamicContent = document.getElementById("dynamicAnatomyContent");

    if (!data || !box) return;

    // Elements
    document.getElementById("anatomyTitle").textContent = data.title;
    document.getElementById("anatomyDesc").textContent = data.desc;
    document.getElementById("anatomyTip").textContent = data.tip;
    document.getElementById("anatomyIcon").innerHTML = data.icon;

    // Transition Logic
    defaultContent.classList.add("hidden");
    dynamicContent.classList.remove("hidden");
    
    // Reset Animation
    dynamicContent.classList.remove("animate-fade-in-up");
    void dynamicContent.offsetWidth; // Trigger Reflow
    dynamicContent.classList.add("animate-fade-in-up");

    // Dynamic Border Color
    box.className = `bg-white/90 p-8 rounded-3xl border-l-8 shadow-lg min-h-[300px] flex flex-col justify-center transition-all duration-300 ${data.color}`;
}