/**
 * Created by user on 2017. 3. 13..
 */

var _ = require('underscore');

var person = {
    approvalRate: '5%',
    name: 'park'
};

_.defaults(person, {job: 'unemployed'});
//console.log(person);


function jobPerson(obj, job) {
    return _.defaults(obj,{job: job || 'unemployed'});
}

var result = jobPerson({ok:"ok"});
//console.log(result);

var result = jobPerson({ok:"ok"}, "programmer");
//console.log(result);

var gameDevices = [
    {maker: 'sony', name: 'playstation', priority: 1},
    {maker: 'nintendo', name: 'switch', priority: 3},
    {maker: 'microsoft', name: 'xbox', priority: 2}
];

var reslut = _.sortBy(gameDevices, function (obj) {
    return obj.priority;
})
//console.log(result);

//console.log(gameDevices); // 바뀌지 않음

_.map(gameDevices, function(obj) {
    _.defaults(obj, {
        searchParam: {
            key_no: 3,
            operation_no: 5
        }
    });
});

//console.log(gameDevices);

function test(condition, callback) {
    return function() {
      if(condition) {
        callback();
      } else {
        console.log("집으로 좀 가");
      }
    };
}