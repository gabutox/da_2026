export default function checkRoleMiddleware(roles){
    return (req, res, next) => {
        if(!req.session) {
            res.status(401).json({ error: "Unauthorized"});
            return;
        }

        if(!roles.includes(req.session.role)) {
            res.status(403).json({ error: "Forbidden"});
            return;
        }

        next();
    }
}
    
