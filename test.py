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
Subject = 'security alert'

GPIO.setmode(GPIO.BCM)

P = PiCamera()
P.resolution = (1024, 768)
P.start_preview()

GPIO.setup(23, GPIO.IN)
while True:
    if GPIO.input(23):
        print("Motion...")
        # camera warm-up time
        time.sleep(2)
        P.capture('movement.jpg', use_video_port=True)
        time.sleep(10)
        subject = 'Security allert!!'
        msg = MIMEMultipart()
        msg['Subject'] = subject
        msg['From'] = me
        msg['To'] = toaddr

        fp = open('movement.jpg', 'rb')
        img = MIMEImage(fp.read())
        fp.close()
        msg.attach(img)

        server = smtplib.SMTP('smtp.gmail.com', 993)
        server.starttls()
        server.login(user='tnidge03@gmail.com',
                     password='poksix-jantif-8Tezbo')
        server.send_message(msg)
        server.quit()
