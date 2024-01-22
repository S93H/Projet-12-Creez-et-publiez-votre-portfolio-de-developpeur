function changeBg(bg, title) {
    const description = document.querySelector('.description');
    const contents = document.querySelectorAll('.content');
    description.style.background = `url("./img/${bg}")`;
    description.style.backgroundSize = 'cover';
    description.style.backgroundPosition = 'center';

    contents.forEach(content => {
        content.classList.remove('active');
        if(content.classList.contains(title)) {
            content.classList.add('active');
        }
    });

}