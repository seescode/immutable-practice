
const normalize = require('normalizr').normalize;
const schema = require('normalizr').schema;


var data = {
    owner: {
        ssn: '111-11-2222',
        name: 'Maximilian', 
        pet: {
            serialNumber: 238234,
            name: 'meow',
            age: 1
        }
    }
};

var output = normalize(data, /* your schema */);
console.log(JSON.stringify(output, null, 2));
