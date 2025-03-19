import express from 'express';
const router = express.Router();
// /auth
router.get('/register', (req, res) => {
    res.render('signup');
});
router.post('/register', (req, res) => {
    const { email, password } = req.body;
});
router.get('/login', (req, res) => {
    res.render('login');
});
router.post('/login', (req, res) => {
});
router.get('/logout', (req, res) => {
});
export default router;
