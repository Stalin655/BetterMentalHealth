const express = require('express');
const app = express();
const router = express.Router();

app.get('/mental', (req, res) => {
    res.send('<h1>Mental Health</h1>');
} )

//routes
app.use('/api/users', router);
app.use('/api/admin', router);
app.use('/api/therapist', router);



app.listen(4000, () => {
    console.log('Server listening on port 4000');
});