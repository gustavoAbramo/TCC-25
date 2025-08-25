import jwt from 'jsonwebtoken'

export default function authMiddleware(req, res, next) {
  const token = req.cookies.token; // cookie HTTPS only
  if (!token) return res.status(401).json({ message: "Não autorizado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // exemplo: { id_user: 1, email: "user@email.com", name: "Gustavo" }
    next();
  } catch {
    res.status(401).json({ message: "Token inválido" });
  }
}

