// let us use file functions  adding/ deleting
//var fs = require(fs);

// connects JS to Dom
var userData = function(){
   
    var DomEvents = {
    sendButton : '.send_Button'     
    };

var DomInputs = {
     email : '.email_string',
     address : '.address_string',
     phone : '.phone_string',
     item : '.item_string',
     price: '.price_string',
     color : '.color_string',
     description: '.description_string',
     brand: '.brand_string'
};
   
 
 

// event to happen when send button is clicked
document.querySelector(DomEvents.sendButton).addEventListener('click',function(){
    
    var form ='';
    
    for (var key in DomInputs) {
        if (DomInputs.hasOwnProperty(key)) {
            var temp = document.querySelector(DomInputs[key]).value;
                form += temp;
            }
    }
    
    console.log(form);
        
});
   
    
}


userData();



