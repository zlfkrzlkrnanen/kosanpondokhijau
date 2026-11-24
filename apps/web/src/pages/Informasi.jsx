import React, { useState } from 'react'

// Ganti data di bawah ini dengan informasi kosan yang sebenarnya.
const WA_LINK = `https://wa.me/6281234567890?text=${encodeURIComponent(
  'Halo, saya mau tanya informasi kosan Pondok Hijau.'
)}`

const biaya = [
  { nama: 'Sewa kamar', ket: 'Per bulan, sesuai tipe kamar', nilai: 'Rp700.000 – Rp1.200.000' },
  { nama: 'Uang jaminan', ket: 'Dikembalikan saat keluar jika tidak ada kerusakan', nilai: 'Rp300.000' },
  { nama: 'Listrik', ket: 'Sudah termasuk untuk pemakaian wajar', nilai: 'Termasuk' },
  { nama: 'Air & WiFi', ket: 'Tanpa biaya tambahan', nilai: 'Termasuk' },
  { nama: 'Tambahan penghuni', ket: 'Untuk kamar berdua, per bulan', nilai: 'Rp200.000' },
]

const alur = [
  { judul: 'Hubungi pemilik', isi: 'Kirim pesan lewat WhatsApp untuk menanyakan kamar yang kosong.' },
  { judul: 'Lihat kamar langsung', isi: 'Datang pada jam 08.00–20.00 untuk melihat kamar dan lingkungan sekitar.' },
  { judul: 'Bayar uang muka', isi: 'Transfer uang muka Rp300.000 untuk mengunci kamar selama 3 hari.' },
  { judul: 'Lunasi dan masuk', isi: 'Bayar sisa sewa bulan pertama, lalu terima kunci kamar.' },
]

const dokumen = [
  'Fotokopi KTP atau kartu pelajar/mahasiswa',
  'Nomor HP aktif dan nomor kontak keluarga',
  'Pas foto 3 x 4 sebanyak 1 lembar',
]

const faq = [
  {
    tanya: 'Berapa minimal lama sewa?',
    jawab: 'Minimal 3 bulan. Untuk sewa 6 bulan atau 1 tahun, tanyakan potongan harganya ke pemilik.',
  },
  {
    tanya: 'Apakah boleh membawa kasur atau barang sendiri?',
    jawab: 'Boleh, selama muat di kamar dan tidak menghalangi jalan. Elektronik berdaya besar seperti penanak nasi perlu izin dulu.',
  },
  {
    tanya: 'Apakah tersedia laundry?',
    jawab: 'Tersedia tempat jemur bersama. Untuk laundry kiloan, ada beberapa usaha laundry dalam jarak 200 meter.',
  },
  {
    tanya: 'Bagaimana jika ingin berhenti sebelum masa sewa habis?',
    jawab: 'Beri tahu pemilik paling lambat 2 minggu sebelumnya. Uang jaminan dikembalikan setelah kamar diperiksa.',
  },
  {
    tanya: 'Apakah ada jam malam?',
    jawab: 'Gerbang dikunci pukul 23.00. Jika pulang lebih larut, kabari pemilik terlebih dahulu.',
  },
]

const Informasi = () => {
  const [terbuka, setTerbuka] = useState(0)

  return (
    <div className="min-h-screen bg-green-50 text-green-950">
      {/* Pembuka */}
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <h1 className="text-4xl font-extrabold leading-tight text-green-900 md:text-5xl">
          Informasi sebelum Anda memesan kamar
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-green-900/80">
          Biaya, cara pemesanan, dan jawaban dari pertanyaan yang paling sering
          kami terima, semuanya ada di halaman ini.
        </p>
      </section>

      {/* Biaya */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-3xl font-bold text-green-900">Rincian biaya</h2>
          <ul className="mt-8 divide-y divide-green-900/10 rounded-2xl border border-green-900/15">
            {biaya.map((b) => (
              <li
                key={b.nama}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-green-900">{b.nama}</p>
                  <p className="text-sm text-green-900/70">{b.ket}</p>
                </div>
                <p className="font-bold text-green-800">{b.nilai}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Alur pemesanan */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-3xl font-bold text-green-900">Cara memesan kamar</h2>
        <ol className="mt-10 space-y-6">
          {alur.map((a, i) => (
            <li key={a.judul} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-800 font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-green-900">{a.judul}</h3>
                <p className="mt-1 text-sm leading-relaxed text-green-900/70">{a.isi}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl bg-green-100 p-6">
          <h3 className="font-semibold text-green-900">Dokumen yang perlu disiapkan</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-green-900/80">
            {dokumen.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-3xl font-bold text-green-900">Pertanyaan yang sering diajukan</h2>
          <div className="mt-8 divide-y divide-green-900/10 rounded-2xl border border-green-900/15">
            {faq.map((f, i) => {
              const aktif = terbuka === i
              return (
                <div key={f.tanya}>
                  <button
                    onClick={() => setTerbuka(aktif ? null : i)}
                    aria-expanded={aktif}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-green-900 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
                  >
                    {f.tanya}
                    <span className="text-xl text-green-700">{aktif ? '−' : '+'}</span>
                  </button>
                  {aktif && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-green-900/80">
                      {f.jawab}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section className="bg-green-900 py-16 text-center text-green-50">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="text-3xl font-bold">Masih ada pertanyaan?</h2>
          <p className="mt-3 text-green-200">
            Pemilik kos membalas pesan setiap hari pukul 08.00–21.00.
          </p>
          <a
            href={WA_LINK}
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-green-900 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 focus:ring-offset-green-900"
          >
            Tanya lewat WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

export default Informasi