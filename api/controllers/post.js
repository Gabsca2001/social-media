import { db } from "../connect.js";

export const getPosts = (req, res) => {
    //TODO
    const q = "SELECT p.*, u.id_user, u.name, u.profilePic FROM post AS p JOIN user AS u ON (p.id_posr = u.id_user)";

    db.query(q, (err, data)=>{
        if(err){
            return res.status(500).json(err);
        } else {
            return res.status(200).json(data);
        }
    });
}
