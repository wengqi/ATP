var mock = require('mock.js');

module.exports = mock({
    'catalogs|3-10': [{
        'id|+1': 1,
        'name|2-20': 'X',
        'url|1': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        'description|2-50': 'X'
    }],
    'categories|3-10': [{
        'id|+1': 1,
        'name|2-20': 'X',
        'url|1': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        'description|2-50': 'X'
    }],
    'tabs|3-10': [{
        'id|+1': 1,
        'name|2-20': 'X',
        'url|1': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        'description|2-50': 'X'
    }]
});