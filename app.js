const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello, Express test World!')
})

app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}`,)
})