import cron from 'node-cron';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

cron.schedule('*/5 * * * *', function() {
    console.log('running a task every 5 minute');

    let mailOptions = {
        to: 'miktig1995@gmail.com',
        subject: 'testasd',
        text: 'Done!'
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Email sent');
            console.log(data);
        }  
    })
});


