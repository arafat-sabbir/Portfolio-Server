import { transporter } from '../../app';

// Express service function
const sendOtp = async ({ email, otp }: { email: string; otp: number | string }) => {
  // Define email options
  const mailOptions = {
    from: 'finaltryInnovations@gmail.com',
    to: `${email}`,
    subject: 'Your One Time Password (OTP)',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
        <table style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);">
          <thead>
            <tr>
              <th style="background-color: #F96815; color: #ffffff; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Your OTP is ${otp}</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 20px;">
                <p style="font-size: 16px; color: #333;">Dear Md Nizam Uddin Sharif,</p>
                <p style="font-size: 16px; color: #333;">Please enter the OTP below to complete your request.</p>
                <blockquote style="background-color: #f9f9f9; padding: 15px; margin: 15px 0; border-left: 5px solid #F96815; font-style: italic; color: #555;">
                  <strong>${otp}</strong>
                </blockquote>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td style="background-color: #f8f8f8; padding: 15px; text-align: center; border-top: 1px solid #ddd;">
                <p style="font-size: 12px; color: #666;">1234 Business Address, Business City, Country</p>
                <p style="font-size: 12px; color: #666;">&copy; 2024 Your Company. All rights reserved.</p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    `,
  };

  // Send the email
  const otpSent = await transporter.sendMail(mailOptions);
  return otpSent;
};

export default sendOtp;

