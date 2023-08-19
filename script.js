form_submit=document.querySelector('#submit-form')

 form_submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    var firstname=document.querySelector('[placeholder="First name"]')
    var lastname=document.querySelector('[placeholder="last name"]')
    var gender=document.getElementById("mySelect")
    
    var Address=document.querySelector('[placeholder="Address"]')
    var state=document.getElementById('myState')
    var pincode=document.querySelector('[placeholder="pincode"]')
    var select = document.getElementById('language-select')
    const food = [];

  for (const option of select.options) {
    if (option.selected) {
      food.push(option.value);
    }
  }

    console.log(firstname,lastname,gender,Address,state,pincode)
  var data=[firstname,lastname,gender,Address,state,pincode]
  var created_tr=document.createElement("tr") 

  for(i=0;i<6;i++){
    var created_td=document.createElement("td")
    created_td.innerText=data[i].value
    created_tr.append(created_td)
  }

  var creating_td_food=document.createElement('td')
  creating_td_food.innerText= food
  created_tr.append(creating_td_food)

document.querySelector('tbody').append(created_tr)

})