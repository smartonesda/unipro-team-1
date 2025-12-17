// =============================
// 1. DATA DOKTER (MODERN & REAL)
// =============================
const doctors = [
    {
        name: "dr. Aisyah Putri, Sp.PD-KPsi",
        specialist: "Spesialis Psikosomatis",
        schedule: "Senin, Rabu, Jumat • 09.00–13.00",
        room: "Ruang Konsultasi 1",
        photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "drg. Livia Wulandari",
        specialist: "Dokter Gigi (Spesialis TMJ)",
        schedule: "Senin–Sabtu • 10.00–18.00",
        room: "Dental Relax Room",
        photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "dr. Clara Widya, Sp.KJ",
        specialist: "Psikiater & Mindfulness",
        schedule: "Rabu & Jumat • 17.00–20.00",
        room: "Serenity Lounge",
        photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop"
    },
    {
        name: "Budi Santoso, S.Psi",
        specialist: "Psikolog Klinis",
        schedule: "Selasa & Kamis • 13.00–17.00",
        room: "Ruang Terapi",
        photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop"
    }
];

// =============================
// 2. DATA LAYANAN
// =============================
const services = [
    { id: "burnout", name: "Integrasi Umum & Burnout", category: "Fisik & Mental", price: 120000 },
    { id: "gerd", name: "Lambung & Kecemasan (GERD)", category: "Internal Medicine", price: 300000 },
    { id: "dental", name: "Dental Stress Relief", category: "Gigi & Mulut", price: 250000 },
    { id: "migrain", name: "Terapi Migrain & Leher", category: "Fisioterapi", price: 200000 },
    { id: "mind", name: "Mind & Breath Therapy", category: "Mental Wellness", price: 150000 },
    { id: "mcu", name: "Holistic Check-Up Lengkap", category: "Paket Lengkap", price: 650000 },
    { id: "sleep", name: "Sleep Recovery Program", category: "Konsultasi", price: 280000 },
    { id: "nutrisi", name: "Nutrisi Mood & Energi", category: "Gizi Klinik", price: 175000 }
];

const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(value);
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
        card.className = "flex gap-4 p-4 rounded-2xl bg-white border border-sage-100 shadow-sm hover:shadow-md transition-all";
        card.innerHTML = `
            <div class="flex-shrink-0">
                <div class="h-16 w-16 rounded-xl overflow-hidden bg-sage-50">
                    <img src="${doc.photo}" class="h-full w-full object-cover" />
                </div>
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-bold text-sage-900 truncate">${doc.name}</p>
                <p class="text-xs text-sage-600 truncate mb-2">${doc.specialist}</p>
                <div class="flex items-center gap-2 text-[10px] text-gray-400">
                    <i class="fa-regular fa-clock"></i> ${doc.schedule}
                </div>
            </div>`;
        list.appendChild(card);
    });
};

const renderServices = () => {
    const tbody = document.getElementById("servicesTableBody");
    const select = document.getElementById("serviceSelect");
    if (!tbody || !select) return;
    
    tbody.innerHTML = "";
    select.innerHTML = "";
    
    services.forEach((s) => {
        const tr = document.createElement("tr");
        tr.className = "hover:bg-sage-50 transition-colors border-b border-sage-50 last:border-0";
        
        tr.innerHTML = `
            <td class="px-3 py-3 align-middle">
                <p class="font-medium text-sage-900 text-xs sm:text-sm whitespace-normal leading-tight">
                    ${s.name}
                </p>
                <p class="text-[10px] text-gray-400 mt-0.5 sm:hidden">${s.category}</p>
            </td>
            <td class="px-3 py-3 text-right align-middle">
                <span class="font-bold text-sage-600 text-xs sm:text-sm whitespace-nowrap">
                    ${formatRupiah(s.price)}
                </span>
            </td>`;
            
        tbody.appendChild(tr);

        // Bagian Dropdown
        const opt = document.createElement("option");
        opt.value = s.id;
        opt.textContent = `${s.name} (${formatRupiah(s.price)})`;
        select.appendChild(opt);
    });
};

