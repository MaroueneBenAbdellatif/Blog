const blog = require('../models/Blog');
exports.addBlog = async  (req, res) => {

    const blogs = new blog({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });

    blogs.save((err, blogs) => {
        if (err) res.status(401).json(err);
        else res.status(200).json(blogs);
    });
}

exports.getBlog = async  (req, res)=> {
    try {
        const blogs = blog.find().then(bg => res.json(bg));
    } catch (err) {
        res.json({message: err});
    }
}



exports.updateBlogAvis =   async  (req, res) => {
    try {
        const updated = await blog.updateOne(
            { _id: req.body._id },
            { $set: {
                    upvote:req.body.upvote,
                    downvote:req.body.downvote,
                }},

            {new: true, useFindAndModify: false}
        );
        res.json(updated);
    } catch (err) {
        console.log(err);

        res.json({message: err});
    }
};



exports.getById = async  (req, res) => {
    try {
        const blogId  = await blog.findById(req.params.id).then(bg => res.json(bg));

    } catch (err) {
        res.json({message: err});
    }
};
