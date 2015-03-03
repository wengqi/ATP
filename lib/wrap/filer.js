var path = require('path');

function Filer(files) {
    this.single = [];
    this.doc = [];
    this.template = [];
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
                    self.template.push(file);
                    self.templateFrame.push({
                        relative: list.slice(1).join(path.sep),
                        contents: file.contents
                    })
                }else{
                    self.single.push(file);
                }
                self.frame.push(file);
            }else{
                if(catalog === '_single'){
                    self._single = file;
                }else if(catalog === '_layout'){

                }else{
                    self.doc.push(file);
                }
            }
        });
        return this;
    }
};

module.exports = Filer;