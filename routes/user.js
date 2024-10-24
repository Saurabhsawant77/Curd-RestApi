const express = require('express');
const router = express.Router();
const {handleGetAllUsers,handleGetUserById,handleUpadteUserById,handleDeleteUserById,handleUpdateUserByIdPatch,handleInsertData} = require('../controllers/user');


router.route('/').get(handleGetAllUsers)
.post(handleInsertData);

router.route('/:id').get(handleGetUserById)
.put(handleUpadteUserById)
.delete(handleDeleteUserById)
.patch(handleUpdateUserByIdPatch)



module.exports =  router;