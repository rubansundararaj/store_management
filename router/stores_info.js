


var express = require('express');
var apirouter = express.Router();
const {decodeAndAuthTokenJwtToken} = require('./../utils/auth');
var stores_infoController = require('../ApiController/stores_info');

apirouter.post('/post_stores_info_data', decodeAndAuthTokenJwtToken, stores_infoController.post_stores_info);

apirouter.get('/get_one_stores_info_data',decodeAndAuthTokenJwtToken, stores_infoController.get_one_stores_info);

apirouter.get('/get_all_stores_info_data',decodeAndAuthTokenJwtToken, stores_infoController.get_all_stores_info);

apirouter.patch('/update_one_stores_info_data',decodeAndAuthTokenJwtToken, stores_infoController.update_one_stores_info);

apirouter.delete('/delete_one_stores_info_data',decodeAndAuthTokenJwtToken, stores_infoController.delete_one_stores_info);

  
apirouter.get('/get_one_address_by_unique_store_id',decodeAndAuthTokenJwtToken, stores_infoController.get_one_address_by_unique_store_id);
      
  
apirouter.get('/get_one_items_in_stock_by_unique_store_id',decodeAndAuthTokenJwtToken, stores_infoController.get_one_items_in_stock_by_unique_store_id);
      
  
apirouter.patch('/update_one_items_in_stock_by_unique_store_id',decodeAndAuthTokenJwtToken, stores_infoController.update_one_items_in_stock_by_unique_store_id);


apirouter.patch('/update_one_address_by_unique_store_id',decodeAndAuthTokenJwtToken, stores_infoController.update_one_address_by_unique_store_id);


apirouter.patch('/update_one_staff_by_unique_store_id',decodeAndAuthTokenJwtToken, stores_infoController.update_one_staff_by_unique_store_id);



module.exports = apirouter;