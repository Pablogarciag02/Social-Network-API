const {Schema, model } = require("mongoose");


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

//Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            validate: [validateEmail, "Please enter a valid email"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
        
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "thought"
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "user"
            }
        ]

    },

    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//Virtual Shema retrieves the length of users friends
userSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;