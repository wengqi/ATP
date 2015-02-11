function Node() {
    this.catalog = '';
    this.category = '';
    this.subcategory = '';
    this.node = {};
}

Node.prototype = {
    constructor: Node,

    get catalog() {
        return this._catelog;
    },
    set catalog(catalog) {
        this._catelog = catalog;
        return this;
    },

    get catalogs() {
        return this._catalogs;
    },
    set catalogs(catalogs) {
        this._catalogs = catalogs;
        return this;
    },

    get category() {
        return this._category;
    },
    set category(category) {
        this._category = category;
        return this;
    },

    get categories() {
        return this._categories;
    },
    set categories(categories) {
        this._categories = categories;
        return this;
    },

    get subcategory() {
        return this._subcategory;
    },
    set subcategory(subcategory) {
        this._subcategory = subcategory;
        return this;
    },

    get subcategories() {
        return this._subcategories;
    },
    set subcategories(subcategories) {
        this._subcategories = subcategories;
        return this;
    },

    get node() {
        return this._node;
    },
    set node(node) {
        this._node = node;
        return this;
    }
};