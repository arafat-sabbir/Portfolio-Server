import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { TAdmin } from './admin.interface';

// Define an interface representing a Admin document

// Define the Admin schema
const AdminSchema: Schema<TAdmin> = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    forgotOtp :{
      type: String
    }
  },
  { timestamps: true, versionKey: false }
);

// Pre middleware to hash the password before saving to database
AdminSchema.pre('save', async function (next) {
  const user = this as Document & TAdmin;
  if (user.isModified('password')) {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  }
  next();
});

// Create the Admin model
const AdminModel = mongoose.model<TAdmin>('Admin', AdminSchema);

// Export the Admin model
export default AdminModel;

