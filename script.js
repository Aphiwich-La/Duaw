// รับปุ่มและข้อความเซอร์ไพรส์
const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');
const heart = document.getElementById('heart');

// กำหนดสถานะของข้อความเซอร์ไพรส์
let isVisible = false;

// ฟังก์ชันสำหรับแสดงข้อความเซอร์ไพรส์
function toggleSurpriseMessage() {
    isVisible = !isVisible; 
    surpriseMessage.classList.toggle('hidden', !isVisible);

    // หัวใจหายไปเมื่อมีการคลิกปุ่ม
    if (isVisible) {
        heart.classList.add('show');
        setTimeout(() => {
            heart.classList.remove('show');
        }, 2000); // หายไปหลังจาก 2 วินาที
    } else {
        heart.classList.remove('show'); // ซ่อนหัวใจเมื่อปิดข้อความเซอร์ไพรส์
    }
}
function toggleSurpriseMessage() {
    isVisible = !isVisible; 
    if (isVisible) {
        surpriseMessage.classList.remove('hidden');
        surpriseMessage.classList.add('show'); // เพิ่ม class สำหรับอนิเมชัน fade-in
    } else {
        surpriseMessage.classList.remove('show'); // ลบ class fade-in
        setTimeout(() => {
            surpriseMessage.classList.add('hidden');
        }, 500); // รอให้อนิเมชันเสร็จสิ้นก่อนซ่อน
    }
}

// เพิ่ม Event Listeners สำหรับปุ่มเซอร์ไพรส์
surpriseButton.addEventListener('click', toggleSurpriseMessage);

// เพิ่ม Event Listeners สำหรับปุ่มเซอร์ไพรส์
surpriseButton.addEventListener('click', toggleSurpriseMessage);
surpriseButton.addEventListener('mouseenter', () => {
    heart.classList.add('show');
    heart.style.left = `${surpriseButton.getBoundingClientRect().left + (surpriseButton.offsetWidth / 2) - 30}px`;
    heart.style.top = `${surpriseButton.getBoundingClientRect().top - 50}px`;
    heart.style.pointerEvents = 'none'; // หัวใจไม่ควรตอบสนองต่อการคลิก
});

surpriseButton.addEventListener('mouseleave', () => {
    heart.classList.remove('show');
});

// การทำงานของ Carousel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-img');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;
const carouselImages = document.querySelector('.carousel-images');

// ฟังก์ชันสำหรับอัปเดต Carousel
const updateCarousel = () => {
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
};

// ฟังก์ชันเพื่อปรับขนาดภาพให้เหมาะสม
const resizeImages = () => {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    images.forEach(img => {
        img.style.width = `${containerWidth}px`;
        img.style.height = 'auto'; // อนุญาตให้ความสูงปรับอัตโนมัติตามอัตราส่วน
    });
};

// การตั้งค่า Event Listeners
document.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateCarousel();
    });
});

// ฟังก์ชันสำหรับการเลื่อนอัตโนมัติ
let autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 3000);

// หยุดและเริ่มการเลื่อนอัตโนมัติ
const stopAutoSlide = () => clearInterval(autoSlideInterval);
const restartAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 3000);
};

document.querySelector('.carousel').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.carousel').addEventListener('mouseout', restartAutoSlide);

window.addEventListener('load', () => {
    resizeImages();
    updateCarousel(); // อัปเดต Carousel ทันทีหลังจากโหลด
});
window.addEventListener('resize', resizeImages);

const backgroundMusic = document.getElementById('backgroundMusic');
const playPauseButton = document.getElementById('playPauseButton');
const volumeControl = document.getElementById('volumeControl');

// เล่น/หยุดเพลง
playPauseButton.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseButton.textContent = '⏸️'; // เปลี่ยนเป็นปุ่มหยุด
    } else {
        backgroundMusic.pause();
        playPauseButton.textContent = '⏵️'; // เปลี่ยนเป็นปุ่มเล่น
    }
});

// การปรับระดับเสียง
volumeControl.addEventListener('input', () => {
    backgroundMusic.volume = volumeControl.value;
});



