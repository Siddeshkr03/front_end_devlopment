// class Parent{
//     constructor(name){
//         this.name =  name;
//     }
// parentMethod(){
//     console.log(`my name is ${this.name}`);
// }
// }

// class Child extends Parent{}

// let child = new Child("David");
// child.parentMethod()

// Example 

// IPLTicket
class IPLTicket{
    constructor(name){
        this.name = name;
    }

    enterstadium(){
        console.log(this.name + " entered IPL stadium");
    }

    watchMatch(){
        console.log((this.name + " is watching the match"));
    }
}

// VIP ticket
class VIPticket extends IPLTicket {
    betterView() {
        console.log(this.name + " has better seating near boundary");
    }
}

// Premium ticket
class PremiumTicket extends IPLTicket{
    betterView(){
        console.log(this.name + " has VIP seating 🔥");
        
    }

    loungeAccess(){
        console.log(this.name + " is enjoying lounge access ");
    }

    meetPlayers(){
        console.log(this.name + " meets players after match 🔥");
        
    }
}

const vip = new VIPticket("Virat");
vip.enterstadium();
vip.watchMatch();
vip.betterView()

console.log("------------------------------------------------");


const premium = new PremiumTicket("Rohit");
premium.enterstadium();
premium.watchMatch();
premium.betterView();
premium.loungeAccess();
premium.meetPlayers();

