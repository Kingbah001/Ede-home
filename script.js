//  window.location.href = "login.html";

// ═══════════════════════ DATA ════════════════════════
const hostelGradients = [
  "linear-gradient(135deg,#BFDBFE 0%,#93C5FD 100%)",
  "linear-gradient(135deg,#FDE68A 0%,#FCA5A5 100%)",
  "linear-gradient(135deg,#C7D2FE 0%,#A5B4FC 100%)",
  "linear-gradient(135deg,#BBF7D0 0%,#6EE7B7 100%)",
  "linear-gradient(135deg,#FED7AA 0%,#FB923C 100%)",
  "linear-gradient(135deg,#BAE6FD 0%,#38BDF8 100%)",
  "linear-gradient(135deg,#D9F99D 0%,#86EFAC 100%)",
  "linear-gradient(135deg,#F5D0FE 0%,#E879F9 60%,#C084FC 100%)",
  "linear-gradient(135deg,#FEF9C3 0%,#FDE047 100%)",
];
const avatarColors = [
  "#1E3ABA",
  "#16A34A",
  "#D97706",
  "#7C3AED",
  "#DC2626",
  "#0D9488",
];

let hostels = [
  {
    id: 1,
    name: "GreenView Hostel",
    price: 250000,
    dist: 0.4,
    verified: true,
    lastVerified: "3 days ago",
    room: "Self Contain",
    desc: "GreenView Hostel offers a comfortable and secure environment for students. Located in a serene area close to Federal Polytechnic Ede, it features round-the-clock security, reliable electricity and a welcoming atmosphere.",
    amenities: [
      "Wi-Fi",
      "Water Supply",
      "Security",
      "Electricity",
      "Parking",
      "CCTV",
    ],
    occupancy: "2 in a room",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[0],
    views: 48,
  },
  {
    id: 2,
    name: "Bright Future Lodge",
    price: 200000,
    dist: 0.6,
    verified: true,
    lastVerified: "5 days ago",
    room: "Two in a Room",
    desc: "Bright Future Lodge is purpose-built for students seeking affordability without sacrificing comfort. Spacious shared rooms, consistent water supply and proximity to the main campus gate make it a great choice.",
    amenities: ["Water Supply", "Security", "Electricity", "Furnished Rooms"],
    occupancy: "2 in a room",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[1],
    views: 36,
  },
  {
    id: 3,
    name: "Peaceful Stay Hostel",
    price: 180000,
    dist: 0.8,
    verified: true,
    lastVerified: "2 days ago",
    room: "Single Room",
    desc: "Peaceful Stay provides a quiet and focused environment ideal for students who value a distraction-free study space. Clean rooms, stable electricity and tight security round off an excellent package.",
    amenities: ["Wi-Fi", "Water Supply", "Security", "Electricity"],
    occupancy: "1 person",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[2],
    views: 29,
  },
  {
    id: 4,
    name: "Royal Court Lodge",
    price: 220000,
    dist: 1.0,
    verified: false,
    lastVerified: "–",
    room: "Self Contain",
    desc: "Royal Court Lodge offers self-contained apartments with modern finishes. Each unit comes fully furnished with kitchen facilities and a private bathroom — ideal for students wanting privacy and independence.",
    amenities: ["Wi-Fi", "Water Supply", "Parking", "Furnished Rooms"],
    occupancy: "1 person",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[3],
    views: 21,
  },
  {
    id: 5,
    name: "Sunshine Hostel",
    price: 150000,
    dist: 1.2,
    verified: false,
    lastVerified: "–",
    room: "Shared Apartment",
    desc: "Sunshine Hostel is the most budget-friendly option near campus. Shared apartments keep costs low while maintaining clean, safe and liveable conditions for resourceful students.",
    amenities: ["Water Supply", "Security", "Electricity"],
    occupancy: "3–4 in a room",
    bathrooms: 2,
    lease: "1 Year",
    gradient: hostelGradients[4],
    views: 17,
  },
  {
    id: 6,
    name: "Campus View Lodge",
    price: 210000,
    dist: 0.5,
    verified: true,
    lastVerified: "1 day ago",
    room: "Self Contain",
    desc: "Campus View Lodge lives up to its name — you can see the polytechnic gate from some rooms. Self-contained units with tiled floors, quality beds and 24/7 water supply make this a top student pick.",
    amenities: ["Wi-Fi", "Water Supply", "Security", "Electricity", "Parking"],
    occupancy: "1 person",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[5],
    views: 42,
  },
  {
    id: 7,
    name: "Scholar's Den",
    price: 175000,
    dist: 0.9,
    verified: true,
    lastVerified: "4 days ago",
    room: "Two in a Room",
    desc: "Scholar's Den is designed with student life in mind. It features a communal study area, reliable Wi-Fi and a generator that runs through the night — so late-night cramming is no problem.",
    amenities: ["Wi-Fi", "Security", "Electricity", "Furnished Rooms", "CCTV"],
    occupancy: "2 in a room",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[6],
    views: 24,
  },
  {
    id: 8,
    name: "Heritage Hostel",
    price: 195000,
    dist: 0.7,
    verified: true,
    lastVerified: "1 week ago",
    room: "Single Room",
    desc: "Heritage Hostel has been housing students for over a decade and has built a strong reputation for reliability. The landlord is known for quick responses and fair pricing throughout the lease period.",
    amenities: ["Water Supply", "Security", "Electricity", "Parking"],
    occupancy: "1 person",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[7],
    views: 18,
  },
  {
    id: 9,
    name: "Prestige Quarters",
    price: 280000,
    dist: 0.3,
    verified: true,
    lastVerified: "2 days ago",
    room: "Self Contain",
    desc: "Prestige Quarters is the premium option near campus. Fully tiled, CCTV-monitored and with inverter backup power, ideal for students or postgrads who want quality accommodation close to the polytechnic.",
    amenities: [
      "Wi-Fi",
      "Water Supply",
      "Security",
      "Electricity",
      "Parking",
      "CCTV",
      "Furnished Rooms",
    ],
    occupancy: "1 person",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[8],
    views: 55,
  },
];

let users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@easyhostel.com",
    role: "admin",
    status: "active",
    lastLogin: "Just now",
    avatar: "AU",
  },
  {
    id: 2,
    name: "Tobi Adeyemi",
    email: "tobi@easyhostel.com",
    role: "admin",
    status: "active",
    lastLogin: "2 hours ago",
    avatar: "TA",
  },
  {
    id: 3,
    name: "Funmi Okafor",
    email: "funmi@easyhostel.com",
    role: "staff",
    status: "active",
    lastLogin: "Yesterday",
    avatar: "FO",
  },
  {
    id: 4,
    name: "Seun Bakare",
    email: "seun@easyhostel.com",
    role: "staff",
    status: "inactive",
    lastLogin: "3 days ago",
    avatar: "SB",
  },
  {
    id: 5,
    name: "Yemi Adeoye",
    email: "yemi@easyhostel.com",
    role: "staff",
    status: "active",
    lastLogin: "1 week ago",
    avatar: "YA",
  },
];

let currentDetailId = 1,
  deleteTargetId = null,
  deleteUserTargetId = null;
let listingsPage = 1,
  adminPage = 1,
  usersPage = 1;
const ITEMS_PER_PAGE = 5;
const LISTINGS_PER_PAGE = 6;
let filteredListings = [...hostels];

