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
          host: env('EMAIL_HOST'),
          port: env('EMAIL_PORT'),
          auth: {
            user: env('EMAIL_USERNAME'),
            pass: env('EMAIL_PASSWORD'),
          },
        },
        settings: {
          defaultFrom: 'sales@pinova.in',
          defaultReplyTo: 'sales@pinova.in',
        },
      },
    },
  });