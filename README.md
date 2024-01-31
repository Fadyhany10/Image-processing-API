# My first project

# The scripts needed to test/start/build your application

### 1- for testing ("test": "npm run build && npm run jasmine")
```bash
npm run test
```
### 2-for to start the server   ("start": "nodemon src/index.ts")
```bash
npm run start
```
### 3-for to build   ("build": "npx tsc")
```bash
npm run build
```

# Any endpoints that should be accessed to test Any other functionality i have included in the project 

```bash
describe("test endpoints", () => {
        
    it('server working ;)', async () => {
         const response = await request.get('/api');
         expect(response.status).toBe(200);
     });
          
       
//test if there is a filename in the url
      it('check if there is a filename or not', async () => {
        const response = await request.get('/api?filename=');
        expect(response.status).toBe(200);
    });
    
    //test if the numbers of the width and height are greater than one
    it('if the numbers of the width and height are greater than one', async () => {
        const response = await request.get('/api?filename=image1&width=0&height=-2');
        expect(response.status).toBe(200);
    });

    //test if the image doesn't exict in full folder 
    it('if the image does not exict in the full folder ', async () => {
        const response = await request.get('/api?filename=image30&width=200&height=300');
        expect(response.status).toBe(200); 
    });

    //if the image already exict in thump folder
    it('check if there is a filename or not', async () => {
        const response = await request.get('/api?filename=image1&width=100&height=700');
        expect(response.status).toBe(200);
    });

     //if the image created in thump folder
     it('check if the image does not exict then it has created', async () => {
        const response = await request.get('/api?filename=image1&width=600&height=700');
        expect(response.status).toBe(200);
    });

    //test if the numbers are so big 
    it('check if the numbers of the width and the hight are so big', async () => {
        const response = await request.get('/api?filename=image1&width=10000&height=210391');
        expect(response.status).toBe(404);
    });

    //test if the user does not write width
    it('check if the user does not write width', async () => {
        const response = await request.get('/api?filename=image1&height=700');
        expect(response.status).toBe(200);
    });
    //test if the user does not write height
    it('check if the user does not write height', async () => {
        const response = await request.get('/api?filename=image1&width=700');
        expect(response.status).toBe(200);
    });
    
      //test if the user does not write height and width
    it('check if the user does not write height and width', async () => {
        const response = await request.get('/api?filename=image1');
        expect(response.status).toBe(200);
    });

});
```

