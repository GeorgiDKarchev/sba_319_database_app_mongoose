import mongoose from 'mongoose';

const membersSchema = new mongoose.Schema({

    member_name: {
        type: String,
        minLength: 2,
        maxLength: 25,
        required: true

    },
    email: {
        type: String,
        unique: true
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
    age:{
        type: Number,
        min: 18,
        max: 125
    },
    active_member:{
        type: Boolean,
        default: true,
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

});

// index - ogranise data by ascending order
membersSchema.index({age: 1});
membersSchema.index({member_name: 1});





export default mongoose.model('Member', membersSchema);