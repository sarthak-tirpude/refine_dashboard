import mongoose from "mongoose";
// Creating Schema object:

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true },
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
});
// all properties is an array because one user can create multiple properties 

const userModel = mongoose.model("User", UserSchema);

export default userModel;