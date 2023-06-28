let loginForm = document.getElementById("registerForm");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let name = document.getElementById("School Name");
    let address = document.getElementById("Address");
    let number = document.getElementById("Mobile Number");
    let email = document.getElementById("Email");

    console.log(name.value);
    console.log(address.value);
    console.log(number.value);
    console.log(email.value);

    let events1 = document.getElementsByName("check1");
    let events2 = document.getElementsByName("check2");
    let events3 = document.getElementsByName("check3");
    let events4 = document.getElementsByName("check4");
    let events5 = document.getElementsByName("check5");
    var events1Dict = {}
    var events2Dict = {}
    var events3Dict = {}
    var events4Dict = {}
    var events5Dict = {}

    
    for(let i = 0;i<events1.length;i++)
    {
        events1Dict[events1[i].id] = events1[i].checked;
    }
    for(let i = 0;i<events2.length;i++)
    {
        events2Dict[events2[i].id] = events2[i].checked;
    }
    for(let i = 0;i<events3.length;i++)
    {
        events3Dict[events3[i].id] = events3[i].checked;
    }
    for(let i = 0;i<events4.length;i++)
    {
        events4Dict[events4[i].id] = events4[i].checked;
    }
    for(let i = 0;i<events5.length;i++)
    {
        events5Dict[events5[i].id] = events5[i].checked;
    }

    console.log(events1Dict);
    console.log(events2Dict);
    console.log(events3Dict);
    console.log(events4Dict);
    console.log(events5Dict);
  });