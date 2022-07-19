import app from './index.js'
import config from './config.js';

app.listen(config.port, () => {
	console.log('server listening...');
});
