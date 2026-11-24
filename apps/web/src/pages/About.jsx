import React from 'react'

// Ganti data di bawah ini dengan informasi kosan yang sebenarnya.
const WA_LINK = `https://wa.me/6281234567890?text=${encodeURIComponent(
  'Halo, saya mau tanya tentang kosan Pondok Hijau.'
)}`

const fakta = [
  { nilai: '2015', label: 'Mulai beroperasi' },
  { nilai: '16', label: 'Kamar tersedia' },
  { nilai: '5 menit', label: 'Jalan kaki ke kampus' },
  { nilai: '80+', label: 'Penghuni yang pernah tinggal' },
]

const nilai = [
  {
    judul: 'Bersih dan rapi',
    isi: 'Area bersama dibersihkan setiap hari, jadi penghuni tidak perlu membagi jadwal piket.',
  },
  {
    judul: 'Tenang untuk belajar dan istirahat',
    isi: 'Jam tenang berlaku mulai pukul 22.00, supaya semua orang bisa tidur dan belajar dengan nyaman.',
  },
  {
    judul: 'Hijau dan sejuk',
    isi: 'Halaman penuh tanaman membuat udara lebih segar dan suasana lebih santai.',
  },
  {
    judul: 'Pemilik yang mudah dihubungi',
    isi: 'Ada masalah dengan listrik atau air? Kirim pesan, biasanya kami tanggapi di hari yang sama.',
  },
]

const peraturan = [
  'Gerbang dikunci pukul 23.00, tamu lawan jenis tidak boleh masuk kamar.',
  'Jaga kebersihan kamar mandi dan dapur bersama setelah dipakai.',
  'Dilarang merokok di dalam kamar dan area bersama.',
  'Pembayaran dilakukan paling lambat tanggal 5 setiap bulan.',
  'Hewan peliharaan tidak diperkenankan.',
]

/* ---------- Bahan & gaya (sama dengan Beranda) ---------- */
const lumut = {
  backgroundColor: '#177048',
  backgroundImage:
    'radial-gradient(ellipse at 15% 0%, rgba(190,255,205,.28), transparent 55%), radial-gradient(ellipse at 90% 40%, rgba(120,230,160,.14), transparent 50%), repeating-linear-gradient(90deg, rgba(0,0,0,.05) 0 2px, transparent 2px 10px), linear-gradient(180deg,#22905a,#0e5033)',
}
const kertas = {
  backgroundColor: '#f0faea',
  backgroundImage: 'radial-gradient(rgba(40,140,80,.12) 1px, transparent 1px)',
  backgroundSize: '6px 6px',
}
const garisBuku = {
  backgroundColor: '#f4fbee',
  backgroundImage:
    'repeating-linear-gradient(180deg, transparent 0 31px, rgba(50,120,80,.28) 31px 32px)',
}
const kuningan = {
  background: 'linear-gradient(180deg,#f6de95,#c9a24b 50%,#9a7728)',
  color: '#3b2a07',
  textShadow: '0 1px 0 rgba(255,255,255,.55)',
}
const hijauMengkilap = {
  background: 'linear-gradient(180deg,#4cc77e,#1b8a4b 55%,#126a38)',
  color: '#fff',
  textShadow: '0 -1px 0 rgba(0,0,0,.4)',
}
const putihTimbul = {
  color: '#ffffff',
  textShadow: '0 2px 0 rgba(0,70,35,.7), 0 4px 8px rgba(0,0,0,.35)',
}
const timbul = { textShadow: '0 1px 0 rgba(255,255,255,.7)' }

const bayangKertas =
  'shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_0_36px_rgba(50,150,90,0.22)]'
const tombolBase =
  'inline-block rounded-xl px-8 py-3 text-center font-bold transition active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#0f5a37]'
const tekanHijau =
  'shadow-[0_5px_0_#124327,0_10px_14px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.5)] active:shadow-[0_0_0_#124327,inset_0_3px_8px_rgba(0,0,0,0.45)]'

const Pin = () => (
  <span
    aria-hidden="true"
    className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.35)]"
    style={{ background: 'radial-gradient(circle at 30% 30%, #ff8a7a, #c0261a 60%, #7d1109)' }}
  />
)