// ═══════════════════════ PAGE NAV ════════════════════
function showPage(name) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const pg = document.getElementById("page-" + name);
  if (!pg) {
    showToast("Page not found", "error");
    return;
  }
  pg.classList.add("active");
  ["home", "listings", "about", "contact", "favourites"].forEach((n) => {
    const el = document.getElementById("nl-" + n);
    if (el) el.classList.toggle("active", n === name);
    const mel = document.getElementById("ml-" + n);
    if (mel) mel.classList.toggle("active", n === name);
  });
  const isAdmin = name === "admin";
  const isLogin = name === "login";
  document.getElementById("mainNav").style.display =
    isAdmin || isLogin ? "none" : "";
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (name === "listings") {
    listingsPage = 1;
    applyFilters();
  }
  if (name === "admin") {
    switchAdminTab("dashboard");
  }
  if (name === "favourites") {
    renderFavourites();
  }
}

// ═══════════════════════ MOBILE MENU ═════════════════
function toggleMobileMenu() {
  document.getElementById("hamburger").classList.toggle("open");
  document.getElementById("mobileMenu").classList.toggle("open");
}
function closeMobileMenu() {
  document.getElementById("hamburger").classList.remove("open");
  document.getElementById("mobileMenu").classList.remove("open");
}

// ─── LOGO DOUBLE-CLICK → ADMIN ───────────────────────────────────────────
function logoDoubleClick(e) {
  e.preventDefault();
  e.stopPropagation();
  // Ripple animation on the logo icon
  const icon = document.getElementById("logoIcon");
  if (icon) {
    icon.style.animation = "none";
    // Force reflow so animation restarts cleanly
    void icon.offsetWidth;
    icon.style.animation = "logoRipple .5s ease forwards";
    icon.addEventListener(
      "animationend",
      () => {
        icon.style.animation = "";
      },
      { once: true },
    );
  }
  // Small delay so the ripple plays before navigation
  setTimeout(() => {
    showPage("login");
  }, 320);
}

// ═══════════════════════ TOAST ═══════════════════════
function showToast(msg, type = "") {
  const wrap = document.getElementById("toastWrap");
  const t = document.createElement("div");
  t.className = "toast" + (type ? " " + type : "");
  const icon = type === "success" ? "✓" : type === "error" ? "✕" : "ℹ";
  t.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(() => {
    t.classList.add("hiding");
    setTimeout(() => t.remove(), 300);
  }, 3000);
}

// ═══════════════════════ LOGIN ════════════════════════
function togglePasswordView() {
  const inp = document.getElementById("loginPassword");
  const icon = document.getElementById("eyeIcon");
  if (inp.type === "password") {
    inp.type = "text";
    icon.innerHTML =
      '<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
  } else {
    inp.type = "password";
    icon.innerHTML =
      '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
  }
}
function submitLogin() {
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPassword").value;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let ok = true;
  if (!emailRe.test(email)) {
    document.getElementById("loginEmail").classList.add("error");
    document.getElementById("emailErr").classList.add("show");
    ok = false;
  } else {
    document.getElementById("loginEmail").classList.remove("error");
    document.getElementById("emailErr").classList.remove("show");
  }
  if (pass !== "admin123") {
    document.getElementById("loginPassword").classList.add("error");
    document.getElementById("passErr").classList.add("show");
    ok = false;
  } else {
    document.getElementById("loginPassword").classList.remove("error");
    document.getElementById("passErr").classList.remove("show");
  }
  if (!ok) return;
  const btn = document.getElementById("loginBtn");
  btn.textContent = "Signing in…";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "Sign In";
    btn.disabled = false;
    showPage("admin");
    showToast("Welcome back, Admin!", "success");
  }, 900);
}
function adminLogout() {
  showPage("home");
  showToast("You have been logged out.");
}

// ═══════════════════════ HOME CARDS ══════════════════
function amenityIconSvg(a) {
  const m = {
    "Wi-Fi":
      '<path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/>',
    "Water Supply": '<path d="M12 2v20M4.93 7.93a10 10 0 0014.14 0"/>',
    Security: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    Electricity: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
    Parking:
      '<rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v3h-7V8z"/>',
    CCTV: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>',
    "Furnished Rooms":
      '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>',
  };
  return m[a] || '<circle cx="12" cy="12" r="10"/>';
}
function hostelCardHTML(h) {
  const tags = h.amenities.slice(0, 3);
  const imgStyle = h.coverPhoto
    ? `background:${h.gradient};background-image:url('${h.coverPhoto}');background-size:cover;background-position:center`
    : `background:${h.gradient}`;
  const showIcon = !h.coverPhoto;
  return `<div class="hostel-card" onclick="openDetail(${h.id})">
    <div class="card-img">
      <div class="card-img-inner" style="${imgStyle}">
        ${showIcon ? `<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(30,58,186,.2)" stroke-width="1.2"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>` : ""}
      </div>
      <div class="card-badge-wrap"><span class="badge ${h.verified ? "badge-verified" : "badge-unverified"}">${h.verified ? "✓ Verified" : "⚠ Unverified"}</span></div>
    </div>
    <div class="card-body">
      <div class="card-name">${h.name}</div>
      <div class="card-price">₦${h.price.toLocaleString()} <span>/ year</span></div>
      <div class="card-location"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>${h.dist} km from campus</div>
      <div class="card-amenities">${tags.map((t) => `<span class="amenity-tag">${t}</span>`).join("")}${h.amenities.length > 3 ? `<span class="amenity-tag">+${h.amenities.length - 3}</span>` : ""}</div>
      <div class="card-footer"><button class="btn btn-secondary" style="flex:1;font-size:.82rem;padding:8px 12px" onclick="event.stopPropagation();openDetail(${h.id})">View Details</button></div>
    </div>
  </div>`;
}
function renderHomeCards() {
  document.getElementById("homeCards").innerHTML = [...hostels]
    .filter((h) => h.verified)
    .slice(0, 3)
    .map((h) => hostelCardHTML(h))
    .join("");
}

// ═══════════════════════ CHIP ════════════════════════
function toggleChip(id) {
  document.getElementById("chip-" + id).classList.toggle("active");
}

// ═══════════════════════ LISTINGS FILTERS + PAGINATION ════════════
function updatePriceLabel(v) {
  const n = parseInt(v);
  document.getElementById("priceVal").textContent =
    n >= 500000 ? "₦500,000+" : "₦" + n.toLocaleString();
}

function applyFilters() {
  let results = [...hostels];
  const search = (document.getElementById("listSearch")?.value || "")
    .toLowerCase()
    .trim();
  const maxPrice = parseInt(
    document.getElementById("priceRange")?.value || 500000,
  );
  const verifiedOnly = document.getElementById("fVerified")?.checked;
  const roomChecks = [...document.querySelectorAll("[data-room]:checked")].map(
    (x) => x.dataset.room,
  );
  const amenityChecks = [
    ...document.querySelectorAll("[data-amenity]:checked"),
  ].map((x) => x.dataset.amenity);
  const sort = document.getElementById("sortSelect")?.value || "recommended";
  if (search)
    results = results.filter((h) => h.name.toLowerCase().includes(search));
  if (maxPrice < 500000) results = results.filter((h) => h.price <= maxPrice);
  if (verifiedOnly) results = results.filter((h) => h.verified);
  if (roomChecks.length)
    results = results.filter((h) => roomChecks.includes(h.room));
  if (amenityChecks.length)
    results = results.filter((h) =>
      amenityChecks.every((a) => h.amenities.includes(a)),
    );
  if (sort === "price-asc") results.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") results.sort((a, b) => b.price - a.price);
  else if (sort === "nearest") results.sort((a, b) => a.dist - b.dist);
  else if (sort === "verified") results.sort((a, b) => b.verified - a.verified);
  filteredListings = results;
  listingsPage = 1;
  renderListingsPage();
  renderActiveFilterTags();
}

function renderListingsPage() {
  const total = filteredListings.length;
  const totalPages = Math.max(1, Math.ceil(total / LISTINGS_PER_PAGE));
  if (listingsPage > totalPages) listingsPage = totalPages;
  const start = (listingsPage - 1) * LISTINGS_PER_PAGE;
  const slice = filteredListings.slice(start, start + LISTINGS_PER_PAGE);
  const countEl = document.getElementById("listNum");
  if (countEl) countEl.textContent = total;
  const grid = document.getElementById("listingsGrid");
  if (!grid) return;
  if (slice.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg><h3>No hostels found</h3><p>Try adjusting your filters or search term.</p><button class="btn btn-secondary" style="margin-top:14px" onclick="clearFilters()">Clear Filters</button></div>`;
  } else {
    grid.innerHTML = slice.map((h) => hostelCardHTML(h)).join("");
  }
  renderListingsPagination(totalPages);
}

