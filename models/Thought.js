const { Schema, model, Types } = require("mongoose");
//Dependency for formating date:
const moment = require("moment");

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:(createdAtVal) => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a")
        },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
       thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1,
       },
       createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a")
       },
       username: {
        type: String,
        required: true,
       },
       reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

//Virtual reactionCount that retrieves the length of the thoughts reactions array field on query:
ThoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length;
});

const Thought = model("thought", ThoughtSchema);

module.exports = Thought;