const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hi, Express')
})

app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}`,)
})