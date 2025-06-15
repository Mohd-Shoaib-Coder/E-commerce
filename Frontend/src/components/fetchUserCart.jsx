export const fetchUserCart = async () => {
  try {
    const response = await fetch("http://localhost:4000/cart", {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) throw new Error("Failed to fetch user cart");

   return await response.json();
  } catch (error) {
    console.error("Error fetching user cart:", error.message);
    return [];
  }
};
