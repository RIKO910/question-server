const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://riko:zsIaHntenATorwzs@cluster0.ew4o60e.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        {
            await client.connect();
            const usersCollection = client.db("express").collection("leve1term1");
            // const user ={name:'mahiya mahi ',email:'mahiya@gmail.com'}
            // const result =await usersCollection.insertOne(user);
            // console.log(`User inserted with id: ${result.insertedId}`)
            app.get('/level1term1', async (req, res) => {
                const query = {};
                const cursor = usersCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            });
            //add a new user
            app.post('/level1term1', async (req, res) => {
                const newUser = req.body;
                console.log('adding new user', newUser);
                const result = await usersCollection.insertOne(newUser);
                res.send(result)
            });
        }
        {
            await client.connect();
            const usersCollection = client.db("express").collection("level1term2");
            // const user ={name:'mahiya mahi ',email:'mahiya@gmail.com'}
            // const result =await usersCollection.insertOne(user);
            // console.log(`User inserted with id: ${result.insertedId}`)
            app.get('/level1term2', async (req, res) => {
                const query = {};
                const cursor = usersCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            });
            //add a new user
            app.post('/level1term2', async (req, res) => {
                const newUser = req.body;
                console.log('adding new user', newUser);
                const result = await usersCollection.insertOne(newUser);
                res.send(result)
            });
        }
        {
            await client.connect();
            const usersCollection = client.db("express").collection("level2term1");
            // const user ={name:'mahiya mahi ',email:'mahiya@gmail.com'}
            // const result =await usersCollection.insertOne(user);
            // console.log(`User inserted with id: ${result.insertedId}`)
            app.get('/level2term1', async (req, res) => {
                const query = {};
                const cursor = usersCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            });
            //add a new user
            app.post('/level2term1', async (req, res) => {
                const newUser = req.body;
                console.log('adding new user', newUser);
                const result = await usersCollection.insertOne(newUser);
                res.send(result)
            });
        }

        {
            await client.connect();
            const usersCollection = client.db("express").collection("level2term2");
            // const user ={name:'mahiya mahi ',email:'mahiya@gmail.com'}
            // const result =await usersCollection.insertOne(user);
            // console.log(`User inserted with id: ${result.insertedId}`)
            app.get('/level2term2', async (req, res) => {
                const query = {};
                const cursor = usersCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            });
            //add a new user
            app.post('/level2term2', async (req, res) => {
                const newUser = req.body;
                console.log('adding new user', newUser);
                const result = await usersCollection.insertOne(newUser);
                res.send(result)
            });
        }

        {
            await client.connect();
            const usersCollection = client.db("express").collection("level3term1");
            // const user ={name:'mahiya mahi ',email:'mahiya@gmail.com'}
            // const result =await usersCollection.insertOne(user);
            // console.log(`User inserted with id: ${result.insertedId}`)
            app.get('/level3term1', async (req, res) => {
                const query = {};
                const cursor = usersCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            });
            //add a new user
            app.post('/level3term1', async (req, res) => {
                const newUser = req.body;
                console.log('adding new user', newUser);
                const result = await usersCollection.insertOne(newUser);
                res.send(result)
            });
        }

        {
            await client.connect();
            const usersCollection = client.db("express").collection("level3term2");
            // const user ={name:'mahiya mahi ',email:'mahiya@gmail.com'}
            // const result =await usersCollection.insertOne(user);
            // console.log(`User inserted with id: ${result.insertedId}`)
            app.get('/level3term2', async (req, res) => {
                const query = {};
                const cursor = usersCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            });
            //add a new user
            app.post('/level3term2', async (req, res) => {
                const newUser = req.body;
                console.log('adding new user', newUser);
                const result = await usersCollection.insertOne(newUser);
                res.send(result)
            });
        }

        {
            await client.connect();
            const usersCollection = client.db("express").collection("level4term1");
            // const user ={name:'mahiya mahi ',email:'mahiya@gmail.com'}
            // const result =await usersCollection.insertOne(user);
            // console.log(`User inserted with id: ${result.insertedId}`)
            app.get('/level4term1', async (req, res) => {
                const query = {};
                const cursor = usersCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            });
            //add a new user
            app.post('/level4term1', async (req, res) => {
                const newUser = req.body;
                console.log('adding new user', newUser);
                const result = await usersCollection.insertOne(newUser);
                res.send(result)
            });
        }

        {
            await client.connect();
            const usersCollection = client.db("express").collection("level4term2");
            // const user ={name:'mahiya mahi ',email:'mahiya@gmail.com'}
            // const result =await usersCollection.insertOne(user);
            // console.log(`User inserted with id: ${result.insertedId}`)
            app.get('/level4term2', async (req, res) => {
                const query = {};
                const cursor = usersCollection.find(query);
                const users = await cursor.toArray();
                res.send(users);
            });
            //add a new user
            app.post('/level4term2', async (req, res) => {
                const newUser = req.body;
                console.log('adding new user', newUser);
                const result = await usersCollection.insertOne(newUser);
                res.send(result)
            });
        }


    }

    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running My Node CRUD Server');
});

app.listen(port, () => {
    console.log('CRUD Server is running');
})