var inp=document.querySelector(".inp_mail")
var inp2=document.querySelector(".inp_pas")
var form=document.querySelector('.form')
var main=document.querySelector(".main")
var main2=document.querySelector(".main2")

var data;

var adminData=[
    {
        email:"sagheer@gmail.com"
        ,pass:"123980"
    }
]
window.addEventListener("DOMContentLoaded",function(){
    

    localStorage.setItem("data",JSON.stringify(adminData))
    data=JSON.parse(localStorage.getItem("data"))
    console.log(data,"data");
})

form.addEventListener("submit",function(e){
    e.preventDefault()
    var value1=inp.value
    var value2=inp2.value
    
    var item=data.map(item=>{
        if(value1=="" && value2==""){
            alert("fill the input")
            console.log(item);
        }
        else if(value1==item.email && value2==item.pass){
            main.classList.add("scla")
            setTimeout(() => {
            main2.classList.add("down")
                
            }, 1000);
        }
    })

    
    
    

})

var order = JSON.parse(localStorage.getItem('order'));
order.forEach(item=>{
    console.log(item);
    main2.innerHTML=`<div class="cart_books">
    <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="">
    <h1 class="title">${item.volumeInfo.title}</h1>
    <p class="price">PKR=5000</p>
    <button class="preview_item"><a href="${item.volumeInfo.previewLink}" target="_blank">order done</a></button>
    
  
  
  </div>`
})

