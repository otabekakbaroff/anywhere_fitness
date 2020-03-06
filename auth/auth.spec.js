const request = require("supertest");
const server = require("../server");


describe("testing Login and SignUp routes", function(){
    it("should run the tests", function(){
        expect(true).toBe(true);
    });
    it("should return all instructors", function(){
        return request(server)
        .get("/api/instructors")
        .then(res=>{
            expect(res[0].id).toBe(1);
        })
    })

    
    
})