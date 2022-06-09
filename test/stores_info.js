

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

let authToken = "empty";
let uiqueId = Date.now();

chai.use(chaiHttp);

describe("stores_info", () =>{

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
                       unique_store_id :uiqueId,  
                       schema : "",
                       name : "",
                       address : "",
                       items_in_stock : "",
                       staff : "",
               
           }
        chai.request(server)
        .post('/stores_info/post_stores_info_data')
        .query({unique_store_id : uiqueId,jwtToken : authToken})
        .send(object)
        .end((err,res) =>{
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



     it("get_one", (done) =>{
        chai.request(server)
        .get('/stores_info/get_one_stores_info_data')
        .query({unique_store_id : uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



    it("update_one", (done) =>{
        let object = {
                       unique_store_id :uiqueId,  
                       schema : "",
                       name : "",
                       address : "",
                       items_in_stock : "",
                       staff : "",
               
        }
        chai.request(server)
        .patch('/stores_info/update_one_stores_info_data')
        .query({unique_store_id : uiqueId,jwtToken : authToken})
        .send(object)
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



     it("get_all", (done) =>{
        chai.request(server)
        .get('/stores_info/get_all_stores_info_data')
        .query({unique_store_id : uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



    it("delete_one", (done) =>{
        chai.request(server)
        .delete('/stores_info/delete_one_stores_info_data')
        .query({unique_store_id: uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });

});
