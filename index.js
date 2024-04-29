import express from "express";
import cors from "cors";
import { database } from "./database/mongodb.js";
import { Items } from "./models/items.js";
import { ObjectId } from "mongodb";
import { Review } from "./models/review.js";
import { Subcategory } from "./models/subcategory.js";

const app = express();

const port = process.env.PORT || 5000;

database();
//MiddleWare
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hi Beautiful People");
})

app.get('/reviews', async(req,res)=>{
    const reviews = await Review.find({});
    res.send(reviews);
})

app.get('/subcategory/items', async(req,res)=>{
    const subcategoryItems = await Subcategory.find({});
    res.send(subcategoryItems);
})

app.get('/items', async (req, res) => {
    const artCraftItems = await Items.find({});
    res.send(artCraftItems);
})
app.get('/item/:id', async (req, res) => {
    const { id } = req.params;
    const craftItemData = await Items.findById({ _id: new ObjectId(id) })
    res.send(craftItemData);
    console.log(craftItemData);
})
app.post('/add-item', async (req, res) => {
    console.log(req.body);
    const insertItem = await Items.create(req.body);
    console.log(insertItem);
    console.log(req.body);
    res.status(201).json({
        success: true,
    })
})

app.delete('/item/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await Items.deleteOne(query);
    res.send(result);
})

app.put('/itemupdate/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const updateItem = req.body;
    const result = await Items.updateOne(query, { $set: updateItem });
    res.send(result);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
})