export const register = (req, res) => {
    //TODO
    //check if user exists
    const q = 'SELECT * FROM users WHERE username = ?'

    db.query(q, [req.body.username], (err, data) => {
        if (err) {
            res.status(500).json(err)
        } else if (data.length > 0) {
            res.status(409).json("User already exists!")
        }

        //create user
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (username, email, password, name) VALUE (?)"

        const values = [[req.body.username, req.body.email, hashedPassword, req.body.name]]

        db.query(q, [values], (err, data) => {
            if (err) {
                res.status(500).json(err)
            } else {
                res.status(200).json("User created!")
            }
        })

    })
    
}
export const login = (req, res) => {
    //TODO
    const q = 'SELECT * FROM users WHERE username = ?'

    db.query(q, [req.body.username], (err, data) => {
        if (err) {
            res.status(500).json(err)
        } else if (data.length === 0) {
            res.status(404).json("User not found!")
        }

        //check password
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

        if (checkPassword) {
            const token = jwt.sign({ id: data[0].id_user}, "secretkey")
            
            const {password, ...others} = data[0]
            
            res.cookie("accessToken", token, {
                httpOnly: true
            })
            .status(200)
            .json(others);
        } else {
            res.status(400).json("Wrong password!")
        }

    }
    )

}

export const logout = (req, res) => {
    //TODO
    res.clearCookie("accessToken",{
        secure: true,
        sameSite: "none"
    }).status(200).json("Logged out!")

}