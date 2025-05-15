import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";
import StyledButton from "@/components/Button";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [isEditMode, setIsEditMode] = useState(false);

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();

    // 1. gather the form data
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    // 2. send the PUT request
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    //3. if it succeeds, revalidate and exit edit mode
    if (response.ok) {
      await mutate();
      setIsEditMode(false);
    } else {
      console.error("Update failed:", response.status);
    }
  }

  // implement deletion
  async function handleDeleteProduct() {
    // 1. send a DELETE request to our API for this product
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    // 2. if it worked, send the user back to the overview
    if (response.ok) {
      router.push("/");
    } else {
      console.error("Delete failes:", response.status);
    }
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
      <StyledButton type="button" onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "Cancel" : "Edit product"}
      </StyledButton>
      {isEditMode && (
        <ProductForm onSubmit={handleEditProduct} title="Edit this product" />
      )}
      <StyledButton type="button" onClick={handleDeleteProduct}>
        Delete product
      </StyledButton>
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
