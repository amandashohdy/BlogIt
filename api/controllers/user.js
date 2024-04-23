import { db } from "../connect.js" ;

export const getUser = (req, res) => {
    const userID = req.body.id ; 
    const q = "SELECT * FROM users WHERE id=?"

  db.query(q, [userID], (err, data) => {
    if (err) return res.status(500).json(err)
    const { password, ...info } = data[0] ; 
    return res.json(info) ; 
  }) ;
} ;