function SetUsername(username) {
    if(username){
        console.log("Congratulation your username is set:");

    }
    else console.log(`Your username will not be set`); 

    this.username = username;
}
function createUser(username, email, password){

    SetUsername.call(this, username)
      
    this.email = email;
    this.password = password;
     
}

const habib = new createUser("habib",'habib@community.ai','123');

 console.table( habib ); 
        // console.log(habib)