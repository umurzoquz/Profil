// 🔧 Profil Sozlamalarini O'zgartirib Sozlang
// Bu faylni o'zgartirgan so'ng brauseringizni yangilang (Ctrl+F5)

const profileConfig = {
    // 👤 Profil Ma'lumotlari
    profile: {
        name: 'Sizning Nomingiz',
        bio: 'Dasturchi | Ijodkor | Savdogar',
        description: '🌟 Instagram va Telegram orqali meni kuzatib boring!',
        profileImage: 'https://via.placeholder.com/150', // O'zingizning rasm URL-i
    },

    // 📊 Statistika
    statistics: {
        followers: '500+',
        posts: '1.2K',
        engagement: '98%',
    },

    // 🔗 Social Media Havolalari
    socialLinks: {
        instagram: {
            url: 'https://instagram.com/yourprofile', // O'zingizning Instagram
            icon: 'fab fa-instagram',
            label: 'Instagram',
        },
        telegram: {
            url: 'https://t.me/yourprofile', // O'zingizning Telegram
            icon: 'fab fa-telegram',
            label: 'Telegram',
        },
    },

    // 💬 Bog'lanish Havolalari
    contactLinks: {
        email: {
            url: 'mailto:email@example.com', // Email manzili
            icon: 'fas fa-envelope',
            label: 'Email',
        },
        whatsapp: {
            url: 'https://wa.me/1234567890', // WhatsApp telefon (code bilan)
            icon: 'fab fa-whatsapp',
            label: 'WhatsApp',
        },
    },

    // 🏷️ Teglar/Heshteglari
    tags: [
        '#Instagram',
        '#Telegram',
        '#SocialMedia',
        '#Uzbekistan',
    ],

    // 🖼️ Galereya Rasmlari
    gallery: [
        {
            url: 'https://via.placeholder.com/100',
            alt: 'Post 1',
        },
        {
            url: 'https://via.placeholder.com/100',
            alt: 'Post 2',
        },
        {
            url: 'https://via.placeholder.com/100',
            alt: 'Post 3',
        },
        {
            url: 'https://via.placeholder.com/100',
            alt: 'Post 4',
        },
        {
            url: 'https://via.placeholder.com/100',
            alt: 'Post 5',
        },
        {
            url: 'https://via.placeholder.com/100',
            alt: 'Post 6',
        },
    ],

    // 🎨 Ranglar (CSS variable-lar)
    colors: {
        primary: '#E1306C',           // Asosiy rang
        telegram: '#0088cc',          // Telegram
        textDark: '#262626',          // Qora matn
        textLight: '#737373',         // Engil matn
        bgLight: '#fafafa',           // Engil fon
    },

    // 📱 Sait Sozlamalari
    siteSettings: {
        title: 'Mening Profil - Instagram & Telegram',
        language: 'uz', // uz, en, ru
        animation: true, // Animatsiyalarni yoqish/o'chirish
        theme: 'light', // light, dark
    },
};

// ✨ Profili iOS-gas Shaklida Ko'rsatish
function initializeProfile() {
    // Profil ma'lumotlarini yangilash
    updateProfile({
        name: profileConfig.profile.name,
        bio: profileConfig.profile.bio,
        description: profileConfig.profile.description,
        image: profileConfig.profile.profileImage,
    });

    console.log('✅ Profil sozlandi!');
}

// 📱 Qo'shimcha Vaqt: Profil Yuklanishida
window.addEventListener('load', () => {
    initializeProfile();
});

/* 
    🚀 TEZKOR SOZLASH KO'RSATMASI:

    1. O'ZINGIZNING INSTAGRAM-NI QOYING:
       instagram: {
           url: 'https://instagram.com/YOUR_USERNAME_HERE',
       },

    2. O'ZINGIZNING TELEGRAM-NI QOYING:
       telegram: {
           url: 'https://t.me/YOUR_USERNAME_HERE',
       },

    3. O'ZINGIZNING RASMI-NI QOYING:
       profileImage: 'https://example.com/your-photo.jpg',

    4. O'ZINGIZNING EMAIL-NI QOYING:
       email: {
           url: 'mailto:YOUR_EMAIL@example.com',
       },

    5. O'ZINGIZNING TELEFON RAQAMINI QOYING (WhatsApp uchun):
       whatsapp: {
           url: 'https://wa.me/YOUR_COUNTRY_CODE_AND_PHONE_NUMBER',
       },
       
       Misol: 'https://wa.me/998901234567'

    6. TAGLARNI O'ZGARTIRING:
       tags: [
           '#YourTag',
           '#AnotherTag',
       ],

    7. GALEREYA RASMLARI:
       gallery: [
           { url: 'https://example.com/photo1.jpg', alt: 'My photo 1' },
       ],
*/
