$(function(){
    //Galery functionality
    var galeryPos = 0;
    var galImage = $("#gal");
    var bttnL = $("#leftbttm");
    var bttnR = $("#rightbttm");
    
    //Move the galery position and change the picture
    bttnL.on("click",function()
    {
      if(galeryPos != 0)galeryPos-=1;
      else galeryPos = 24;
      galeryRefresh();
    })
    
    bttnR.on("click",function()
    {
      if(galeryPos != 24)galeryPos+=1;
      else galeryPos = 0;
      galeryRefresh();
    })
    
    //Find the galery positions picture link
    function galeryRefresh()
    {
      galImage.attr("src","images/"+(galeryPos+1)+".jpg");
    }
    

    //Function to allow only one radio selected and let uncheck an radio
    $(".radioclass1").on("change",function()
    {
      var pirtsj = document.getElementById("pirtsja");
      var pirtsn = document.getElementById("pirtsne");
      var ID = $(this).attr('id');

      if("pirtsja" === ID)
      {
        if(pirtsn.checked === true)
        {
          pirtsn.checked = false;
        }
      }
      if("pirtsne" === ID)
      {
        if(pirtsj.checked === true)
        {
          pirtsj.checked = false;
        }
      }

    }
    )

    function leapYear(year)
  {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

  function fillAuto()
  {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    $("#from-mm").val(month+1);
    $("#from-dd").val(day);
    $("#people").val(1);
    $("#days").val(1);
  }
  fillAuto();
    //Function to check the data input
    document.getElementById("pieteikties").addEventListener("submit",function()
    {
      var name = document.getElementById("name");
      var frommm = document.getElementById("from-mm");
      var fromdd = document.getElementById("from-dd");
      var days = document.getElementById("days");
      var email = document.getElementById("email");
      var phone = document.getElementById("phone");
      var pirtsj = document.getElementById("pirtsja");
      var pirtsn = document.getElementById("pirtsne");
      var errormsg = document.getElementById("errormsg");

      var errmesage = [];

      //Check the name input
      if(name.value == "")
      {
        errmesage.push("Lūdzu ievadiet savu vārdu");
        name.classList.add("error");
      }
      else name.classList.remove("error");

      //Check the month input
      if(frommm.value < 1 || frommm.value > 12)
      {
        errmesage.push("Lūdzu ievadiet derīgu mēnesi");
        frommm.classList.add("error");
      }
      else frommm.classList.remove("error");

      //check the date input
      switch(parseInt(frommm.value))
      {
        case(3):
          if(fromdd.value>29 || fromdd.value < 1)
          {
            errmesage.push("Ievadiet datumu no 1 līdz 29");
            fromdd.classList.add("error");
          }
          else fromdd.classList.remove("error");
        break;
        case(4,6,9,11):
          if(fromdd.value>30 || fromdd.value < 1)
          {
            errmesage.push("Ievadiet datumu no 1 līdz 30");
            fromdd.classList.add("error");
          }
          else fromdd.classList.remove("error");
          break;
        default:
          if(fromdd.value>31 || fromdd.value < 1)
          {
            errmesage.push("Ievadiet datumu no 1 līdz 31");
            fromdd.classList.add("error");
          }
          else fromdd.classList.remove("error");
      }

      //check the days to stay input
      if(days.value < 1 || days.value == "")
      {
        errmesage.push("Jāpaliek vismaz 1 dienu :)");;
        days.classList.add("error");
      }
      else days.classList.remove("error");

      //check if either email or phone is given
      if(email.value == "" && phone.value == "")
      {
        errmesage.push("Ievadiet vai nu e-pastu vai telefonu, lai varam ar jums sazināties");
        email.classList.add("error");
        phone.classList.add("error");
      }
      else 
      {
        email.classList.remove("error");
        phone.classList.remove("error");
      }

      //check the people input
      if(people.value < 1 || people.value == "")
      {
        errmesage.push("Māja netiek izīrēta mazāk kā 1 cilvēkam");
        people.classList.add("error");
      }
      else people.classList.remove("error");

      //check phone input
      if(email.value === "")
      {
        if(isNaN(phone.value) || phone.value.toString().length < 0 || phone.value.toString().length > 8)
        {
          errmesage.push("Ievadiet 8 ciparus garu telefonu");
          phone.classList.add("error");
        }
      }
    
      //check the radios
      if(pirtsj.checked === false && pirtsn.checked === false)
      {
        errmesage.push("Precizējiet vai vēlaties iet pirtī");
      }

      //display message
      if(errmesage.length > 0)
      {
        event.preventDefault();
        errormsg.innerHTML = errmesage.join(", ")+".";
      }
      else errormsg.innerText = "";
    })

    //DOM manipulation classic
    document.getElementById("morestuff").addEventListener("click",function()
    {
      let parent = document.getElementById("side-menu");
      console.log(parent.childElementCount);
      if(parent.childElementCount == 1)
      {
        let kontaktinfo = document.createElement("a");
        parent.appendChild(kontaktinfo);
        kontaktinfo.href = "#kontaktinfo";
        kontaktinfo.innerText = "Kontaktinfo";
        let atrodamies = document.createElement("a");
        atrodamies.href = "#maphere";
        atrodamies.innerText = "Atrodamies šeit"
        parent.appendChild(atrodamies);
        let pieteikties = document.createElement("a");
        pieteikties.href = "#pieteikties";
        pieteikties.innerText = "Pieteikties palikt";
        parent.appendChild(pieteikties);
      }
    })
})