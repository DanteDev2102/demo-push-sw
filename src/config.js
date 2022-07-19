import 'dotenv/config';

export default {
	publicKey: process.env.PUBLIC_VAPID_KEY,
	privateKey: process.env.PRIVATE_VAPID_KEY
};
