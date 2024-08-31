const myModal = document.getElementById('Modal')
const myInput = document.getElementById('project-card-1')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})

const myModal2 = document.getElementById('Modal2')
const myInput2 = document.getElementById('project-card-2')

myModal2.addEventListener('shown.bs.modal', () => {
    myInput2.focus()
})

$(document).ready(function () {

    var typed = new Typed('#typed', {
        strings: ["Juan Jara", "Desarrollador", "Apasionado de la Tecnología"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    $('.tilt').tilt({
        scale: 1.1,
        glare: true,
        maxGlare: 0.8
    });


    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
            url: action,
            method: 'POST',
            crossDomain: true,
            data: new FormData(this),
            dataType: "json",
            processData: false,
            contentType: false,
            headers: {
                "Accept": "application/json"
            },
            success: function () {
                $('#success-message').fadeIn().delay(3000).fadeOut();
                $('#contact-form')[0].reset();
            },
            error: function () {
                $('#error-message').fadeIn().delay(3000).fadeOut();
            }
        });
    });

})