function renderListingsPagination(totalPages) {
  const pg = document.getElementById("listPagination");
  if (!pg) return;
  if (totalPages <= 1) {
    pg.innerHTML = "";
    return;
  }
  let html = `<button class="lpg-btn" ${listingsPage === 1 ? "disabled" : ""} onclick="goListingsPage(${listingsPage - 1})">←</button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="lpg-btn ${i === listingsPage ? "active" : ""}" onclick="goListingsPage(${i})">${i}</button>`;
  }
  html += `<button class="lpg-btn" ${listingsPage === totalPages ? "disabled" : ""} onclick="goListingsPage(${listingsPage + 1})">→</button>`;
  html += `<span class="lpg-text">Page ${listingsPage} of ${totalPages}</span>`;
  pg.innerHTML = html;
}
function goListingsPage(p) {
  listingsPage = p;
  renderListingsPage();
  document
    .querySelector(".listings-layout main")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderActiveFilterTags() {
  const wrap = document.getElementById("activeFiltersWrap");
  if (!wrap) return;
  const tags = [];
  const maxPrice = parseInt(
    document.getElementById("priceRange")?.value || 500000,
  );
  if (maxPrice < 500000)
    tags.push({
      label: "Max ₦" + maxPrice.toLocaleString(),
      clear: () => {
        document.getElementById("priceRange").value = 500000;
        updatePriceLabel(500000);
      },
    });
  if (document.getElementById("fVerified")?.checked)
    tags.push({
      label: "Verified Only",
      clear: () => {
        document.getElementById("fVerified").checked = false;
      },
    });
  document.querySelectorAll("[data-room]:checked").forEach((x) =>
    tags.push({
      label: x.dataset.room,
      clear: () => {
        x.checked = false;
      },
    }),
  );
  document.querySelectorAll("[data-amenity]:checked").forEach((x) =>
    tags.push({
      label: x.dataset.amenity,
      clear: () => {
        x.checked = false;
      },
    }),
  );
  wrap.style.display = tags.length ? "flex" : "none";
  wrap.innerHTML = tags
    .map(
      (t, i) =>
        `<span class="active-filter-tag">${t.label}<button onclick="removeTag(${i})">×</button></span>`,
    )
    .join("");
  window._filterTagClears = tags.map((t) => t.clear);
}
function removeTag(i) {
  window._filterTagClears[i]();
  applyFilters();
}
function clearFilters() {
  document.getElementById("priceRange").value = 500000;
  updatePriceLabel(500000);
  document.getElementById("fVerified").checked = false;
  document
    .querySelectorAll("[data-room],[data-amenity]")
    .forEach((x) => (x.checked = false));
  document.getElementById("listSearch").value = "";
  applyFilters();
}
function toggleMobileFilters() {
  document.getElementById("filtersPanel").classList.toggle("mobile-open");
}
function closeMobileFilters() {
  document.getElementById("filtersPanel").classList.remove("mobile-open");
}

// ═══════════════════════ DETAIL ══════════════════════
function openDetail(id) {
  const h = hostels.find((x) => x.id === id);
  if (!h) return;
  currentDetailId = id;
  h.views = (h.views || 0) + 1;
  document.getElementById("detailName").textContent = h.name;
  document.getElementById("detailPrice").innerHTML =
    `₦${h.price.toLocaleString()} <span>/ year</span>`;
  document.getElementById("detailDist").textContent =
    h.dist + " km from campus";
  document.getElementById("detailDesc").textContent = h.desc;
  document.getElementById("detailVerifiedLbl").textContent = h.verified
    ? "Last verified: " + h.lastVerified
    : "Not yet verified";
  document.getElementById("detailBadge").className =
    "badge " + (h.verified ? "badge-verified" : "badge-unverified");
  document.getElementById("detailBadge").textContent = h.verified
    ? "✓ Verified"
    : "⚠ Unverified";

  // Gallery — use real photos if available, else gradient placeholders
  const mainImg = document.getElementById("galleryMainImg");
  const thumbsEl = document.getElementById("galleryThumbs");
  const hasPhotos = h.photos && h.photos.length > 0;

  if (hasPhotos) {
    mainImg.style.background = "";
    mainImg.style.backgroundImage = `url('${h.photos[0]}')`;
    mainImg.style.backgroundSize = "cover";
    mainImg.style.backgroundPosition = "center";
    const shown = h.photos.slice(0, 3);
    const extra = h.photos.length - 3;
    thumbsEl.innerHTML =
      shown
        .map(
          (src, i) => `
      <div class="thumb${i === 0 ? " active" : ""}" style="background-image:url('${src}');background-size:cover;background-position:center" onclick="selectThumbPhoto(this,'${src}')"></div>
    `,
        )
        .join("") +
      (extra > 0 ? `<div class="thumb thumb-more">+${extra}</div>` : "");
  } else {
    mainImg.style.backgroundImage = "";
    mainImg.style.background = h.gradient;
    const cols = [
      h.gradient,
      hostelGradients[id % hostelGradients.length],
      hostelGradients[(id + 1) % hostelGradients.length],
      hostelGradients[(id + 2) % hostelGradients.length],
    ];
    thumbsEl.innerHTML =
      cols
        .slice(0, 3)
        .map(
          (g, i) =>
            `<div class="thumb${i === 0 ? " active" : ""}" style="background:${g}" onclick="selectThumbGrad(this,'${g}')"></div>`,
        )
        .join("") + `<div class="thumb thumb-more">+6</div>`;
  }

  document.getElementById("detailTable").innerHTML = [
    ["Room Type", h.room],
    ["Occupancy", h.occupancy],
    ["Bathrooms", h.bathrooms],
    ["Lease Duration", h.lease],
  ]
    .map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`)
    .join("");
  document.getElementById("detailAmenities").innerHTML = h.amenities
    .map(
      (a) =>
        `<div class="amenity-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${amenityIconSvg(a)}</svg>${a}</div>`,
    )
    .join("");
  updateFavButton();
  showPage("detail");
}
function selectThumbPhoto(el, src) {
  document
    .querySelectorAll(".thumb")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  const m = document.getElementById("galleryMainImg");
  m.style.background = "";
  m.style.backgroundImage = `url('${src}')`;
  m.style.backgroundSize = "cover";
  m.style.backgroundPosition = "center";
}
function selectThumbGrad(el, grad) {
  document
    .querySelectorAll(".thumb")
    .forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  const m = document.getElementById("galleryMainImg");
  m.style.backgroundImage = "";
  m.style.background = grad;
}
// keep old name for backward compat
function selectThumb(el, grad) {
  selectThumbGrad(el, grad);
}

