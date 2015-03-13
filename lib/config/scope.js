function Scope() {
    this.lookupList = {};
    this.root = this;
    this.children = [];
    this.childHead = null;
    this.childTail = null;
    this.parent = null;
}

Scope.prototype = {
    constructor: Scope,

    has: function (identifierName) {
        //has identifierName
        return Object.hasOwnProperty(identifierName);
    },

    get: function (identifierName) {
        if (this.has(identifierName)) {
            return this.lookupList[identifierName];
        } else {
            //todo throw error.
        }
    },
    set: function (identifierName, value) {
        this.lookupList[identifierName] = value;
    },

    declare: function (name) {
        this.lookupList[name] = {};
    },

    lookup: function (name, value) {
        if (value) this.lookupList[name] = value;
        else return this.lookupList[value];
    },

    getJSON: function(){
        return this.lookupList;
    }
};

module.exports = Scope;