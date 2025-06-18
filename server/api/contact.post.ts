import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { defineEventHandler, readBody } from 'h3';

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'eu-central-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  }
});

const createEmailTemplate = (data: any) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Nowa wiadomość ze strony Niebieskie Aparaty</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #1a365d;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
          }
          .content {
            background-color: #f8f9fa;
            padding: 20px;
            border: 1px solid #dee2e6;
            border-top: none;
            border-radius: 0 0 5px 5px;
          }
          .field {
            margin-bottom: 15px;
          }
          .label {
            font-weight: bold;
            color: #1a365d;
          }
          .footer {
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            color: #6c757d;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Nowa wiadomość ze strony Niebieskie Aparaty</h1>
        </div>
        <div class="content">
          <div class="field">
            <span class="label">Imię:</span>
            <p>${data.name}</p>
          </div>
          <div class="field">
            <span class="label">Email:</span>
            <p>${data.email}</p>
          </div>
          <div class="field">
            <span class="label">Temat:</span>
            <p>${data.subject}</p>
          </div>
          <div class="field">
            <span class="label">Wiadomość:</span>
            <p>${data.message}</p>
          </div>
        </div>
        <div class="footer">
          <p>Ta wiadomość została wysłana ze strony Niebieskie Aparaty</p>
        </div>
      </body>
    </html>
  `;
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    const params = {
      Source: 'Niebieskie Aparaty <kozlowska0705@gmail.com>',
      Destination: {
        ToAddresses: ['kozlowska0705@gmail.com']
      },
      Message: {
        Subject: {
          Data: `Nowa wiadomość: ${body.subject}`,
          Charset: 'UTF-8'
        },
        Body: {
          Html: {
            Data: createEmailTemplate(body),
            Charset: 'UTF-8'
          }
        }
      }
    };

    // Send email asynchronously
    sesClient.send(new SendEmailCommand(params))
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    return { success: true, message: 'Wiadomość została wysłana' };
  } catch (error) {
    console.error('Error processing request:', error);
    return { success: false, message: 'Wystąpił błąd podczas wysyłania wiadomości' };
  }
}); 