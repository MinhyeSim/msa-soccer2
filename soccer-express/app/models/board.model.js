module.exports = mongoose => {
    return mongoose.model('board',
        mongoose.Schema(
            {passengerId: String,
             name: String,
             team: String,
             subject: String
            }, { timestamps: true}
        )
    )
}