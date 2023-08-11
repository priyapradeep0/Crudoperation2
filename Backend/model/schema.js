const mongoose = require('mongoose');
const Schema = mongoose.Schema({                                              
    name:{
        type:String,                                                         
        required:true
    },
    location:{
        type:String,                                                          
        required:true
    },
    designation:{
        type:String,                                                          
        required:true
    },
    salary:{                                                                  
        type:String,
        require:true
    }
});

const employeeData = mongoose.model('Employeedata',Schema);
module.exports = employeeData;