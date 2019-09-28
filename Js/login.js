function submituser(){
    var form = $('#register_user');
    var formData = $(form).serialize();
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: "/signup/registeruser",
        data: formData
    }).done(function(response) {
        console.log(response);
        alert(response);
        form[0].reset();
    })
}

function submitloguser(){
    var form = $('#validate_user');
    var formData = $(form).serialize();
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: "/signup/validateuser",
        data: formData
    }).done(function(response) {
        console.log(response);
        if(response =='Success'){
            alert(response)
            window.location = "../slot.html";
        }else{
            alert(response);
            form[0].reset();
        }
    })
}

function registerhall(){
    var form = $('#reg_hall');
    var formData = $(form).serialize();
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: "/user/reghall",
        data: formData
    }).done(function(response) {
        console.log(response);
        if(response =='Success'){
            alert(response)
            window.location = "../slot.html";
        }else{
            alert(response);
            form[0].reset();
        }
    })
}