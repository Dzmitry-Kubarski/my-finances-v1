require('dotenv').config()
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/transaction', require('./routes/transaction.routes'))
app.use('/api/sources', require('./routes/sources.routes'))
app.use('/api/categories', require('./routes/categories.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

async function start() {
    try {
        const URI = process.env.MONGODB_URL
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
        console.log('MongoDB Connected')
    }

    catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

