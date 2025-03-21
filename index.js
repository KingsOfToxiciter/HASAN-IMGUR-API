const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/up", async (req, res) => {
    try {
        const { imageUrl } = req.query; 
        const clientID = "da9c35e7d727e2d";

        const response = await axios.post("https://api.imgur.com/3/image", 
            { image: imageUrl }, 
            { headers: { Authorization: `Client-ID ${clientID}` } }
        );

        res.json({ link: response.data.data.link });
    } catch (error) {
        res.status(500).json({ error: "Upload failed", details: error.message });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
