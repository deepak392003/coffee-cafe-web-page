document.addEventListener("DOMContentLoaded" , function() {
    
    // navbar buttons

    const home = document.querySelector('.home');
    home.addEventListener("click", function(event) {
        event.preventDefault();
        // alert("home was clicked");
        window.scrollTo({
            top:0,
            behavior:"smooth"
            
        })
    })

    const about = document.querySelector('.about');
    about.addEventListener("click" , function(event){
      event.preventDefault();
      const acon = document.querySelector('.about-container');
      acon.scrollIntoView({
        behavior:"smooth"
      })
    })
    const menu = document.querySelector('.menu');
    menu.addEventListener("click", function(event) {
     event.preventDefault();
     const msce = document.querySelector('.menu-section');
     msce.scrollIntoView({
        behavior:"smooth"
     })
    })
    const product = document.querySelector(".product");
    product.addEventListener("click" , function(event) {
        event.preventDefault();
        const psec = document.querySelector('.product-section');
        psec.scrollIntoView({
            behavior:"smooth"
        })
    })
    const review = document.querySelector(".review");
    review.addEventListener("click", function(event) {
        event.preventDefault();
        const rsec = document.querySelector('.view');
        rsec.scrollIntoView({
            behavior:"smooth"
        })
    })
    const contact = document.querySelector('.contact');
    contact.addEventListener("click", function(event) {
        event.preventDefault();
        const csec = document.querySelector('.contact-section');
        csec.scrollIntoView({
            behavior:"smooth"
        })
    })
    const blog = document.querySelector('.blog');
    blog.addEventListener("click", function(event) {
        event.preventDefault();
        const bsec = document.querySelector('.blog-section');
        bsec.scrollIntoView({
            behavior:"smooth"
        })
    })
//    search button
  const sbtn = document.querySelector('.search-icon');
  sbtn.addEventListener("click" , function() {
    const search = document.querySelector('#input').value;
    alert("You Searched for :" +search);
  })

//   cart
const cart = document.querySelector('.cart');
cart.addEventListener("click", function() {
    alert("Your cart is here...");
})
// bar
const bar = document.querySelector('.bar');
bar.addEventListener("click", function() {
    alert("This is your bar");
})
});

// form validataion

// function fixerror(){
//     var error = document.getElementsByClassName('formerror');
//     for(let items of error){
//      items.onsubmit = '';
//     }
// }

function seterror(id , error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

// to validate

function validateForm(){
    returnval = true;

    // fixerror();

    var name = document.forms['myForm']["fname"].value;
    if(name.length < 5){
        seterror("name" , "*Length of the name is too short");

        returnval = false;
    }

    if(name.length === 0){
        seterror("name", "Please enter your name");

        returnval = false;
    }


    // for email
    var email = document.forms['myForm']["femail"].value;
    if(email.length > 25){
        seterror("email", "*email is too long");

        returnval = false;
    }

    // for phone
    var phone = document.forms['myForm']["fnumber"].value;
    if(phone.length != 10){
        seterror("number","*pease enter a valid number");

        returnval = false;
    }

    var order = document.forms['myForm']["forder"].value;
    if(order === ''){
        seterror("order", "*fill the box");

        returnval = false;
    }
    return returnval;
}
