export const index = async (req, res) => {
    const user = req.user;

    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
    })
}
