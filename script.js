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
// 2. DATA LAYANAN (COPYWRITING PSIKOSOMATIS)
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

// Helper Format Rupiah
const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(value);
};

// =============================
// 3. RENDER FUNCTIONS (LIGHT MODE STYLE)
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
        // Table Row
        const tr = document.createElement("tr");
        tr.className = "hover:bg-sage-50 transition-colors";
        tr.innerHTML = `
            <td class="px-4 py-3">
                <p class="font-medium text-sage-900">${s.name}</p>
                <p class="text-[10px] text-gray-400 sm:hidden">${s.category}</p>
            </td>
            <td class="px-4 py-3 text-right font-bold text-sage-600">${formatRupiah(s.price)}</td>`;
        tbody.appendChild(tr);
        // Select Option
        const opt = document.createElement("option");
        opt.value = s.id;
        opt.textContent = `${s.name} (${formatRupiah(s.price)})`;
        select.appendChild(opt);
    });
};

// =============================
// 4. SPA SYSTEM (TAB SWITCHING)
// =============================
const setupTabSwitching = () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".spa-section");
    const quickBtns = document.querySelectorAll(".quick-nav"); // Tombol di Hero

        const showSection = (targetId) => {
        sections.forEach(sec => {
            if (sec.id === targetId) {
                sec.classList.remove("hidden");
                setTimeout(() => {
                    sec.classList.remove("opacity-0", "translate-y-2");
                    sec.classList.add("opacity-100", "translate-y-0");
                }, 10);
            } else {
                sec.classList.add("opacity-0", "translate-y-2");
                sec.classList.remove("opacity-100", "translate-y-0");
                setTimeout(() => sec.classList.add("hidden"), 300);
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle("tab-active", link.dataset.target === targetId);
            // Reset text colors
            if (link.dataset.target === targetId) {
                link.classList.remove("text-sage-600");
            } else {
                link.classList.add("text-sage-600");
            }
        });
    };

    // Expose untuk fitur lain (antrean, triage)
    window.showSection = showSection;


    // Event Listeners Navbar
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showSection(link.dataset.target);
        });
    });

    // Event Listeners Quick Buttons (Hero)
    quickBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            showSection(btn.dataset.target);
        });
    });

    // Default View
    showSection("beranda");
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
            subtotal *= 0.15; // Diskon BPJS (Simulasi)
            note = "Dicover BPJS (Bayar Admin 15%)";
        } else if (els.payment.value === "asuransi") {
            subtotal *= 0.5; // Diskon Asuransi
            note = "Dicover Asuransi 50%";
        }

        if (els.check.checked) {
            subtotal += (s.price * 0.7); // Tambah kontrol
            note += " + Kontrol Lanjutan";
        }

        els.total.textContent = formatRupiah(subtotal);
        els.detail.textContent = `Layanan: ${s.name}. ${note}`;
    };

    els.btn.addEventListener("click", calculate);
    // Auto calc on change
    [els.select, els.qty, els.payment, els.check].forEach(e => e.addEventListener("change", calculate));
};

// =============================
// 6. TERAPI NAPAS LOGIC
// =============================
let isBreathing = false;
let breatheInterval;

