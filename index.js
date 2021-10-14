/**
 * # Builder - GoF - Design pattern 
 * 
 * Imagine que no codigo exista uma classe que receba
 * inumeros parametros em seu construtor, este eh um
 * caso muito comum, mas que dificulta muito saber a ordem
 * de cada parametro passado no construtor desta classe.
 * 
 * Neste exemplo temos, no arquivo index.js, duas classes.
 * Sendo uma delas, a CrudService, exatamente um exemplo de 
 * classe que recebe inumeros parametros em seu construtor.
 * 
 * A outra classe implementa o design pattern Builder para
 * resolver o problema de errar a ordem dos parametros passados
 * no construtor e isolar a forma como um objeto eh instanciado
 * desta classe.
 */

const CrudServiceBuilder = require('./builder')

// Aqui temos o exemplo de um crud usando o GraphQL, mas podemos imaginra instrucoes SQL aqui.
const { sqlById, sqlByContains, sqlCreate, sqlUpdate, sqlDelete } = require('./sql')

const crudService = new CrudServiceBuilder()
	.gqlById(sqlById)
	.gqlByContains(sqlByContains)
	.gqlCreate(sqlCreate)
	.gqlUpdate(sqlUpdate)
	.gqlDelete(sqlDelete)
	.parseFunc((form) => {
		console.log('>>>> Parse form view to model', form)
		return { ...form }
	})
	.formatFunc((model) => {
		console.log('>>>> Format model to form view', model)
		return { ...model }
	})
	.validateFunc((form) => {
		console.log('>>>> Validate form view', form)
		return { ...form }
	})
	.build()

const ret1 = crudService.save({ token: '...AUTH...', form: { name: 'Testing' } })
const ret2 = crudService.list({ token: '...AUTH...', query: { name: 'Testing' } })

console.log('ret1', ret1)
console.log('ret2', ret2)