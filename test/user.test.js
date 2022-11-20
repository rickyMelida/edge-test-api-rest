const chai = require("chai");
const { expect } = require("chai");
const chaiHttp = require("chai-http");
const path = require("path");

chai.use(chaiHttp);
const url = "http://localhost:3300/api/user";
describe("Get User", () => {
  it("Get All Users", (done) => {
    chai
      .request(url)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("Get User By Id")
});
