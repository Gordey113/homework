const myProfile = {
    name: 'Gordey',
    age: 23,
    city: 'Kurgan',
    hobby: 'football',
    greet: function(name){
        return `Hello ${name}`;
    }
}



const users = [
    { name: "Alice", age: 25, isAdmin: false },
    { name: "Bob", age: 30, isAdmin: true },
    { name: "Charlie", age: 22, isAdmin: false },
    { name: "David", age: 28, isAdmin: false },
    { name: "Eve", age: 35, isAdmin: true },
];

let regularUsersCount = 0;

for (let user of users) {
    if (!user.isAdmin) {
        regularUsersCount++;
    }
}

console.log(`Количество простых пользователей: ${regularUsersCount}`);