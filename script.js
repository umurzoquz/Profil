// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Image Modal Functionality
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close-modal');

// Image click to open modal
document.querySelectorAll('.review-img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = this.getAttribute('data-full');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
function closeImageModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

closeModal.addEventListener('click', closeImageModal);

// Close modal when clicking outside image
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeImageModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

// Audio Player - Only one plays at a time
const audioPlayers = document.querySelectorAll('.review-audio');

audioPlayers.forEach(audio => {
    audio.addEventListener('play', function() {
        audioPlayers.forEach(otherAudio => {
            if (otherAudio !== this) {
                otherAudio.pause();
            }
        });
    });
});

// Profile card animation on load
window.addEventListener('load', () => {
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        profileCard.style.opacity = '1';
    }
});

// Copy Instagram/Telegram username to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Nusxa qilindi!');
    }).catch(() => {
        alert('Nusxa qilishda xatolik!');
    });
}

// Update profile information
function updateProfile(data) {
    const nameElement = document.querySelector('.profile-name');
    const bioElement = document.querySelector('.profile-bio');
    const descElement = document.querySelector('.profile-description');
    const imgElement = document.querySelector('.profile-image img');

    if (data.name && nameElement) nameElement.textContent = data.name;
    if (data.bio && bioElement) bioElement.textContent = data.bio;
    if (data.description && descElement) descElement.textContent = data.description;
    if (data.image && imgElement) imgElement.src = data.image;
}

// Track social media clicks
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function() {
        const platform = this.classList.contains('instagram') ? 'Instagram' : 'Telegram';
        console.log(`${platform} havolasiga bosindi`);
    });
});

// Floating icons animation
const floatingIcons = document.querySelectorAll('.float-icon');
let bounceActive = true;

floatingIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
    });

    icon.addEventListener('mouseleave', function() {
        if (bounceActive) {
            this.style.animation = '';
        }
    });
});

// Responsive adjustments
function handleResize() {
    const width = window.innerWidth;
    const floatingIcons = document.querySelector('.floating-icons');
    
    if (width < 600) {
        if (floatingIcons) {
            floatingIcons.style.flexDirection = 'row';
        }
    } else {
        if (floatingIcons) {
            floatingIcons.style.flexDirection = 'column';
        }
    }
}

window.addEventListener('resize', handleResize);
handleResize();

// Add ripple effect to buttons
document.querySelectorAll('.social-link, .contact-link, .tag').forEach(element => {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation via CSS
const style = document.createElement('style');
style.textContent = `
    .social-link, .contact-link, .tag {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Example: How to update profile dynamically
// Uncomment and modify to use:
/*
updateProfile({
    name: 'Sizning Nomingiz',
    bio: 'Dasturchi | Ijodkor',
    description: '🌟 Instagram va Telegram orqali meni kuzatib boring!',
    image: 'path/to/your/image.jpg'
});
*/
