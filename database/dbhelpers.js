const model = require('../database/index');


const getAllCategories = () => {
    return model.Category.find({})
};

const getAllDesc = () => {
    return model.Description.find({})
}

const getAllObjs = () => {
    return model.SearchObj.find({})
}

module.exports = {
    getAllCategories,
    getAllDesc,
    getAllObjs
}