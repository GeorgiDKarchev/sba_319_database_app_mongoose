import mongoose from 'mongoose';

const membersSchema = new mongoose.Schema({

    member_name: {
        type: String,
        minLength: 2,
        maxLength: 25,

    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 30,
        required: true
    },
    photo: {
        type: String
    },
    phone: {
        type: Number
    },
    Address: [
        {
            street: {
                type: String,
            },
            appartment: {
                type: String,
            },
            zip_code: {
                type: Number,
            }
        }
    ]

})







export default mongoose.model('Member', membersSchema);