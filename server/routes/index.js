const express = require('express');
const router = express.Router();
//const sesClient = require('../ses-client');
const { check, validationResult } = require('express-validator');
const fs = require('fs');

router.get('/api/message', function (req, res, next) {
  res.json('Welcome To 911 Backdate');
});

router.get('/api/images', (req, res) => {
  let dir = './public/images/gallery/' + req.query.folder;

  fs.readdir(dir, (err, files) => res.json(files));
});

router.post(
  '/api/send',
  [
    check('email').isEmail(),
    check('firstName').not().isEmpty(),
    check('lastName').not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      let backdateEmail = '911 Backdate <infobackdate@gmail.com>';
      let name = `${req.body.firstName} ${req.body.lastName}`;
      let clientEmail = req.body.email;
      let clientPhone = req.body.phone;
      let message = req.body.comments;
      let subject = 'New 911 Backdate Reservation Request';
      let content = `A new 911 Backdate reservation form has been submitted.<br />
                <br />
                Name: ${name}<br />
                Email: ${clientEmail}<br />
                Phone: ${clientPhone}<br />
                Message: ${message} `;

      //sesClient.sendEmail(backdateEmail, subject, content, clientEmail);

      res.send('Email is sent!');
    }
  }
);

module.exports = router;
