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

  const kolom =
    'mt-1 w-full rounded-lg border border-green-900/20 bg-white px-4 py-2.5 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/30'

  return (
    <div className="min-h-screen bg-green-50 text-green-950">
      {/* Pembuka */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <h1 className="text-4xl font-extrabold leading-tight text-green-900 md:text-5xl">
          Hubungi kami
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-green-900/80">
          Pilih cara yang paling nyaman. Pemilik kos membalas pesan setiap hari
          pukul 08.00–21.00.
        </p>
      </section>

      {/* Daftar kontak */}
      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {kontak.map((k) => (
            <a
              key={k.nama}
              href={k.href}
              className="rounded-2xl border border-green-900/15 bg-white p-6 hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <p className="text-sm text-green-900/60">{k.nama}</p>
              <p className="mt-1 text-xl font-bold text-green-900">{k.nilai}</p>
              <p className="mt-2 text-sm text-green-900/70">{k.ket}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form + lokasi */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-green-900">Kirim pesan</h2>
            <p className="mt-2 text-sm text-green-900/70">
              Pesan Anda akan dibuka di WhatsApp, tinggal ditekan kirim.
            </p>

            <form onSubmit={kirim} className="mt-6 space-y-4">
              <div>
                <label htmlFor="nama" className="text-sm font-medium">
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
                <label htmlFor="keperluan" className="text-sm font-medium">
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
                <label htmlFor="pesan" className="text-sm font-medium">
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
                className="rounded-full bg-green-800 px-8 py-3 font-semibold text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              >
                Kirim lewat WhatsApp
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-green-900">Alamat</h2>
            <p className="mt-2 leading-relaxed text-green-900/80">
              Jl. Contoh Raya No. 12, Kelurahan Sukamaju, Kota Anda.
              <br />
              Gerbang hijau, di samping warung makan.
            </p>
            {/* Ganti dengan iframe Google Maps kosan Anda */}
            <div className="mt-6 flex min-h-64 items-center justify-center rounded-2xl border-2 border-dashed border-green-700/40 bg-green-50 p-6 text-center text-sm text-green-900/70">
              Tempel iframe Google Maps di sini
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Kontak