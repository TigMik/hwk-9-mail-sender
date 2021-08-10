import cron from 'node-cron';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

export const getApp = () => {
    const app = express();

    app.use(express.json());

    app.post('/contact', (req, res) => {
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        }); 

        cron.schedule('*/1 * * * *', function() {
            console.log('running a task every 1 minute');
        
            let mailOptions = {
                from: req.body.from,
                to: req.body.to,
                subject: 'test',
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
    });

    return app;
}





