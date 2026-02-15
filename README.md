# 📱 Instagram & Telegram Profil Sayti

Zamonaviy va responsive profil veb-sayti Instagram va Telegram uchun.

## ✨ Xususiyatlari

- 🎨 Zamonaviy dizayn va gradient fon
- 📱 Mobil qurilmalarga mos (Responsive)
- ⚡ Tez yuklanadi va silliq animatsiyalar
- 🔗 Instagram va Telegram havolalari
- 📊 Statistika ko'rsatgichi
- 🖼️ Galereya bo'limi
- 💬 Bog'lanish qismi
- 🏷️ Teglar va heshteglari
- ✉️ Email va WhatsApp bog'lanish

## 📁 Fayl Tuzilishi

```
profil uchun sayt/
├── index.html          # Asosiy HTML fayl
├── styles.css          # CSS stillar
├── script.js           # JavaScript funktsiyalari
└── README.md          # Bu fayl
```

## 🚀 Ishlatish

### 1. Fayllarni Ochish
1. `index.html` faylini brauseringizda oching yoki
2. Lokalni Server orqali ishga tushiring

### 2. Profilni Sozlash

`index.html` faylida ushbu qismlarni o'zgarting:

#### Profil Rasmi
```html
<img src="https://via.placeholder.com/150" alt="Profil Rasmi">
```
O'zingizning rasm URL-i bilan almashting.

#### Profil Nomingiz
```html
<h1 class="profile-name">Sizning Nomingiz</h1>
```

#### Bio va Tavsif
```html
<p class="profile-bio">Dasturchi | Ijodkor | Savdogar</p>
<p class="profile-description">🌟 Instagram va Telegram orqali meni kuzatib boring!</p>
```

#### Instagram Havolasi
```html
<a href="https://instagram.com/yourprofile" target="_blank" class="social-link instagram">
```
`yourprofile` ni o'zingizning Instagram username-ingiz bilan almashting.

#### Telegram Havolasi
```html
<a href="https://t.me/yourprofile" target="_blank" class="social-link telegram">
```
`yourprofile` ni o'zingizning Telegram username-ingiz bilan almashting.

#### Email va WhatsApp
```html
<a href="mailto:email@example.com" class="contact-link">
<a href="https://wa.me/1234567890" target="_blank" class="contact-link">
```

#### Statistika
```html
<div class="stat-number">500+</div> <!-- Followers soni -->
<div class="stat-number">1.2K</div> <!-- Posts soni -->
<div class="stat-number">98%</div>  <!-- Engagement -->
```

#### Galereya Rasmlari
```html
<div class="gallery-item">
    <img src="https://via.placeholder.com/100" alt="Post 1">
</div>
```

#### Teglar (Hashtags)
```html
<span class="tag">#Instagram</span>
<span class="tag">#Telegram</span>
```

## 🎨 Ranglarni O'zgartirish

`styles.css` faylida `:root` bo'limida ranglarni o'zgartiring:

```css
:root {
    --primary-color: #E1306C;         /* Asosiy rang (Instagram qizil) */
    --telegram-color: #0088cc;        /* Telegram ko'k */
    --text-dark: #262626;             /* Qora matn */
    --bg-light: #fafafa;              /* Engil fon */
}
```

## 🔧 JavaScript Funktsiyalari

### Profili Dinamik Yangilash

```javascript
updateProfile({
    name: 'Sizning Nomingiz',
    bio: 'Dasturchi | Ijodkor',
    description: '🌟 Meni kuzatib boring!',
    image: 'path/to/your/image.jpg'
});
```

## 📊 Hosting Qilish

### GitHub Pages orqali (Bepul)
1. GitHub-da repozitoriya yarating
2. `index.html`, `styles.css`, `script.js` ni yuklang
3. Settings → Pages → Source: main branch
4. `https://yourusername.github.io/repository-name` orqali kiriting

### Vercel orqali (Bepul)
1. [vercel.com](https://vercel.com) ga kiring
2. Proyektni import qiling
3. Deploy qiling

### Netlify orqali (Bepul)
1. [netlify.com](https://netlify.com) ga kiring
2. Fayllarni drag-drop qiling yoki git repository bog'lang
3. Avtomatik deploy qilinadi

## 📝 Vazifalar Ro'yxati

Qo'shimcha xususiyatlar uchun:

- [ ] Dark mode qo'shish
- [ ] Til o'zgartirish (O'zbek/Ingliz/Rus)
- [ ] Qo'shimcha social media platformalari
- [ ] Kontakt formasi qo'shish
- [ ] Animatsiya kitxonasini kengaytirish
- [ ] Sayt statistikasini qo'shish

## 🐛 Muammolar va Yechim

### Rasm Yuklanmaydi
- Rasm URL-i to'g'ri bo'lishiga ishonch hosil qiling
- HTTPS protokoli ishlatilishini tekshiring

### Havolalar Ishlamaydi
- Username-larni tekshiring
- `https://` bilan boshlanishiga ishonch hosil qiling

### Mobilda Tuzilmasi Buzilgan
- Responsive CSS avval ishlatiladi
- Brauseringizni yangilang (Ctrl+F5 Windows-da)

## 📞 Qo'llab-Quvvatlash

Savollar yoki tushunmovchiliklar uchun:
- Instagram: @yourprofile
- Telegram: @yourprofile
- Email: email@example.com

## 📜 Litsenziya

Bu proyekt MIT litsenziyasi ostida tarqatiladi.

---

**Sukses bo'ling! 🚀**
