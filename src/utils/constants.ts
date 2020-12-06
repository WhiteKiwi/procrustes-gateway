export const ENVIRONMENT = {
	TEST: 'TEST',
	LOCAL: 'LOCAL',
	DEVELOPMENT: 'DEVELOPMENT',
	STATGING: 'STATGING',
	PRODUCTION: 'PRODUCTION',
}

export const HTTP_STATUS_CODE = {
	OK: 200,
	Created: 201,
	NoContent: 204,

	BadRequest: 400,
	Unauthorized: 401,
	Forbidden: 403,
	NotFound: 404,
	Conflict: 409,

	InternalServerError: 500,
}

export const SERVICES = {
	API_BACKEND: 'API_BACKEND',
	WANDERER: 'WANDERER',
}

const constants = {
	ENVIRONMENT,
	HTTP_STATUS_CODE,
	SERVICES,
}

export default constants

