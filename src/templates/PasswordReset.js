import React from "react";
const PasswordReset = ({ name, address, community, accountNumber }) => {
  return (
    <div className="email-content">
      <p>{name}</p>
      <p>{address},</p>
      <p>{community}</p>
      <p>Dear {name},</p>
      <p>
        Thank you for contacting us regarding your request for logging into your
        homeowner portal. We have taken the following action: I have gone into
        your account and manually set up a new password for you to use to log
        in. Please change the password in User Profile once you successfully log
        in, this will need to be a word with 1 uppercase letter 1 number and one
        of the special characters that is listed in the hint below. You can
        always make a payment on your account at Https://www.amgworld.com/fees.
        To log into your homeowner account please visit:
        https://login.amghoanet.com
      </p>
      <p>Your account number is: {accountNumber}</p>
      <p>Your Temporary password is: Welcome1!</p>

      <p>
        If you would like to set up scheduled automatic payments you can visit
        https://propertypay.cit.com/ and create a payment schedule.
      </p>
      <p>
        You can view how to do this at
        https://www.youtube.com/watch?v=25glBccaACs&feature=youtu.be on YouTube
        or
        https://cms-assets.cit.com/9j7wv5nnfw5f/5DyT2SntxeDfDjNbuQ3RlP/6e90bd21d88d90feefbeee87839dba5f/C-ProperyPay_PaymentSchedule.pdf
        for a PDF.
      </p>
      <p>
        If you have any questions, please contact me and/or your community
        manager, Danielle Rudisill. Danielle may be reached by phone or email
        Monday -Friday from 9:00 AM to 5:00 PM. Her direct line 704-897-8790, Or
        you may email her at danielle.rudisill@amgworld.com.
      </p>
      <p>Thank you,</p>
    </div>
  );
};

export default PasswordReset;
