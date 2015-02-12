var mock = require('mockjs').mock,
    config = require('./config'),
    extend = require('util')._extend;


var data = mock({
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
    'subcategories|3-10': [{
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

extend(data, config);
data.brands = ['inverse', 'primary', 'success', 'info', 'warning', 'danger'];

module.exports = data;