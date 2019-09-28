
function createtable(){

    var table = document.getElementById("table");
    table.innerHTML="<table style='width:100%'><tr> <th>Firstname</th><th>Lastname</th><th>Age</th> </tr><tr><td>Jill</td></tr> </table>"

}

function slotdetails(){
    var form = $('#validate_user');
    var formData = $(form).serialize();
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: "/user/submitdetail",
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


