exports.userCreate = (req, res) => {
    try {

        res.send("Hello test")

    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: e
        });


    }
}