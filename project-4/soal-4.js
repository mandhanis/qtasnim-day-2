fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) => {
    const names = json.map((user) => user.name);
    console.log(names);``
});