// =============================================
// 4. SPA SYSTEM (UPDATED: WITH VIEW TRANSITION)
// =============================================
const setupTabSwitching = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".spa-section");
    const quickBtns = document.querySelectorAll(".quick-nav"); 

    // A. Fungsi Update DOM
    const updateDOM = (targetId) => {
        // 1. Update Section
        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.remove("hidden");
            } else {
                sec.classList.add("hidden");
            }
        });

        // 2. Update Navigasi
        navLinks.forEach(link => {
            const isActive = link.dataset.target === targetId;
            link.classList.toggle("tab-active", isActive);
            
            // Logic pewarnaan teks
            if (isActive) {
                link.classList.remove("text-sage-600");
                const icon = link.querySelector("i");
                if(icon) icon.classList.remove("text-sage-600");
            } else {
                link.classList.add("text-sage-600");
            }
        });
        
        window.scrollTo(0, 0);
    };

    // B. Fungsi Eksekusi Transisi
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

    // C. Event Listeners
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const btn = link.closest("button"); // Handle klik pada icon/text dalam button
            if(btn) showSection(btn.dataset.target);
        });
    });

    if(quickBtns) {
        quickBtns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                showSection(btn.dataset.target);
            });
        });
    }

    updateDOM("beranda");
};

// =============================
// 5. CALCULATOR LOGIC
// =============================
const setupCostEstimator = () => {
    const els = {
        select: document.getElementById("serviceSelect"),
        qty: document.getElementById("quantityInput"),
        payment: document.getElementById("paymentType"),
        check: document.getElementById("followUpCheck"),
        btn: document.getElementById("calculateBtn"),
        total: document.getElementById("estimateTotal"),
        detail: document.getElementById("estimateDetail")
    };
    if (!els.btn) return;

    const calculate = () => {
        const s = services.find(x => x.id === els.select.value);
        if (!s) return;
        
        let subtotal = s.price * (els.qty.value || 1);
        let note = "";

        if (els.payment.value === "bpjs") {
            subtotal *= 0.15;
            note = "Dicover BPJS (Bayar Admin 15%)";
        } else if (els.payment.value === "asuransi") {
            subtotal *= 0.5;
            note = "Dicover Asuransi 50%";
        }

        if (els.check.checked) {
            subtotal += (s.price * 0.7);
            note += " + Kontrol Lanjutan";
        }

        els.total.textContent = formatRupiah(subtotal);
        els.detail.textContent = `Layanan: ${s.name}. ${note}`;
    };

    els.btn.addEventListener("click", calculate);
    [els.select, els.qty, els.payment, els.check].forEach(e => e.addEventListener("change", calculate));
};

// =============================
// 6. TERAPI NAPAS LOGIC
// =============================
let isBreathing = false;
let breatheInterval;


const breatheAudio = new Audio('nafas-manual.mp3'); // Pastikan file audio ada di lokasi yang benar
breatheAudio.volume = 0.3; // Atur volume sesuai kebutuhan

function startBreathing() {
    const circle = document.getElementById('breathe-circle');
    const text = document.getElementById('breathe-text');
    const sub = document.getElementById('breathe-sub');

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
    
    let phase = 'inhale'; 
    breatheInterval = setInterval(() => {

        breatheAudio.pause();
        breatheAudio.currentTime = 0;
        breatheAudio.play();

        if (phase === 'inhale') {
            text.innerText = "Hembus...";
            sub.innerText = "Lewat Mulut";
            circle.style.transform = "scale(1)";
            phase = 'exhale';
        } else {
            text.innerText = "Tarik...";
            sub.innerText = "Lewat Hidung";
            circle.style.transform = "scale(1.5)";
            phase = 'inhale';
        }
    }, 4000);
}

