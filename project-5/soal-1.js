// 1
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) => {
    const getPanjang = () => {
        let panjang = json.length;
        console.log(panjang);
    }
    getPanjang();
});


