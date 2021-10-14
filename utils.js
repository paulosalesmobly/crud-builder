const doQuery = (params, gql, fmt) => {
    if (fmt) fmt(params.query)

    console.log('>>>> Doing query:', gql, params.query)
    return 'Testing query OK'
}

const doMutate = (params, gql, parse) => {
    if (parse) parse(params.form)

    console.log('>>>> Doing mutation:', gql, params.form)
    return 'Testing mutate OK'
}

module.exports = {
    doQuery,
    doMutate
}