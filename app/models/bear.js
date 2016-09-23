// declaring the mongodb model for bearUser

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var BearSchema = new schema({
    name: String
});

module.export = mongoose.model('Bear', BearSchema);
