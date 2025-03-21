const express = require("express");
const axios = require("axios");

const app = express();

app.get("/imgur", async (req, res) => {
    try {
        const clientID = "da9c35e7d727e2d";
        const imageUrl = req.query.imageUrl;

        
        const response = await axios.post("https://api.imgur.com/3/image", 
            { image: imageUrl }, 
            { headers: { Authorization: `Client-ID ${clientID}` } }
        );

        const imgurLink = response.data.data.link;
        
        
        res.render("index", { imgurLink });
    } catch (error) {
        res.status(500).send("Error uploading image");
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));