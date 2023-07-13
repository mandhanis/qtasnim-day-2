// 3.
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) => {
    const getName = () => {
        let get = json.map((user) => user.name.concat(" : " + user.username))
        console.log(get);
    }
    getName();
});
