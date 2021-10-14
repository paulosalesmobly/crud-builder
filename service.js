const { doQuery, doMutate } = require('./utils')

class CrudService {
	constructor(
		gqlById,
		gqlByContains,
		gqlCreate,
		gqlUpdate,
		gqlDelete,
		validateFunc,
		parseFunc,
		formatFunc
	) {
		this.gqlById = gqlById
		this.gqlByContains = gqlByContains
		this.gqlCreate = gqlCreate
		this.gqlUpdate = gqlUpdate
		this.gqlDelete = gqlDelete
		this.validateFunc = validateFunc
		this.parseFunc = parseFunc
		this.formatFunc = formatFunc
	}

	detail(query) {
		return doQuery(query, this.gqlById, this.formatFunc)
	}

	list(query) {
		return doQuery(query, this.gqlByContains, this.formatFunc)
	}

	save(data) {
		const { form } = data

		if (!!this.validateFunc && typeof this.validateFunc === 'function') {
			this.validateFunc(form)
		}
		if (form.id) {
			return doMutate(data, this.gqlUpdate, this.parseFunc, this.formatFunc)
		}

		return doMutate(data, this.gqlCreate, this.parseFunc, this.formatFunc)
	}

	remove(data) {
		return doMutate(data, this.gqlDelete, this.parseFunc, this.formatFunc)
	}
}

module.exports = CrudService