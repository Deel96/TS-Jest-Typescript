import {MoviesRoutes} from "../src/routes/movies.routes"
import {App} from "../src/app";
import request from "supertest"

const testApp = new App([new MoviesRoutes()]);




describe("Test API",()=>{

    it("should return all movies on GET /movies",async ()=>{  
        const { body } = await request(testApp.app).get("/movies");

        expect(body.status).toEqual(200);
        expect(body.data).toEqual([
            {id:"1",name:"Star Wars"},
            {id:"2",name:"Star Trek"},
            {id:"3",name:"Lord of the Rings"}
        ])
    })

    it("should add a movie on POST /movies",async ()=>{  
        const reqObj = {
            id:null,
            name: "Pulp Fiction"
        }
        
        const { body } = await request(testApp.app).post("/movies").send(reqObj);

        expect(body.status).toEqual(200);
        expect(body.message).toEqual("addMovie");
        expect(body.data.name).toEqual("Pulp Fiction");
    })


    it("should delete a movie on DELETE /movies",async ()=>{  
        const id =1;
         
        const { body } = await request(testApp.app).delete(`/movies/${id}`);
        expect(body.status).toEqual(200);
        expect(body.message).toEqual("deleteMovie");
    })
    


})