import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

// a reusable fetcher function for SWR that handles errors
async function fetcher(url) {
  // make the network request
  const response = await fetch(url);

  // if the response has an HTTP error status, create an Error object with details
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json(); // attach any additional error info
    error.status = response.status; // attach the HTTP status code
    throw error; // throw to let SWR know about the error
  }

  // if everything is fine, parse and return the JSON payload
  return response.json();
}

export default function Character() {
  // call useRouter to get the router object
  const router = useRouter();

  // pull out just the `id` from router.query
  // now `id` holds the URL segment (e.g. "1", "2", etc.)
  const { id } = router.query;

  // build the API endopoint using the dynamic id
  const URL = `https://swapi.py4e.com/api/people/${id}`;

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>{error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <Card
        id={id} // show which character number this is
        name={data.name} // character's name from the API
        height={data.height} // height from the API
        eyeColor={data.eye_color}  // eye color from the API 
        birthYear={data.birth_year} // birth year from the API
      />
    </Layout>
  );
}
