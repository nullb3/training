//Fix the original contact list with a proper array and add a new contact.

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
    }, {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
    }];

console.log(`The first contact on this list is ${contacts[0].name}, on the phone ${contacts[0].phone} and email ${contacts[0].email}`);
console.log(`The last contact on this list is ${contacts[3].name}, on the phone ${contacts[3].phone} and email ${contacts[3].email}`);
console.log(`The contact list currently holds ${contacts.length} contacts.`);