// ═══════════════════════ ADMIN TABS ══════════════════
const ADMIN_TABS = [
  "dashboard",
  "listings",
  "addlisting",
  "reports",
  "users",
  "settings",
];
function switchAdminTab(tab) {
  ADMIN_TABS.forEach((t) => {
    // section panels
    const el = document.getElementById("asec-" + t);
    if (el) el.classList.toggle("active", t === tab);
    // desktop sidebar links
    const nav = document.getElementById("stab-" + t);
    if (nav) nav.classList.toggle("active", t === tab);
    // mobile bottom nav buttons
    const mBtn = document.getElementById("amn-" + t);
    if (mBtn) mBtn.classList.toggle("active", t === tab);
  });
  if (tab === "dashboard") renderDashboard();
  if (tab === "listings") renderAdminListings();
  if (tab === "addlisting") {
    buildAmenityCheckboxes();
    uploadedPhotos = [];
    renderPhotoPreview();
    const dz = document.getElementById("photoDropzone");
    if (dz) dz.style.display = "";
  }
  if (tab === "reports") renderReports();
  if (tab === "users") renderUsersTable();
  if (tab === "settings") switchSettingsTab("general");
}

// ═══════════════════════ DASHBOARD ═══════════════════
function renderDashboard() {
  const v = hostels.filter((h) => h.verified).length;
  const u = hostels.filter((h) => !h.verified).length;
  document.getElementById("dash-total").textContent = hostels.length;
  document.getElementById("dash-verified").textContent = v;
  document.getElementById("dash-unverified").textContent = u;
  const now = new Date();
  document.getElementById("adminDateTime").textContent = now.toLocaleString(
    "en-NG",
    {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  );
  // Mini chart
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const vals = [28, 35, 22, 41, 38, 52, 31];
  const max = Math.max(...vals);
  document.getElementById("dashChart").innerHTML = days
    .map(
      (d, i) =>
        `<div class="chart-bar-group"><div class="chart-bar" style="height:${Math.round((vals[i] / max) * 90) + 10}px;background:${i === 5 ? "var(--green)" : "var(--blue)"}"></div><span class="chart-bar-lbl">${d}</span></div>`,
    )
    .join("");
  // Status donut text
  document.getElementById("dashStatusChart").innerHTML =
    `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">${[
      { label: "Verified", val: v, color: "var(--green)" },
      { label: "Unverified", val: u, color: "var(--amber)" },
      { label: "Total", val: hostels.length, color: "var(--blue)" },
      {
        label: "Avg Price",
        val:
          "₦" +
          Math.round(
            hostels.reduce((s, h) => s + h.price, 0) / hostels.length / 1000,
          ) +
          "k",
        color: "var(--purple)",
      },
    ]
      .map(
        (x) =>
          `<div style="text-align:center;padding:16px 8px;background:var(--bg);border-radius:10px"><div style="font-family:Sora,sans-serif;font-size:1.5rem;font-weight:800;color:${x.color}">${x.val}</div><div style="font-size:.75rem;color:var(--mid);margin-top:3px">${x.label}</div></div>`,
      )
      .join("")}</div>`;
  // Recent table
  document.getElementById("dashTableBody").innerHTML = hostels
    .slice(0, 5)
    .map(
      (h, i) =>
        `<tr><td style="color:var(--light);font-size:.8rem">${i + 1}</td><td style="font-weight:600">${h.name}</td><td>₦${h.price.toLocaleString()}</td><td><span class="status-pill ${h.verified ? "pill-verified" : "pill-unverified"}">${h.verified ? "Verified" : "Unverified"}</span></td><td style="color:var(--mid);font-size:.82rem">${h.lastVerified}</td></tr>`,
    )
    .join("");
}

// ═══════════════════════ LISTINGS ADMIN ══════════════
function renderAdminListings() {
  const v = hostels.filter((h) => h.verified).length;
  const u = hostels.filter((h) => !h.verified).length;
  const avg = Math.round(
    hostels.reduce((s, h) => s + h.price, 0) / hostels.length / 1000,
  );
  document.getElementById("lc-total").textContent = hostels.length;
  document.getElementById("lc-verified").textContent = v;
  document.getElementById("lc-unverified").textContent = u;
  document.getElementById("lc-avg").textContent = "₦" + avg + "k";
  const search = (
    document.getElementById("adminSearch")?.value || ""
  ).toLowerCase();
  let data = hostels.filter(
    (h) => !search || h.name.toLowerCase().includes(search),
  );
  const totalPages = Math.max(1, Math.ceil(data.length / ITEMS_PER_PAGE));
  if (adminPage > totalPages) adminPage = 1;
  const start = (adminPage - 1) * ITEMS_PER_PAGE;
  const slice = data.slice(start, start + ITEMS_PER_PAGE);
  document.getElementById("adminTableBody").innerHTML = slice
    .map(
      (h, i) =>
        `<tr><td style="color:var(--light);font-size:.8rem">${start + i + 1}</td><td style="font-weight:600">${h.name}</td><td style="color:var(--mid)">Ede, Osun State</td><td>₦${h.price.toLocaleString()}</td><td><span class="status-pill ${h.verified ? "pill-verified" : "pill-unverified"}">${h.verified ? "Verified" : "Unverified"}</span></td><td style="color:var(--mid);font-size:.82rem">${h.lastVerified}</td><td><div class="action-btns"><button class="icon-btn" title="View" onclick="openDetail(${h.id})"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button><button class="icon-btn" title="Edit" onclick="openEditModal(${h.id})"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button><button class="icon-btn success-btn" title="${h.verified ? "Unverify" : "Verify"}" onclick="toggleVerify(${h.id})"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></button><button class="icon-btn danger" title="Delete" onclick="openDeleteModal(${h.id})"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg></button></div></td></tr>`,
    )
    .join("");
  renderAdminPagination("adminPagination", data.length, adminPage, (p) => {
    adminPage = p;
    renderAdminListings();
  });
}

function renderAdminPagination(elId, total, current, cb) {
  const el = document.getElementById(elId);
  if (!el) return;
  const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));
  if (totalPages <= 1) {
    el.innerHTML = "";
    return;
  }
  let html = `<span style="font-size:.82rem;color:var(--mid);margin-right:8px">Showing ${Math.min((current - 1) * ITEMS_PER_PAGE + 1, total)}–${Math.min(current * ITEMS_PER_PAGE, total)} of ${total}</span>`;
  html += `<button class="pg-btn" ${current === 1 ? "disabled" : ""} onclick="(${cb.toString()})(${current - 1})">← Prev</button>`;
  const start = Math.max(1, current - 2),
    end = Math.min(totalPages, start + 4);
  for (let i = start; i <= end; i++)
    html += `<button class="pg-btn ${i === current ? "active" : ""}" onclick="(${cb.toString()})(${i})">${i}</button>`;
  html += `<button class="pg-btn" ${current === totalPages ? "disabled" : ""} onclick="(${cb.toString()})(${current + 1})">Next →</button>`;
  el.innerHTML = html;
}

