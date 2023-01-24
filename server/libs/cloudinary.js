import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dkigrjzbb",
  api_key: "534964167319175",
  api_secret: "0pZ4XH1qYTLVfQnG4ZNSA8jCtXQ",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "apps",
  });
};

export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
