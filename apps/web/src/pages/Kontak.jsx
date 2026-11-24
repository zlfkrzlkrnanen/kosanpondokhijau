import React, { useState } from 'react'

// Ganti data di bawah ini dengan informasi kosan yang sebenarnya.
const WA_NUMBER = '6281234567890'

const kontak = [
  {
    nama: 'WhatsApp',
    nilai: '0812-3456-7890',
    href: `https://wa.me/${WA_NUMBER}`,
    ket: 'Cara tercepat untuk bertanya kamar kosong.',
  },
  {
    nama: 'Telepon',
    nilai: '0812-3456-7890',
    href: 'tel:+6281234567890',
    ket: 'Tersedia pukul 08.00–21.00.',
  },
  {
    nama: 'Email',
    nilai: 'halo@pondokhijau.id',
    href: 'mailto:halo@pondokhijau.id',
    ket: 'Dibalas dalam 1 hari kerja.',
  },
  {
    nama: 'Instagram',
    nilai: '@kosanpondokhijau',
    href: 'https://instagram.com/kosanpondokhijau',
    ket: 'Lihat foto kamar dan kegiatan penghuni.',
  },
]

const keperluan = ['Tanya kamar kosong', 'Jadwalkan kunjungan', 'Perpanjang sewa', 'Lainnya']

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

const Kontak = () => {
  const [data, setData] = useState({
    nama: '',
    keperluan: keperluan[0],
    pesan: '',
  })

  const ubah = (e) => setData({ ...data, [e.target.name]: e.target.value })

  const kirim = (e) => {
    e.preventDefault()
    const teks = `Halo, saya ${data.nama}.\nKeperluan: ${data.keperluan}\n${data.pesan}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`, '_blank')
  }

  // Kolom isian tampak cekung seperti diukir di kertas
  const kolom =
    'mt-1 w-full rounded-lg border border-[#3f7a55]/40 bg-white px-4 py-2.5 text-sm text-[#0f3a26] shadow-[inset_0_3px_6px_rgba(0,0,0,0.22)] focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-600/40'

  return (
    <div className="min-h-screen text-[#0f3a26]" style={lumut}>
      {/* Pembuka: papan nama + catatan kertas */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="relative mx-auto max-w-3xl pt-14 text-center">
          <span aria-hidden="true" className="absolute left-[18%] top-0 h-14 w-1.5 bg-gradient-to-r from-[#d8c08a] to-[#8f7440] shadow-md" />
          <span aria-hidden="true" className="absolute right-[18%] top-0 h-14 w-1.5 bg-gradient-to-r from-[#d8c08a] to-[#8f7440] shadow-md" />
          <div
            className="rounded-2xl px-6 py-8 shadow-[0_14px_24px_rgba(0,0,0,0.55),inset_0_2px_0_rgba(255,220,170,0.35),inset_0_-6px_12px_rgba(0,0,0,0.45)]"
            style={{ ...lumut, backgroundColor: '#1f8a55', filter: 'brightness(1.05)' }}
          >
            <h1 className="font-serif text-4xl font-extrabold leading-tight md:text-5xl" style={putihTimbul}>
              Hubungi kami
            </h1>
          </div>
        </div>

        <div className={`relative mx-auto mt-14 max-w-2xl rounded-md p-8 ${bayangKertas}`} style={kertas}>
          <Pin />
          <p className="text-lg leading-relaxed text-[#2f4a38]">
            Pilih cara yang paling nyaman. Pemilik kos membalas pesan setiap hari
            pukul 08.00–21.00.
          </p>
        </div>
      </section>

      {/* Daftar kontak: memo kertas bertempel selotip */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="grid gap-8 sm:grid-cols-2">
          {kontak.map((k, i) => (
            <a
              key={k.nama}
              href={k.href}
              className={`relative rounded-sm p-6 pt-8 transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#177048] ${bayangKertas} ${
                i % 2 ? 'rotate-1' : '-rotate-1'
              }`}
              style={kertas}
            >
              <span aria-hidden="true" className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-yellow-200/70 shadow-sm" />
              <p className="text-sm font-semibold text-[#4a6552]">{k.nama}</p>
              <p className="mt-1 font-serif text-xl font-bold" style={timbul}>{k.nilai}</p>
              <p className="mt-2 text-sm text-[#2f4a38]">{k.ket}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form + alamat */}
      <section className="py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-2">
          {/* Formulir di atas kertas */}
          <div className={`relative rounded-md p-7 pt-9 ${bayangKertas}`} style={kertas}>
            <Pin />
            <h2 className="font-serif text-3xl font-bold" style={timbul}>Kirim pesan</h2>
            <p className="mt-2 text-sm text-[#2f4a38]">
              Pesan Anda akan dibuka di WhatsApp, tinggal ditekan kirim.
            </p>

            <form onSubmit={kirim} className="mt-6 space-y-4">
              <div>
                <label htmlFor="nama" className="text-sm font-bold">
                  Nama
                </label>
                <input
                  id="nama"
                  name="nama"
                  value={data.nama}
                  onChange={ubah}
                  required
                  className={kolom}
                />
              </div>

              <div>
                <label htmlFor="keperluan" className="text-sm font-bold">
                  Keperluan
                </label>
                <select
                  id="keperluan"
                  name="keperluan"
                  value={data.keperluan}
                  onChange={ubah}
                  className={kolom}
                >
                  {keperluan.map((k) => (
                    <option key={k}>{k}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="pesan" className="text-sm font-bold">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  rows={4}
                  value={data.pesan}
                  onChange={ubah}
                  required
                  className={kolom}
                />
              </div>

              <button
                type="submit"
                className={`${tombolBase} ${tekanHijau} focus:ring-offset-[#f0faea]`}
                style={hijauMengkilap}
              >
                Kirim lewat WhatsApp
              </button>
            </form>
          </div>

          {/* Alamat: buku catatan + bingkai peta */}
          <div className="space-y-8">
            <div className="relative rounded-md py-8 pl-16 pr-8 shadow-[0_10px_20px_rgba(0,0,0,0.5)]" style={garisBuku}>
              <span aria-hidden="true" className="absolute inset-y-0 left-12 w-0.5 bg-red-400/60" />
              <span aria-hidden="true" className="absolute left-4 top-0 flex h-full flex-col justify-around py-6">
                {[0, 1, 2].map((n) => (
                  <i key={n} className="h-4 w-4 rounded-full bg-[#174a2e] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
                ))}
              </span>
              <h2 className="font-serif text-3xl font-bold" style={timbul}>Alamat</h2>
              <p className="mt-2 leading-relaxed text-[#2f4a38]">
                Jl. Contoh Raya No. 12, Kelurahan Sukamaju, Kota Anda.
                <br />
                Gerbang hijau, di samping warung makan.
              </p>
            </div>

            {/* Bingkai peta (cekung) */}
            {/* Ganti isi kotak ini dengan iframe Google Maps kosan Anda */}
            <div className="rounded-2xl border-[14px] border-[#6fd09a] shadow-[0_12px_22px_rgba(0,0,0,0.5)]">
              <div className="flex min-h-64 items-center justify-center bg-[#d4eccf] p-6 text-center text-sm text-[#3a5545] shadow-[inset_0_6px_16px_rgba(0,0,0,0.55)]">
                Tempel iframe Google Maps di sini
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Kontak