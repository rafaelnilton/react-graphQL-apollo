const user = {
    _id: "1",
    name: "Rafael",
    email: "rafaelniltonwd@hotmail.com",
    picture: "https://cloudinary.com"
}

module.exports = {
    Query: { 
        me: () => user
    }
}