function toggleVerify(id) {
  const h = hostels.find((x) => x.id === id);
  if (!h) return;
  h.verified = !h.verified;
  h.lastVerified = h.verified ? "Just now" : "–";
  renderAdminListings();
  renderDashboard();
  renderHomeCards();
  showToast(
    h.name + " marked as " + (h.verified ? "Verified" : "Unverified"),
    h.verified ? "success" : "",
  );
}
function openDeleteModal(id) {
  deleteTargetId = id;
  document.getElementById("deleteModal").classList.add("open");
}
function closeDeleteModal() {
  document.getElementById("deleteModal").classList.remove("open");
  deleteTargetId = null;
}
function confirmDelete() {
  if (!deleteTargetId) return;
  const h = hostels.find((x) => x.id === deleteTargetId);
  hostels = hostels.filter((x) => x.id !== deleteTargetId);
  closeDeleteModal();
  renderAdminListings();
  renderDashboard();
  renderHomeCards();
  showToast((h ? h.name : "Listing") + " deleted.", "error");
}
function openAddModal() {
  document.getElementById("addModal").classList.add("open");
}
function closeAddModal() {
  document.getElementById("addModal").classList.remove("open");
}
function submitModalListing() {
  const name = document.getElementById("mName").value.trim();
  const price = parseInt(document.getElementById("mPrice").value) || 0;
  let ok = true;
  if (!name) {
    document.getElementById("err-mName").classList.add("show");
    document.getElementById("mName").classList.add("error");
    ok = false;
  } else {
    document.getElementById("err-mName").classList.remove("show");
    document.getElementById("mName").classList.remove("error");
  }
  if (!price) {
    document.getElementById("err-mPrice").classList.add("show");
    document.getElementById("mPrice").classList.add("error");
    ok = false;
  } else {
    document.getElementById("err-mPrice").classList.remove("show");
    document.getElementById("mPrice").classList.remove("error");
  }
  if (!ok) return;
  hostels.unshift({
    id: Date.now(),
    name,
    price,
    dist: parseFloat((Math.random() * 1.2 + 0.3).toFixed(1)),
    verified: false,
    lastVerified: "–",
    room: document.getElementById("mRoom").value,
    desc: "A newly added hostel near Federal Polytechnic Ede.",
    amenities: ["Water Supply", "Electricity"],
    occupancy: "2 in a room",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[hostels.length % hostelGradients.length],
    views: 0,
  });
  closeAddModal();
  document.getElementById("mName").value = "";
  document.getElementById("mPrice").value = "";
  renderAdminListings();
  renderHomeCards();
  showToast(name + " added!", "success");
}

// ─── ADD LISTING FORM ─────────────────────────────────
const ALL_AMENITIES = [
  "Wi-Fi",
  "Water Supply",
  "Security",
  "Electricity",
  "Parking",
  "CCTV",
  "Furnished Rooms",
];
function buildAmenityCheckboxes() {
  document.getElementById("amenityCheckboxes").innerHTML = ALL_AMENITIES.map(
    (a) =>
      `<label style="display:flex;align-items:center;gap:7px;padding:6px 10px;border:1.5px solid var(--border);border-radius:7px;cursor:pointer;font-size:.83rem;transition:all .15s" class="amenity-cb-label"><input type="checkbox" data-amen="${a}" style="accent-color:var(--blue)" onchange="styleAmenityLabel(this)"/> ${a}</label>`,
  ).join("");
}
function styleAmenityLabel(el) {
  el.closest("label").style.borderColor = el.checked
    ? "var(--blue)"
    : "var(--border)";
  el.closest("label").style.background = el.checked
    ? "var(--blue-pale)"
    : "white";
  el.closest("label").style.color = el.checked ? "var(--blue)" : "inherit";
}

// ─── PHOTO UPLOAD ──────────────────────────────────────
let uploadedPhotos = []; // [{name, dataUrl, file}]
const MAX_PHOTOS = 8;
const MAX_MB = 5;

function handlePhotoFiles(filesInput) {
  const files = Array.from(filesInput);
  const errEl = document.getElementById("photoError");
  const errors = [];
  const toAdd = [];

  files.forEach((f) => {
    if (!["image/jpeg", "image/png", "image/webp"].includes(f.type)) {
      errors.push(`"${f.name}" is not a supported format.`);
      return;
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      errors.push(`"${f.name}" exceeds ${MAX_MB}MB limit.`);
      return;
    }
    if (uploadedPhotos.length + toAdd.length >= MAX_PHOTOS) {
      errors.push(`Maximum ${MAX_PHOTOS} photos allowed.`);
      return;
    }
    toAdd.push(f);
  });

  if (errEl) {
    if (errors.length) {
      errEl.textContent = errors[0];
      errEl.classList.add("show");
    } else errEl.classList.remove("show");
  }

  if (!toAdd.length) return;

  let loaded = 0;
  toAdd.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedPhotos.push({
        name: file.name,
        dataUrl: e.target.result,
        file,
      });
      loaded++;
      if (loaded === toAdd.length) renderPhotoPreview();
    };
    reader.readAsDataURL(file);
  });
  // reset input so same file can be re-added after removal
  document.getElementById("photoFileInput").value = "";
}

function renderPhotoPreview() {
  const grid = document.getElementById("photoPreviewGrid");
  const status = document.getElementById("photoStatus");
  const dropzone = document.getElementById("photoDropzone");

  if (uploadedPhotos.length === 0) {
    grid.style.display = "none";
    status.style.display = "none";
    dropzone.style.display = "block";
    return;
  }

  dropzone.style.display =
    uploadedPhotos.length >= MAX_PHOTOS ? "none" : "block";
  grid.style.display = "grid";
  status.style.display = "block";

  grid.innerHTML = uploadedPhotos
    .map(
      (p, i) => `
    <div class="photo-thumb" id="pthumb-${i}">
      <img src="${p.dataUrl}" alt="${p.name}" draggable="false"/>
      ${i === 0 ? '<div class="photo-thumb-cover">Cover</div>' : ""}
      <button class="photo-thumb-remove" onclick="removePhoto(${i})" title="Remove photo">✕</button>
      <div class="photo-thumb-name">${p.name}</div>
    </div>
  `,
    )
    .join("");

  // Add "+ more" tile if under limit
  if (uploadedPhotos.length < MAX_PHOTOS) {
    grid.innerHTML += `<div class="photo-add-btn" onclick="document.getElementById('photoFileInput').click()">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
      Add more
    </div>`;
  }

  // Status bar
  const pct = (uploadedPhotos.length / MAX_PHOTOS) * 100;
  document.getElementById("photoCountBar").style.width = pct + "%";
  document.getElementById("photoStatusText").textContent =
    `${uploadedPhotos.length} photo${uploadedPhotos.length !== 1 ? "s" : ""} added`;
  document.getElementById("photoCountSub").textContent =
    `${MAX_PHOTOS - uploadedPhotos.length} slot${MAX_PHOTOS - uploadedPhotos.length !== 1 ? "s" : ""} remaining · First photo used as cover`;
}

function removePhoto(i) {
  uploadedPhotos.splice(i, 1);
  renderPhotoPreview();
  if (uploadedPhotos.length === 0)
    document.getElementById("photoDropzone").style.display = "block";
}

