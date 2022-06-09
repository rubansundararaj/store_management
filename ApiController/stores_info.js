const stores_info_model = require("./../model/stores_info_model")

exports.post_stores_info = async(req,res) => {
    try
    {
        var object = {
                unique_store_id : req.body.unique_store_id,
                schema : req.body.schema,
                name : req.body.name,
                address : req.body.address,
                items_in_stock : req.body.items_in_stock,
                staff : req.body.staff,
                }
        await stores_info_model.create(object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});

    }
 }

 exports.get_one_stores_info = async (req,res) => {
    try
    {
        var filter = {
                unique_store_id : req.query.unique_store_id,
                }
        var returnObject = {
                }
        var result = await stores_info_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
     return res.status(400).send({success : false});

    }
 }

 exports.get_all_stores_info = async (req,res) => {
    try
    {
        var returnObject = {
                }  
        var result = await stores_info_model.find({},returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.update_one_stores_info = async (req,res) => {
    try
    {
        var filter = {unique_store_id : req.query.unique_store_id}
      
        var object = {
                schema : req.body.schema,
                name : req.body.name,
                address : req.body.address,
                items_in_stock : req.body.items_in_stock,
                staff : req.body.staff,
              
        }
        await stores_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.delete_one_stores_info = async (req,res) => {
    try
    {
        var filter = {unique_store_id : req.query.unique_store_id}
        await stores_info_model.findOneAndDelete(filter);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

   exports.get_one_address_by_unique_store_id = async(req,res)=>{   
    try
    {
        var filter = {  
            unique_store_id : req.query.unique_store_id,
            }

        var returnObject = {
         address : 1 }
        
        var result = await stores_info_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }
   
     exports.get_one_items_in_stock_by_unique_store_id = async(req,res)=>{   
    try
    {
        var filter = {  
            unique_store_id : req.query.unique_store_id,
            }

        var returnObject = {
         items_in_stock : 1 }
        
        var result = await stores_info_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }
   
     exports.update_one_items_in_stock_by_unique_store_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_store_id : req.query.unique_store_id,
            }

        var object = {
         items_in_stock : req.body.items_in_stock }
        
        var result = await stores_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  exports.update_one_address_by_unique_store_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_store_id : req.query.unique_store_id,
            }

        var object = {
         address : req.body.address }
        
        var result = await stores_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  exports.update_one_staff_by_unique_store_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_store_id : req.query.unique_store_id,
            }

        var object = {
         staff : req.body.staff }
        
        var result = await stores_info_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  
