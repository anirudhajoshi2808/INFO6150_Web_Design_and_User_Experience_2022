$(document).ready(function() {  
    //let username = $('#username').val();
    $("#link").click(function(e){
        let email = $("#myEmail").val();
        e.preventDefault();
        if(email.indexOf("@") < 0 || email.indexOf(".") < 0){
            alert("Invalid Email !");
            
            return;
        }
        else if (email.indexOf("northeastern.edu") < 0){
            
                alert("Please enter northeastern.edu Email !");
                e.preventDefault();
                return; 
        }
        
        localStorage.setItem("name", $('#username').val());
        window.location.href = 'calculator.html';
    })
});  