const axios = require("axios");

const userModel = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        
        return response.data;
    } catch (err) {
        return { error: "Server Error" };
    }
};

module.exports = { userModel };
