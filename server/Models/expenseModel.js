const { mongoose } = require( "mongoose" );

const expenseSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            enum : [ 'food', 'rent', 'travel', 'shopping', 'entertainment', 'others' ],
            required: true
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Expense',expenseSchema)