function clearAllPhotos() {
  uploadedPhotos = [];
  renderPhotoPreview();
  document.getElementById("photoDropzone").style.display = "block";
  const errEl = document.getElementById("photoError");
  if (errEl) errEl.classList.remove("show");
}

function submitNewListing() {
  const name = document.getElementById("addName").value.trim();
  const price = parseInt(document.getElementById("addPrice").value) || 0;
  const loc = document.getElementById("addLocation").value.trim();
  let ok = true;
  if (!name) {
    document.getElementById("err-addName").classList.add("show");
    document.getElementById("addName").classList.add("error");
    ok = false;
  } else {
    document.getElementById("err-addName").classList.remove("show");
    document.getElementById("addName").classList.remove("error");
  }
  if (!price) {
    document.getElementById("err-addPrice").classList.add("show");
    document.getElementById("addPrice").classList.add("error");
    ok = false;
  } else {
    document.getElementById("err-addPrice").classList.remove("show");
    document.getElementById("addPrice").classList.remove("error");
  }
  if (!loc) {
    document.getElementById("err-addLocation").classList.add("show");
    document.getElementById("addLocation").classList.add("error");
    ok = false;
  } else {
    document.getElementById("err-addLocation").classList.remove("show");
    document.getElementById("addLocation").classList.remove("error");
  }
  if (!ok) return;
  const selectedAmenities = [
    ...document.querySelectorAll("[data-amen]:checked"),
  ].map((x) => x.dataset.amen);
  const dist =
    parseFloat(document.getElementById("addDist").value) ||
    parseFloat((Math.random() * 1.2 + 0.3).toFixed(1));
  // Use first uploaded photo as gradient preview or keep gradient fallback
  const coverPhoto =
    uploadedPhotos.length > 0 ? uploadedPhotos[0].dataUrl : null;
  const newH = {
    id: Date.now(),
    name,
    price,
    dist,
    verified: false,
    lastVerified: "–",
    room: document.getElementById("addRoom").value,
    desc:
      document.getElementById("addDesc").value ||
      "A newly added hostel near Federal Polytechnic Ede.",
    amenities: selectedAmenities.length
      ? selectedAmenities
      : ["Water Supply", "Electricity"],
    occupancy: document.getElementById("addOccupancy").value || "2 in a room",
    bathrooms: 1,
    lease: "1 Year",
    gradient: hostelGradients[hostels.length % hostelGradients.length],
    views: 0,
    photos: uploadedPhotos.map((p) => p.dataUrl),
    coverPhoto,
  };
  hostels.unshift(newH);
  resetAddForm();
  renderHomeCards();
  showToast(
    name +
      " published successfully" +
      (uploadedPhotos.length > 0
        ? ` with ${uploadedPhotos.length} photo${uploadedPhotos.length !== 1 ? "s" : ""}`
        : "") +
      " !",
    "success",
  );
  uploadedPhotos = [];
  switchAdminTab("listings");
}
function resetAddForm() {
  [
    "addName",
    "addLocation",
    "addPrice",
    "addDist",
    "addDesc",
    "addOccupancy",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  buildAmenityCheckboxes();
  uploadedPhotos = [];
  renderPhotoPreview();
  document.getElementById("photoDropzone").style.display = "block";
  const errEl = document.getElementById("photoError");
  if (errEl) errEl.classList.remove("show");
}

// ═══════════════════════ REPORTS ═════════════════════
function renderReports() {
  document.getElementById("rpt-listed").textContent = hostels.filter(
    (h) => h.verified,
  ).length;
  // Week chart
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    vals = [28, 35, 22, 41, 38, 52, 31];
  const mx = Math.max(...vals);
  document.getElementById("rptWeekChart").innerHTML = days
    .map(
      (d, i) =>
        `<div class="chart-bar-group"><div class="chart-bar" style="height:${Math.round((vals[i] / mx) * 120) + 10}px;background:${i === 5 ? "var(--green)" : "var(--blue)"}"></div><span class="chart-bar-lbl">${d}</span></div>`,
    )
    .join("");
  // Top listings
  const top = [...hostels]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);
  const maxV = top[0]?.views || 1;
  document.getElementById("rptTopListings").innerHTML = top
    .map(
      (h) =>
        `<div class="report-bar-row"><span class="report-bar-label" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px">${h.name}</span><div class="report-bar-track"><div class="report-bar-fill" style="width:${Math.round((h.views / maxV) * 100)}%;background:var(--blue)"></div></div><span class="report-bar-val">${h.views}</span></div>`,
    )
    .join("");
  // Price distribution
  const buckets = [
    { label: "<₦160k", min: 0, max: 160000 },
    { label: "₦160–200k", min: 160000, max: 200000 },
    { label: "₦200–250k", min: 200000, max: 250000 },
    { label: ">₦250k", min: 250000, max: Infinity },
  ];
  const bmax = Math.max(
    ...buckets.map(
      (b) => hostels.filter((h) => h.price >= b.min && h.price < b.max).length,
    ),
  );
  document.getElementById("rptPriceDist").innerHTML = buckets
    .map((b) => {
      const cnt = hostels.filter(
        (h) => h.price >= b.min && h.price < b.max,
      ).length;
      return `<div class="report-bar-row"><span class="report-bar-label">${b.label}</span><div class="report-bar-track"><div class="report-bar-fill" style="width:${bmax ? Math.round((cnt / bmax) * 100) : 0}%;background:var(--amber)"></div></div><span class="report-bar-val">${cnt}</span></div>`;
    })
    .join("");
  // Traffic
  const traffic = [
    { label: "Direct", pct: 42, color: "var(--blue)" },
    { label: "WhatsApp", pct: 28, color: "var(--green)" },
    { label: "Search", pct: 18, color: "var(--amber)" },
    { label: "Referral", pct: 12, color: "var(--purple)" },
  ];
  document.getElementById("rptTraffic").innerHTML = traffic
    .map(
      (t) =>
        `<div class="report-bar-row"><span class="report-bar-label">${t.label}</span><div class="report-bar-track"><div class="report-bar-fill" style="width:${t.pct}%;background:${t.color}"></div></div><span class="report-bar-val">${t.pct}%</span></div>`,
    )
    .join("");
}

