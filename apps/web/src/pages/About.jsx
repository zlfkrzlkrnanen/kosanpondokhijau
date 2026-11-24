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

const About = () => {
  return (
    <div className="min-h-screen bg-green-50 text-green-950">
      {/* Pembuka */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <h1 className="text-4xl font-extrabold leading-tight text-green-900 md:text-5xl">
          Tentang Kosan Pondok Hijau
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-green-900/80">
          Pondok Hijau berawal dari rumah keluarga yang kami ubah menjadi kos
          sederhana untuk mahasiswa di sekitar kampus. Sampai sekarang, kami
          masih mengelolanya sendiri, sehingga setiap penghuni dikenal dan
          setiap keluhan bisa langsung diselesaikan.
        </p>
      </section>

      {/* Fakta singkat */}
      <section className="bg-green-900 py-12 text-green-50">
        <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-5 md:grid-cols-4">
          {fakta.map((f) => (
            <div key={f.label}>
              <dt className="text-sm text-green-200">{f.label}</dt>
              <dd className="mt-1 text-3xl font-extrabold">{f.nilai}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Cerita */}
      <section className="mx-auto grid max-w-4xl gap-8 px-5 py-16 md:grid-cols-2">
        <h2 className="text-3xl font-bold text-green-900">
          Kenapa kami membuat kos ini
        </h2>
        <div className="space-y-4 leading-relaxed text-green-900/80">
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

      {/* Nilai */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-3xl font-bold text-green-900">
            Yang kami jaga untuk penghuni
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {nilai.map((n) => (
              <div key={n.judul} className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold text-green-900">{n.judul}</h3>
                <p className="mt-1 text-sm leading-relaxed text-green-900/70">
                  {n.isi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Peraturan */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-3xl font-bold text-green-900">Peraturan kos</h2>
        <p className="mt-2 text-green-900/70">
          Dibuat supaya semua penghuni nyaman. Mohon dibaca sebelum memesan kamar.
        </p>
        <ul className="mt-8 divide-y divide-green-900/10 rounded-2xl border border-green-900/15 bg-white">
          {peraturan.map((p) => (
            <li key={p} className="px-5 py-4 text-sm leading-relaxed">
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* Ajakan */}
      <section className="bg-green-100 py-16 text-center">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="text-3xl font-bold text-green-900">
            Ingin berkunjung dulu?
          </h2>
          <p className="mt-3 text-green-900/70">
            Datang dan lihat kamarnya langsung, tanpa kewajiban memesan.
          </p>
          <a
            href={WA_LINK}
            className="mt-8 inline-block rounded-full bg-green-800 px-8 py-3 font-semibold text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
          >
            Atur jadwal kunjungan
          </a>
        </div>
      </section>
    </div>
  )
}

export default About