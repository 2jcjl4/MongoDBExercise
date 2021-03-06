
const express = require('express');
const ToDo = require('../model/ToDo');


// we are defining router level middleware, so we need a Router object
const router = express.Router();

// express passes in the request and response objects for us
router.get('/getAll', async (request, response, next) => {
    response.contentType('application/json') // contentType is a shortcut provided by Express for creating the 'Content-type': 'value' header
            .status(200)
            .json(await ToDo.find()); // converts object to json and puts in the response body
    }); 


router.post('/create', async (request, response, next) => {
    // data parsed into the request.body object can be accessed anywhere
    // we have access to the request object
    // - we must use express.json() or body-parser() middleware

    if (Object.keys(request.body).length == 0) return next({ 
        statusCode: 400, 
        message: 'Body cannot be empty' 
    });
    const toDo = new ToDo(request.body);

    await toDo.save(); // equivalent to insertOne({})

    response.status(201).json(toDo);
});

router.put('/update/:id', async (request, response, next) => {
    // make sure request body is not empty
    if (Object.keys(request.body).length == 0) return next({ 
        statusCode: 400, 
        message: 'Body cannot be empty' 
    });

    const toDo = await ToDo.updateOne({ _id: request.params.id }, request.body);
    // when we find a resource in the db using .find(), it is tracked by Mongoose and that
    // is why we can change the toDo objects fields and then save them as updates
    console.log(toDo);
    if (toDo) {
        response.status(200).json(await ToDo.findById(request.params.id));
    } else {
        next({ statusCode: 404, message: `toDo with id ${request.params.id} does not exist`});
    }
});

router.delete('/delete/:id', async (request, response, next) => {
    // a colon followed by a name in a path is path parameter
    // that can be accessed on the request.params object
    const id = request.params.id;

    const toDo = await ToDo.findByIdAndDelete(id);

    if (toDo) {
        response.status(200).json(toDo);
    } else {
        next({ statusCode: 404, message: `toDo with id ${id} does not exist`});
    }
});


router.get('/getById/:id', async (request, response, next) =>{
    const id = request.params.id;
    const toDo = await ToDo.findById(id);

    if (toDo) {
        response.status(200).json(toDo);
    } else {
        next({ statusCode: 404, message: `toDo with id ${id} does not exist`});
    } 
})

module.exports = router;