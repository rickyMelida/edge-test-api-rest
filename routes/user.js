const express = require('express');
const router = express.Router();

const {getUser, getUsers, getUserBy, searchUser} = require('../controllers/user');

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/get_by/:name', getUserBy);
router.get('/search_user/:name', searchUser);


module.exports = router;
