import React, { useState } from "react";

// import { artwork1, artwork2, artwork2_2, artwork3, artwork4, artwork4_4, artwork5, artwork6, artwork7, artwork8, artwork9 } from "./src/assets";
import artwork1 from "./src/assets/artwork1.jpg";
import artwork2 from "./src/assets/artwork2.jpg";
import artwork2_2 from "./src/assets/artwork2_2.jpg";
import artwork3 from "./src/assets/artwork3.jpg";
import artwork4 from "./src/assets/artwork4.jpg";
import artwork4_4 from "./src/assets/artwork4_4.jpg";
import artwork5 from "./src/assets/artwork5.jpg";
import artwork6 from "./src/assets/artwork6.jpg";
import artwork7 from "./src/assets/artwork7.jpg";
import artwork8 from "./src/assets/artwork8.jpg";
import artwork9 from "./src/assets/artwork9.jpg";
import artwork10 from "./src/assets/artwork10.jpeg";
import artwork10_10 from "./src/assets/artwork10_10.jpeg";
import artwork11 from "./src/assets/artwork11.jpeg";
import artwork11_11 from "./src/assets/artwork11_11.jpeg";

import {
  Heart,
  ShoppingBag,
  Menu,
  X,
  Star,
  Lock,
  Mail,
  Trash2,
  LayoutDashboard,
  LogOut,
  Check,
  Upload,
  Sparkles,
  Camera,
  Lightbulb,
} from "lucide-react";
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&display=swap');
`;

function WhatsAppIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.06c-1.6 0-3.1-.44-4.38-1.2l-.31-.18-3 .79.8-2.92-.2-.3a8.03 8.03 0 0 1-1.24-4.25c0-4.46 3.63-8.09 8.33-8.09 4.7 0 8.33 3.63 8.33 8.09 0 4.46-3.63 8.06-8.33 8.06zm4.56-6.05c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.56.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.13.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.29z" />
    </svg>
  );
}
function InstagramIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.4" cy="6.6" r="1.1" fill={color} stroke="none" />
    </svg>
  );
}
function FacebookIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M13.5 22v-8.4h2.83l.42-3.28H13.5V8.2c0-.95.26-1.6 1.63-1.6h1.74V3.68C16.56 3.63 15.58 3.5 14.44 3.5c-2.36 0-3.98 1.44-3.98 4.08v2.74H7.6v3.28h2.86V22h3.04z" />
    </svg>
  );
}
function TwitterXIcon({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M18.24 3H21l-6.46 7.38L22.2 21h-6.17l-4.83-6.32L5.6 21H2.83l6.9-7.88L2 3h6.32l4.37 5.78L18.24 3zm-1.08 16.17h1.72L7.6 4.73H5.75l11.41 14.44z" />
    </svg>
  );
}

const PALETTES = [
  ["#2b2420", "#6b5236", "#b08d57", "#3a3128"],
  ["#1c2430", "#3d5266", "#8fa9bd", "#0e1319"],
  ["#241a17", "#5c3a2e", "#c98a4b", "#100b09"],
  ["#1a1f1c", "#3f5c48", "#9db98f", "#0c100d"],
  ["#2a1c22", "#6e2f3f", "#c97b6b", "#150c0f"],
  ["#20232a", "#4a5568", "#c0a875", "#0f1013"],
];
function Brush({ w = 90, color = "var(--gold)" }) {
  return (
    <svg
      width={w}
      height="10"
      viewBox="0 0 90 10"
      fill="none"
      style={{ display: "block" }}
    >
      <path
        d="M2 6.5C18 2 34 8.5 46 5C58 1.5 74 7 88 3.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
function ArtPlaceholder({ seed = 0, ratio = "4/5", className = "" }) {
  const p = PALETTES[seed % PALETTES.length];
  const id = `g${seed}`;
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      style={{ width: "100%", aspectRatio: ratio, display: "block" }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p[0]} />
          <stop offset="55%" stopColor={p[1]} />
          <stop offset="100%" stopColor={p[2]} />
        </linearGradient>
        <filter id={`n${seed}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012"
            numOctaves="2"
            seed={seed}
            result="n"
          />
          <feColorMatrix
            in="n"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0"
          />
        </filter>
      </defs>
      <rect width="400" height="500" fill={`url(#${id})`} />
      <rect width="400" height="500" filter={`url(#n${seed})`} />
      <circle
        cx={80 + ((seed * 37) % 240)}
        cy={120 + ((seed * 61) % 260)}
        r={70 + ((seed * 13) % 60)}
        fill={p[3]}
        opacity="0.35"
      />
    </svg>
  );
}
function ArtworkImage({ art, ratio = "4/5", className = "" }) {
  if (art.images && art.images.length > 0)
    return (
      <img
        src={art.images[0]}
        alt={art.title}
        className={className}
        style={{
          width: "100%",
          aspectRatio: ratio,
          display: "block",
          objectFit: "cover",
        }}
      />
    );
  return <ArtPlaceholder seed={art.seed} ratio={ratio} className={className} />;
}

