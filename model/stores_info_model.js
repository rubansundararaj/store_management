
const mongoose = require('mongoose')

const stores_info_schema = new mongoose.Schema({

      unique_store_id :{
      type :  String ,
      required :  true ,
      unique :  true 
      },

       schema :{
      type :  Number ,
      required :  true ,
      unique :  false 
      },

       name :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       address :{
      type :  {} ,
      required :  true ,
      unique :  false 
      },

       items_in_stock :{
      type :  [] ,
      required :  true ,
      unique :  false 
      },

       staff :{
      type :  [] ,
      required :  true ,
      unique :  false 
      },

   })

const stores_info_item = mongoose.model('stores_info_item',stores_info_schema);

module.exports = stores_info_item;