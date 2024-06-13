const object = {
    
    name: 'habib',
    isLoggedIn: false,
    address: "XYZ",
    key_id: "fxK$2kCkksaTWnd?q=10",
    
    }
    const specialObj = {
        key_id: Symbol(object.key_id),
        key_id: String(object.key_id),  // I have changed its type and print it.

        
        Print: console.log("Printed")
        }
try{

let [first , second , userActive , userAddress] = [object.name , 
    
    String(specialObj.key_id) ,
    
    object.isLoggedIn , object.address];
    
    console.log(first , second , userActive , userAddress)
    
    }
    
    
catch {
        throw(Error);
        console.log("Cannot get value..");
};
        
//------------------------------------

 let values = object.key_id;
 let length = values.length;

let loop = function putLoopToObj() {

    let randomKey = values.charAt(Math.random() * length);

    console.log(randomKey);

}
loop();



