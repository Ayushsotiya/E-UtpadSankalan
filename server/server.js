require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

const nearestSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    capacity: String,
    contact_person: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
        },
    },
});
const NearestFacility = mongoose.model('nearests', nearestSchema);

mongoose.connect(process.env.MONGODB_URI, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

app.get('/locations', async (req, res) => {
    if (!req.query.latitude || !req.query.longitude) {
        res.status(400).json({ error: 'Missing latitude and longitude parameters' });
        return;
    }

    try {
        const latitude = parseFloat(req.query.latitude);
        const longitude = parseFloat(req.query.longitude);

        const nearestFacility = await NearestFacility.aggregate([
            {
                $geoNear: {
                    near: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    distanceField: 'distance',
                    spherical: true,
                },
            },
            {
                $match: {
                    distance: { $lte: 40000 } // 40 kilometers
                }
            },
            { $limit: 4 },
        ]);

        console.log('Query Coordinates:', longitude, latitude);
        console.log('Nearest Facility:', nearestFacility);

        if (nearestFacility.length > 0) {
            res.json(nearestFacility);
        } else {
            res.status(404).json({ error: 'No e-waste facility found near this location' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while searching for the nearest facility' });
    }
});

app.get('/locations/city', async (req, res) => {
    if (!req.query.city) {
        res.status(400).json({ error: 'Missing city parameter' });
        return;
    }

    try {
        const city = req.query.city;
        const facilitiesInCity = await NearestFacility.find({ address: new RegExp(city, 'i') });

        console.log('Selected City:', city);
        console.log('Facilities in City:', facilitiesInCity);

        if (facilitiesInCity.length > 0) {
            res.json(facilitiesInCity);
        } else {
            res.status(404).json({ error: 'No e-waste facility found in this city' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while searching for facilities in the city' });
    }
});

const newsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
});

const NewsletterSubscription = mongoose.model('NewsletterSubscription', newsletterSchema);

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    try {
        const existingSubscription = await NewsletterSubscription.findOne({ email });

        if (existingSubscription) {
            return res.status(400).json({ error: 'Email is already subscribed.' });
        }

        const newSubscription = new NewsletterSubscription({ email });
        await newSubscription.save();

        res.status(201).json({ message: 'Successfully subscribed to the newsletter.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while subscribing to the newsletter.' });
    }
});
app.get("/",(req , res) =>{
    res.send("Welcome to the E-waste API");
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

