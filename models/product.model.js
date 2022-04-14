import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name : {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  description : {
    type: String,
    trim: true
  },
  price : {
    type: Number,
    trim: true,
    required: true,
    default: 0
  },
  image : {
    public_id: String,
    secure_url: String
  },
},{
  timestamps: true
})

export default mongoose.model('Product', productSchema)