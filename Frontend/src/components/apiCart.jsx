


export const sendCartItem = async (product) => {

  
  try {
    

    

    const response = await fetch("http://localhost:4000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      credentials: "include",
      body: JSON.stringify({cartItems:product}),
    });

    if (!response.ok) {
      throw new Error("Failed to send cart item");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending cart item:", error.message);
    return null;
  }
};









