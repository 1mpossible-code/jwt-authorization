export const index = async (req, res) => {
    const user = req.user;

    res.header("Access-Control-Allow-Origin", process.env.CORS_URL);
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
    })
}
