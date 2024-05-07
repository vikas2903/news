$(document).ready(function () {
    fetch('./components/common/header.html')
        .then((response) => response.text())
        .then(data => {
            document.querySelector('.header').innerHTML = data;
        });


        fetch('./components/common/footer.html')
        .then((response) => response.text())
        .then(data => {
            document.querySelector('.footer').innerHTML = data;
        });



        
});
