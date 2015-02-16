var Tree = require('./tree');

function Frame() {
    this.tree = new Tree();
    this.catalogs = [];
    this.categories = [];
    this.subcategories = [];
}

Frame.prototype = {
    constructor: Frame,

    categoriesByCatalogName: function (catalogName) {
        var catalog = this.data.catalogs.filter(function (catalog) {
            if (catalogName === catalog.name) {
                return catalog
            }
        });
        this.categories = catalog[0].children;
        return this;
    },

    subcategoriesByCategoryName: function (categoryName) {
        var category = this.categories.filter(function (category) {
            if (categoryName === category.name) {
                return category
            }
        });
        this.subcategories = category[0].children;
        return this;
    }
};

Module.exports = Frame;