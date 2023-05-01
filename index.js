let arr= [];
let input = document.getElementById("input-el");
let button = document.getElementById("input-btn");
let list = document.getElementById("list-el");
let clear = document.getElementById("delete-btn");

const leads = JSON.parse(localStorage.getItem("arr"));

if(leads)
{
      arr=leads
      renderleads(arr)
}

button.addEventListener("click", function(){
      arr.push(input.value);
      input.value = "";
      localStorage.setItem("arr",JSON.stringify(arr));
       renderleads(arr);
})

clear.addEventListener("click", function(){
      localStorage.clear()
      arr = [];
      renderleads(arr);
})

function renderleads(leads) {
      let items=""
      for (const element of leads) {
               items += "<li><a target='_blank' href='"+element+"'>"+element+"</a></li>"
            }
            list.innerHTML = items
}



  