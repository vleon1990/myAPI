import 'dotenv/config'

export const MONGODB_URI = process.env['MONGODB_URI']

export const CLOUDINARY_CLOUD_NAME = process.env['CLOUDINARY_CLOUD_NAME']

export const CLOUDINARY_API_KEY = process.env['CLOUDINARY_API_KEY']

export const CLOUDINARY_API_SECRET = process.env['CLOUDINARY_API_SECRET']

export const HOST = process.env['HOST'] || '0.0.0.0' 

export const PORT = process.env['PORT'] || 4000