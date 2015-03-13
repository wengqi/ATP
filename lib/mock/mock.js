var mock = require('mockjs').mock,
    config = require('./../config/config'),
    extend = require('util')._extend;


var data = mock({
    'catalogs|3-10': [{
        'id|+1': 1,
        'name|2-20': 'x',
        'url': '',
        'description|2-50': 'x'
    }],
    'categories|3-10': [{
        'id|+1': 1,
        'name|2-20': 'x',
        'url': '',
        'description|2-50': 'x'
    }],
    'subcategories|3-10': [{
        'id|+1': 1,
        'name|2-20': 'x',
        'url': '',
        'description|2-50': 'x'
    }],
    'tabs|3-10': [{
        'id|+1': 1,
        'name|2-20': 'x',
        'url': '',
        'description|2-50': 'x'
    }]
});

extend(data, config);

module.exports = data;