// Edit this array to change products. Put image paths inside each `images` array.
const INITIAL_ARTWORKS = [
  {
    id: 1,
    title: "The Strong Whale",
    category: "Portraits",
    price: 500,
    medium: "Oil on canvas",
    size: "24 x 30 in",
    desc: "Original hand-painted art, High-quality acrylic colors, Perfect as a unique gift for nature.",
    seed: 0,
    images: [artwork1],
    active: true,
  },
  {
    id: 2,
    title: "Harmony of the Trees",
    category: "Portraits",
    price: 900,
    medium: "Charcoal & gold leaf",
    size: "18 x 24 in",
    desc: "Harmony of the Trees: A Textured Acrylic Masterpiece This abstract artwork captures the striking harmony between nature and bold contrasts. The piece is crafted using high-quality acrylic paints, featuring leaves in vivid red and deep black. What makes this painting truly unique is its textured, raised relief, which gives the leaves a tactile, three-dimensional feel against the coarse, cream-colored background. A modern art piece that adds energy and elegance to any interior space",
    seed: 4,
    images: [artwork2, artwork2_2],
    active: true,
  },
  {
    id: 3,
    title: "Textural Abstract",
    category: "Landscapes",
    price: 600,
    medium: "Acrylic on canvas",
    size: "20 x 28 in",
    desc: "It is an abstract painting that relies primarily on the contrast in both color and texture.",
    seed: 1,
    images: [artwork3],
    active: true,
  },
  {
    id: 4,
    title: "IntoHarmony of the Trees",
    category: "Nature",
    price: 900,
    medium: "Oil on canvas",
    size: "24 x 32 in",
    desc: "Harmony of the Trees: A Textured Acrylic Masterpiece This abstract artwork captures the striking harmony between nature and bold contrasts. The piece is crafted using high-quality acrylic paints, featuring leaves in vivid red and deep black. What makes this painting truly unique is its textured, raised relief, which gives the leaves a tactile, three-dimensional feel against the coarse, cream-colored background. A modern art piece that adds energy and elegance to any interior space",
    seed: 3,
    images: [artwork4, artwork4_4],
    active: true,
  },
  {
    id: 11,
    title: " Flow of Colors",
    category: "Abstract",
    price: 1100,
    medium: "Mixed media on canvas",
    size: "40 × 50  in",
    desc: "An abstract artwork featuring a soft combination of warm beige, black, terracotta, copper, and light blue, with flowing lines and textured details that add depth and character. It complements calm, modern interiors and brings a warm, artistic touch to any space. Perfect for your home or as a unique gift",
    seed: 5,
    images: [artwork11, artwork11_11],
    active: true,
  },
  {
    id: 10,
    title: "Pearl Shell",
    category: "Abstract",
    price: 200,
    medium: "Mixed media on canvas",
    size: "10 × 10 in",
    desc: "Hand-painted with acrylic paint ,A little piece of the sea",
    seed: 5,
    images: [artwork10, artwork10_10],
    active: true,
  },
  {
    id: 5,
    title: "Your name or the name of someone you love",
    category: "Abstract",
    price: 180,
    medium: "Mixed media on canvas",
    size: "15 x 21 in",
    desc: "More than just a painting, it’s the embodiment of your name’s beauty! A piece of art designed within a frame, where creativity meets a personal touch to create a masterpiece worthy of you or your loved ones. Every detail in this frame is carefully crafted to be a timeless memory",
    seed: 5,
    images: [artwork5],
    active: true,
  },
  {
    id: 9,
    title: "Your name or the name of someone you love",
    category: "Abstract",
    price: 180,
    medium: "Mixed media on canvas",
    size: "15 x 21 in",
    desc: "More than just a painting, it’s the embodiment of your name’s beauty! A piece of art designed within a frame, where creativity meets a personal touch to create a masterpiece worthy of you or your loved ones. Every detail in this frame is carefully crafted to be a timeless memory",
    seed: 5,
    images: [artwork9],
    active: true,
  },
  {
    id: 7,
    title: "Your name or the name of someone you love",
    category: "Black & White",
    price: 180,
    medium: "Charcoal on paper",
    size: "15 x 21 in",
    desc: "More than just a painting, it’s the embodiment of your name’s beauty! A piece of art designed within a frame, where creativity meets a personal touch to create a masterpiece worthy of you or your loved ones. Every detail in this frame is carefully crafted to be a timeless memory",
    seed: 2,
    images: [artwork7],
    active: true,
  },
  {
    id: 6,
    title: "The magic of the deep",
    category: "Portraits",
    price: 100,
    medium: "Ink & wash",
    size: "16 x 20 in",
    desc: "Not just a bookmark, but a small piece of art accompanying your journey through pages. A handmade bookmark, designed to carry my artistic touch in every book you read. Because reading is an art, enjoy it with a special creative touch",
    seed: 4,
    images: [artwork6],
    active: true,
  },
  {
    id: 8,
    title: "Your name or the name of someone you love",
    category: "Nature",
    price: 80,
    medium: "Oil on canvas",
    size: "18 x 24 in",
    desc: "Make your book a reflection of you! An artistic bookmark customized with your name or the name of someone you love. A unique piece blending my artistic touch with the personal essence of a name, making every page turn a special experience. A memorable gift for every book lover",
    seed: 1,
    images: [artwork8],
    active: true,
  },
];

// Edit these values directly to change the artist/profile/site contact information.
const OWNER_INITIAL = {
  name: "Esraa mosad ",
  tag: "every piece tells a story ",
  bio: "I’m Esraa. I love letting art tell my story, turning every color into a story and every painting into a memory, while leaving a beautiful impact in every home",
  artworks: 128,
  followers: "5.8K",
  following: 256,
  rating: "98%",
  email: "esoomosas584@gmail.com",
  phone: " 01100672454",
  notifyUrl: "", // Optional Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxx"
  avatar: "src/assets/profile.jpeg",
  heroImage: "src/assets/hero.jpeg",
};

// Edit social URLs/numbers here.
const SOCIAL_INITIAL = {
  whatsapp: "01100672454",
  instagram:
    "https://www.instagram.com/wildsoul.esraa?igsh=bnhjNjNxaXdsb2Nm&igsi=bnhjNjNxaXdsb2Nm&utm_source=qr",
  facebook: "https://www.facebook.com/share/1MqvFcb3oU/?mibextid=wwXIfr",
  twitter: "https://x.com/esraa88686223?s=11",
};

