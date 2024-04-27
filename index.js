import express from "express";
import cors from "cors";
import { database } from "./database/mongodb.js";
import { Items } from "./models/items.js";
import { ObjectId } from "mongodb";

const app = express();

const port = process.env.PORT || 5000;

database();
//MiddleWare
app.use(cors());
app.use(express.json());



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
    // const {
    //     userName,
    //     email,
    //     image,
    //     itemName,
    //     subcategory,
    //     customization,
    //     stock,
    //     price,
    //     rating,
    //     processingTime,
    //     description
    // } = req.body
    console.log(req.body);
    // const insertItem = await Items.create(req.body);
    // console.log(insertItem);
    // console.log(req.body);
    res.status(201).json({
        success: true,
    })
})

app.delete('/item/:id', async(req, res) => {
    const id = req.params.id;
    console.log(id);
    const query = { _id: new ObjectId(id) }
    const result = await Items.deleteOne(query);
    res.send(result);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
})