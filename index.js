const express = require('express');
const PORT = 3001;
const app = express();


app.get('/', (req, res) => {
    res.status(200).send("Success")
});

app.listen(PORT, () => console.log (`Server is live on port ${PORT}`));

