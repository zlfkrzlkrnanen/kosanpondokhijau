import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineInformationCircle,
  HiOutlinePhone,
  HiOutlineLogin,
} from "react-icons/hi";

// Daftar menu tampilan umum (sebelum login)
const menuItems = [
  { label: "Beranda", href: "/", icon: HiOutlineHome },
  { label: "Tentang", href: "/about", icon: HiOutlineUserGroup },
  { label: "Informasi", href: "/informasi", icon: HiOutlineInformationCircle },
  { label: "Kontak", href: "/kontak", icon: HiOutlinePhone },
];

/* ---------- Bahan & gaya (sama dengan Beranda) ---------- */
const lumut = {
  backgroundColor: "#177048",
  backgroundImage:
    "radial-gradient(ellipse at 15% 0%, rgba(190,255,205,.28), transparent 60%), repeating-linear-gradient(90deg, rgba(0,0,0,.05) 0 2px, transparent 2px 10px), linear-gradient(180deg,#2b9a63,#126b43)",
};
const kertas = {
  backgroundColor: "#f0faea",
  backgroundImage: "radial-gradient(rgba(40,140,80,.12) 1px, transparent 1px)",
  backgroundSize: "6px 6px",
};
const kuningan = {
  background: "linear-gradient(180deg,#f6de95,#c9a24b 50%,#9a7728)",
  color: "#3b2a07",
  textShadow: "0 1px 0 rgba(255,255,255,.55)",
};
const putihTimbul = {
  color: "#ffffff",
  textShadow: "0 2px 0 rgba(0,70,35,.7), 0 3px 6px rgba(0,0,0,.35)",
};

const fokus =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#177048]";
const tekanKuningan =
  "shadow-[0_4px_0_#6a5014,0_8px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.7)] active:translate-y-1 active:shadow-[0_0_0_#6a5014,inset_0_3px_8px_rgba(0,0,0,0.4)]";
// Menu aktif tampak "tertekan" seperti label kertas yang terselip di papan
const labelAktif =
  "text-[#0f3a26] shadow-[inset_0_2px_5px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.35)]";

const Navbar = () => {
  const [openPath, setOpenPath] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isOpen = openPath === location.pathname;

  // Perkuat bayangan setelah halaman di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile dengan tombol Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && setOpenPath(null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const desktopLink = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-bold transition-colors duration-200 ${fokus} ${
      isActive ? labelAktif : "text-green-50 hover:bg-white/15"
    }`;

  const mobileLink = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-base font-bold transition-colors duration-200 ${fokus} ${
      isActive ? labelAktif : "text-green-50 hover:bg-white/15"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled || isOpen
          ? "shadow-[0_10px_22px_rgba(0,0,0,0.5)]"
          : "shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
      }`}
      style={lumut}
    >
      {/* Lis kuningan di tepi bawah */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-b from-[#f6de95] via-[#c9a24b] to-[#9a7728]"
      />

      <nav
        className="mx-auto max-w-7xl px-4 pb-1.5 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <NavLink to="/" className={`flex items-center gap-3 rounded-lg ${fokus}`}>
            <img
              src="fotokosan.jpg"
              alt="Logo kosan"
              className="h-10 w-10 rounded-full bg-white object-contain ring-2 ring-[#c9a24b] shadow-[0_3px_6px_rgba(0,0,0,0.45)]"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold" style={putihTimbul}>
                KOSAN PONDOK HIJAU
              </span>
              <span className="hidden text-xs text-green-100 sm:block">
                kosan khusus cowo
              </span>
            </span>
          </NavLink>

          {/* Menu desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            {menuItems.map(({ label, href }) => (
              <NavLink
                key={label}
                to={href}
                end={href === "/"}
                className={desktopLink}
                style={({ isActive }) => (isActive ? kertas : undefined)}
              >
                {label}
              </NavLink>
            ))}

            <span className="mx-3 h-6 w-px bg-black/25 shadow-[1px_0_0_rgba(255,255,255,0.2)]" aria-hidden="true" />

            <NavLink
              to="/login"
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-bold transition ${tekanKuningan} ${fokus}`}
              style={kuningan}
            >
              <HiOutlineLogin className="h-4 w-4" />
              Login
            </NavLink>
          </div>

          {/* Tombol menu mobile */}
          <button
            type="button"
            onClick={() => setOpenPath(isOpen ? null : location.pathname)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden ${tekanKuningan} ${fokus}`}
            style={kuningan}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          id="menu-mobile"
          className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="mb-3 flex flex-col gap-1 rounded-2xl bg-black/20 p-2 shadow-[inset_0_3px_10px_rgba(0,0,0,0.45)]"
              inert={!isOpen}
            >
              {menuItems.map(({ label, href, icon: Icon }) => (
                <NavLink
                  key={label}
                  to={href}
                  end={href === "/"}
                  className={mobileLink}
                  style={({ isActive }) => (isActive ? kertas : undefined)}
                  onClick={() => setOpenPath(null)}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </NavLink>
              ))}

              <div className="mt-2 border-t border-white/15 p-2 pt-3">
                <NavLink
                  to="/login"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-base font-bold transition ${tekanKuningan} ${fokus}`}
                  style={kuningan}
                >
                  <HiOutlineLogin className="h-5 w-5" />
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;