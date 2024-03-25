// Import the required modules
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

// Initialize Firebase Admin SDK
admin.initializeApp();

// Initialize Nodemailer transporter with your SMTP settings
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'chuksdavis2020@gmail.com', // Your Gmail address
    pass: '1234567'    // Your Gmail password
  }
});

// Firebase Cloud Function to send OTP to user's email
export const sendOtpToEmail = functions.https.onCall(async (data, context) => {
  // Check if the request is made by an authenticated user
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Only authenticated users can send OTPs');
  }

  // Generate a random 4-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000);

  // Save the OTP to the Firestore database
  await admin.firestore().collection('otps').doc(context.auth.uid).set({
    otp: otp,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  });

  // Configure the email message
  const mailOptions = {
    from: 'chuksdavis2020@gmail.com',
    to: data.email,    // Recipient's email address (received from the client)
    subject: 'Verification Code',
    text: `Your verification code is ${otp}`
  };

  // Send the email
  await transporter.sendMail(mailOptions);

  // Return a success message
  return { message: 'OTP sent successfully' };
});
