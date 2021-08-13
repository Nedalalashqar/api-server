'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const { response } = require('express');
const request = supertest(server.app);

// describe('my API Server', () => {
//     beforeEach(() => {
//         jest.spyOn(console, 'log').mockImplementation();
//     })
//     it('get data from /food ', async () => {
//         const response = await request.get('/food'); 
//         expect(response.status).toEqual(200);
//         expect(typeof response.body).toEqual('object'); 
//     });
//     it('handles not found request', async () => {
//         // add test
//         const response = await request.get('/food');
//         expect(response.status).toEqual(404);
//     });
//     it('crete new food', async () => {
//         const response = await request.post('/food');
//         expect(response.status).toEqual(200);
//     });
//     it('/ route works', async () => {
//         const response = await request.get('/food');
//         expect(response.status).toEqual(200);
//         console.log(response.text);
//         expect(response.text).toEqual('object');
//     });
// });
// *********************************************


// describe('my API Server', () => {
//     beforeEach(() => {
//         jest.spyOn(console, 'log').mockImplementation();
//     })
//     it('get data from /food', () => {
//         const response =  request.get('/food').then((response) =>{
//             expect(response.status).toEqual(200);
//             expect(typeof response.body).toEqual('object');
//         });
//     });
//     it('create new food', () => {
//         const response = request.post('/food')
//         .then((response)=>{ expect(response.status).toEqual(200)})
//       });
//       it('update id', () => {
//         const updateRecord = request.put('/food')
//         .then((response)=>{ expect(response.status).toEqual(200)})
//       });
//       it('delete id', () => {
//         const updateRecord = request.delete('/food')
//         .then((response)=>{ expect(response.status).toEqual(202)})
//       });
// });

//***************************

describe('my Server', ()=> {
  it('Handles 404 on bad route', async () => {
      const response = await request.get('/asd');
      expect(response.status).toEqual(404);
  });
  it('Handles 404 on bad method', async () => {
      const response = await request.post('/');
      expect(response.status).toEqual(404);
  });
  it('200 Get route /', async () => {
      const response = await request.get('/');
      expect(response.status).toEqual(200);
  });
  it('200 Get route /', async () => {
      const response = await request.get('/');
      expect(response.text).toEqual('Hello World');
  });
  it('Create record POST Food ', async () => {
      const response = await request.post('/food').send(reqBody);
      expect(response.status).toEqual(200);
  });
  it('Read record get for Food', async () => {
      const response = await request.get('/food');
      expect(response.status).toEqual(200);
  });
  it('Update record put Food', async () => {
      const response = await await request.put('/food/2').send(reqBody);
      expect(response.status).toEqual(200);
  });
  it('Destroy record DELETE Food', async () => {
      const response = await request.delete('/food/2');c
      expect(response.status).toEqual(200);
  });
  it('Create  record post customer ', async () => {
      const response = await request.post('/customer').send(obj);
      expect(response.status).toEqual(200);
  });
  it('Read record get for customer', async () => {
      const response = await request.get('/customer');
      expect(response.status).toEqual(200);
  });
  it('Update record put customer', async () => {
      const response = await await request.put('/customer/1').send(obj);
      expect(response.status).toEqual(200);
  });
  it('Destroy record delete customer', async () => {
      const response = await request.delete('/customer/1');
      expect(response.status).toEqual(200);
  });
});