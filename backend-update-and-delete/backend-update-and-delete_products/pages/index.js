import styled from "styled-components";
import ProductList from "@/components/ProductList";
import ProductForm from "@/components/ProductForm";
import useSWR from "swr";

export default function HomePage() {
  // useSWR("...") gives us a 'mutate' function
  // so we can re-fetch the product list adfter adding a new fish
  const { mutate } = useSWR("/api/products");

  // this function runs when the "Add" form is submitted
  // it prevents the browser's default submission, send a POST,
  // and then refreshes our product list
  async function handleAddProduct(event) {
    // stop the browser from reloading the page on submit
    event.preventDefault();

    // create a formData instance that automatically reads all
    // input and select field values from this form element
    const formData = new FormData(event.target);

    // convert the FormDAta key/value pairs into a plain abject
    // so we can JSON.stringify it for our POST body
    const productData = Object.fromEntries(formData);

    // send a POST request with our new product data
    // to the /api/products endpoint in JSON format
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    // if hte POST fails, log the status and exit early
    if (!response.ok) {
      console.error(response.status);
      return;
    }

    // re-fetch the product list so the UI updates with the new fish
    mutate();
    // clear the form fields for the next entry
    event.target.reset();
  }

  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm onSubmit={handleAddProduct} title="Add a new fish" />
      <hr />
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
