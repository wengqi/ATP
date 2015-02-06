var mock = require('mockjs').mock;

module.exports = mock({
    'catalogs|3-10': [{
        'id|+1': 1,
        'name|2-20': 'x',
        'url|1': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        'description|2-50': 'x'
    }],
    'categories|3-10': [{
        'id|+1': 1,
        'name|2-20': 'x',
        'url|1': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        'description|2-50': 'x'
    }],
    'tabs|3-10': [{
        'id|+1': 1,
        'name|2-20': 'x',
        'url|1': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        'description|2-50': 'x'
    }]
});