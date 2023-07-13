// 2
fetch('https://jsonplaceholder.typicode.com/users?id=5')
.then((response) => response.json())
.then((data) => {
    console.log(data);
});