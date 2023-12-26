import cloudinary from "cloudinary";

// config cloudinary
cloudinary.v2.config({
  cloud_name: "dmqquu0p4",
  api_key: "332867628643741",
  api_secret: "0UE6lh1T8Lk1lc-xVtC8P5fMTDw",
});

export const cloudUpload = async (req) => {
  // upload brand logo
  const data = await cloudinary.v2.uploader.upload(req.file.path);
  return data;
};

export const cloudUploads = async (path) => {
  // upload brand logo
  const data = await cloudinary.v2.uploader.upload(path);
  return data.secure_url;
};

export const cloudDelete = async (publicId) => {
  // delete brand logo
  await cloudinary.v2.uploader.destroy(publicId);
};
