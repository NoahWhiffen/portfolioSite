const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Email server is running.');
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'placeholder', // my Outlook email
            pass: 'placeholder'  // my email password
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'placeholder', // recipient email
        subject: 'New message from contact form',
        text: req.body.message || 'No message provided.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending message:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
