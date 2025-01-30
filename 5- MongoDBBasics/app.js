const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
    .connect(
        "mongodb+srv://codeofmustafa:xepqBiRks8U38AFR@cluster0.za9xk.mongodb.net/"
    )
    .then(() =>  console.log("MongoDB Connected Successfully."))
    .catch((error) => console.error(error));

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    isAcrive: Boolean,
    tags: [String],
    createdAt: {type: Date, default: Date.new},
});

// create user model
const User = mongoose.model('User', userSchema);

async function runQueryExamples() {
    try {
        const newUser = await User.create({
            name: "Updated User",
            email: "updateuser@mail.com",
            age: 85,
            isAcrive: true,
            tags: ["Developer"],
        });

        // alternatively
        // const newUser = new User({
        //     name: "Hasanain",
        //     email: "hasanain@mail.com",
        //     age: 50,
        //     isAcrive: true,
        //     tags: ["Developer", "Designer"],
        // });
        // with alternative way
        // await newUser.save();

        console.log("Create new user ", newUser);

        // ---
        // const allUsers = await User.find({});
        // console.log(allUsers);

        // ---
        // const getUsersOfActiveFalse = await User.find({ isAcrive: true });
        // console.log(getUsersOfActiveFalse);

        // ---
        // const getJhonLoukUser = await User.findOne({ name: "Jhon" });
        // console.log(getJhonLoukUser);
        
        // ---
        // const getLastCreatedUserByUserId = await User.findById(newUser._id);
        // console.log(getLastCreatedUserByUserId);

        // ---
        // const getLastCreatedUserByUserId = await User.findById("679bd8ad3f33e1645117d37c");
        // console.log(getLastCreatedUserByUserId);

        // ---
        // const selectedFields = await User.find().select('name email -_id');
        // console.log(selectedFields);
        
        // ---
        // const limitedUsers = await User.find().limit(5).skip(1);
        // console.log(limitedUsers);
        
        // ---
        // const sortedUsers = await User.find().sort({age: -1});
        // console.log(sortedUsers);
        
        // ---
        // const countDocuments = await User.countDocuments({isAcrive: true});
        // console.log(countDocuments);
        
        // --- delete
        // const deletedUser = await User.findByIdAndDelete(newUser._id);
        // console.log(deletedUser);

        // update
        const updateUser = await User.findByIdAndUpdate(newUser._id, {
            $set: { age: 100 },
            $push: { tags: 'updated' }
        }, { new: true });
        console.log("updated user", updateUser);
    } catch (error) {
        console.log("Error -> ", error);
    } finally {
        await mongoose.connection.close();
    }
}

runQueryExamples();