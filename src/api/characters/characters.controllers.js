const Character = require("./characters.model");

const indexGet = async (req, res, next) => {

    try {
        const characters = await Character.find();
        return res.status(200).json(characters);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {

    try {
        
        console.log(req.body);

        const characterToBeCreated = new Character(req.body);

        const created = await characterToBeCreated.save();

        return res.status(201).json(created);

    } catch (error) {
        
        return next(error);

    }
};


const editPut = async(req, res, next) => {
    try {
        const { id } = req.params; // req.params.id
        const fields = {...req.body};
        const options = { new: true };
        console.log('fields en characters', options);
        const edited = await Character.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    }
    catch(error) {
        return next(error);
    }
};

const deleteCharacter = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Character.deleteOne({ _id: id });
        if (deleted.deletedCount) {
            return res.status(200).json("Character Deleted");
        } else {
            return res.status(200).json("Character not found");
        }
    } catch (error) {
        return next(error);
    }
}


module.exports = {
    indexGet, //read
    createPost, //Create
    editPut,//update
    deleteCharacter //delete
}