
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzslVLM7m-Efftn6rxMt3Xr8oNEVzkgJbcyFacIaaSl68uzdTGiOhGRW9WFHgGbAzAq-g/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => window.location = "#")
      .catch(error => console.error('Error!', error.message))
  })

let SPREADSHEET_ID = "1pXMS57RZCVG4DlA-i8xAI98ac1_FEwrTHv5s3M3IAGQ";
let CLIENT_ID = "430677260245-h0e518b61dgtflth8ji4ahibi9gai9kb.apps.googleusercontent.com";
let API_KEY = "AIzaSyDfZns_bgskUq5oKDg2y3GsnAGbMa03mRQ";
let SCOPE = "https://www.googleapis.com/auth/spreadsheets"


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let name = document.getElementById("School Name");
    let address = document.getElementById("Address");
    let number = document.getElementById("Mobile Number");
    let email = document.getElementById("Email");

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


    console.log(name.value);
    console.log(address.value);
    console.log(number.value);
    console.log(email.value);
    console.log(events1Dict);
    console.log(events2Dict);
    console.log(events3Dict);
    console.log(events4Dict);
    console.log(events5Dict);
  });

