const CrudService = require('./service')

class CrudServiceBuilder {
    /** 
     * Constroi uma instancia de Builder p/
     * objectos CrudService.
     */
    constructor() { }

    /** GraphQL Query by model ID */
    gqlById(gqlById) {
        this.gqlById = gqlById
        return this
    }
    /** GraphQL Query by query model */
    gqlByContains(gqlByContains) {
        this.gqlByContains = gqlByContains
        return this
    }
    /** GraphQL Mutate creating model */
    gqlCreate(gqlCreate) {
        this.gqlCreate = gqlCreate
        return this
    }
    /** GraphQL Mutate updating model */
    gqlUpdate(gqlUpdate) {
        this.gqlUpdate = gqlUpdate
        return this
    }
    /** GraphQL Query by deleting model */
    gqlDelete(gqlDelete) {
        this.gqlDelete = gqlDelete
        return this
    }
    /** Parse function form view to model */
    parseFunc(parseFunc) {
        this.parseFunc = parseFunc
        return this
    }
    /** Format function model to form view */
    formatFunc(formatFunc) {
        this.formatFunc = formatFunc
        return this
    }
    /** Validate function to form, if error throw new Error() */
    validateFunc(validateFunc) {
        this.validateFunc = validateFunc
        return this;
    }
    /** Build new instance CrudService with this builder properties */
    build() {
        return new CrudService(
            this.gqlById,
            this.gqlByContains,
            this.gqlCreate,
            this.gqlUpdate,
            this.gqlDelete,
            this.validateFunc,
            this.parseFunc,
            this.formatFunc
        )
    }
}

module.exports = CrudServiceBuilder