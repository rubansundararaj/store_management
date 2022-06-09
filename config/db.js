

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const mongoatlasUrl = "place_holder";
mongoose.connect(mongoatlasUrl, {
useNewUrlParser: true,
useUnifiedTopology: true,
retryWrites: false
})
.then(() => console.log('Connection to CosmosDB successful'))
.catch((err) => console.error(err));

