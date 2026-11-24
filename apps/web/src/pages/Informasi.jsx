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

const Informasi = () => {
  const [terbuka, setTerbuka] = useState(0)

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
              Informasi sebelum Anda memesan kamar
            </h1>
          </div>
        </div>

        <div className={`relative mx-auto mt-14 max-w-2xl rounded-md p-8 ${bayangKertas}`} style={kertas}>
          <Pin />
          <p className="text-lg leading-relaxed text-[#2f4a38]">
            Biaya, cara pemesanan, dan jawaban dari pertanyaan yang paling sering
            kami terima, semuanya ada di halaman ini.
          </p>
        </div>
      </section>

      {/* Biaya: nota kertas */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="font-serif text-3xl font-bold text-[#f3ffe9] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] md:text-4xl">
            Rincian biaya
          </h2>
          <ul className={`mt-8 rounded-md px-6 py-2 ${bayangKertas}`} style={kertas}>
            {biaya.map((b) => (
              <li
                key={b.nama}
                className="flex flex-col gap-1 border-b-2 border-dashed border-[#3f7a55]/40 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-serif text-lg font-bold" style={timbul}>{b.nama}</p>
                  <p className="text-sm text-[#2f4a38]">{b.ket}</p>
                </div>
                <p className="font-serif text-lg font-extrabold text-[#126a38]">{b.nilai}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Alur pemesanan: nomor kuningan karena urutannya berurutan */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="font-serif text-3xl font-bold text-[#f3ffe9] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] md:text-4xl">
          Cara memesan kamar
        </h2>
        <ol className="mt-10 space-y-6">
          {alur.map((a, i) => (
            <li key={a.judul} className="flex items-start gap-4">
              <span
                className="mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-serif text-xl font-extrabold shadow-[0_4px_0_#6a5014,0_8px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.7)]"
                style={kuningan}
              >
                {i + 1}
              </span>
              <div className={`flex-1 rounded-md p-5 ${bayangKertas}`} style={kertas}>
                <h3 className="font-serif text-lg font-bold" style={timbul}>{a.judul}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#2f4a38]">{a.isi}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className={`relative mt-14 rounded-md p-6 pt-8 ${bayangKertas}`} style={kertas}>
          <Pin />
          <h3 className="font-serif text-lg font-bold" style={timbul}>Dokumen yang perlu disiapkan</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#2f4a38]">
            {dokumen.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="font-serif text-3xl font-bold text-[#f3ffe9] drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] md:text-4xl">
            Pertanyaan yang sering diajukan
          </h2>
          <div className={`mt-8 overflow-hidden rounded-md ${bayangKertas}`} style={kertas}>
            {faq.map((f, i) => {
              const aktif = terbuka === i
              return (
                <div key={f.tanya} className="border-b-2 border-dashed border-[#3f7a55]/40 last:border-b-0">
                  <button
                    onClick={() => setTerbuka(aktif ? null : i)}
                    aria-expanded={aktif}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-serif text-lg font-bold hover:bg-green-100/70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700"
                    style={timbul}
                  >
                    {f.tanya}
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-sans text-xl shadow-[0_3px_0_#6a5014,0_5px_8px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.7)]"
                      style={kuningan}
                    >
                      {aktif ? '−' : '+'}
                    </span>
                  </button>
                  {aktif && (
                    <p className="px-5 pb-4 text-sm leading-relaxed text-[#2f4a38]">
                      {f.jawab}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Kontak: plakat kuningan */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <div
          className="rounded-2xl p-10 shadow-[0_14px_26px_rgba(0,0,0,0.55),inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-6px_12px_rgba(90,60,10,0.5)]"
          style={kuningan}
        >
          <h2 className="font-serif text-3xl font-bold">Masih ada pertanyaan?</h2>
          <p className="mx-auto mt-3 max-w-md text-[#4a3606]">
            Pemilik kos membalas pesan setiap hari pukul 08.00–21.00.
          </p>
          <a href={WA_LINK} className={`mt-8 ${tombolBase} ${tekanHijau}`} style={hijauMengkilap}>
            Tanya lewat WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

export default Informasi