// ═══════════════════════ USERS ═══════════════════════
function renderUsersTable() {
  document.getElementById("uc-total").textContent = users.length;
  document.getElementById("uc-admins").textContent = users.filter(
    (u) => u.role === "admin",
  ).length;
  document.getElementById("uc-active").textContent = users.filter(
    (u) => u.status === "active",
  ).length;
  const search = (
    document.getElementById("userSearch")?.value || ""
  ).toLowerCase();
  let data = users.filter(
    (u) =>
      !search ||
      u.name.toLowerCase().includes(search) ||
      u.email.toLowerCase().includes(search),
  );
  const totalPages = Math.max(1, Math.ceil(data.length / ITEMS_PER_PAGE));
  if (usersPage > totalPages) usersPage = 1;
  const start = (usersPage - 1) * ITEMS_PER_PAGE;
  const slice = data.slice(start, start + ITEMS_PER_PAGE);
  document.getElementById("usersTableBody").innerHTML = slice
    .map(
      (u, i) =>
        `<tr><td><div style="display:flex;align-items:center;gap:10px"><div class="user-avatar" style="background:${avatarColors[i % avatarColors.length]}">${u.avatar}</div><div><div style="font-weight:600;font-size:.875rem">${u.name}</div></div></div></td><td style="color:var(--mid);font-size:.82rem">${u.email}</td><td><span class="status-pill ${u.role === "admin" ? "pill-admin" : "pill-staff"}">${u.role}</span></td><td><span class="status-pill ${u.status === "active" ? "pill-active" : "pill-inactive"}">${u.status}</span></td><td style="color:var(--mid);font-size:.82rem">${u.lastLogin}</td><td><div class="action-btns"><button class="icon-btn" title="Toggle status" onclick="toggleUserStatus(${u.id})"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></button><button class="icon-btn danger" title="Remove" onclick="removeUser(${u.id})"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg></button></div></td></tr>`,
    )
    .join("");
  renderAdminPagination("usersPagination", data.length, usersPage, (p) => {
    usersPage = p;
    renderUsersTable();
  });
}
function toggleUserStatus(id) {
  const u = users.find((x) => x.id === id);
  if (!u) return;
  u.status = u.status === "active" ? "inactive" : "active";
  renderUsersTable();
  showToast(
    u.name + " is now " + u.status,
    u.status === "active" ? "success" : "",
  );
}
function removeUser(id) {
  if (id === 1) {
    showToast("Cannot remove the primary admin account.", "error");
    return;
  }
  users = users.filter((u) => u.id !== id);
  renderUsersTable();
  showToast("User removed.", "error");
}
function openUserModal() {
  document.getElementById("userModal").classList.add("open");
}
function closeUserModal() {
  document.getElementById("userModal").classList.remove("open");
}
function submitUser() {
  const name = document.getElementById("uName").value.trim();
  const email = document.getElementById("uEmail").value.trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let ok = true;
  if (!name) {
    document.getElementById("err-uName").classList.add("show");
    document.getElementById("uName").classList.add("error");
    ok = false;
  } else {
    document.getElementById("err-uName").classList.remove("show");
    document.getElementById("uName").classList.remove("error");
  }
  if (!emailRe.test(email)) {
    document.getElementById("err-uEmail").classList.add("show");
    document.getElementById("uEmail").classList.add("error");
    ok = false;
  } else {
    document.getElementById("err-uEmail").classList.remove("show");
    document.getElementById("uEmail").classList.remove("error");
  }
  if (!ok) return;
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  users.push({
    id: Date.now(),
    name,
    email,
    role: document.getElementById("uRole").value,
    status: "active",
    lastLogin: "Never",
    avatar: initials,
  });
  closeUserModal();
  document.getElementById("uName").value = "";
  document.getElementById("uEmail").value = "";
  renderUsersTable();
  showToast(
    name + " added as " + document.getElementById("uRole").value,
    "success",
  );
}

// ═══════════════════════ SETTINGS ════════════════════
const SETTING_TABS = [
  "general",
  "notifications",
  "security",
  "appearance",
  "danger",
];
function switchSettingsTab(tab) {
  SETTING_TABS.forEach((t) => {
    const s = document.getElementById("ssec-" + t);
    if (s) s.classList.toggle("active", t === tab);
    const n = document.getElementById("snav-" + t);
    if (n) n.classList.toggle("active", t === tab);
  });
}
function selectColor(el, color) {
  document
    .querySelectorAll(".color-swatch")
    .forEach((s) => s.classList.remove("selected"));
  el.classList.add("selected");
  document.documentElement.style.setProperty("--blue", color);
  showToast("Colour updated!", "success");
}
function toggleDarkMode(el) {
  if (el.checked) {
    document.getElementById("adminMain").style.background = "#1e293b";
    document.getElementById("adminMain").style.color = "#e2e8f0";
  } else {
    document.getElementById("adminMain").style.background = "";
    document.getElementById("adminMain").style.color = "";
  }
}

// ═══════════════════════ CONTACT ═════════════════════
function submitContact() {
  const name = document.getElementById("cName").value.trim();
  const email = document.getElementById("cEmail").value.trim();
  const msg = document.getElementById("cMessage").value.trim();
  let ok = true;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name) {
    showFE("cName", "err-cName");
    ok = false;
  } else {
    clearFE("cName", "err-cName");
  }
  if (!re.test(email)) {
    showFE("cEmail", "err-cEmail");
    ok = false;
  } else {
    clearFE("cEmail", "err-cEmail");
  }
  if (!msg) {
    showFE("cMessage", "err-cMessage");
    ok = false;
  } else {
    clearFE("cMessage", "err-cMessage");
  }
  if (!ok) return;
  document.getElementById("cName").value = "";
  document.getElementById("cEmail").value = "";
  document.getElementById("cMessage").value = "";
  showToast("Message sent! We'll respond within 1–3 hours.", "success");
}
function showFE(i, e) {
  document.getElementById(i).classList.add("error");
  document.getElementById(e).classList.add("show");
}
function clearFE(i, e) {
  document.getElementById(i).classList.remove("error");
  document.getElementById(e).classList.remove("show");
}

// ═══════════════════════ CLOSE OVERLAYS ══════════════
["addModal", "deleteModal", "userModal", "editModal"].forEach((id) => {
  document.getElementById(id)?.addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("open");
  });
});

// ═══════════════════════ HERO SEARCH ═════════════════
function heroGoSearch() {
  const term = (document.getElementById("heroSearch")?.value || "").trim();
  const listEl = document.getElementById("listSearch");
  if (listEl && term) {
    listEl.value = term;
  }
  showPage("listings");
}

// ═══════════════════════ FAVOURITES ══════════════════
let favourites = new Set();

function toggleFavourite() {
  const h = hostels.find((x) => x.id === currentDetailId);
  if (!h) return;
  const btn = document.getElementById("favBtn");
  const txt = document.getElementById("favBtnText");
  const icon = document.getElementById("favIcon");
  if (favourites.has(currentDetailId)) {
    favourites.delete(currentDetailId);
    btn.classList.remove("btn-fav-active");
    txt.textContent = "Save";
    icon.setAttribute("fill", "none");
    showToast(h.name + " removed from saved");
  } else {
    favourites.add(currentDetailId);
    btn.classList.add("btn-fav-active");
    txt.textContent = "Saved";
    icon.setAttribute("fill", "currentColor");
    showToast(h.name + " saved!", "success");
  }
  updateFavBadge();
}

function updateFavBadge() {
  const count = favourites.size;
  const badge = document.getElementById("navFavBadge");
  const mobileBadge = document.getElementById("mobileNavFavBadge");
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle("show", count > 0);
  }
  if (mobileBadge) {
    mobileBadge.textContent = count;
    mobileBadge.style.display = count > 0 ? "inline" : "none";
  }
}

function updateFavButton() {
  const btn = document.getElementById("favBtn");
  const txt = document.getElementById("favBtnText");
  const icon = document.getElementById("favIcon");
  if (!btn) return;
  const isSaved = favourites.has(currentDetailId);
  btn.classList.toggle("btn-fav-active", isSaved);
  if (txt) txt.textContent = isSaved ? "Saved" : "Save";
  if (icon) icon.setAttribute("fill", isSaved ? "currentColor" : "none");
}

