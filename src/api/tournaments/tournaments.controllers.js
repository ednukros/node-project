const Tournament = require("./tournaments.model");


const indexGet = async (req, res, next) => {

    try {
        const tournaments = await Tournament.find();
        return res.status(200).json(tournaments);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next) => {

    try {
        
        console.log(req.body);

        const tournamentToBeCreated = new Tournament(req.body);

        const created = await tournamentToBeCreated.save();

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
        console.log('fields en tournaments', options);
        const edited = await Tournament.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    }
    catch(error) {
        return next(error);
    }
};

const deleteTournament = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Tournament.deleteOne({ _id: id });
        if (deleted.deletedCount) {
            return res.status(200).json("Tournament Deleted");
        } else {
            return res.status(200).json("Tournament not found");
        }
    } catch (error) {
        return next(error);
    }
};

const getByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const found = await Tournament.findById(name);
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};


module.exports = {
    indexGet, //read
    createPost, //Create
    editPut,//update
    deleteTournament, //delete
    getByName
}