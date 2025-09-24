const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).send('Not authorized as an admin');
    }
};

export default admin;