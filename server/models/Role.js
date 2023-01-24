import mongoose, { Schema } from "mongoose";

export const ROLES = ["user", "Admin"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Role", roleSchema);
