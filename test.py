from picamera import PiCamera
from time import sleep
import smtplib
import time
from datetime import datetime
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
import RPi.GPIO as GPIO
import time

toaddr = 'tnidge03@gmail.com'
me = 'tnidge03@gmail.com'
Subject = 'Security alert'

GPIO.setmode(GPIO.BCM)

P = PiCamera()
P.resolution = (1024, 768)
P.start_preview()

GPIO.setup(23, GPIO.IN)
while True:
    if GPIO.input(23):
        if (True):
            print("Motion...")
            # camera warm-up time
            time.sleep(2)
            P.capture('movement.jpg', use_video_port=True)
            time.sleep(2)
            subject = 'Security allert!!'
            msg = MIMEMultipart()
            msg['Subject'] = subject
            msg['From'] = me
            msg['To'] = toaddr

            fp = open('movement.jpg', 'rb')
            img = MIMEImage(fp.read())
            fp.close()
            msg.attach(img)

            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login('tnidge03@gmail.com', 'fqhbrikxryrbadnl')
            server.sendmail('tnidge03@gmail.com',
                            'tnidge03@gmail.com', msg.as_string())
            server.quit()
