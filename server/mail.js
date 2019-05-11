import mailgun from 'mailgun-js';
import "@babel/polyfill";

// Mailgun credentials
const
  apiKey = process.env.MAILGUN_API_KEY || 'key-6392b1150b892cb0d46e99ce06517897',
  domain = 'sandbox6609d73ecb2e4248bcb27c5ac7afbc5b.mailgun.org',
  from = 'test@my-app.com';
class Mail {
  static async mailAdmin(payload) {
    const mg = new mailgun({ apiKey, domain }),
      data = {
        from,
        to: payload.email,
        subject: payload.title,
        html: `Hello <b>${payload.email}</b>,  
                <br></b>. 
                <br>${payload.message}.`
      };
  
    // Invokes the method to send emails given the above data with the helper library
    try {
      const mailAttempt = await mg.messages().send(data);
      if (mailAttempt) {
        return 'mail successfully sent';
      }
    } catch (error) {
      return 'sending of mail failed';
    }
  };
}

export default Mail;