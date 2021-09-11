var customerForm=document.getElementById("customerForm");
var firstName=document.getElementById("firstName");
var LastName=document.getElementById("LastName");
var City=document.getElementById("City");
var Phone=document.getElementById("Phone");
var submitButton=document.getElementById("submitButton");
var buttonSpinner=document.getElementById("buttonSpinner");
var buttonText=document.getElementById("buttonText");
var unknownError=document.getElementById("unknownError");


function afterSubmit(e){
    e.preventDefault();
    if (customerForm.checkValidity() === false) {
    
        event.stopPropagation();
        for (field of customerForm.elements){
            if(!field.checkValidity()){
                field.classList.add("is-invalid")
            }

        }
        return;
      }
      //customerForm.classList.add('was-validated');
      for (field of customerForm.elements){

            field.classList.remove("is-invalid")
        

    }
    





    var info={
        First: firstName.value,
        Email: LastName.value,
        ic: Phone.value
        
    };
var url="https://script.google.com/macros/s/AKfycbxyFMN1OYrsyv8PzCpoCjIScl7-4VXM5uAxpF0kyiDMKxYqsurJ/exec";//webappUrl

buttonText.textContent="saving";
buttonSpinner.classList.remove("d-none");
submitButton.disabled=true;

fetch(url,
        {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            redirect: 'follow', // manual, *follow, error
            body: JSON.stringify(info) // body data type must match "Content-Type" header
          })
          .then(res=>res.json())
          .then(res=>{
              console.log(res);
              customerForm.reset();
              buttonText.textContent="Send";
buttonSpinner.classList.add("d-none");
submitButton.disabled=false;
          })
          .catch(
              err=>{
                  console.log(err);
                  console.log("something went wrong");
                  unknownError.classList.remove("d-none");
                setTimeout( function(){
                    unknownError.classList.add("d-none");
                    buttonText.textContent="Send";
                    buttonSpinner.classList.add("d-none");
                    submitButton.disabled=false;
                }
                    ,3000);
            }
              
          );
}

customerForm.addEventListener("submit",afterSubmit);
