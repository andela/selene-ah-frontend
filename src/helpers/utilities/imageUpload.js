import axios from 'axios';

const imageUrl = process.env.CLOUDINARY_API_BASE_URL;
const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append('file', image);
  formData.append('upload_preset', uploadPreset);
  try {
    const imgUploadResponse = await axios({
      url: `${imageUrl}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: formData,
    });
    return imgUploadResponse;
  } catch (err) {
    return err.message;
  }
};

export default imageUpload;
