$(document).ready(function () {
    // Inicialización de Typed.js
    var typed = new Typed('#typed', {
        strings: ["Jota", "un Desarrollador", "un Apasionado por la Tecnología"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });


    // Inicialización de Tilt.js para el efecto de parallax
    $('.tilt').tilt({
        scale: 1.1,
        glare: true,
        maxGlare: 0.5
    });

    // Inicialización de AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // Manejo del formulario de contacto con Getform y Bootstrap Alerts
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        var action = $(this).attr("action");
        $.ajax({
            url: action, // Reemplaza con tu endpoint de Getform
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
            // success: function () {
            //     $('#form-alert')
            //         .removeClass('alert-danger')
            //         .addClass('alert-success')
            //         .text('¡Mensaje enviado con éxito!')
            //         .fadeIn();
            //     $('#contact-form')[0].reset();
            // },
            // error: function () {
            //     $('#form-alert')
            //         .removeClass('alert-success')
            //         .addClass('alert-danger')
            //         .text('Ocurrió un error, por favor intenta nuevamente.')
            //         .fadeIn();
            // }
        });
    });

    // $("#ajaxForm").submit(function (e) {
    //     e.preventDefault();
    //     var action = $(this).attr("action");
    //     $.ajax({
    //         type: "POST",
    //         url: action,
    //         crossDomain: true,
    //         data: new FormData(this),
    //         dataType: "json",
    //         processData: false,
    //         contentType: false,
    //         headers: {
    //             "Accept": "application/json"
    //         }
    //     }).done(function () {
    //         alert('The form was submitted successfully.')
    //     }).fail(function () {
    //         alert('An error occurred! Please try again later.')
    //     });
    // });
});
