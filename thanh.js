// Chờ cho toàn bộ nội dung của trang được tải xong
document.addEventListener('DOMContentLoaded', () => {

    // JavaScript cho Menu trên di động
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // JavaScript cho hiệu ứng cuộn trang
    const sections = document.querySelectorAll('.section');
    const options = {
        root: null, // quan sát so với viewport
        threshold: 0.1, // kích hoạt khi 10% section hiển thị
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            // Nếu section không còn trong viewport, không làm gì cả
            if (!entry.isIntersecting) {
                return;
            }
            // Nếu section nằm trong viewport, thêm class 'visible' để kích hoạt hiệu ứng
            entry.target.classList.add('visible');
            // Ngừng quan sát section này sau khi đã hiển thị
            observer.unobserve(entry.target); 
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

});
