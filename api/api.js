let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('hello Docker!');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
