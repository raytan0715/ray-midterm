document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 預防默認的連接出現

            const targetId = this.getAttribute('href').substring(1); // get目標位置的id
            const targetElement = document.getElementById(targetId); // get目標位置的元素
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // 平滑滾動到該位置
            }
        });
    });
});

