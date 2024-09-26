exports.seed = function(knex) {
    return knex('jokes').truncate()
    .then(function () {
        return knex('jokes').insert({
            {joke:'this is joke 1', punchline: 'this is punchline 1'},
            {joke:'this is joke 2', punchline: 'this is punchline 2'},
            {joke:'this is joke 3', punchline: 'this is punchline 3'},
            {joke:'this is joke 4', punchline: 'this is punchline 4'},
            {joke:'this is joke 5', punchline: 'this is punchline 5'},
        })
    })
};