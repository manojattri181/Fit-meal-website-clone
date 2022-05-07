 // cart data in right menu;

 let arr = JSON.parse(localStorage.getItem("cart_data"));
      
 let grandtotal = 0; 
   for(let i=0;i<arr.length;i++){
   grandtotal+=  +arr[i].subtotal;
   }
document.querySelector("#subtotal_cart>h3").innerText = "Subtotal: "+ grandtotal;
document.querySelector("#subtotal_cart_right>h3").innerText = "Subtotal: "+ grandtotal;
document.querySelector("#cart_btn_right>span").innerText = arr.length;


if(arr.length === 0){
document.querySelector("#cart_content").innerText = "Your Cart is Empty";
document.querySelector("#cart_content").style.marginTop = "20px";
document.querySelector("#cart_content2").innerText = "No Product in the Cart";
document.querySelector("#cart_content2").style.marginTop = "20px";
document.querySelector("#subtotal_cart").innerHTML = "";
document.querySelector("#subtotal_cart_right").innerHTML = "";
}


arr.forEach(function(element,i){

let box = document.createElement("div");
box.setAttribute("id","cart_container"); 


let box1 = document.createElement("div");
let image = document.createElement("img");
image.setAttribute("src" , element.img);

let box2 = document.createElement("div");
let name = document.createElement("h4");
name.innerText = element.name;

let price = document.createElement("p");
price.innerText= element.quantity+ " X " + "₹ "+ element.price;

let total = document.createElement("p");
total.innerText = "="+element.subtotal;
let delet = document.createElement("button");
delet.setAttribute("id" , "cartremover")
delet.innerHTML = `<i class="fa fa-trash"></i>`;

delet.addEventListener("click",function(){
arr1.splice(i,1);
localStorage.setItem("cart_data",JSON.stringify(arr1));
window.location.reload();
})

box1.append(image);
box2.append(name,price,total);
box.append(box1,box2,delet);
document.querySelector("#cart_content").append(box);

});


let arr1 = JSON.parse(localStorage.getItem("cart_data"));
arr1.forEach(function(element,i){
let box = document.createElement("div");
box.setAttribute("id","cart_container"); 


let box1 = document.createElement("div");
let image = document.createElement("img");
image.setAttribute("src" , element.img);

let box2 = document.createElement("div");
let name = document.createElement("h4");
name.innerText = element.name;

let price = document.createElement("p");
price.innerText= element.quantity+ " X " + "₹ "+ element.price;

let total = document.createElement("p");
total.innerText = "="+element.subtotal;
let delet = document.createElement("button");
delet.setAttribute("id" , "cartremover")
delet.innerHTML = `<i class="fa fa-trash"></i>`;
delet.addEventListener("click",function(){
arr1.splice(i,1);
localStorage.setItem("cart_data",JSON.stringify(arr1));
window.location.reload();
})

box1.append(image);
box2.append(name,price,total);
box.append(box1,box2,delet);
document.querySelector("#cart_content2").append(box);
});

let data =[
{ img :"https://www.fitmeals.co.in/wp-content/uploads/2021/05/1-360x360.jpg",
name : "Almond Butter",
des : "Delectable almond butter prepared in-house, serves as the perfect guilt-free accompaniment with your healthy ...",
price :1200.00,
rating : "top",
link:"/Fit-meal-website-clone/products/content-pages/almondbutter.html"
},
{ img :"https://www.fitmeals.co.in/wp-content/uploads/2021/06/25-360x360.jpg",
name : "Almond Date Chocolate",
des : "Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the ....",
price : 400.00,
rating: "4",
link:"/Fit-meal-website-clone/products/content-pages/almonddate.html"
},
{ img :"https://www.fitmeals.co.in/wp-content/uploads/2021/06/arrabbiata-sauce-680x900-1-360x359.jpg",
name : "Arrabiata Sauce",
des : "Fitmeals Arrabbiata sauce is a delicious blend of spicy chillies, tomatoes and authentic Italian ingredients. ...",
price : 220.00,
popularity:"popular",
rating: "4",
link:"/Fit-meal-website-clone/products/content-pages/arrabiatasauce.html"
},
{ img :"https://www.fitmeals.co.in/wp-content/uploads/2021/06/12-360x359.jpg",
name : "BBQ Sauce",
des : "Our signature BBQ sauce has bold, smoky flavour with a hint of sweetness About This Product Bbq sauce has a ...",
price : 250.00,
popularity:"popular",
link:"/Fit-meal-website-clone/products/content-pages/bbq.html"
},
{ img :"https://www.fitmeals.co.in/wp-content/uploads/2021/06/14--550x550.jpg",
name : "Garlic Mayo",
des : "Treat your taste buds with some guilt-free velvety smooth cacao spread. Serves as the perfect accompaniment ...",
price : 180.00,
rating : "top",
link:"/Fit-meal-website-clone/products/content-pages/garlic.html"
},
{ img :"https://www.fitmeals.co.in/wp-content/uploads/2021/06/23-360x360.jpg",
name : "Coco Rush",
des : "Coco Rush is made with dates, nuts, premium grade cacao and wholesome ingredients. A delicious, healthy ...",
price : 550.00,
popularity:"popular",
rating : "top",
link:"/Fit-meal-website-clone/products/content-pages/cocorush.html"
},
];

//   high to low 
function sorting(){

let selected = document.querySelector("#sort").value;
// rating 
let rate = data.filter(function(ele){
console.log(selected);
return   ele.rating === selected;
})
display(rate);
// sorting  By popularity

let popular = data.filter(function(ele){
return   ele.popularity === selected;
})
display(popular);

//   sorting by low - high
if(selected =="sort by price:low to high"){
data.sort(function(a,b){
return a.price-b.price;
})
display(data);
}

if(selected == "sort by price:high to low"){
data.sort(function(a,b){
return b.price-a.price;

})
display(data);
}
}

display(data);   
function display(data){

document.querySelector("#container>div").innerHTML =""; 

data.forEach(function(element){

let box = document.createElement("div");

let image = document.createElement("img");
image.setAttribute("src",element.img);

let name = document.createElement("h2");
name.innerText = element.name;

let description = document.createElement("p");
description.innerText =element.des;

let price = document.createElement("h1");
price.innerText = "₹"+element.price;

let box1 = document.createElement("div");
box1.setAttribute("id" , "selectoption");

let select = document.createElement("button");
select.innerText= "Select options";
select.addEventListener("click" ,function(){
window.location.href = element.link;
})

let read = document.createElement("button");
read.innerText = "Read More";
read.addEventListener("click" ,function(){
window.location.href = element.link;
})


box1.append(select,read);
box.append(image,name,description,price,box1);
document.querySelector("#container>div").append(box);
})
}

//toggle  
function myFunction() {
var x = document.getElementById("cart_bag");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}