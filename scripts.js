// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Initialize EmailJS
emailjs.init("UxkIFOdJcmPAMTszS"); // User ID từ file cũ

// Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector("#nav-menu").classList.toggle("active");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_5w9ilnf", "template_wmu6hmb", this)
        .then(() => {
            alert("Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ sớm.");
            this.reset();
        }, e => {
            alert("Có lỗi xảy ra, vui lòng thử lại sau.");
            console.error("EmailJS error:", e);
        });
});

// Fix touch events for mobile
document.querySelectorAll(".cta-button").forEach(button => {
    button.addEventListener("touchstart", function () {
        this.classList.add("active");
    });
    button.addEventListener("touchend", function () {
        this.classList.remove("active");
    });
});

// Dynamic Portfolio
const projects = [
    {
        title: "E-commerce Platform: ShopVibe",
        description: "Nền tảng thương mại điện tử với giao diện mua sắm trực tuyến, giỏ hàng, và thanh toán tiện lợi.",
        image: "images/ecommerce1.webp"
    },
    {
        title: "Mobile Shopping App: QuickBuy",
        description: "Ứng dụng di động tối ưu cho mua sắm online, tích hợp thanh toán và theo dõi đơn hàng.",
        image: "images/ecommerce2.webp"
    },
    {
        title: "AI-Powered Store: SmartCart",
        description: "Website bán hàng tích hợp AI đề xuất sản phẩm và phân tích dữ liệu doanh thu.",
        image: "images/ecommerce3.webp"
    }
];

const portfolioGrid = document.getElementById("portfolio-grid");
projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("portfolio-item");
    projectElement.setAttribute("data-aos", "zoom-in");
    projectElement.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    portfolioGrid.appendChild(projectElement);
});