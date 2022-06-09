


var express = require('express');
var apirouter = express.Router();
const {decodeAndAuthTokenJwtToken} = require('./../utils/auth');
var items_infoController = require('../ApiController/items_info');

apirouter.post('/post_items_info_data', decodeAndAuthTokenJwtToken, items_infoController.post_items_info);

apirouter.get('/get_one_items_info_data',decodeAndAuthTokenJwtToken, items_infoController.get_one_items_info);

apirouter.get('/get_all_items_info_data',decodeAndAuthTokenJwtToken, items_infoController.get_all_items_info);

apirouter.patch('/update_one_items_info_data',decodeAndAuthTokenJwtToken, items_infoController.update_one_items_info);

apirouter.delete('/delete_one_items_info_data',decodeAndAuthTokenJwtToken, items_infoController.delete_one_items_info);

  
apirouter.patch('/update_one_tot_rating_by_unique_item_id',decodeAndAuthTokenJwtToken, items_infoController.update_one_tot_rating_by_unique_item_id);


apirouter.patch('/update_one_name_by_unique_item_id',decodeAndAuthTokenJwtToken, items_infoController.update_one_name_by_unique_item_id);


apirouter.patch('/update_one_num_rating_by_unique_item_id',decodeAndAuthTokenJwtToken, items_infoController.update_one_num_rating_by_unique_item_id);


apirouter.patch('/update_one_price_by_unique_item_id',decodeAndAuthTokenJwtToken, items_infoController.update_one_price_by_unique_item_id);


apirouter.patch('/update_one_description_by_unique_item_id',decodeAndAuthTokenJwtToken, items_infoController.update_one_description_by_unique_item_id);



module.exports = apirouter;