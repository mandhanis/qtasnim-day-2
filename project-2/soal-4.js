let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};
let data2 = {
    id: 2,
    name : "Hilman Dhanish",
    username : "danis",
    email : "hilmandhanish@gmail.com",
    address :
    {
        street : "Perjuangan Street",
        housing : "Al-kautsar",
        city : "Cirebon",
        postCode : "45132" 
    },
    phone : "0851-6130-6202",
    website : "danis.org",
    hobby : "painting"
}

const newData = {...data, ...data2};
const { street, city } = newData.address;
const message = 'I live in ' + city + ' on ' + street + '.';
console.log(newData);
console.log(message);