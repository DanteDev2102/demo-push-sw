import 'dotenv/config';

export default {
	port: process.env.PORT || 3001,
	publicKey: process.env.PUBLIC_VAPID_KEY,
	privateKey: process.env.PRIVATE_VAPID_KEY
};
