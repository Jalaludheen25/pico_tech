// ═══ ADMIN CREDENTIALS (client-side demo) ═══
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'picotech2026';

// ═══ LOGIN ═══
function attemptLogin() {
  const user = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value;
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    sessionStorage.setItem('picotech_admin', 'true');
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'flex';
    document.getElementById('login-error').style.display = 'none';
    startClock();
  } else {
    document.getElementById('login-error').style.display = 'block';
    document.getElementById('login-pass').value = '';
  }
}

function togglePassword() {
  const inp = document.getElementById('login-pass');
  const icon = document.querySelector('.pass-toggle i');
  if (inp.type === 'password') { inp.type = 'text'; icon.className = 'fas fa-eye-slash'; }
  else { inp.type = 'password'; icon.className = 'fas fa-eye'; }
}

function doLogout() {
  sessionStorage.removeItem('picotech_admin');
  document.getElementById('admin-panel').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
}

// Enter key on login
document.getElementById('login-pass').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') attemptLogin();
});
document.getElementById('login-user').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') document.getElementById('login-pass').focus();
});

// Auto login if session exists
if (sessionStorage.getItem('picotech_admin') === 'true') {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('admin-panel').style.display = 'flex';
  startClock();
}

// ═══ SIDEBAR NAVIGATION ═══
function showAdmin(id, link) {
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  if (link) link.classList.add('active');
  // Update topbar title
  const titles = { dashboard:'Dashboard', contacts:'Contact Details', products:'Products', events:'Events', testimonials:'Testimonials', pages:'Pages', seo:'SEO Settings', settings:'Settings' };
  document.getElementById('topbar-title').textContent = titles[id] || 'Dashboard';
  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ═══ SAVE FUNCTIONS ═══
function showToast(msg) {
  const toast = document.getElementById('admin-toast');
  document.getElementById('toast-msg').textContent = msg || 'Saved successfully!';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function saveContacts() {
  const data = {
    name: document.getElementById('c-name').value,
    tagline: document.getElementById('c-tagline').value,
    desc: document.getElementById('c-desc').value,
    street: document.getElementById('c-street').value,
    city: document.getElementById('c-city').value,
    state: document.getElementById('c-state').value,
    zip: document.getElementById('c-zip').value,
    country: document.getElementById('c-country').value,
    phone: document.getElementById('c-phone').value,
    whatsapp: document.getElementById('c-whatsapp').value,
    email: document.getElementById('c-email').value,
    instagram: document.getElementById('c-instagram').value,
    facebook: document.getElementById('c-facebook').value,
    linkedin: document.getElementById('c-linkedin').value,
    youtube: document.getElementById('c-youtube').value,
  };
  localStorage.setItem('picotech_contacts', JSON.stringify(data));
  showToast('Contact details saved!');
}

function saveSEO() {
  showToast('SEO settings saved!');
}

function saveSettings() {
  showToast('Settings saved!');
}

// Load saved contacts
(function loadContacts() {
  const saved = localStorage.getItem('picotech_contacts');
  if (saved) {
    const data = JSON.parse(saved);
    for (const [key, val] of Object.entries(data)) {
      const el = document.getElementById('c-' + key);
      if (el && val) el.value = val;
    }
  }
})();

// ═══ CLOCK ═══
function startClock() {
  function updateTime() {
    const now = new Date();
    const opts = { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true };
    const el = document.getElementById('topbar-time');
    if (el) el.textContent = now.toLocaleTimeString('en-US', opts);
  }
  updateTime();
  setInterval(updateTime, 1000);
}
