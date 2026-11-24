import React, { useState } from "react";

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
  {
    nama: "Kamar Standar",
    harga: "700.000",
    ukuran: "3 x 3 m",
    isi: ["Kasur & lemari", "Kipas angin", "Kamar mandi luar"],
  },
  {
    nama: "Kamar Plus",
    harga: "950.000",
    ukuran: "3 x 4 m",
    isi: ["Kasur & lemari", "Kamar mandi dalam", "Meja belajar"],
    unggulan: true,
  },
  {
    nama: "Kamar AC",
    harga: "1.200.000",
    ukuran: "3 x 4 m",
    isi: ["Kasur & lemari", "AC", "Kamar mandi dalam"],
  },
];

const terdekat = [
  { tempat: "Kampus", jarak: "5 menit jalan kaki" },
  { tempat: "Minimarket", jarak: "2 menit jalan kaki" },
  { tempat: "Warung makan", jarak: "Sepanjang jalan depan kos" },
  { tempat: "Halte angkot", jarak: "3 menit jalan kaki" },
];

const Beranda = () => {
  const [terbuka, setTerbuka] = useState(false);

  return (
    <div className="min-h-screen bg-green-50 text-green-950 scroll-smooth">
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-green-900 md:text-5xl">
            Kos yang teduh, tenang, dan dekat dengan aktivitasmu.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-green-900/80">
            Kosan Pondok Hijau menyediakan kamar bersih dengan halaman penuh
            tanaman, cocok untuk mahasiswa dan pekerja yang butuh tempat pulang
            yang nyaman.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#kamar"
              className="rounded-full bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              Lihat kamar & harga
            </a>
            <a
              href={WA_LINK}
              className="rounded-full border border-green-800 px-6 py-3 font-semibold text-green-900 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              Tanya kamar kosong
            </a>
          </div>
        </div>

        {/* Kartu harga: elemen utama hero */}
        <div className="rounded-3xl bg-green-900 p-8 text-green-50 shadow-xl">
          <p className="text-sm text-green-200">Mulai dari</p>
          <p className="mt-1 text-5xl font-extrabold">
            Rp700.000
            <span className="text-lg font-medium text-green-200"> /bulan</span>
          </p>
          <ul className="mt-6 space-y-3 border-t border-green-50/20 pt-6 text-sm">
            <li className="flex justify-between">
              <span className="text-green-200">Kamar tersedia</span>
              <span className="font-semibold">4 kamar</span>
            </li>
            <li className="flex justify-between">
              <span className="text-green-200">Listrik & air</span>
              <span className="font-semibold">Sudah termasuk</span>
            </li>
            <li className="flex justify-between">
              <span className="text-green-200">Jenis kos</span>
              <span className="font-semibold">Campur, per lantai</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Fasilitas */}
      <section id="fasilitas" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-green-900">Fasilitas di Pondok Hijau</h2>
          <p className="mt-2 max-w-xl text-green-900/70">
            Hal-hal yang biasanya dicari penghuni kos, sudah tersedia sejak hari pertama.
          </p>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {fasilitas.map((f) => (
              <div key={f.nama} className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-green-900">{f.nama}</h3>
                <p className="mt-1 text-sm leading-relaxed text-green-900/70">{f.ket}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kamar & harga */}
      <section id="kamar" className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="text-3xl font-bold text-green-900">Pilih kamar sesuai kebutuhan</h2>
        <p className="mt-2 text-green-900/70">Harga per bulan, minimal sewa 3 bulan.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {kamar.map((k) => (
            <article
              key={k.nama}
              className={`flex flex-col rounded-2xl p-6 ${
                k.unggulan
                  ? "bg-green-800 text-white"
                  : "border border-green-900/15 bg-white"
              }`}
            >
              <h3 className="text-xl font-bold">{k.nama}</h3>
              <p className={`text-sm ${k.unggulan ? "text-green-200" : "text-green-900/60"}`}>
                Ukuran {k.ukuran}
              </p>
              <p className="mt-5 text-3xl font-extrabold">
                Rp{k.harga}
                <span className="text-base font-medium opacity-70"> /bulan</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm">
                {k.isi.map((i) => (
                  <li key={i}>✓ {i}</li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                className={`mt-6 rounded-full px-5 py-2.5 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                  k.unggulan
                    ? "bg-white text-green-900 hover:bg-green-100"
                    : "bg-green-800 text-white hover:bg-green-900"
                }`}
              >
                Pesan kamar ini
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Lokasi */}
      <section id="lokasi" className="bg-green-100 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-green-900">Lokasi strategis</h2>
            <p className="mt-2 text-green-900/70">
              Jl. Contoh Raya No. 12, Kelurahan Sukamaju, Kota Anda.
            </p>
            <ul className="mt-6 divide-y divide-green-900/10">
              {terdekat.map((t) => (
                <li key={t.tempat} className="flex justify-between py-3 text-sm">
                  <span className="font-semibold">{t.tempat}</span>
                  <span className="text-green-900/70">{t.jarak}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Ganti iframe ini dengan link embed Google Maps kosan Anda */}
          <div className="flex min-h-64 items-center justify-center rounded-2xl border-2 border-dashed border-green-700/40 bg-green-50 p-6 text-center text-sm text-green-900/70">
            Tempel iframe Google Maps di sini
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="mx-auto max-w-6xl px-5 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-900">Mau lihat kamarnya langsung?</h2>
        <p className="mx-auto mt-3 max-w-md text-green-900/70">
          Kirim pesan ke pemilik kos, kami balas setiap hari pukul 08.00–21.00.
        </p>
        <a
          href={WA_LINK}
          className="mt-8 inline-block rounded-full bg-green-800 px-8 py-3 font-semibold text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        >
          Chat WhatsApp
        </a>
      </section>

      <footer className="border-t border-green-900/10 py-6 text-center text-sm text-green-900/60">
        © {new Date().getFullYear()} Kosan Pondok Hijau
      </footer>
    </div>
  );
};

export default Beranda;