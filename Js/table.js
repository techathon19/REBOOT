console.log("FG")
function myFunction() {

    $.ajax({
        type: 'GET',
        url: "/user/room",
    }).done(function(response) {
        console.log(response);
        if(response =='Success'){
            alert(response)
            window.location = "../slot.html";
        }else{
            alert(response);
        }
    console.log(response.length)
    var table = document.getElementById("myTable");
    for(i=response.length-1;i>=0;i--)
    {
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = response[i].lid;
    cell2.innerHTML = response[i].audi_name;;
    cell3.innerHTML = response[i].loc_name;
    cell4.innerHTML = response[i].capacity;
    cell5.innerHTML = response[i].rate;
    cell6.innerHTML = response[i].phone;
    }
})
  }


