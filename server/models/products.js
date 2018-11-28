const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema
mongoose.plugin(uniqueValidator)

const ProductsSchema = new Schema({
	title: {
		type: String,
		required: 'Product title is required'
	},
	description: {
		type: String,
		// unique:'User with email "{VALUE}" already exist.',
	},
	price: {
		type: Number,
    required: 'Product price is required'
	},
	discount: {
		type: Number,
	},
	isPublished:{
		type: Boolean,
		default: false
	}
},{ timestamps: true })

ProductsSchema.set('toJSON', { versionKey: false })

module.exports = mongoose.model('Products', ProductsSchema)
