var Tree = require('./tree');

function Frame(files) {
    var tree = new Tree(files);
    this.catalogs = tree.children;
    this.categories = [];
    this.subcategories = [];
}

Frame.prototype = {
    constructor: Frame,

    categoriesByCatalogName: function (catalogName) {
        var catalogs = this.catalogs.filter(function (catalog) {
            if (catalogName === catalog.name) {
                return catalog;
            }
        }), catalog = catalogs[0] || {};
        this.categories = catalog.children || [];
        return this;
    },

    subcategoriesByCategoryName: function (categoryName) {
        var categories = this.categories.filter(function (category) {
            if (categoryName === category.name) {
                return category;
            }
        }), category = categories[0] || {};
        this.subcategories = category.children || [];
        return this;
    }
};

module.exports = Frame;