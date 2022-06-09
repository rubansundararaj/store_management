const items_info_model = require("./../model/items_info_model")

exports.post_items_info = async(req,res) => {
    try
    {
        var object = {
                unique_item_id : req.body.unique_item_id,
                schema : req.body.schema,
                sku : req.body.sku,
                name : req.body.name,
                price : req.body.price,
                description : req.body.description,
                sold_at : req.body.sold_at,
                tot_rating : req.body.tot_rating,
                num_rating : req.body.num_rating,
                }
        await items_info_model.create(object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});

    }
 }

 exports.get_one_items_info = async (req,res) => {
    try
    {
        var filter = {
                unique_item_id : req.query.unique_item_id,
                }
        var returnObject = {
                }
        var result = await items_info_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
     return res.status(400).send({success : false});

    }
 }

 exports.get_all_items_info = async (req,res) => {
    try
    {
        var returnObject = {
                }  
        var result = await items_info_model.find({},returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.update_one_items_info = async (req,res) => {
    try
    {
        var filter = {unique_item_id : req.query.unique_item_id}
      
        var object = {
                schema : req.body.schema,
                sku : req.body.sku,
                name : req.body.name,
                price : req.body.price,
                description : req.body.description,
                sold_at : req.body.sold_at,
                tot_rating : req.body.tot_rating,
                num_rating : req.body.num_rating,
              
        }
        await items_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.delete_one_items_info = async (req,res) => {
    try
    {
        var filter = {unique_item_id : req.query.unique_item_id}
        await items_info_model.findOneAndDelete(filter);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

   exports.update_one_tot_rating_by_unique_item_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_item_id : req.query.unique_item_id,
            }

        var object = {
         tot_rating : req.body.tot_rating }
        
        var result = await items_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  exports.update_one_name_by_unique_item_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_item_id : req.query.unique_item_id,
            }

        var object = {
         name : req.body.name }
        
        var result = await items_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  exports.update_one_num_rating_by_unique_item_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_item_id : req.query.unique_item_id,
            }

        var object = {
         num_rating : req.body.num_rating }
        
        var result = await items_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  exports.update_one_price_by_unique_item_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_item_id : req.query.unique_item_id,
            }

        var object = {
         price : req.body.price }
        
        var result = await items_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  exports.update_one_description_by_unique_item_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_item_id : req.query.unique_item_id,
            }

        var object = {
         description : req.body.description }
        
        var result = await items_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  
