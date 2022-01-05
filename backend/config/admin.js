module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3c252c5efa0a82a76ed4c2c3a691d5b3'),
  },
});
