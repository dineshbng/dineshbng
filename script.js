/* ==========================================
   PREMIUM PORTFOLIO - SCRIPT.JS
========================================== */

// ================= Loader =================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s";
    }, 1200);
});
const video = document.getElementById("bg-video");

document.body.addEventListener("click", () => {

    video.muted = false;

    video.play();

}, { once: true });

// ================= Sticky Navbar =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.8)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(0,0,0,.35)";
        header.style.boxShadow = "none";
    }

});

// ================= Scroll Reveal =================

const revealElements = document.querySelectorAll(
".certificate-card,.reel-card,.posts-grid img,.about-text,.contact-box p,.hero-left,.hero-right"
);

const reveal = () => {

    revealElements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// ================= Active Navigation =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================= Smooth Hover Glow =================

document.querySelectorAll(".certificate-card,.reel-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(255,45,85,.18),
rgba(255,255,255,.04) 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.04)";

});

});

// ================= Scroll To Top Button =================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
bottom:25px;
right:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
font-size:24px;
cursor:pointer;
display:none;
background:linear-gradient(45deg,#ff2d55,#8b5cf6);
color:white;
box-shadow:0 10px 25px rgba(255,45,85,.4);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ================= Button Hover =================

document.querySelectorAll(".btn1,.btn2,.hire-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ================= Console =================

console.log("🔥 Premium Portfolio Loaded Successfully");
const profile = document.getElementById("profile-img");

profile.addEventListener("click", () => {

    profile.classList.add("flip");

    profile.addEventListener("animationend", () => {
        profile.classList.remove("flip");
    }, { once: true });

});

function openCertificate(imageSrc){

    document.getElementById("viewerImage").src = imageSrc;

    document.getElementById("certificateViewer").style.display = "flex";
}

function closeCertificate(){

    document.getElementById("certificateViewer").style.display = "none";
}

// Close when clicking outside the image
document.getElementById("certificateViewer").addEventListener("click", function(e){

    if(e.target === this){
        closeCertificate();
    }

});
function openPost(imageSrc, instaLink){

    document.getElementById("popupPostImage").src = imageSrc;

    document.getElementById("viewImageBtn").href = imageSrc;

    document.getElementById("instagramBtn").href = instaLink;

    document.getElementById("postPopup").style.display = "flex";
}

function closePost(){

    document.getElementById("postPopup").style.display = "none";

}

window.onclick = function(e){

    const popup = document.getElementById("postPopup");

    if(e.target === popup){

        closePost();

    }

}