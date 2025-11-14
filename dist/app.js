import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to the Demo Server!');
});
const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
}).on('error', error => {
    console.error('Server error:', error);
    process.exit(1);
});
//# sourceMappingURL=app.js.map