function startBreathing() {
    const circle = document.getElementById('breathe-circle');
    const text = document.getElementById('breathe-text');
    const sub = document.getElementById('breathe-sub');
    const playIcon = document.getElementById('play-icon');

    if (isBreathing) {
        clearInterval(breatheInterval);
        isBreathing = false;
        text.innerText = "Mulai";
        sub.innerText = "Tap Disini";
        circle.style.transform = "scale(1)";
        circle.style.opacity = "0.2";
        playIcon.classList.remove('hidden');
        return;
    }

    isBreathing = true;
    playIcon.classList.add('hidden');
    text.innerText = "Tarik...";
    sub.innerText = "Lewat Hidung";
    circle.style.transform = "scale(1.5)";
    circle.style.opacity = "0.5";

    let phase = 'inhale'; 
    breatheInterval = setInterval(() => {
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

    // Jika belum memilih keduanya, jangan tampilkan apapun
    if (!physical || !mental) {
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = `
            <div class="p-3 rounded-xl border border-amber-200 bg-amber-50 text-xs text-amber-800">
                Silakan pilih <strong>keluhan fisik</strong> dan <strong>kondisi pikiran</strong> terlebih dahulu.
            </div>
        `;
        return;
    }

    let title = "Konsultasi Screening Umum";
    let desc =
        "Tim front doctor kami akan melakukan pemeriksaan awal untuk memetakan hubungan antara keluhan fisik dan beban mental Anda.";

    if (physical === "maag" && mental === "stres") {
        title = "Paket Gastric-Calm (Internis + Mindfulness)";
        desc =
            "Keluhan lambung yang berkaitan dengan stres sering kali membutuhkan kolaborasi dokter penyakit dalam dan sesi mindfulness singkat untuk menurunkan respons cemas tubuh.";
    } else if (physical === "gigi" && mental === "cemas") {
        title = "Paket Dental-Relief (Dokter Gigi TMJ + Terapi Napas)";
        desc =
            "Bruxism atau gigi menggeretak biasanya muncul saat cemas. Kombinasi evaluasi sendi rahang (TMJ) dan latihan napas terstruktur membantu merilekskan otot rahang.";
    }

    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `
        <div class="p-3 rounded-xl border border-sage-200 bg-sage-50 text-sm">
            <p class="text-[11px] font-semibold text-sage-600 uppercase tracking-wide mb-1">Rekomendasi Awal</p>
            <p class="font-semibold text-sage-900 mb-1">${title}</p>
            <p class="text-xs text-gray-500 mb-2">${desc}</p>
            <button
                type="button"
                id="priorityQueueBtn"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sage-600 text-white text-xs font-semibold hover:bg-sage-700 transition"
            >
                <i class="fa-solid fa-bell"></i>
                Ambil Antrean Prioritas
            </button>
        </div>
    `;

    // Tombol antrean prioritas → reuse logika antrean utama
    const priorityBtn = document.getElementById("priorityQueueBtn");
    const queueBtn = document.getElementById("takeQueueBtn");
    if (priorityBtn && queueBtn) {
        priorityBtn.addEventListener("click", () => queueBtn.click());
    }
}


// =============================
// INIT
// =============================
document.addEventListener("DOMContentLoaded", () => {
    renderDoctors();
    renderServices();
    setupTabSwitching();
    setupCostEstimator();

    // Setup Queue Button
    const queueBtn = document.getElementById("takeQueueBtn");
    if (queueBtn) {
        queueBtn.addEventListener("click", () => {
            const num = document.getElementById("queueNumberCard");
            const headNum = document.getElementById("queueNumberHeader");
            const status = document.getElementById("queueStatusCard");
            const headStatus = document.getElementById("queueStatusHeader");
            const terapiTitle = document.getElementById("terapiTitle");

            // Nomor antrean (sementara fixed A-005)
            num.textContent = "A-005";
            headNum.textContent = "A-005";
            status.textContent = "Menunggu Dipanggil";
            headStatus.textContent = "Antrean Aktif";

            num.classList.add("queue-pulse");
            setTimeout(() => num.classList.remove("queue-pulse"), 600);

            // Pindah otomatis ke tab Terapi + mulai terapi napas
            if (window.showSection) {
                window.showSection("terapi");
            }
            startBreathing();

            // Update judul terapi sesuai requirement
            if (terapiTitle) {
                terapiTitle.textContent = `Menunggu Antrean ${num.textContent}... Silakan Rileks.`;
            }
        });
    }

    // Setup Smart Triage Button
    const analyzeBtn = document.getElementById("analyzeBtn");
    if (analyzeBtn) {
        analyzeBtn.addEventListener("click", analyzeSymptoms);
    }
});
