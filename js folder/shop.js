// shop page
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('aside nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                const offset = 100; // Adjust this value for the desired offset
                const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});




function toggleAnswer(index) {
    var answer = document.querySelectorAll('.ans')[index - 1];
    answer.classList.toggle('active');
}