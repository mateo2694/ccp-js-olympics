export async function getImage(apiKey) {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/randomimage?category=technology",
    {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        Accept: "image/jpg",
      },
    }
  );

  console.log("GET", response);
  return response;
}
