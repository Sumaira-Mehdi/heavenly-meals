
import mongoose from 'mongoose';

//========schema class from mongoose scheMA=====
const Schema = mongoose.Schema

//==========creating FAQ'S new schema.==========
const FaqSchema = new Schema({
    "question": {
        type: String,
    },
    "answer": {
        type: String,
    }
})

//========creating a mongoose model.=============
const FaqModel = mongoose.model("Faq", FaqSchema)

export { FaqModel };
