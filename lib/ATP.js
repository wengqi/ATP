var Tree = require('./Tree'),
    path = require('path');

function ATP(files) {
    this.posts = files;
    this.tree = new Tree(files);
    this.template = '';
    this.catalogs = this.tree.children;
    this.categories = [];
    this.tabs = [];
}

ATP.prototype = {
    constructor: ATP,

    catalog: function (catalogs) {
        if (catalogs) {
            this.catalogs = catalogs;
            return this;
        } else {
            return this.catalog
        }
    },

    category: function (catalogName) {
        if (catalogName) {
            this.categories = this.catalogs.filter(function (catalog) {
                if (catalogName === catalog.name)return catalog;
            })[0].children;
            return this;
        } else {
            return this.categories;
        }
    },

    tab: function(categoryName) {
        if(categoryName){
            this.tabs = this.categories.filter(function (category) {
                if (categoryName === category.name)return category;
            })[0].children;
            return this;
        }else{
            return this.tabs;
        }
    }
};

module.exports = ATP;