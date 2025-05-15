import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  // ensure we have an open connection to MongoDB before any queries
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  if (request.method === "DELETE") {
    // remove the product with the gived ID from the database
    await Product.findByIdAndDelete(id);
    // Confirm deletion
    return response
      .status(200)
      .json({ status: "Product successfully deleted" });
  }

  if (request.method === "PUT") {
    // pull the updated product fields out of the request body
    const productData = request.body;
    // Get the product data from the request body
    await Product.findByIdAndUpdate(id, productData);
    // Find the product by its ID and update the product using its ID and the new data.
    return response
      .status(200)
      .json({ status: `Product ${id} successfully updated!` });
    // Return an OK status on successful update
  }

  response.status(405).json({ status: "Method not allowed." });
}
