// For DGE03 laboratory surviellance project

import PiCamera from 'pi-camera';

const myCameraPhoto = new PiCamera({
    mode: 'photo',
    output: `/home/pi/Node_Programs/photos/photo.jpg`,
    width: 640,
    height: 480
});

const myCameraVideo = new PiCamera({
    mode: 'video',
    output: `/home/pi/Node_Programs/videos/video.h264`,
    width: 1920,
    height: 1080,
    timeout: 5000
});

var camerInUse = false;

export function takePicture (callback) {
    if (camerInUse == false) {
        camerInUse = true;
        myCameraPhoto.snap()
            .then((result) => {
                console.log('Your picture was captured')
                callback('success')
                camerInUse = false;
            })
            .catch((error) => {
                console.log(error.toString());
                callback(error.toString());
            });
    } else {
        console.log('camera in use..')
    }
}

export function takeVideo (callback) {
    if (camerInUse == false) {
        camerInUse = true;
        myCameraVideo.record()
            .then((result) => {
                console.log('recording completed...!!');
                callback('success')
                camerInUse = false;
            })
            .catch((error) => {
                console.log(error.toString());
            });
    } else {
        console.log('camera in use..')
    }
}
