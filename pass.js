function pass()
{
    var name = document.getElementById('text').value;

    var email = document.getElementById('email').value;

    var no = document.getElementById('no').value;
  
    var add = document.getElementById('add').value;

    
    if(name == "")
    {

        document.getElementById('text_err').innerHTML="Enter Name!";
        document.getElementById('text_err').style.color="red";
    }
    else
    {
        
        var n_syntax = /^[a-zA-Z _]{2,30}$/;
        var match = n_syntax.test(name);

        if(match)
        {
            document.getElementById('text_err').innerHTML="";
            var name_pass=true;

        }
        else{
            document.getElementById('text_err').innerHTML="Do not any digit";
            document.getElementById('text_err').style.color="red";
            var name_pass=false;
        }  

    }

    
    if(email == "")
    {

        document.getElementById('email_err').innerHTML="Enter Email Address!";
        document.getElementById('email_err').style.color="red";
    }
    else
    {
        
        var n_syntax = /^[a-zA-Z0-9]+@([a-zA-Z])+\.+[A-Za-z]+$/;
        var match = n_syntax.test(email);

        if(match)
        {
            document.getElementById('email_err').innerHTML="";
            var email_pass=true;

        }
        else{
            document.getElementById('email_err').innerHTML="Do not any digit";
            document.getElementById('email_err').style.color="red";
            var email_pass=false;
        }   
    }
    
    if(no == "")
    {

        document.getElementById('number_err').innerHTML="Enter Number!";
        document.getElementById('number_err').style.color="red";
    }
    else
    {
        
        var n_syntax = /^[0-9]{10}$/;
        var match = n_syntax.test(no);

        if(match)
        {
            document.getElementById('number_err').innerHTML="";
            var no_pass=true;

        }
        else{
            document.getElementById('number_err').innerHTML="Enter 10 digits .";
            document.getElementById('number_err').style.color="red";
            var no_pass=false;
        }   
    }

    if(add == "")
    {

        document.getElementById('add_err').innerHTML="Enter Address!";
        document.getElementById('add_err').style.color="red";
    }
    else
    {
        
        var n_syntax = /^[a-zA-Z0-9,.-]{5,30}$/;
        var match = n_syntax.test(add);

        if(match)
        {
            document.getElementById('add_err').innerHTML="";
            var add_pass=true;

        }
        else{
            document.getElementById('add_err').innerHTML="Do not enter special Character .";
            document.getElementById('add_err').style.color="red";
            var add_pass=false;
        }   
    }


    if(name_pass == true && email_pass == true && no_pass && no_pass == true && add_pass == true)
    {
        return true
    }

    else
    {
        return false;
    }
}