const fastify = require('fastify')({ logger: true });

fastify.get('/', (request, reply) => {
    reply.send({ type: 'service-js' });
});

fastify.listen({ port: 5000 }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info('server run');
});
