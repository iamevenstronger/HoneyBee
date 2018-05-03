'use strict';
let lab = exports.lab = require('lab').script();
global.expect = require('chai').expect;

// prepare environment
global.it = lab.it;
global.describe = lab.describe;
global.before = lab.before;

describe('Routes /demo', () => {
    it('return 1 Demo at a time', (done) => {
        let options = {
            method: 'POST',
            url: '/todo',
            payload: {
                username: "evenstronger",
                email: "evenstronger@gmail.com",
                age: 21
            }
        };
        server.inject(options, (response) => {
            // expect(response).to.have.property('result');
            // expect(response.result).to.have.length.least(1);
            console.log("Testdone");
            let demo = response.result;
            expect(demo).to.have.property('success');
            expect(demo.success).to.contain(true);
            done();
        });
    });
});