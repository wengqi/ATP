var path = require('path');

function Filer(files) {
    this.snippets = [];
    this.templates = [];
    this.induces = [];
    this.frame= [];
    this.templateFrame= [];
    this.filter(files);
}

Filer.prototype = {
    constructor: Filer,

    filter: function (files) {
        var self = this;
        files.forEach(function (file) {
            self.cwd = self.cwd || file.cwd;
            self.base = self.base || file.base;
            var list = file.relative.split(path.sep),
                catalog = list[0],
                category = list[1],
                subcategory = list[2];
            if(subcategory){
                if(catalog === 'templates'){
                    self.templates.push(file);
                    self.templateFrame.push({
                        relative: list.slice(1).join(path.sep),
                        contents: file.contents
                    })
                }else{
                    self.snippets.push(file);
                }
                self.frame.push(file);
            }else{
                if(catalog === 'single'){
                    self.single = file;
                }else if(catalog === 'layout'){

                }else{
                    self.induces.push(file);
                }
            }
        });
        return this;
    }
};

module.exports = Filer;