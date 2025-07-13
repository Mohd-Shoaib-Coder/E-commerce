export const fetchUserCart = async () => {
  try {
    const response = await fetch("https://e-commerce-backend-gshd.onrender.com/cart", {
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
