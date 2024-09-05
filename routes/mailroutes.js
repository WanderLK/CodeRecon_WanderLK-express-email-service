const router = require("express").Router();

const Mail = require('../controller/mailer.js');

router.post('/otp', Mail.otpMail);
router.post('/approved',Mail.approvedMail)
router.post('/denied',Mail.denieddMail)
router.post('/completed',Mail.completeddMail)

module.exports = router;