// Nav linkleri
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () =>{
    navLinks.classList.toggle('active');
};


document.addEventListener('click', (event) => {

    if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Darkmode buton
const body = document.querySelector('body')
const dm_btn = document.querySelector('.dm_btn')
const icon = document.querySelector('.btn_icon')

dm_btn.addEventListener('click', () => {

    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    if(body.classList.contains('darkmode')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }else{
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    setTimeout( () =>{
        icon.classList.remove('animated');
    }, 500)
})

// BTP Ok İşareti

window.addEventListener('scroll', function() {
    const arrow = document.querySelector('.btp_arrow');
    if (window.scrollY > 200) {  // 200px sonra gözükmesi için
        arrow.classList.add('visible');
    } else {
        arrow.classList.remove('visible');
    }
});


document.getElementById("downloadCvBtn").addEventListener("click", function() {
    var a = document.createElement("a");
    a.href = "assets/Halit Cv Türkçe.pdf";  // İndirilecek dosyanın URL'si
    a.download = "Halit Cv Türkçe.pdf";  // Dosya adı
    a.click();
});
