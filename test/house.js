let chai = require("chai")
let chaiHttp = require("chai-http")
let server = require("../server"); 

//Assertion style
chai.should()
chai.use(chaiHttp);

describe("house Api",()=>{
  //test get houses
  describe("GET/api/v1/house",()=>{
    it("It should GET all the houses",(done)=>{
      chai.request(server)
      .get("/api/v1/house")
      .end((err,response)=>{
        response.should.have.status(200);
        response.body.should.be.a("object")
        done();
      })
    })
  })
  // test post houses

  // test get houses using location


})