const express = require('express');
const router = express.Router();
const menuCont = require('../controllers/menuController')

router.get('/', menuCont.getAllMenus);
router.get('/:id', menuCont.getOneMenu);
router.post('/', menuCont.createNewMenu);
router.put('/:id', menuCont.updateMenu);
router.delete('/:id', menuCont.deleteMenu);

module.exports = router
