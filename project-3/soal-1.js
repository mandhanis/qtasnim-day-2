const name = [
    "Abigail", "Alexandra", "Alison", "Amanda", "Angela",
    "Carol", "Caroline", "Carolyn", "Deidre",
    "Diana", "Elizabeth", "Ella", "Ella",
    "Faith", "Olivia", "Penelope"
];
  
function searchName(filter, limit, callback) {
    const hasil = name.filter(name => name.toLowerCase().includes(filter.toLowerCase()));
    const batas = hasil.slice(0, limit);
    callback(batas);
}
  
function callback(hasil) {
    hasil.forEach(name => console.log(name));
}
  
searchName("an", 3, callback);
  