function renderFavourites() {
  const grid = document.getElementById("favGrid");
  const countEl = document.getElementById("favCount");
  if (!grid) return;
  const saved = hostels.filter((h) => favourites.has(h.id));
  if (countEl) countEl.textContent = saved.length;
  if (saved.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      <h3>No saved hostels yet</h3>
      <p>Browse listings and tap the ♥ Save button on any hostel to save it here.</p>
      <button class="btn btn-primary" style="margin-top:16px" onclick="showPage('listings')">Browse Hostels</button>
    </div>`;
  } else {
    grid.innerHTML = saved.map((h) => hostelCardHTML(h)).join("");
  }
}

function clearAllFavourites() {
  if (favourites.size === 0) {
    showToast("No saved hostels to clear.");
    return;
  }
  favourites.clear();
  updateFavBadge();
  renderFavourites();
  showToast("All saved hostels cleared.");
}

// ═══════════════════════ SHARE ═══════════════════════
function shareDetail() {
  const h = hostels.find((x) => x.id === currentDetailId);
  if (!h) return;
  const shareText = `${h.name} – ₦${h.price.toLocaleString()}/year, ${h.dist}km from campus. Find it on Easy Hostel.`;
  if (navigator.share) {
    navigator
      .share({
        title: h.name,
        text: shareText,
        url: window.location.href,
      })
      .catch(() => {});
  } else {
    navigator.clipboard
      ?.writeText(shareText)
      .then(() => {
        showToast("Listing details copied to clipboard!", "success");
      })
      .catch(() => {
        showToast(
          "Share: " + h.name + " – ₦" + h.price.toLocaleString() + "/yr",
        );
      });
  }
}

// ═══════════════════════ EDIT LISTING MODAL ══════════
let editPhotos = [];

function openEditModal(id) {
  const h = hostels.find((x) => x.id === id);
  if (!h) return;
  document.getElementById("editHostelId").value = id;
  document.getElementById("editName").value = h.name;
  document.getElementById("editPrice").value = h.price;
  document.getElementById("editRoom").value = h.room;
  document.getElementById("editDesc").value = h.desc;
  editPhotos = h.photos
    ? [...h.photos.map((src) => ({ src, isExisting: true }))]
    : [];
  renderEditPhotoPreview();
  document.getElementById("editModal").classList.add("open");
}
function closeEditModal() {
  document.getElementById("editModal").classList.remove("open");
  editPhotos = [];
}

function handleEditPhotos(filesInput) {
  const files = Array.from(filesInput);
  const errors = [];
  files.forEach((f) => {
    if (!["image/jpeg", "image/png", "image/webp"].includes(f.type)) {
      errors.push('"' + f.name + '" not supported.');
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      errors.push('"' + f.name + '" exceeds 5MB.');
      return;
    }
    if (editPhotos.length >= 8) {
      errors.push("Max 8 photos.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      editPhotos.push({
        src: e.target.result,
        isExisting: false,
        name: f.name,
      });
      renderEditPhotoPreview();
    };
    reader.readAsDataURL(f);
  });
  if (errors.length) showToast(errors[0], "error");
  document.getElementById("editPhotoInput").value = "";
}

function photoDragOver(e, ctx) {
  e.preventDefault();
  const id = ctx === "edit" ? "editPhotoDropzone" : "photoDropzone";
  document.getElementById(id)?.classList.add("drag-over");
}
function photoDragLeave(e, ctx) {
  const id = ctx === "edit" ? "editPhotoDropzone" : "photoDropzone";
  document.getElementById(id)?.classList.remove("drag-over");
}
function photoDrop(e, ctx) {
  e.preventDefault();
  const id = ctx === "edit" ? "editPhotoDropzone" : "photoDropzone";
  document.getElementById(id)?.classList.remove("drag-over");
  const files = Array.from(e.dataTransfer.files).filter((f) =>
    f.type.startsWith("image/"),
  );
  if (ctx === "edit") handleEditPhotos(files);
  else handlePhotoFiles(files);
}

function renderEditPhotoPreview() {
  const preview = document.getElementById("editPhotoPreview");
  const grid = document.getElementById("editPhotoGrid");
  const countEl = document.getElementById("editPhotoCount");
  if (!preview || !grid) return;
  if (editPhotos.length === 0) {
    preview.style.display = "none";
    return;
  }
  preview.style.display = "block";
  const newCount = editPhotos.filter((p) => !p.isExisting).length;
  if (countEl)
    countEl.textContent =
      newCount > 0
        ? newCount +
          " new photo" +
          (newCount !== 1 ? "s" : "") +
          " added" +
          (editPhotos.filter((p) => p.isExisting).length > 0
            ? " (existing kept)"
            : "")
        : "Existing photos kept — add new ones to replace";
  grid.innerHTML = editPhotos
    .map(
      (p, i) => `
    <div class="photo-thumb" style="position:relative;border-radius:10px;overflow:hidden;aspect-ratio:4/3;border:2px solid ${i === 0 ? "var(--blue)" : "var(--border)"}">
      <img src="${p.src}" style="width:100%;height:100%;object-fit:cover"/>
      ${i === 0 ? '<div style="position:absolute;top:6px;left:6px;background:var(--blue);color:#fff;font-size:.65rem;font-weight:700;padding:2px 7px;border-radius:20px">Cover</div>' : ""}
      ${p.isExisting ? '<div style="position:absolute;top:6px;right:6px;background:rgba(0,0,0,.5);color:#fff;font-size:.6rem;padding:2px 6px;border-radius:4px">Existing</div>' : ""}
      <button onclick="removeEditPhoto(${i})" style="position:absolute;bottom:5px;right:5px;width:22px;height:22px;background:rgba(220,38,38,.85);border:none;border-radius:50%;cursor:pointer;color:#fff;font-size:.7rem">✕</button>
    </div>`,
    )
    .join("");
  if (editPhotos.length < 8)
    grid.innerHTML += `<div class="photo-add-btn" onclick="document.getElementById('editPhotoInput').click()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>Add</div>`;
}

function removeEditPhoto(i) {
  editPhotos.splice(i, 1);
  renderEditPhotoPreview();
}
function clearEditPhotos() {
  editPhotos = [];
  renderEditPhotoPreview();
}

function saveEditListing() {
  const id = parseInt(document.getElementById("editHostelId").value);
  const h = hostels.find((x) => x.id === id);
  if (!h) return;
  const name = document.getElementById("editName").value.trim();
  const price = parseInt(document.getElementById("editPrice").value) || 0;
  let ok = true;
  if (!name) {
    document.getElementById("err-editName").classList.add("show");
    document.getElementById("editName").classList.add("error");
    ok = false;
  } else {
    document.getElementById("err-editName").classList.remove("show");
    document.getElementById("editName").classList.remove("error");
  }
  if (!price) {
    document.getElementById("err-editPrice").classList.add("show");
    document.getElementById("editPrice").classList.add("error");
    ok = false;
  } else {
    document.getElementById("err-editPrice").classList.remove("show");
    document.getElementById("editPrice").classList.remove("error");
  }
  if (!ok) return;
  h.name = name;
  h.price = price;
  h.room = document.getElementById("editRoom").value;
  h.desc = document.getElementById("editDesc").value || h.desc;
  if (editPhotos.length > 0) {
    h.photos = editPhotos.map((p) => p.src);
    h.coverPhoto = editPhotos[0].src;
  }
  closeEditModal();
  renderAdminListings();
  renderHomeCards();
  showToast(name + " updated successfully!", "success");
}

// ═══════════════════════ INIT ════════════════════════
renderHomeCards();
applyFilters();
buildAmenityCheckboxes();
