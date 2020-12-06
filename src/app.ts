import express from 'express'
import routes from './routes'
import { PORT } from './config'
import { HTTP_STATUS_CODE } from './utils/constants'
import packageInfo from '../package.json'

class App {
    public application: express.Application;
    constructor() {
    	this.application = express()
    }
}

const app = new App().application
app.get('/', (req: express.Request, res: express.Response) => {
	res.json({ version: packageInfo.version })
})

app.use('/api', routes)

app.use((req: express.Request, res: express.Response) => {
	res.status(HTTP_STATUS_CODE.NotFound).send('404 Not Found')
})

app.listen(PORT, () => console.log(`Gateway Server listening on port ${PORT}`))

export default app
