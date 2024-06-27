//Fetch the data form the given url

const apiURL = 'https://jsonplaceholder.typicode.com/users';

fetch(apiURL).then((res) => res.json()).then((result) => result.forEach(element => {
    console.log(element.id)
})).catch((err) => console.log(err))