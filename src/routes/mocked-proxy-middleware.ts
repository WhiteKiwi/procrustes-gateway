import express from 'express'

export default (context: string, service: string) => {
	const mockedMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
		const regex = new RegExp('^' + context)
		if (req.originalUrl.search(regex) !== -1) {
			res.send(service)
		} else {
			next()
		}
	}
	return mockedMiddleware
}
