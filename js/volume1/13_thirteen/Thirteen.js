let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
    
// write your code here
let newc = contacts.length+1;
window.prompt("Enter the name of the new contact.");
contacts[newc].name = contacts[newc].name;
window.prompt("Enter the phone of the new contact.");
contacts[3].phone = contacts[3].phone ? contacts[3].phone : "a";
window.prompt("Enter the email of the new contact.");
contacts[3].email = contacts[3].email ? contacts[3].email : "a";
// end your code here
    
let last = contacts.length - 1;
    
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);