CloudinaryUploader.class_eval do
  version :small do
    process :resize_to_fit => [48, 48]
  end
end
