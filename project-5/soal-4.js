// 4
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) => {
    const getData = () => {
        let search = json.map((user) => user.name.toUpperCase())
        console.log(search);
    }
    getData();
});
