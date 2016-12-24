/* global $ */
$(function() {
    $('.submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/romanromchyk@hotmail.com",
            method: "POST",
            data: {
                firstname: $('#firstname').val(),
                lastname: $('#lastname').val(),
                username: $('#username').val(),
                password: $('#password').val(),
                confpassword: $('#confpassword').val(),
                email: $('#email').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Done! For return to "Home" click on logo :)</h1>');
        });
    });
});