// Turns a raw WhatsApp field (a full link, or just a phone number) into a valid wa.me URL.
function whatsappHref(raw) {
  if (!raw) return "";
  if (raw.includes("http")) return raw;
  const digits = raw.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

// Builds a link that opens Gmail's web compose window directly with the recipient, subject,
// and body pre-filled. Unlike mailto:, this always works in the browser — it doesn't depend
// on the visitor having a desktop mail app configured, which is why buttons that relied only
// on mailto: could look "broken" or missing on some devices.
function gmailComposeHref(to, subject, body) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ---------------- STATIC SITE CONFIG ----------------
   Everything shown on the public website comes directly from the constants above.
   There is NO Firebase, database, Cloudinary, or dashboard content editing.

   To use your own images, place them in Vite's /public/images folder and put paths like:
     images: ["/images/artworks/my-painting.jpg"]
     avatar: "/images/artist.jpg"
     heroImage: "/images/hero.jpg"

   Orders are NOT stored anywhere in this app. They are sent by email only.
   For automatic email delivery, set OWNER_INITIAL.notifyUrl to your Formspree endpoint.
------------------------------------------------------------------*/

const ADMIN = {
  name: "Lena Sternberg",
  email: "PUT_ADMIN_EMAIL_HERE",
  password: "PUT_ADMIN_PASSWORD_HERE",
  role: "admin",
};

function ArtworkCard({ art, go }) {
  return (
    <div
      className="card fade-in"
      style={{ cursor: "pointer", borderRadius: 4, overflow: "hidden" }}
      onClick={() => go("product", art.id)}
    >
      <div style={{ position: "relative" }}>
        <ArtworkImage art={art} />
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            background: "rgba(255,253,249,0.9)",
            borderRadius: "50%",
            width: 30,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Heart size={14} />
        </div>
      </div>
      <div style={{ padding: "12px 14px" }}>
        <div style={{ fontSize: 14.5, fontWeight: 600 }}>{art.title}</div>
        <div
          style={{ fontSize: 13.5, color: "var(--gold-deep)", marginTop: 3 }}
        >
          EGP {art.price}
        </div>
      </div>
    </div>
  );
}

function Navigation({
  go,
  page,
  auth,
  logout,
  cartCount,
  menuOpen,
  setMenuOpen,
}) {
  const links = [
    ["home", "Home"],
    ["shop", "Shop"],
    ["artist", "Artist"],
    ["custom", "Custom Art"],
  ];
  return (
    <header
      style={{
        borderBottom: "1px solid var(--line)",
        position: "sticky",
        top: 0,
        background: "var(--paper)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => go("home")}
          className="disp"
          style={{ fontSize: 24, fontWeight: 600, cursor: "pointer" }}
        >
          Wild Soul.
        </div>
        <nav
          style={{ display: "flex", gap: 30, alignItems: "center" }}
          className="desktop-nav"
        >
          {links.map(([id, label]) => (
            <div
              key={id}
              className="navlink"
              onClick={() => go(id)}
              style={{ display: "none" }}
              data-nav
            >
              {label}
              {page === id && <Brush w={label.length * 6} />}
            </div>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            onClick={() => go("cart")}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  background: "var(--gold)",
                  color: "#fff",
                  fontSize: 10,
                  borderRadius: 10,
                  width: 16,
                  height: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartCount}
              </span>
            )}
          </div>
          {auth ? (
            <>
              {auth.role === "admin" && (
                <div
                  className="navlink"
                  onClick={() => go("admin")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    position: "relative",
                  }}
                >
                  <LayoutDashboard size={16} />{" "}
                  <span className="only-lg">Dashboard</span>
                </div>
              )}
              <div
                className="navlink"
                onClick={logout}
                style={{ display: "flex", alignItems: "center", gap: 5 }}
              >
                <LogOut size={15} /> <span className="only-lg">Sign out</span>
              </div>
            </>
          ) : (
            <button
              className="btn btn-dark"
              style={{ fontSize: 13, padding: "9px 18px" }}
              onClick={() => go("login")}
            >
              Sign In
            </button>
          )}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ cursor: "pointer" }}
            className="burger"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </div>
      </div>
      <style>{`@media (min-width: 820px) { [data-nav] { display: block !important; } .burger { display: none !important; } .only-lg { display: inline; } } @media (max-width: 819px) { .only-lg { display: none; } }`}</style>
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--line)",
            padding: "14px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {links.map(([id, label]) => (
            <div
              key={id}
              onClick={() => go(id)}
              style={{ fontSize: 14, fontWeight: 500 }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default function WildSoul() {
  // Navigation/UI state only. Public content is read directly from static constants.
  const [page, setPage] = useState("home");
  const [selectedId, setSelectedId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useState(null); // Admin session only; resets on refresh.
  const [cart, setCart] = useState([]); // Visitor cart only; not stored in a database.
  const [toast, setToast] = useState(null);
  const [category, setCategory] = useState("All");

  // Static website content. Edit the constants at the top of this file to change the site.
  const artworks = INITIAL_ARTWORKS;
  const ownerInfo = OWNER_INITIAL;
  const socialLinks = SOCIAL_INITIAL;

  function go(p, id = null) {
    setPage(p);
    setSelectedId(id);
    setMenuOpen(false);
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  }

  // Small reusable toast helper.
  function flash(input) {
    const payload =
      typeof input === "string" ? { type: "info", msg: input } : input;
    setToast(payload);
    setTimeout(() => setToast(null), payload.type === "success" ? 3400 : 2200);
  }

  // Email-only order notification. Nothing is saved in this website.
  async function sendOrderNotification(order) {
    if (!ownerInfo.notifyUrl) return;
    try {
      await fetch(ownerInfo.notifyUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New ${order.type === "custom" ? "custom art request" : "order"} — Wild Soul`,
          ...order,
        }),
      });
    } catch (err) {
      // Gmail compose still opens below, so a failed notification endpoint doesn't block the buyer.
    }
  }

  function addToCart(id) {
    setCart((c) => {
      const found = c.find((x) => x.id === id);
      if (found)
        return c.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x));
      return [...c, { id, qty: 1 }];
    });
    flash("Added to cart");
  }
  function removeFromCart(id) {
    setCart((c) => c.filter((x) => x.id !== id));
  }

  // Static admin login. Change ADMIN above if you want different credentials.
  function login(email, password) {
    if (email === ADMIN.email && password === ADMIN.password) {
      setAuth({ name: ADMIN.name, email, role: "admin" });
      flash("Welcome back, admin");
      go("admin");
      return;
    }
    flash("Invalid admin email or password");
  }

  function logout() {
    setAuth(null);
    flash("Signed out");
    go("home");
  }

  function buyNow(art) {
    const order = {
      type: "buyNow",
      createdAt: new Date().toISOString(),
      buyerName: auth?.name || "Guest",
      buyerEmail: auth?.email || "—",
      items: [
        {
          title: art.title,
          size: art.size,
          medium: art.medium,
          qty: 1,
          price: art.price,
        },
      ],
      total: art.price,
    };
    sendOrderNotification(order);
    // Open a prefilled Gmail compose tab so the buyer can send the request directly.
    try {
      const subject = `Purchase request — ${art.title}`;
      const body =
        `Hello ${ownerInfo.name},\n\nI'd like to purchase this piece:\n\n` +
        `Title: ${art.title}\nSize: ${art.size}\nMedium: ${art.medium}\nPrice: EGP ${art.price}\n\n` +
        `Buyer name: ${auth?.name || "___"}\nBuyer email: ${auth?.email || "___"}\n\nPlease send payment & shipping details.\n`;
      window.open(gmailComposeHref(ownerInfo.email, subject, body), "_blank");
    } catch (err) {
      /* ignore — notification endpoint may already have sent the email */
    }
    flash({
      type: "success",
      title: "Request sent!",
      msg: `${ownerInfo.name.split(" ")[0]} has been notified about "${art.title}".`,
    });
  }

  function checkoutCart() {
    if (!cart.length) return;
    const items = cart.map(({ id, qty }) => {
      const a = artworks.find((x) => x.id === id);
      return {
        title: a.title,
        size: a.size,
        medium: a.medium,
        qty,
        price: a.price,
      };
    });
    const total = items.reduce((s, i) => s + i.price * i.qty, 0);
    const order = {
      type: "cart",
      createdAt: new Date().toISOString(),
      buyerName: auth?.name || "Guest",
      buyerEmail: auth?.email || "—",
      items,
      total,
    };
    sendOrderNotification(order);
    try {
      const lines = items
        .map((i) => `- ${i.title} x${i.qty} — EGP ${i.price * i.qty}`)
        .join("\n");
      const subject = "New order from Wild Soul";
      const body =
        `Hello ${ownerInfo.name},\n\nI'd like to order:\n\n${lines}\n\nTotal: EGP ${total}\n\n` +
        `Buyer name: ${auth?.name || "___"}\nBuyer email: ${auth?.email || "___"}\nShipping address: ___\n`;
      window.open(gmailComposeHref(ownerInfo.email, subject, body), "_blank");
    } catch (err) {
      /* ignore — notification endpoint may already have sent the email */
    }
    setCart([]);
    flash({
      type: "success",
      title: "Order placed!",
      msg: `Your order has been sent to ${ownerInfo.name.split(" ")[0]} — you'll hear back soon.`,
    });
  }

  function submitCustomRequest(details) {
    const order = {
      type: "custom",
      createdAt: new Date().toISOString(),
      buyerName: auth?.name || "Guest",
      buyerEmail: details.email || auth?.email || "—",
      details,
    };
    sendOrderNotification(order);
    try {
      const subjectLine =
        details.mode === "photo"
          ? `Custom portrait request — ${details.style}`
          : "Custom art request";
      const lines =
        details.mode === "photo"
          ? [
              `Order type: Custom portrait from a photo`,
              `Photo of: ${details.subject === "myself" ? "Myself" : "A loved one / family member"}`,
              `Style: ${details.style}`,
              `Orientation: ${details.orientation}`,
              `Special details: ${details.details || "—"}`,
              `Reference photos selected: ${details.photosCount || 0} (send them in your email reply)`,
              ``,
              `Contact email: ${details.email}`,
            ]
          : [
              `Idea: ${details.idea}`,
              `Orientation: ${details.orientation}`,
              `Contact email: ${details.email}`,
            ];
      window.open(
        gmailComposeHref(ownerInfo.email, subjectLine, lines.join("\n")),
        "_blank",
      );
    } catch (err) {
      /* ignore — request is already recorded */
    }
    flash({
      type: "success",
      title: "Request sent!",
      msg: "The artist has received your custom art request.",
    });
  }

  const visibleArtworks = artworks.filter((a) => a.active !== false);
  const categories = [
    "All",
    ...Array.from(new Set(visibleArtworks.map((a) => a.category))),
  ];
  const shown =
    category === "All"
      ? visibleArtworks
      : visibleArtworks.filter((a) => a.category === category);
  const cartDetailed = cart.map(({ id, qty }) => ({
    ...artworks.find((a) => a.id === id),
    qty,
  }));
  const cartTotal = cartDetailed.reduce((s, a) => s + a.price * a.qty, 0);

  return (
    <div
      style={{
        "--ink": "#1C1815",
        "--paper": "#F6F1E7",
        "--card": "#FFFDF9",
        "--gold": "#B08D57",
        "--gold-deep": "#8A6D3F",
        "--line": "#E4DCC8",
        "--muted": "#8B8073",
      }}
    >
      <style>{`
        ${FONTS}
        * { box-sizing: border-box; }
        .af { font-family: 'Inter', sans-serif; background: var(--paper); color: var(--ink); min-height: 100vh; }
        .af h1, .af h2, .af h3, .af .disp { font-family: 'Fraunces', serif; }
        .af a { text-decoration: none; color: inherit; }
        .btn { cursor: pointer; border: none; font-family: 'Inter', sans-serif; font-weight: 600; letter-spacing: 0.01em; transition: opacity .15s ease, transform .15s ease; }
        .btn:hover { opacity: 0.85; }
        .btn:active { transform: scale(0.98); }
        .btn-dark { background: var(--ink); color: var(--paper); padding: 13px 26px; border-radius: 4px; }
        .btn-outline { background: transparent; color: var(--ink); border: 1.5px solid var(--ink); padding: 11.5px 26px; border-radius: 4px; }
        .btn-gold { background: var(--gold); color: #fff; padding: 13px 26px; border-radius: 4px; }
        .input { width: 100%; padding: 12px 14px; border: 1.5px solid var(--line); border-radius: 4px; background: #fff; font-family: 'Inter'; font-size: 14px; }
        .input:focus { outline: none; border-color: var(--gold); }
        .card { background: var(--card); border: 1px solid var(--line); }
        .eyebrow { font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-deep); font-weight: 600; }
        .navlink { font-size: 13.5px; font-weight: 500; letter-spacing: .01em; padding-bottom: 4px; cursor: pointer; }
        .fade-in { animation: fadeIn .4s ease both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .fade-in { animation: none; } }
        .af :focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
      `}</style>

      <div className="af">
        {toast && toast.type === "success" ? (
          <div
            className="fade-in"
            style={{
              position: "fixed",
              top: 18,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 200,
              background: "var(--ink)",
              color: "var(--paper)",
              borderRadius: 10,
              padding: "14px 22px 14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 16px 40px -12px rgba(28,24,21,0.45)",
              border: "1.5px solid var(--gold)",
              maxWidth: "min(92vw, 420px)",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "var(--gold)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Check size={17} color="#fff" />
            </div>
            <div>
              <div
                className="disp"
                style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.3 }}
              >
                {toast.title}
              </div>
              {toast.msg && (
                <div
                  style={{ fontSize: 12.5, color: "var(--line)", marginTop: 2 }}
                >
                  {toast.msg}
                </div>
              )}
            </div>
          </div>
        ) : (
          toast && (
            <div
              style={{
                position: "fixed",
                top: 18,
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--ink)",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 6,
                fontSize: 13.5,
                zIndex: 200,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Check size={15} /> {toast.msg}
            </div>
          )
        )}

        <Navigation
          go={go}
          page={page}
          auth={auth}
          logout={logout}
          cartCount={cart.reduce((s, c) => s + c.qty, 0)}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        <main className="fade-in" key={page + selectedId}>
          {page === "home" && (
            <Home go={go} artworks={visibleArtworks} ownerInfo={ownerInfo} />
          )}
          {page === "shop" && (
            <Shop
              go={go}
              artworks={shown}
              categories={categories}
              category={category}
              setCategory={setCategory}
            />
          )}
          {page === "product" && (
            <Product
              go={go}
              art={artworks.find((a) => a.id === selectedId)}
              artworks={visibleArtworks}
              addToCart={addToCart}
              buyNow={buyNow}
              ownerInfo={ownerInfo}
            />
          )}
          {page === "artist" && (
            <ArtistPage
              go={go}
              artworks={visibleArtworks}
              ownerInfo={ownerInfo}
            />
          )}
          {page === "custom" && (
            <CustomArt
              flash={flash}
              ownerInfo={ownerInfo}
              submitRequest={submitCustomRequest}
            />
          )}
          {page === "login" && <Login go={go} login={login} />}
          {page === "cart" && (
            <Cart
              go={go}
              items={cartDetailed}
              remove={removeFromCart}
              total={cartTotal}
              checkout={checkoutCart}
            />
          )}
          {page === "admin" &&
            (auth?.role === "admin" ? (
              <AdminDashboard ownerInfo={ownerInfo} />
            ) : (
              <NotAuthorized go={go} />
            ))}
        </main>

        <Footer go={go} socialLinks={socialLinks} flash={flash} />
      </div>
    </div>
  );
}

/* ---------------- HOME ---------------- */
function Home({ go, artworks, ownerInfo }) {
  const featured = artworks.slice(0, 4);
  return (
    <div>
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "56px 24px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
        className="stack-mobile"
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            Original artworks, made to order
          </div>
          <h1
            className="disp"
            style={{
              fontSize: "clamp(40px,6vw,64px)",
              lineHeight: 1.02,
              fontWeight: 500,
              margin: 0,
            }}
          >
            Art that
            <br />
            moves you.
          </h1>
          <Brush w={120} />
          <p
            style={{
              color: "var(--muted)",
              fontSize: 16,
              lineHeight: 1.6,
              margin: "20px 0 28px",
              maxWidth: 420,
            }}
          >
            Discover one-of-a-kind paintings, or commission a piece made just
            for your space.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-dark" onClick={() => go("shop")}>
              Explore Artworks
            </button>
            <button className="btn btn-outline" onClick={() => go("custom")}>
              Create Custom Art
            </button>
          </div>
        </div>
        <div
          style={{
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 24px 60px -20px rgba(28,24,21,0.35)",
          }}
        >
          {ownerInfo?.heroImage ? (
            <img
              src={ownerInfo.heroImage}
              alt="Featured art"
              style={{
                width: "100%",
                aspectRatio: "4/5",
                display: "block",
                objectFit: "cover",
              }}
            />
          ) : (
            <ArtPlaceholder seed={0} ratio="4/5" />
          )}
        </div>
      </section>

      <section
        style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px 60px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 20,
          }}
        >
          <h2
            className="disp"
            style={{ fontSize: 26, fontWeight: 500, margin: 0 }}
          >
            Featured Artworks
          </h2>
          <div
            className="navlink"
            onClick={() => go("shop")}
            style={{ color: "var(--gold-deep)" }}
          >
            View all →
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px,1fr))",
            gap: 22,
          }}
        >
          {featured.map((a) => (
            <ArtworkCard key={a.id} art={a} go={go} />
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <h2 className="disp" style={{ fontSize: 26, fontWeight: 500 }}>
          Have something in mind?
        </h2>
        <p style={{ color: "var(--muted)", margin: "10px 0 24px" }}>
          Commission a piece designed around your space, your story, your
          colors.
        </p>
        <button className="btn btn-gold" onClick={() => go("custom")}>
          Start a Custom Order
        </button>
      </section>

      <section
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "56px 24px",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2
            className="disp"
            style={{ fontSize: 28, fontWeight: 500, marginBottom: 30 }}
          >
            Why choose Wild Soul?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
              gap: 30,
            }}
          >
            {[
              ["Original Artworks", "100% authentic, hand-painted works"],
              ["Custom Creations", "Bring your idea to life, made to order"],
              ["Secure Checkout", "A direct line to the artist for every sale"],
              [
                "Worldwide Shipping",
                "Carefully packed, delivered to your door",
              ],
            ].map(([t, d]) => (
              <div key={t}>
                <div
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: 18,
                    marginBottom: 6,
                  }}
                >
                  {t}
                </div>
                <div
                  style={{ color: "#B8AF9F", fontSize: 14, lineHeight: 1.55 }}
                >
                  {d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 760px){ .stack-mobile { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ---------------- SHOP ---------------- */
function Shop({ go, artworks, categories, category, setCategory }) {
  return (
    <div
      style={{ maxWidth: 1180, margin: "0 auto", padding: "36px 24px 60px" }}
    >
      <h1 className="disp" style={{ fontSize: 32, fontWeight: 500 }}>
        Shop Artworks
      </h1>
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          margin: "18px 0 28px",
        }}
      >
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className="btn"
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              fontSize: 13,
              border:
                "1.5px solid " +
                (category === c ? "var(--ink)" : "var(--line)"),
              background: category === c ? "var(--ink)" : "transparent",
              color: category === c ? "var(--paper)" : "var(--ink)",
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: 22,
        }}
      >
        {artworks.map((a) => (
          <ArtworkCard key={a.id} art={a} go={go} />
        ))}
      </div>
      {artworks.length === 0 && (
        <p style={{ color: "var(--muted)" }}>No pieces in this category yet.</p>
      )}
    </div>
  );
}

/* ---------------- PRODUCT ---------------- */
function Product({ go, art, artworks, addToCart, buyNow, ownerInfo }) {
  const [activeImg, setActiveImg] = useState(0);
  if (!art)
    return (
      <div style={{ padding: 60, textAlign: "center" }}>
        Artwork not found.{" "}
        <a
          onClick={() => go("shop")}
          style={{ color: "var(--gold-deep)", cursor: "pointer" }}
        >
          Back to shop
        </a>
      </div>
    );
  const isInactive = art.active === false;
  const related = artworks
    .filter((a) => a.id !== art.id && a.category === art.category)
    .slice(0, 4);
  const gallery = art.images && art.images.length > 0 ? art.images : null;
  return (
    <div
      style={{ maxWidth: 1180, margin: "0 auto", padding: "36px 24px 60px" }}
    >
      <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 20 }}>
        <span onClick={() => go("home")} style={{ cursor: "pointer" }}>
          Home
        </span>{" "}
        /{" "}
        <span onClick={() => go("shop")} style={{ cursor: "pointer" }}>
          Shop
        </span>{" "}
        / {art.title}
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 46 }}
        className="stack-mobile"
      >
        <div>
          <div
            style={{
              borderRadius: 6,
              overflow: "hidden",
              position: "relative",
              opacity: isInactive ? 0.55 : 1,
            }}
          >
            {gallery ? (
              <img
                src={gallery[Math.min(activeImg, gallery.length - 1)]}
                alt={art.title}
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            ) : (
              <ArtPlaceholder seed={art.seed} />
            )}
          </div>
          {gallery && gallery.length > 1 && (
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 10,
                flexWrap: "wrap",
              }}
            >
              {gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${art.title} ${i + 1}`}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: 56,
                    height: 56,
                    objectFit: "cover",
                    borderRadius: 4,
                    cursor: "pointer",
                    border:
                      "2px solid " +
                      (i === activeImg ? "var(--gold)" : "var(--line)"),
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <h1
            className="disp"
            style={{ fontSize: 30, fontWeight: 500, margin: "0 0 6px" }}
          >
            {art.title}
          </h1>
          <div
            style={{ fontSize: 20, color: "var(--gold-deep)", fontWeight: 600 }}
          >
            EGP{art.price}{" "}
            <span
              style={{ fontSize: 13, color: "var(--muted)", fontWeight: 400 }}
            >
              EGP
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              margin: "10px 0 20px",
              fontSize: 13.5,
              color: "var(--muted)",
            }}
          >
            <Star size={14} fill="var(--gold)" color="var(--gold)" /> 4.9{" "}
            <span
              onClick={() => go("artist")}
              style={{
                cursor: "pointer",
                marginLeft: 10,
                textDecoration: "underline",
              }}
            >
              by {ownerInfo.name}
            </span>
          </div>
          <p style={{ lineHeight: 1.65, color: "#4A443E", fontSize: 14.5 }}>
            {art.desc}
          </p>
          <div
            style={{
              display: "flex",
              gap: 24,
              margin: "18px 0 26px",
              fontSize: 13.5,
            }}
          >
            <div>
              <div style={{ color: "var(--muted)" }}>Medium</div>
              <div style={{ fontWeight: 600 }}>{art.medium}</div>
            </div>
            <div>
              <div style={{ color: "var(--muted)" }}>Size</div>
              <div style={{ fontWeight: 600 }}>{art.size}</div>
            </div>
            <div>
              <div style={{ color: "var(--muted)" }}>Ships from</div>
              <div style={{ fontWeight: 600 }}>New York, USA</div>
            </div>
          </div>
          {isInactive ? (
            <div
              style={{
                padding: "12px 16px",
                borderRadius: 4,
                background: "var(--line)",
                fontSize: 13.5,
                fontWeight: 600,
                display: "inline-block",
              }}
            >
              This piece is currently unavailable
            </div>
          ) : (
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-dark" onClick={() => buyNow(art)}>
                Buy Now — Email the Artist
              </button>
              <button
                className="btn btn-outline"
                onClick={() => addToCart(art.id)}
              >
                Add to Cart
              </button>
            </div>
          )}
          {!isInactive && (
            <p style={{ fontSize: 12, color: "var(--muted)", marginTop: 10 }}>
              "Buy Now" sends your request straight to{" "}
              {ownerInfo.name.split(" ")[0]}, who'll reach out to arrange
              payment & shipping.
            </p>
          )}
        </div>
      </div>
      {related.length > 0 && (
        <div style={{ marginTop: 56 }}>
          <h2
            className="disp"
            style={{ fontSize: 22, fontWeight: 500, marginBottom: 18 }}
          >
            You may also like
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
              gap: 20,
            }}
          >
            {related.map((a) => (
              <ArtworkCard key={a.id} art={a} go={go} />
            ))}
          </div>
        </div>
      )}
      <style>{`@media (max-width: 760px){ .stack-mobile { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

/* ---------------- ARTIST ---------------- */
function ArtistPage({ go, artworks, ownerInfo }) {
  return (
    <div
      style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 24px 60px" }}
    >
      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {ownerInfo.avatar ? (
            <img
              src={ownerInfo.avatar}
              alt={ownerInfo.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <ArtPlaceformFace />
          )}
        </div>
        <div>
          <h1
            className="disp"
            style={{ fontSize: 28, fontWeight: 500, margin: 0 }}
          >
            {ownerInfo.name}
          </h1>
          <div
            style={{ color: "var(--muted)", fontSize: 14, margin: "4px 0 8px" }}
          >
            {ownerInfo.tag}
          </div>
          <p style={{ fontSize: 14, maxWidth: 480, color: "#4A443E" }}>
            {ownerInfo.bio}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 34,
          margin: "26px 0 34px",
          flexWrap: "wrap",
        }}
      >
        {[
          ["Artworks", ownerInfo.artworks],
          ["Followers", ownerInfo.followers],
          ["Following", ownerInfo.following],
          ["Positive Reviews", ownerInfo.rating],
        ].map(([l, v]) => (
          <div key={l}>
            <div style={{ fontSize: 20, fontWeight: 600 }}>{v}</div>
            <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{l}</div>
          </div>
        ))}
      </div>
      <h2
        className="disp"
        style={{ fontSize: 20, fontWeight: 500, marginBottom: 16 }}
      >
        Portfolio
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
          gap: 20,
        }}
      >
        {artworks.map((a) => (
          <ArtworkCard key={a.id} art={a} go={go} />
        ))}
      </div>
    </div>
  );
}
function ArtPlaceformFace() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg,#8A6D3F,#2b2420)",
      }}
    />
  );
}

