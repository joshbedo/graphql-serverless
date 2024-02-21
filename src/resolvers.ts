const resolvers = {
    Query: {
        hello: () => 'world',
        users: () => {
            return [
                {id: 1, name: 'Josh', email: 'josh@example.com'},
                {id: 2, name: 'Chris', cursor: 'chris@example.com'}
            ]
        },
    },
};


export default resolvers;