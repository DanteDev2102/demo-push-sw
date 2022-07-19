import webPush from 'web-push';
import config from '../config.js';

webPush.setVapidDetails(
	'https://orion11.com/jose/public/proy006',
	config.publicKey,
	config.privateKey
);

export default webPush;
