
const jwt = require("jsonwebtoken");

exports.createJWT = (payload) => 
{
  
   return jwt.sign(payload, "partOfTheJourneyIsTheEnd", {
     expiresIn: "1 day",
   });
};

 exports.decodeAndAuthTokenJwtToken =  async (req, res,next) => {
   //we receive objectId of the sessionid and retirve the object id from db and verify it.
  
  try{
   console.log("Hello " + req.query.jwtToken);
   jwt.verify(req.query.jwtToken, "partOfTheJourneyIsTheEnd");
   next();
  }
  catch(e)
  {
   return res.status(401).send({message: "Auth failed"});  
  }
};