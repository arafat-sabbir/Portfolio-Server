"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
// Express service function
const sendOtp = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, otp }) {
    // Define email options
    const mailOptions = {
        from: 'finaltryInnovations@gmail.com',
        to: `${email}`,
        subject: 'Your One Time Password (OTP)',
        html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9fafc; padding: 20px;">
        <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <thead>
            <tr>
              <th style="background-color: #F96815; color: #ffffff; padding: 20px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Verification Code</h1>
              </th>
            </tr>
          </thead>
          <!-- Main Body -->
          <tbody>
            <tr>
              <td style="padding: 30px; text-align: center; font-size: 16px; color: #555;">
                <p style="margin: 0; font-size: 18px; font-weight: bold; color: #333;">
                  Hi there,
                </p>
                <p style="margin: 20px 0; font-size: 16px; color: #555;">
                  Thank you for choosing our service. Use the following One Time Password (OTP) to complete your request:
                </p>
                <div style="margin: 20px auto; padding: 15px 30px; background-color: #F1F8FF; border: 2px dashed #F96815; border-radius: 8px; display: inline-block; font-size: 24px; font-weight: bold; color: #F96815;">
                  ${otp}
                </div>
              </td>
            </tr>
            <!-- Call to Action -->
          </tbody>
          <!-- Footer -->
          <tfoot>
            <tr>
              <td style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888;">
                <p style="margin: 0;">Need help? Contact us at <a href="mailto:finaltryinnovations@gmail.com" style="color: #F96815; text-decoration: none;">finaltryinnovations@gmail.com</a>.</p>
                <p style="margin: 10px 0;">&copy; 2024 FinalTry Innovations. All rights reserved.</p>
                <p style="margin: 0; font-size: 10px; color: #aaa;">Chittagong,Bangladesh</p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    `,
    };
    // Send the email
    const otpSent = yield app_1.transporter.sendMail(mailOptions);
    return otpSent;
});
exports.default = sendOtp;
