            // below div data 
            let data =[
                { img :"/Fit-meal-website-clone/products/products.imges/bbq.jpg",
                      name : "BBQ Sauce",
                      des : "Delectable almond butter prepared in-house, serves as the perfect guilt-free accompaniment with your healthy ...",
                      price :250.00,
                      link:"/Fit-meal-website-clone/products/content-pages/bbq.html"
                },
                { img :"/Fit-meal-website-clone/products/products.imges/garlic.jpg",
                      des : "Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the ....",
                      price : 180.00,
                      name : "Garlic Mayo",
                      link:"/Fit-meal-website-clone/products/content-pages/garlic.html"
                },
                { img :"/Fit-meal-website-clone/products/products.imges/coco rush.jpg",
                      name : "Coco Rush",
                      des : "Fitmeals Arrabbiata sauce is a delicious blend of spicy chillies, tomatoes and authentic Italian ingredients. ...",
                      price : 550.00,
                      link : "/Fit-meal-website-clone/products/content-pages/cocorush.html"
                }
                  ];
       
        
                 display(data);   
                  function display(data){ 
                     data.forEach(function(element){
       
                     let box = document.createElement("div");
                 
                     let image = document.createElement("img");
                     image.setAttribute("src",element.img);
                     
                     let name = document.createElement("h2");
                     name.innerText = element.name;
       
                     let price = document.createElement("h1");
                     price.innerText = "₹"+element.price;
       
                     let box1 = document.createElement("div");
                     box1.setAttribute("id" , "selectoption");
       
                     let select = document.createElement("button");
                     select.innerText= "Select options";
                     select.addEventListener("click" , function(){
                         window.location.href = element.link;
                     })
       
                     let read = document.createElement("button");
                     read.innerText = "Read More";
                     read.addEventListener("click" , function(){
                         window.location.href = element.link;
                     })
                     box1.append(select,read);
                    box.append(image,name,price,box1);
                   document.querySelector("#container>div").append(box);
                   })
               }
       
       
       
                   
               
       
                   let price = document.querySelector("#quan").innerText;
                       let myprice = "";
                       for(let i=0;i<price.length;i++){
                               if(price[i]=="₹" || price[i]=="," || price[i]=="."){
                                   if(price[i]=="."){
                                       break;
                                   }
                                   continue;
                               }else{
                                   myprice+=price[i];
                               }
                           }
                           parseInt(myprice);
                   
                  
                  document.querySelector("#btn").addEventListener("click",function(){
       
                      let product_name = document.querySelector("#logo>h1").innerText;
                      let myimage = document.getElementById("images").getAttribute("src")
                      let quantity= document.querySelector("#quantity").value ;
                      
                      let arr = JSON.parse(localStorage.getItem("cart_data")) || [];
                      
                      let obj = {
                             img : myimage,
                             name : product_name,
                             price : myprice,
                             quantity: quantity,
                             subtotal : quantity*myprice
                           };
                         
                         if(checker(arr ,product_name)){
                            arr.push(obj);
                         }
       
                           localStorage.setItem("cart_data",JSON.stringify(arr));
                           window.location.reload();
                       })
       
                    function checker(arr,product_name){
                          for(let i=0;i<arr.length;i++){
                        if(arr[i].name == product_name){
                            alert("Product is Already Present");
                            return false;
                        }
                    }
                    alert("Added to cart Successfully")
                    return true;
                }
                
                    function myFunction() {
                       var x = document.querySelector("#cart_bag");
                       if (x.style.display === "none") {
                           x.style.display = "block";
                       } else {
                           x.style.display = "none";
                       }
                       }
                  
                    
                       
       
       
                   let arr1 = JSON.parse(localStorage.getItem("cart_data"))
            
                   
                   let grandtotal = 0; 
                           for(let i=0;i<arr1.length;i++){
                           grandtotal+=  +arr1[i].subtotal;
                           }
                           document.querySelector("#cart_btn_right>span").innerText = arr1.length; 
                           document.querySelector("#subtotal_cart>h3").innerText = "Subtotal: "+ grandtotal;
                       if(arr1.length === 0){
                       document.querySelector("#cart_content").innerText = "No Product in the Cart";
                       document.querySelector("#subtotal_cart").innerHTML = "";
                   }
       
                console.log(arr1)
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
                document.querySelector("#cart_content").append(box);
            });
            document.querySelector(".goto").addEventListener("click",function(){
                window.location.href ="/products_content/product.html";
            })