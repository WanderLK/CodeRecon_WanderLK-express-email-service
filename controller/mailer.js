require('dotenv').config();

const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});


const otpMail = async (req, res) => {
  const { firstname, email, otp } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "WanderLK Verification Email",
    html: `
      <div>
        <div>
          <img src="cid:logo" alt="WanderLK" style="width: 200px; margin: 20px;">
        </div>
        <div style="width: 393px; height: 211px; left: 0px; top: 150px; background: #E9F0F1; padding: 40px 20px  20px 20px; text-align: left;">
            <div style="font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 24px; line-height: 32px; color: #182F2E; margin-bottom: 20px;">
              Your verification code for WanderLK
            </div>
            <div style="font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 22px; color: #000000; margin-bottom: 20px;">
                Hi ${firstname},
            </div>
            <div style="font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 22px; color: #000000; margin-bottom: 30px;">
                To finish logging in to your WanderLK Account, enter this verification code:
            </div>
        </div>  
        <div style="font-family: 'Poppins', sans-serif; font-weight: 600; font-size: 32px; color: #000000; background-color:white;padding:1%">
            ${otp}
        </div>  
        <div style="width: 393px; font-family: 'Poppins', sans-serif; padding: 40px 20px; font-size: 15px; line-height: 22px; color: #000000; margin-bottom: 30px;  background: #E9F0F1;">
            If you have any questions or need assistance, feel free to reply to this email.
            <br><br>
            Thank you!
        </div>
   </div>
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: './static/logo.png', 
        cid: 'logo' 
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
};

const approvedMail = async(req,res) =>{
    const { firstname, email } = req.body;

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "WanderLK Verification Email",
      html: `
        <div>
          <div>
            <img src="cid:logo" alt="WanderLK" style="width: 200px; margin: 20px;">
          </div>
          <div style="width: 393px; height: 211px; left: 0px; top: 150px; background: #E9F0F1; padding: 40px 20px  20px 20px; text-align: left;">
              <div style="font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 24px; line-height: 32px; color: #182F2E; margin-bottom: 20px;">
                Your verification code for WanderLK
              </div>
              <div style="font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 22px; color: #000000; margin-bottom: 20px;">
                  Hi ${firstname},
              </div>
              <div style="font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 22px; color: #000000; margin-bottom: 30px;">
                  Your visa request has been<b> approved <b/>
                  If you have any questions or need assistance, feel free to reply to this email.
                  <br><br>
                  Thank you!
              </div>
          </div>  
     </div>
      `,
      attachments: [
        {
          filename: 'logo.png',
          path: './static/logo.png', 
          cid: 'logo' 
        }
      ]
    };
    try {
      await transporter.sendMail(mailOptions);
      res.json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while sending the email' });
    }
}

const denieddMail = async(req,res) =>{
  const { firstname, email } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "WanderLK Verification Email",
    html: `
      <div>
        <div>
          <img src="cid:logo" alt="WanderLK" style="width: 200px; margin: 20px;">
        </div>
        <div style="width: 393px; left: 0px; top: 150px; background: #E9F0F1; padding: 40px 20px  20px 20px; text-align: left;">
            <div style="font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 24px; line-height: 32px; color: #182F2E; margin-bottom: 20px;">
              Your verification code for WanderLK
            </div>
            <div style="font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 22px; color: #000000; margin-bottom: 20px;">
                Hi ${firstname},
            </div>
            <div style="font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 22px; color: #000000; margin-bottom: 30px;">
                Sorry, Your visa request has been<b> denied </b>
                <br><br>
                If you have any questions or need assistance, feel free to reply to this email.
                <br><br>
                Thank you!
            </div>
        </div>  
   </div>
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: './static/logo.png', 
        cid: 'logo' 
      }
    ]
  };
  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
}

const completeddMail = async(req,res) =>{
  const { firstname, email } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "WanderLK Verification Email",
    html: `
      <div>
        <div>
          <img src="cid:logo" alt="WanderLK" style="width: 200px; margin: 20px;">
        </div>
        <div style="width: 393px; left: 0px; top: 150px; background: #E9F0F1; padding: 40px 20px  20px 20px; text-align: left;">
            <div style="font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 24px; line-height: 32px; color: #182F2E; margin-bottom: 20px;">
              Your verification code for WanderLK
            </div>
            <div style="font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 22px; color: #000000; margin-bottom: 20px;">
                Hi ${firstname},
            </div>
            <div style="font-family: 'Poppins', sans-serif; font-size: 15px; line-height: 22px; color: #000000; margin-bottom: 30px;">
                Your visa request has been<b> completed </b>
                <br><br>
                If you have any questions or need assistance, feel free to reply to this email.
                <br><br>
                Thank you!
            </div>
        </div>  
   </div>
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: './static/logo.png', 
        cid: 'logo' 
      }
    ]
  };
  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
}

module.exports = { otpMail, approvedMail,denieddMail,completeddMail };
