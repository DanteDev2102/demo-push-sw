import { Router } from 'express';
import webpush from '../lib/webpush.js';

const router = Router();
let pushSubscription;

router.post('/subscribe', async (req, res) => {
	try {
		pushSubscription = req.body;
		res.json();
		const payload = JSON.stringify({
			title: 'easy notification',
			message: 'estas susbcripto'
		});
		await webpush.sendNotification(pushSubscription, payload);
	} catch (error) {
		console.error(error);
	}
});

router.post('/message', async (req, res) => {
	const { message } = req.body;
	const payload = JSON.stringify({
		title: 'My Custom Notification',
		message
	});
	res.status(200).json();
	console.log(pushSubscription);
	try {
		await webpush.sendNotification(pushSubscription, payload);
	} catch (error) {
		console.log(error);
	}
});

export default router;
