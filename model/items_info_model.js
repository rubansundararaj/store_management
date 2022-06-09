
const mongoose = require('mongoose')

const items_info_schema = new mongoose.Schema({

      unique_item_id :{
      type :  String ,
      required :  true ,
      unique :  true 
      },

       schema :{
      type :  Number ,
      required :  true ,
      unique :  false 
      },

       sku :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       name :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       price :{
      type :  Number ,
      required :  true ,
      unique :  false 
      },

       description :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       sold_at :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       tot_rating :{
      type :  Number ,
      required :  true ,
      unique :  false 
      },

       num_rating :{
      type :  Number ,
      required :  true ,
      unique :  false 
      },

   })

const items_info_item = mongoose.model('items_info_item',items_info_schema);

module.exports = items_info_item;