/* ---------------- CUSTOM ART ---------------- */
const ART_STYLES = [
  "Realistic Portrait",
  "Oil Painting",
  "Watercolor",
  "Charcoal Sketch",
  "Pop Art",
  "Digital Illustration",
  "Abstract",
  "Line Art",
];

function CustomArt({ flash, ownerInfo, submitRequest }) {
  const [mode, setMode] = useState("photo"); // "photo" | "idea"
  const [subject, setSubject] = useState("myself"); // "myself" | "loved one"
  const [style, setStyle] = useState(ART_STYLES[0]);
  const [photos, setPhotos] = useState([]); // data URLs, preview only
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    idea: "",
    details: "",
    orientation: "Portrait",
    email: "",
  });

  function filesToDataUrls(fileList) {
    return Promise.all(
      Array.from(fileList).map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          }),
      ),
    );
  }
  async function handleAddPhotos(e) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    try {
      const urls = await filesToDataUrls(files);
      setPhotos((p) => [...p, ...urls]);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }
  function removePhoto(i) {
    setPhotos((p) => p.filter((_, idx) => idx !== i));
  }

  function submit(e) {
    e.preventDefault();
    submitRequest({
      mode,
      subject,
      style: mode === "photo" ? style : undefined,
      orientation: form.orientation,
      details: form.details,
      idea: form.idea,
      photosCount: photos.length,
      email: form.email,
    });
    setForm({ idea: "", details: "", orientation: "Portrait", email: "" });
    setPhotos([]);
  }

  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "44px 24px 70px" }}>
      <h1 className="disp" style={{ fontSize: 30, fontWeight: 500 }}>
        Create Your Custom Artwork
      </h1>
      <p style={{ color: "var(--muted)", margin: "8px 0 22px" }}>
        Commission a piece made just for you — from a photo of yourself or
        someone you love, or from an idea you describe.
      </p>

      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        <button
          type="button"
          className="btn"
          onClick={() => setMode("photo")}
          style={{
            flex: 1,
            padding: "12px 14px",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
            border:
              "1.5px solid " +
              (mode === "photo" ? "var(--ink)" : "var(--line)"),
            background: mode === "photo" ? "var(--ink)" : "#fff",
            color: mode === "photo" ? "#fff" : "var(--ink)",
          }}
        >
          <Camera size={15} /> From a Photo
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setMode("idea")}
          style={{
            flex: 1,
            padding: "12px 14px",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 7,
            border:
              "1.5px solid " + (mode === "idea" ? "var(--ink)" : "var(--line)"),
            background: mode === "idea" ? "var(--ink)" : "#fff",
            color: mode === "idea" ? "#fff" : "var(--ink)",
          }}
        >
          <Lightbulb size={15} /> From an Idea
        </button>
      </div>

      <form
        onSubmit={submit}
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        {mode === "photo" ? (
          <>
            <label style={{ fontSize: 13, fontWeight: 600 }}>
              Who is the photo of?
              <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
                {[
                  ["myself", "Myself"],
                  ["loved one", "A loved one / family member"],
                ].map(([v, l]) => (
                  <button
                    type="button"
                    key={v}
                    onClick={() => setSubject(v)}
                    className="btn"
                    style={{
                      flex: 1,
                      padding: 11,
                      borderRadius: 4,
                      fontSize: 12.5,
                      border:
                        "1.5px solid " +
                        (subject === v ? "var(--ink)" : "var(--line)"),
                      background: subject === v ? "var(--ink)" : "#fff",
                      color: subject === v ? "#fff" : "var(--ink)",
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </label>

            <div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
                Upload the reference photo(s)
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {photos.map((src, i) => (
                  <div
                    key={i}
                    style={{ position: "relative", width: 80, height: 80 }}
                  >
                    <img
                      src={src}
                      alt={`Reference ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 6,
                        border: "1.5px solid var(--line)",
                      }}
                    />
                    <div
                      onClick={() => removePhoto(i)}
                      title="Remove"
                      style={{
                        position: "absolute",
                        top: 3,
                        right: 3,
                        background: "rgba(28,24,21,0.75)",
                        color: "#fff",
                        borderRadius: "50%",
                        width: 20,
                        height: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <X size={12} />
                    </div>
                  </div>
                ))}
                <label
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 6,
                    border: "1.5px dashed var(--line)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--muted)",
                    gap: 3,
                  }}
                >
                  <Upload size={16} />
                  <span style={{ fontSize: 10 }}>
                    {uploading ? "Uploading…" : "Add photo"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: "none" }}
                    onChange={handleAddPhotos}
                  />
                </label>
              </div>
              <div
                style={{ fontSize: 11.5, color: "var(--muted)", marginTop: 6 }}
              >
                Photos stay on your device for preview only. After you submit,
                the artist will follow up by email so you can send the reference
                photo(s) directly.
              </div>
            </div>

            <label style={{ fontSize: 13, fontWeight: 600 }}>
              Choose the style you're imagining
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 6,
                }}
              >
                {ART_STYLES.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setStyle(s)}
                    className="btn"
                    style={{
                      padding: "8px 14px",
                      borderRadius: 20,
                      fontSize: 12.5,
                      border:
                        "1.5px solid " +
                        (style === s ? "var(--ink)" : "var(--line)"),
                      background: style === s ? "var(--ink)" : "transparent",
                      color: style === s ? "var(--paper)" : "var(--ink)",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    {style === s && <Sparkles size={12} />}
                    {s}
                  </button>
                ))}
              </div>
            </label>

            <label style={{ fontSize: 13, fontWeight: 600 }}>
              Any special details?{" "}
              <span style={{ fontWeight: 400, color: "var(--muted)" }}>
                (optional)
              </span>
              <textarea
                className="input"
                rows={3}
                style={{ marginTop: 6, resize: "vertical" }}
                placeholder="Colors, background, mood, cropping, anything to keep or leave out…"
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
              />
            </label>
          </>
        ) : (
          <label style={{ fontSize: 13, fontWeight: 600 }}>
            Describe your idea
            <textarea
              className="input"
              rows={4}
              required
              style={{ marginTop: 6, resize: "vertical" }}
              placeholder="Example: a futuristic city in the clouds at sunset…"
              value={form.idea}
              onChange={(e) => setForm({ ...form, idea: e.target.value })}
            />
          </label>
        )}

        <label style={{ fontSize: 13, fontWeight: 600 }}>
          Orientation
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            {["Portrait", "Landscape"].map((o) => (
              <button
                type="button"
                key={o}
                onClick={() => setForm({ ...form, orientation: o })}
                className="btn"
                style={{
                  flex: 1,
                  padding: 11,
                  borderRadius: 4,
                  border:
                    "1.5px solid " +
                    (form.orientation === o ? "var(--ink)" : "var(--line)"),
                  background: form.orientation === o ? "var(--ink)" : "#fff",
                  color: form.orientation === o ? "#fff" : "var(--ink)",
                }}
              >
                {o}
              </button>
            ))}
          </div>
        </label>
        <label style={{ fontSize: 13, fontWeight: 600 }}>
          Your email
          <input
            className="input"
            type="email"
            required
            style={{ marginTop: 6 }}
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
        <button className="btn btn-dark" type="submit" style={{ marginTop: 8 }}>
          Send Request to Artist
        </button>
      </form>
    </div>
  );
}

/* ---------------- AUTH ---------------- */
function Login({ go, login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "56px 24px 80px" }}>
      <h1 className="disp" style={{ fontSize: 28, fontWeight: 500 }}>
        Admin Login
      </h1>
      <p style={{ color: "var(--muted)", fontSize: 14, margin: "6px 0 26px" }}>
        Sign in to open the orders dashboard
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(email, password);
        }}
        style={{ display: "flex", flexDirection: "column", gap: 14 }}
      >
        <label style={{ fontSize: 13, fontWeight: 600 }}>
          Email address
          <input
            className="input"
            style={{ marginTop: 6 }}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label style={{ fontSize: 13, fontWeight: 600 }}>
          Password
          <input
            className="input"
            style={{ marginTop: 6 }}
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn btn-dark" type="submit" style={{ marginTop: 6 }}>
          Login
        </button>
      </form>
      <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 14 }}>
        Admin demo: admin@wildsoul.com / admin123
      </p>
    </div>
  );
}
function NotAuthorized({ go }) {
  return (
    <div style={{ padding: 70, textAlign: "center" }}>
      <Lock size={26} style={{ marginBottom: 10 }} />
      <h2 className="disp" style={{ fontSize: 22 }}>
        Admins only
      </h2>
      <p style={{ color: "var(--muted)", margin: "8px 0 20px" }}>
        Sign in with the admin account to view the dashboard.
      </p>
      <button className="btn btn-dark" onClick={() => go("login")}>
        Sign In
      </button>
    </div>
  );
}

/* ---------------- CART ---------------- */
function Cart({ go, items, remove, total, checkout }) {
  return (
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "40px 24px 70px" }}>
      <h1 className="disp" style={{ fontSize: 28, fontWeight: 500 }}>
        Your Cart ({items.length})
      </h1>
      {items.length === 0 ? (
        <p style={{ color: "var(--muted)", marginTop: 20 }}>
          Your cart is empty.{" "}
          <span
            onClick={() => go("shop")}
            style={{ color: "var(--gold-deep)", cursor: "pointer" }}
          >
            Browse artworks →
          </span>
        </p>
      ) : (
        <>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {items.map((a) => (
              <div
                key={a.id}
                className="card"
                style={{
                  display: "flex",
                  gap: 14,
                  padding: 12,
                  borderRadius: 4,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 76,
                    borderRadius: 4,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <ArtworkImage art={a} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14.5 }}>
                    {a.title}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>
                    {a.size} · Qty {a.qty}
                  </div>
                </div>
                <div style={{ fontWeight: 600 }}>${a.price * a.qty}</div>
                <Trash2
                  size={17}
                  style={{ cursor: "pointer", color: "var(--muted)" }}
                  onClick={() => remove(a.id)}
                />
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 24,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            <span>Total</span>
            <span>${total}</span>
          </div>
          <button
            className="btn btn-dark"
            style={{ width: "100%", marginTop: 18 }}
            onClick={checkout}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

/* ---------------- ADMIN ---------------- */
function AdminDashboard({ ownerInfo }) {
  // Orders are intentionally email-only. The dashboard is kept as an admin-only
  // control page, but it does not duplicate or persist customer order data.
  const inboxHref = "https://mail.google.com/mail/u/0/#inbox";

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px 80px" }}>
      <div className="eyebrow">Admin</div>
      <h1
        className="disp"
        style={{ fontSize: 30, fontWeight: 500, marginBottom: 8 }}
      >
        Orders Dashboard
      </h1>
      <p
        style={{
          color: "var(--muted)",
          lineHeight: 1.6,
          maxWidth: 680,
          marginBottom: 24,
        }}
      >
        Orders are not stored in this website. Purchase requests and custom-art
        requests are handled by email only, so there is no customer-order
        database to maintain here.
      </p>

      <div className="card" style={{ borderRadius: 8, padding: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 12,
          }}
        >
          <Mail size={20} />
          <div className="disp" style={{ fontSize: 19, fontWeight: 500 }}>
            Manage Orders by Email
          </div>
        </div>
        <div
          style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.65 }}
        >
          Customer requests are sent to{" "}
          <b style={{ color: "var(--ink)" }}>{ownerInfo.email}</b>.
          {ownerInfo.notifyUrl
            ? " The automatic email notification endpoint is configured in the static code."
            : " Add a Formspree endpoint to OWNER_INITIAL.notifyUrl if you want requests to be delivered automatically without relying only on the buyer's Gmail compose window."}
        </div>
        <a
          href={inboxHref}
          target="_blank"
          rel="noreferrer"
          className="btn btn-dark"
          style={{
            marginTop: 18,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Mail size={15} /> Open Gmail Inbox
        </a>
      </div>

      <div
        className="card"
        style={{
          borderRadius: 8,
          padding: 20,
          marginTop: 16,
          borderStyle: "dashed",
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 5 }}>
          Static-site note
        </div>
        <div style={{ color: "var(--muted)", fontSize: 12.5, lineHeight: 1.6 }}>
          Artworks, prices, artist info, social links, hero/profile images, and
          admin credentials are edited directly in this JSX file. Dashboard
          editing has been intentionally removed.
        </div>
      </div>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer({ go, socialLinks = {}, flash }) {
  const socials = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      Icon: WhatsAppIcon,
      href: whatsappHref(socialLinks.whatsapp),
    },
    {
      key: "instagram",
      label: "Instagram",
      Icon: InstagramIcon,
      href: socialLinks.instagram,
    },
    {
      key: "facebook",
      label: "Facebook",
      Icon: FacebookIcon,
      href: socialLinks.facebook,
    },
    {
      key: "twitter",
      label: "Twitter / X",
      Icon: TwitterXIcon,
      href: socialLinks.twitter,
    },
  ];
  function handleClick(e, s) {
    if (!s.href) {
      e.preventDefault();
      flash?.(`${s.label} link not set up yet`);
    }
  }
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "40px 24px 26px",
        marginTop: 30,
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div className="disp" style={{ fontSize: 20, fontWeight: 600 }}>
          Wild Soul.
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {socials.map((s) => (
            <a
              key={s.key}
              href={s.href || "#"}
              target={s.href ? "_blank" : undefined}
              rel="noreferrer"
              onClick={(e) => handleClick(e, s)}
              title={s.label}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1.5px solid var(--line)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ink)",
                cursor: "pointer",
                opacity: s.href ? 1 : 0.55,
              }}
            >
              <s.Icon size={16} />
            </a>
          ))}
        </div>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>
          © 2026 Wild Soul. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
