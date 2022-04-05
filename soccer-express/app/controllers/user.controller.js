exports.signup = (req, res) => {
    const{username, password, name, telephone} = req.body
    console.log(`넘어온 JSON값 : ${JSON.stringify(req.body)}`)
    console.log(`username 값 : ${JSON.stringify(username)}`)
    console.log(`password 값 : ${JSON.stringify(password)}`)
    console.log(`name 값 : ${JSON.stringify(name)}`)
    console.log(`telephone 값 : ${JSON.stringify(telephone)}`)
    res.json(req.body)
}