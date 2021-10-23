const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const port = 5000;

// const handler = (req, res) => {
//     res.send('Hello from node');
// }

// app.get('/', handler);

app.get('/', (req, res) => {
    res.send('I am excited to learn node')
    // console.log('jsjsjsjsjs');
});


const users = [
    {
        id: 0,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 1,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 2,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 3,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 4,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }

    else {
        res.send(users)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hiting the post', req.body);
    // res.send('JSON.stringify(newUser)')
    res.json({ newUser })
})


app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('listening to port', port);
});