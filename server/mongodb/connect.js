import mongoose from 'mongoose'; // modelling library for MongoDB
// this will allow us to make models more easily and schemas
const connectDB = (url) => {
    mongoose.set("strictQuery", true);

    mongoose
        .connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch((error) => console.log(error));
};

export default connectDB;
 
