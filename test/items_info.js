

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

let authToken = "empty";
let uiqueId = Date.now();

chai.use(chaiHttp);

describe("items_info", () =>{

    it("sign_up", (done) =>{
    
        let userObject = {
            email : "test@test",
            userName : "test",
            password : "123456"
        }

        chai.request(server)
        .post('/user/signup')
        .send(userObject)
        .end((err,res) => {
            res.should.not.have.status(500);
            done();
        });
    }).timeout(5000);



    it("login", (done) =>{
  
        let userObject = {
            email : "test@test",
            password : "123456"
        }

        chai.request(server)
        .post('/user/login')
        .send(userObject)
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').eql("success");
            authToken = res.body.token;
            done();
        });
    }).timeout(10000);


    it("post_one", (done) =>{
        let object = {
                       unique_item_id :uiqueId,  
                       schema : "",
                       sku : "",
                       name : "",
                       price : "",
                       description : "",
                       sold_at : "",
                       tot_rating : "",
                       num_rating : "",
               
           }
        chai.request(server)
        .post('/items_info/post_items_info_data')
        .query({unique_item_id : uiqueId,jwtToken : authToken})
        .send(object)
        .end((err,res) =>{
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



     it("get_one", (done) =>{
        chai.request(server)
        .get('/items_info/get_one_items_info_data')
        .query({unique_item_id : uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



    it("update_one", (done) =>{
        let object = {
                       unique_item_id :uiqueId,  
                       schema : "",
                       sku : "",
                       name : "",
                       price : "",
                       description : "",
                       sold_at : "",
                       tot_rating : "",
                       num_rating : "",
               
        }
        chai.request(server)
        .patch('/items_info/update_one_items_info_data')
        .query({unique_item_id : uiqueId,jwtToken : authToken})
        .send(object)
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



     it("get_all", (done) =>{
        chai.request(server)
        .get('/items_info/get_all_items_info_data')
        .query({unique_item_id : uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



    it("delete_one", (done) =>{
        chai.request(server)
        .delete('/items_info/delete_one_items_info_data')
        .query({unique_item_id: uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });

});