// =============================
// 7. SMART TRIAGE LOGIC
// =============================
function analyzeSymptoms() {
    const physicalEl = document.getElementById("physicalSymptom");
    const mentalEl = document.getElementById("mentalSymptom");
    const resultBox = document.getElementById("recommendationResult");

    if (!physicalEl || !mentalEl || !resultBox) return;
    const physical = physicalEl.value;
    const mental = mentalEl.value;

    // Validasi
    if (!physical || !mental) {
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = `
            <div class="p-3 rounded-xl border border-red-200 bg-red-50 text-xs text-red-800 flex items-center gap-2 animate-pulse">
                <i class="fa-solid fa-circle-exclamation"></i>
                <span>Mohon lengkapi data fisik dan mental.</span>
            </div>`;
        return;
    }

    // --- LOGIKA CERDAS ---
    let diagnosis = "Gangguan Psikosomatis Umum";
    let desc = "Terdeteksi ketidakseimbangan antara respons tubuh terhadap beban pikiran.";
    let riskText = "Rendah";
    let riskClass = "bg-sage-100 text-sage-600 border-sage-200"; // Default Hijau
    let recommendation = "Konsultasi Screening Umum";
    let doctorType = "Dokter Umum";

    if (physical === "maag" && (mental === "stres" || mental === "cemas")) {
        diagnosis = "Gastritis Psikosomatis";
        desc = "Stres memicu saraf vagus meningkatkan asam lambung secara drastis.";
        riskText = "Sedang";
        riskClass = "bg-yellow-100 text-yellow-700 border-yellow-200"; // Kuning
        recommendation = "Paket Gastric-Calm";
        doctorType = "Internis + Hypnotherapy";
    } 
    else if ((physical === "gigi" || physical === "headache") && mental === "stres") {
        diagnosis = "Tension & Bruxism";
        desc = "Otot rahang dan leher menegang akibat penekanan emosi bawah sadar.";
        riskText = "Menengah";
        riskClass = "bg-orange-100 text-orange-700 border-orange-200"; // Oranye
        recommendation = "Terapi Dental-Relief";
        doctorType = "Dokter Gigi (TMJ)";
    }
    else if (physical === "jantung" && (mental === "cemas" || mental === "burnout")) {
        diagnosis = "Cardiac Anxiety";
        desc = "Respons 'fight or flight' memacu jantung berlebih. Butuh penanganan segera.";
        riskText = "Tinggi";
        riskClass = "bg-red-100 text-red-700 border-red-200"; // Merah
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
        </div>
    `;

    // Kita bind event ke tombol baru yang baru saja di-render
    setTimeout(() => {
        const autoBtn = document.getElementById("autoQueueBtn");
        const queueBtn = document.getElementById("takeQueueBtn");
        
        if (autoBtn && queueBtn) {
            autoBtn.addEventListener("click", () => {
                // 1. Scroll ke area antrean agar user lihat
                queueBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // 2. Tunggu scroll selesai dikit, baru klik tombol aslinya
                setTimeout(() => {
                    queueBtn.click();
                    // Opsional: Kasih highlight visual
                    queueBtn.classList.add('ring-2', 'ring-sage-500');
                    setTimeout(() => queueBtn.classList.remove('ring-2', 'ring-sage-500'), 1000);
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

    // Cek tombol antrean
    const queueBtn = document.getElementById("takeQueueBtn");
    
    if (queueBtn) {
        queueBtn.addEventListener("click", () => {
            const num = document.getElementById("queueNumberCard");
            const headNum = document.getElementById("queueNumberHeader");
            const status = document.getElementById("queueStatusCard");
            const headStatus = document.getElementById("queueStatusHeader");
            const terapiTitle = document.getElementById("terapiTitle");
    
            // --- LOGIKA BARU: AUTO INCREMENT (Nomor Nambah Terus) ---
            
            // 1. Ambil nomor terakhir dari LocalStorage (memori browser)
            // Jika belum ada, anggap saja mulai dari 0
            let lastQueue = localStorage.getItem("novaQueueNumber");
            let currentQueue = lastQueue ? parseInt(lastQueue) : 0;
    
            // 2. Tambah 1
            currentQueue = currentQueue + 1;
    
            // 3. Simpan lagi ke memori biar browser ingat
            localStorage.setItem("novaQueueNumber", currentQueue);
    
            // 4. Format jadi A-00X (Contoh: 1 jadi A-001, 12 jadi A-012)
            const formattedQueue = "A-" + String(currentQueue).padStart(3, '0');
    
            // ---------------------------------------------------------
    
            // Tampilkan ke layar
            num.textContent = formattedQueue;
            headNum.textContent = formattedQueue;
            
            status.textContent = "Menunggu Dipanggil";
            headStatus.textContent = "Antrean Aktif";
    
            // Efek denyut
            num.classList.add("queue-pulse");
            setTimeout(() => num.classList.remove("queue-pulse"), 600);
    
            // Pindah halaman dengan animasi transisi
            if (window.showSection) {
                window.showSection("terapi");
            }
            
            // Mulai terapi napas
            startBreathing();
    
            // Update judul terapi
            if (terapiTitle) {
                terapiTitle.textContent = `Menunggu Antrean ${formattedQueue}... Silakan Rileks.`;
            }
        });
    }

    const analyzeBtn = document.getElementById("analyzeBtn");
    if (analyzeBtn) {
        analyzeBtn.addEventListener("click", analyzeSymptoms);
    }
});
