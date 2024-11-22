export async function postImage(apiKey, image) {
  const formData = new FormData();
  formData.append("image", image);

  const response = await fetch(
    "https://api.api-ninjas.com/v1/objectdetection",
    {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
      },
      body: formData,
    }
  );

  console.log("POST", response);
  return response;
}
