module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtpout.secureserver.net',
          port: 465,
          auth: {
            user: 'sales@pinova.in',
            pass: 'Aa9900009!$',
          },
        },
        settings: {
          defaultFrom: 'sales@pinova.in',
          defaultReplyTo: 'sales@pinova.in',
        },
      },
    },
  });