const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hi bitch...');
});

const server = app.listen(3000, () => console.log('server ready..'));

process.on('SIGTERM', () => {
    // call process.kill(process.pid, 'SIGTERM') to trigger this event and close the application
    server.close(() => console.log('Service terminated..'));
})