import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

//========schema class from mongoose scheMA=====
const Schema = mongoose.Schema

//==========creating FAQ'S new schema.==========
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
});

const MenuSchema = new Schema({
    menu: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    }
})

//========creating a mongoose model.=============



UserSchema.pre('save', async function (next) {
    console.log("hi from inside")
    if (this.isModified('password')) {
        console.log("hi from pre   inside")
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});
const UserModel = mongoose.model("user", UserSchema);

// The alternative to the export model pattern is the export schema pattern.
const MenuModel = mongoose.model("Menu", MenuSchema);

export { MenuModel, UserModel };