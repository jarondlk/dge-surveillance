//don't forgor this -->"npm install nodemailer"
import { createTransport } from 'nodemailer';

var transporter = createTransport({
    service: 'gmail',
    auth: {
        user: 'Suscurity_DGE03',
        pass: 'SussyBaka69420'
    }
});
//Photo Coding
const photoMailOptions = {
    from: 'tnidge03@gmail.com',
    to: 'tnidge03@gmail.com',
    subject: 'Intruder detected By our Sensors',//Email Header
    html: '<p> This Sussy person has entered our territory and try to do something sussy!! </p>',//Email Body
    attachments: [{
        filename: 'SusIntruderImage.jpg',
        path: '/home/pi/Node_Programs/photos/photo.jpg' //create a folder to store the data e.g. "/home/pi/Node_Programs/photos/photo.jpg"
    }]
};

export function sendMailPhoto () {
    transporter.sendMail(photoMailOptions, function (err, info) {
        if (err) {
            console.log(err.toString())
        }
        else {
            console.log('Photo email success..!!');
        }
    });
}
//Video Coding
const videoMailOptions = {
    from: 'tnidge03@gmail.com',
    to: 'tnidge03@gmail.com',
    subject: 'Intruder detected By our Sensors',//Email Header
    html: '<p> This Sussy person has entered our territory and try to do something sussy!! </p>',//Email Body
    attachments: [{
        filename: 'SusIntruderVideo.h264',
        path: '/home/pi/Node_Programs/videos/video.h264'//create a folder to store the data e.g. "/home/pi/Node_Programs/videos/video.h264"
    }]
};

export function sendMailVideo () {
    transporter.sendMail(videoMailOptions, function (err, info) {
        if (err) {
            console.log(err.toString());
        }
        else {
            console.log('Video email success..!!');
        }
    });
}