const About = () => {
  return (
    <div className="min-h-screen text-[#0f3a26]" style={lumut}>
      {/* Pembuka: papan nama + catatan kertas */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="relative mx-auto pt-14 text-center">
          <span aria-hidden="true" className="absolute left-[18%] top-0 h-14 w-1.5 bg-gradient-to-r from-[#d8c08a] to-[#8f7440] shadow-md" />
          <span aria-hidden="true" className="absolute right-[18%] top-0 h-14 w-1.5 bg-gradient-to-r from-[#d8c08a] to-[#8f7440] shadow-md" />
          <div
            className="rounded-2xl px-6 py-8 shadow-[0_14px_24px_rgba(0,0,0,0.55),inset_0_2px_0_rgba(255,220,170,0.35),inset_0_-6px_12px_rgba(0,0,0,0.45)]"
            style={{ ...lumut, backgroundColor: '#1f8a55', filter: 'brightness(1.05)' }}
          >
            <h1 className="font-serif text-4xl font-extrabold leading-tight md:text-5xl" style={putihTimbul}>
              Tentang Kosan Pondok Hijau
            </h1>
          </div>
        </div>

        <div className={`relative mx-auto mt-14 max-w-2xl rounded-md p-8 ${bayangKertas}`} style={kertas}>
          <Pin />
          <p className="text-lg leading-relaxed text-[#2f4a38]">
            Pondok Hijau berawal dari rumah keluarga yang kami ubah menjadi kos
            sederhana untuk mahasiswa di sekitar kampus. Sampai sekarang, kami
            masih mengelolanya sendiri, sehingga setiap penghuni dikenal dan
            setiap keluhan bisa langsung diselesaikan.
          </p>
        </div>
      </section>

      {/* Fakta singkat: plakat kuningan */}
      <section className="py-8">
        <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-5 px-5 md:grid-cols-4">
          {fakta.map((f) => (
            <div
              key={f.label}
              className="rounded-xl p-5 text-center shadow-[0_8px_16px_rgba(0,0,0,0.45),inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-4px_8px_rgba(90,60,10,0.45)]"
              style={kuningan}
            >
              <dd className="font-serif text-3xl font-extrabold">{f.nilai}</dd>
              <dt className="mt-1 text-sm font-semibold text-[#4a3606]">{f.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Cerita */}
      <section className="mx-auto grid max-w-4xl items-center gap-8 px-5 py-16 md:grid-cols-2">
        <h2 className="font-serif text-3xl font-bold text-[#f3ffe9] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] md:text-4xl">
          Kenapa kami membuat kos ini
        </h2>
        <div className={`space-y-4 rounded-md p-7 leading-relaxed text-[#2f4a38] ${bayangKertas}`} style={kertas}>
          <p>
            Dulu kami sering melihat mahasiswa kesulitan mencari kos yang
            bersih, aman, dan harganya masuk akal. Dari situ kami memutuskan
            membuka kamar di rumah sendiri dan menanam banyak pohon di halaman.
          </p>
          <p>
            Tujuan kami sederhana: penghuni merasa pulang ke rumah, bukan
            sekadar menyewa kamar.
          </p>
        </div>
      </section>

      {/* Nilai: memo kertas bertempel selotip */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="font-serif text-3xl font-bold text-[#f3ffe9] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] md:text-4xl">
            Yang kami jaga untuk penghuni
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {nilai.map((n, i) => (
              <div
                key={n.judul}
                className={`relative rounded-sm p-6 pt-8 ${bayangKertas} ${i % 2 ? 'rotate-1' : '-rotate-1'}`}
                style={kertas}
              >
                <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-yellow-200/70 shadow-sm" />
                <h3 className="font-serif text-lg font-bold" style={timbul}>{n.judul}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#2f4a38]">{n.isi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peraturan: buku catatan bergaris */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="relative rounded-md py-8 pl-16 pr-8 shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={garisBuku}>
          <span aria-hidden="true" className="absolute inset-y-0 left-12 w-0.5 bg-red-400/60" />
          <span aria-hidden="true" className="absolute left-4 top-0 flex h-full flex-col justify-around py-6">
            {[0, 1, 2, 3].map((n) => (
              <i key={n} className="h-4 w-4 rounded-full bg-[#174a2e] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
            ))}
          </span>
          <h2 className="font-serif text-3xl font-bold" style={timbul}>Peraturan kos</h2>
          <p className="mt-2 text-[#2f4a38]">
            Dibuat supaya semua penghuni nyaman. Mohon dibaca sebelum memesan kamar.
          </p>
          <ul className="mt-6">
            {peraturan.map((p) => (
              <li key={p} className="border-b border-[#3f7a55]/30 py-3 text-sm leading-relaxed text-[#2f4a38]">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ajakan: plakat kuningan */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <div
          className="rounded-2xl p-10 shadow-[0_14px_26px_rgba(0,0,0,0.55),inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-6px_12px_rgba(90,60,10,0.5)]"
          style={kuningan}
        >
          <h2 className="font-serif text-3xl font-bold">Ingin berkunjung dulu?</h2>
          <p className="mx-auto mt-3 max-w-md text-[#4a3606]">
            Datang dan lihat kamarnya langsung, tanpa kewajiban memesan.
          </p>
          <a href={WA_LINK} className={`mt-8 ${tombolBase} ${tekanHijau}`} style={hijauMengkilap}>
            Atur jadwal kunjungan
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
