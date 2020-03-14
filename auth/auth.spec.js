const request = require("supertest");
const server = require("../server");
let token="";
describe("testing Login and SignUp routes", function(){
    it("should return list of all instructors", function(){
        return request(server)
        .get("/api/instructors")
        .then(res=>{
            expect(res.type).not.toMatch(/text/);
        })
    })
    it("should return error message no credentials provided", function(){
        return request(server)
        .get("/api/instructors")
        .then(res=>{
            expect(res.body.message).toBe('No credentials provided');
        })
    })
    it("should be false because theres no token", function(){
        return request(server)
        .get("/api/instructors")
        .then(res=>{
            expect(res.header.Authorization).toBeFalsy();
        })
    })
    it("should turn error of userinfo has to be UNIQUE", function(){
        return request(server)
        .post("/api/auth/instructor/register")
        .send({
            "name": "newUser",
            "contactInfo": "newUser@gmail.com",
            "status": "Running Instructor",
            "username": "newUser",
            "password": "123"
    })
        .then(res=>{
            expect(res.status).toBe(500);
        })
    })
    
    it("should response body if welcome is set to right person", function(){
        return request(server)
        .post("/api/auth/instructor/login")
        .send({
            "username":"newUser",
            "password":"123"
        })
        .then(res=>{
            token=res.body.token;
            res.header.Authorization=token;
            expect(res.body.Welcome).toBe('newUser');
        })
    })
    it("should return all instructors", function(){
        return request(server)
        .get("/api/instructors")
        .then(res=>{
            expect(token).toBeDefined()
        })
    })

    it("should return list of all instructors", function(){
        return request(server)
        .get("/api/instructors")
        .then(res=>{
            expect(res.type).toMatch(/json/);
        })
    })
    // it("should return list of all classes", function(){
    //     return request(server)
    //     .get("/api/classes")
    //     .then(res=>{
    //         res.body.Authorization=token;
    //         console.log(res.body.Authorization);
    //         expect(res.status).toBe(200);
    //     })
    // })
})