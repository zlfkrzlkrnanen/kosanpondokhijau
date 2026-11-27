import React from "react";

// Ganti data di bawah ini dengan informasi kosan yang sebenarnya.
const WA_NUMBER = "6281234567890";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Halo, saya mau tanya kamar kosan Pondok Hijau."
)}`;

const fasilitas = [
  { nama: "WiFi cepat", ket: "Aktif 24 jam di semua kamar dan area bersama." },
  { nama: "Air bersih lancar", ket: "Air sumur dengan tandon, tidak pernah mati." },
  { nama: "Parkir motor luas", ket: "Terlindung atap dan dijaga setiap malam." },
  { nama: "Dapur bersama", ket: "Kompor, kulkas, dan dispenser tersedia." },
  { nama: "Taman & area santai", ket: "Halaman hijau untuk belajar atau bersantai." },
  { nama: "CCTV & akses kunci", ket: "Pintu gerbang dikunci pukul 23.00." },
];

const kamar = [
  { nama: "Kamar Standar", harga: "700.000", ukuran: "3 x 3 m", isi: ["Kasur & lemari", "Kipas angin", "Kamar mandi luar"] },
  { nama: "Kamar Plus", harga: "950.000", ukuran: "3 x 4 m", isi: ["Kasur & lemari", "Kamar mandi dalam", "Meja belajar"], unggulan: true },
  { nama: "Kamar AC", harga: "1.200.000", ukuran: "3 x 4 m", isi: ["Kasur & lemari", "AC", "Kamar mandi dalam"] },
];

const terdekat = [
  { tempat: "Kampus", jarak: "5 menit jalan kaki" },
  { tempat: "Minimarket", jarak: "2 menit jalan kaki" },
  { tempat: "Warung makan", jarak: "Sepanjang jalan depan kos" },
  { tempat: "Halte angkot", jarak: "3 menit jalan kaki" },
];

/* ---------- Tekstur bahan (skeuomorphism) ---------- */
const lumut = {
  backgroundColor: "#177048",
  backgroundImage:
    "radial-gradient(ellipse at 15% 0%, rgba(190,255,205,.28), transparent 55%), radial-gradient(ellipse at 90% 40%, rgba(120,230,160,.14), transparent 50%), repeating-linear-gradient(90deg, rgba(0,0,0,.05) 0 2px, transparent 2px 10px), linear-gradient(180deg,#22905a,#0e5033)",
};
const kertas = {
  backgroundColor: "#f0faea",
  backgroundImage: "radial-gradient(rgba(40,140,80,.12) 1px, transparent 1px)",
  backgroundSize: "6px 6px",
};
const kulitHijau = {
  backgroundColor: "#0c4a31",
  backgroundImage:
    "radial-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(180deg,#14704a,#083824)",
  backgroundSize: "5px 5px, 100% 100%",
};
const papanTulis = {
  backgroundColor: "#1b3a2d",
  backgroundImage:
    "radial-gradient(ellipse at 25% 15%, rgba(255,255,255,.10), transparent 60%), radial-gradient(rgba(255,255,255,.04) 1px, transparent 1px)",
  backgroundSize: "100% 100%, 4px 4px",
};
const kuningan = {
  background: "linear-gradient(180deg,#f6de95,#c9a24b 50%,#9a7728)",
  color: "#3b2a07",
  textShadow: "0 1px 0 rgba(255,255,255,.55)",
};
const hijauMengkilap = {
  background: "linear-gradient(180deg,#4cc77e,#1b8a4b 55%,#126a38)",
  color: "#fff",
  textShadow: "0 -1px 0 rgba(0,0,0,.4)",
};
const garisBuku = {
  backgroundColor: "#f4fbee",
  backgroundImage:
    "repeating-linear-gradient(180deg, transparent 0 31px, rgba(50,120,80,.28) 31px 32px)",
};

/* Tali anyaman: garis diagonal selang-seling */
const tali = {
  backgroundImage:
    "repeating-linear-gradient(-55deg, #e0bf78 0 4px, #8f6b2c 4px 8px)",
};
const cincin = {
  background: "radial-gradient(circle at 35% 30%, #f6de95, #9a7728)",
};

/* Teks timbul / terukir */
const putihTimbul = { color: "#ffffff", textShadow: "0 2px 0 rgba(0,70,35,.7), 0 4px 8px rgba(0,0,0,.35)" };
const terukir = { color: "#0a3a21", textShadow: "0 1px 0 rgba(235,255,240,.65), 0 -1px 1px rgba(0,0,0,.4)" };
const timbul = { textShadow: "0 1px 0 rgba(255,255,255,.7)" };

/* Bayangan & tombol tekan */
const bayangKertas = "shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_0_36px_rgba(50,150,90,0.22)]";
const tombolBase =
  "inline-block rounded-xl px-6 py-3 text-center font-bold transition active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#0f5a37]";
const tekanHijau =
  "shadow-[0_5px_0_#124327,0_10px_14px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.5)] active:shadow-[0_0_0_#124327,inset_0_3px_8px_rgba(0,0,0,0.45)]";
const tekanKuningan =
  "shadow-[0_5px_0_#6a5014,0_10px_14px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.7)] active:shadow-[0_0_0_#6a5014,inset_0_3px_8px_rgba(0,0,0,0.4)]";

const Pin = () => (
  <span
    aria-hidden="true"
    className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.35)]"
    style={{ background: "radial-gradient(circle at 30% 30%, #ff8a7a, #c0261a 60%, #7d1109)" }}
  />
);

const Lubang = () => (
  <span
    aria-hidden="true"
    className="absolute left-1/2 top-3 h-5 w-5 -translate-x-1/2 rounded-full bg-[#0f3d27] shadow-[inset_0_3px_5px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.5)]"
  />
);

const Beranda = () => {
  return (
    <div className="min-h-screen scroll-smooth text-[#0f3a26]" style={lumut}>
      {/* Hero (tanpa padding atas supaya tali menempel ke navbar) */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
        {/* Papan nama tergantung: dibungkus overflow-hidden supaya jatuh dari balik navbar */}
        <div className="mx-auto max-w-4xl overflow-hidden px-10 pb-12">
          <div className="ph-swing relative pt-28 text-center md:pt-36">
            {/* Tali kiri & kanan, dari tepi navbar sampai papan */}
            <span
              aria-hidden="true"
              className="absolute left-[18%] top-0 h-[7.5rem] w-2 rounded-b-sm shadow-[1px_0_3px_rgba(0,0,0,0.45)] md:h-[9.5rem]"
              style={tali}
            />
            <span
              aria-hidden="true"
              className="absolute right-[18%] top-0 h-[7.5rem] w-2 rounded-b-sm shadow-[1px_0_3px_rgba(0,0,0,0.45)] md:h-[9.5rem]"
              style={tali}
            />

            {/* Card papan */}
            <div
              className="relative z-10 rounded-2xl px-6 py-8 shadow-[0_14px_24px_rgba(0,0,0,0.55),inset_0_2px_0_rgba(255,220,170,0.35),inset_0_-6px_12px_rgba(0,0,0,0.45)]"
              style={{ ...lumut, backgroundColor: "#1f8a55", filter: "brightness(1.05)" }}
            >
              {/* Cincin kuningan tempat tali mengait */}
              <span
                aria-hidden="true"
                className="absolute -top-2.5 left-[calc(18%-0.4rem)] h-5 w-5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(0,0,0,0.35)]"
                style={cincin}
              />
              <span
                aria-hidden="true"
                className="absolute -top-2.5 right-[calc(18%-0.4rem)] h-5 w-5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_-1px_-1px_2px_rgba(0,0,0,0.35)]"
                style={cincin}
              />
              <p className="text-sm font-semibold" style={putihTimbul}>KOSAN</p>
              <h1 className="font-serif text-5xl font-extrabold md:text-7xl" style={putihTimbul}>
                Pondok Hijau
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-6 grid items-center gap-10 md:grid-cols-2">
          {/* Catatan kertas */}
          <div className={`relative rounded-md p-8 ${bayangKertas}`} style={kertas}>
            <Pin />
            <h2 className="font-serif text-3xl font-bold leading-tight md:text-4xl" style={timbul}>
              Kos yang teduh, tenang, dan dekat dengan aktivitasmu.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#2f4a38]">
              Kosan Pondok Hijau menyediakan kamar bersih dengan halaman penuh
              tanaman, cocok untuk mahasiswa dan pekerja yang butuh tempat pulang
              yang nyaman.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a href="#kamar" className={`${tombolBase} ${tekanHijau}`} style={hijauMengkilap}>
                Lihat kamar & harga
              </a>
              <a href={WA_LINK} className={`${tombolBase} ${tekanKuningan}`} style={kuningan}>
                Tanya kamar kosong
              </a>
            </div>
          </div>

          {/* Papan tulis harga */}
          <div
            className="rounded-xl border-[12px] border-[#6fd09a] p-7 text-[#eef5e8] shadow-[0_14px_24px_rgba(0,0,0,0.55),inset_0_0_30px_rgba(0,0,0,0.65)]"
            style={papanTulis}
          >
            <p className="text-sm text-[#cfe3d2]">Mulai dari</p>
            <p className="mt-1 font-serif text-5xl font-extrabold">
              Rp700.000
              <span className="font-sans text-lg font-medium text-[#cfe3d2]"> /bulan</span>
            </p>
            <ul className="mt-6 space-y-3 border-t-2 border-dashed border-white/30 pt-6 text-sm">
              <li className="flex justify-between"><span className="text-[#cfe3d2]">Kamar tersedia</span><span className="font-semibold">4 kamar</span></li>
              <li className="flex justify-between"><span className="text-[#cfe3d2]">Listrik & air</span><span className="font-semibold">Sudah termasuk</span></li>
              <li className="flex justify-between"><span className="text-[#cfe3d2]">Jenis kos</span><span className="font-semibold">Campur, per lantai</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section id="fasilitas" className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-serif text-3xl font-bold text-[#f3ffe9] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] md:text-4xl">
            Fasilitas di Pondok Hijau
          </h2>
          <p className="mt-2 max-w-xl text-[#d8f6dd]">
            Hal-hal yang biasanya dicari penghuni kos, sudah tersedia sejak hari pertama.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {fasilitas.map((f, i) => (
              <div
                key={f.nama}
                className={`relative rounded-sm p-6 pt-8 ${bayangKertas} ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                style={kertas}
              >
                <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-yellow-200/70 shadow-sm" />
                <h3 className="font-serif text-lg font-bold" style={timbul}>{f.nama}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#2f4a38]">{f.ket}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kamar & harga */}
      <section id="kamar" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-serif text-3xl font-bold text-[#f3ffe9] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] md:text-4xl">
          Pilih kamar sesuai kebutuhan
        </h2>
        <p className="mt-2 text-[#d8f6dd]">Harga per bulan, minimal sewa 3 bulan.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {kamar.map((k) => (
            <article
              key={k.nama}
              className={`relative flex flex-col rounded-3xl p-6 pt-14 ${
                k.unggulan
                  ? "text-white shadow-[0_12px_22px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-8px_16px_rgba(0,0,0,0.35)]"
                  : bayangKertas
              }`}
              style={k.unggulan ? kulitHijau : kertas}
            >
              {k.unggulan && (
                <span aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[1.25rem] border-2 border-dashed border-amber-200/60" />
              )}
              <Lubang />
              <h3 className="relative font-serif text-xl font-bold" style={k.unggulan ? { textShadow: "0 -1px 0 rgba(0,0,0,.5)" } : timbul}>
                {k.nama}
              </h3>
              <p className={`relative text-sm ${k.unggulan ? "text-green-100" : "text-[#4a6552]"}`}>Ukuran {k.ukuran}</p>
              <p className="relative mt-5 font-serif text-3xl font-extrabold">
                Rp{k.harga}
                <span className="font-sans text-base font-medium opacity-70"> /bulan</span>
              </p>
              <ul className="relative mt-5 flex-1 space-y-2 text-sm">
                {k.isi.map((i) => (
                  <li key={i}>✓ {i}</li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                className={`relative mt-6 ${tombolBase} ${k.unggulan ? tekanKuningan : tekanHijau}`}
                style={k.unggulan ? kuningan : hijauMengkilap}
              >
                Pesan kamar ini
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Lokasi */}
      <section id="lokasi" className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          {/* Buku catatan bergaris */}
          <div className="relative rounded-md py-8 pl-16 pr-8 shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={garisBuku}>
            <span aria-hidden="true" className="absolute inset-y-0 left-12 w-0.5 bg-red-400/60" />
            <span aria-hidden="true" className="absolute left-4 top-0 flex h-full flex-col justify-around py-6">
              {[0, 1, 2, 3].map((n) => (
                <i key={n} className="h-4 w-4 rounded-full bg-[#174a2e] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
              ))}
            </span>
            <h2 className="font-serif text-3xl font-bold" style={timbul}>Lokasi strategis</h2>
            <p className="mt-2 text-[#2f4a38]">Jl. Contoh Raya No. 12, Kelurahan Sukamaju, Kota Anda.</p>
            <ul className="mt-6">
              {terdekat.map((t) => (
                <li key={t.tempat} className="flex justify-between border-b border-[#3f7a55]/30 py-3 text-sm">
                  <span className="font-bold">{t.tempat}</span>
                  <span className="text-[#2f4a38]">{t.jarak}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bingkai peta (cekung) */}
          {/* Ganti isi kotak ini dengan iframe Google Maps kosan Anda */}
          <div className="rounded-2xl border-[14px] border-[#6fd09a] shadow-[0_12px_22px_rgba(0,0,0,0.5)]">
            <div className="flex h-full min-h-64 items-center justify-center bg-[#d4eccf] p-6 text-center text-sm text-[#3a5545] shadow-[inset_0_6px_16px_rgba(0,0,0,0.55)]">
              Tempel iframe Google Maps di sini
            </div>
          </div>
        </div>
      </section>

      {/* Kontak: plakat kuningan */}
      <section id="kontak" className="mx-auto max-w-3xl px-5 py-16 text-center">
        <div
          className="rounded-2xl p-10 shadow-[0_14px_26px_rgba(0,0,0,0.55),inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-6px_12px_rgba(90,60,10,0.5)]"
          style={kuningan}
        >
          <h2 className="font-serif text-3xl font-bold">Mau lihat kamarnya langsung?</h2>
          <p className="mx-auto mt-3 max-w-md text-[#4a3606]">
            Kirim pesan ke pemilik kos, kami balas setiap hari pukul 08.00–21.00.
          </p>
          <a href={WA_LINK} className={`mt-8 ${tombolBase} ${tekanHijau} px-10`} style={hijauMengkilap}>
            Chat WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-black/30 bg-black/25 py-6 text-center text-sm text-[#d8f6dd]">
        © {new Date().getFullYear()} Kosan Pondok Hijau
      </footer>

      {/* Animasi jatuh + ayunan bandul teredam */}
      <style>{`
        .ph-swing {
          transform-origin: 50% 0;
          animation: ph-drop-swing 3.4s both;
          will-change: transform;
        }
        @keyframes ph-drop-swing {
          0%   { transform: translateY(-110%) rotate(0deg);   animation-timing-function: cubic-bezier(0.55, 0, 1, 0.6); }
          36%  { transform: translateY(0)     rotate(0deg);   animation-timing-function: ease-out; }
          44%  { transform: translateY(-2.5%) rotate(1.5deg); animation-timing-function: ease-in; }
          50%  { transform: translateY(0)     rotate(5deg);   animation-timing-function: ease-in-out; }
          61%  { transform: rotate(-3.8deg);                  animation-timing-function: ease-in-out; }
          72%  { transform: rotate(2.4deg);                   animation-timing-function: ease-in-out; }
          82%  { transform: rotate(-1.3deg);                  animation-timing-function: ease-in-out; }
          91%  { transform: rotate(0.6deg);                   animation-timing-function: ease-in-out; }
          100% { transform: translateY(0)     rotate(0deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ph-swing { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default Beranda;