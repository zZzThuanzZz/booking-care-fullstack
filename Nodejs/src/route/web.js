import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.send('hello world');
    });
    router.get('/thuan', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    return app.use('/', router)
}

module.exports = initWebRoutes;