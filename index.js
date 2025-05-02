const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/imgur", async (req, res) => {
    try {
        const { url } = req.query;
           if (!url) {
           return res.status(404).json({ error: "url is required" });
}
        const clientID = "da9c35e7d727e2d";

        const response = await axios.post("https://api.imgur.com/3/image",
            { image: url },
            { headers: { Authorization: `Client-ID ${clientID}` } }
        );

        res.json({ author: "♡︎ 𝐻𝐴𝑆𝐴𝑁 ♡︎", data: response.data });
    } catch (error) {
        res.status(500).json({ error: "Upload failed", details: error.message });
    }
}); 

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
