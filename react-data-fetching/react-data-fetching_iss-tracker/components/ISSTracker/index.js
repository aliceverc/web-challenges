import useSWR from "swr";
import Controls from "../Controls";
import Map from "../Map";

// the API endpoint for the International Space Station's current coordinates
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// a reusable fetcher function for SWR that handles errors
async function fetcher(url) {
  // make the network request
  const response = await fetch(url);

  // if the response has an HTTP error status, create an Error object with details
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();  // attach any additional error info
    error.status = response.status;     // attach the HTTP status code
    throw error;                        // throw to let SWR know about the error
  }

  // if everything is fine, parse and return the JSON payload
  return response.json();
}

export default function ISSTracker() {
  // useSWR returns:
  // - data: the fetched result (renamed here to "coords" for clarity)
  // - error: any error thrown by the fetcher
  // - isLoading: true while the initial fetch is in progress
  // - mutate: a function to manually re-fetch the data
  const { data: coords, error, isLoading, mutate } = useSWR(
    URL,            // the key: our API endpoint
    fetcher,        // the function that actually fetches the data
    {
      refreshInterval: 5000  // automatically re-fetch every 5000ms (5 seconds)
    }
  );

  // if there was an error fetching, show a message
  if (error) return <div>{error.message}</div>;

  // while the data is loading, show a loading indicator
  if (isLoading) return <div>Loading...</div>;

  // at this point, `coords` is defined and has { latitude, longitude }
  return (
    <main>
      {/*
        use object spread to pass both latitude and longitude
        as individual props to the Map component:
        <Map latitude={coords.latitude} longitude={coords.longitude} />
      */}
      <Map {...coords} />

      {/*
        spread the coords into Controls and give it the
        mutate function, so clicking "Refresh" calls mutate() and
        triggers a fresh fetch.
      */}
      <Controls {...coords} onRefresh={mutate} />
    </main>
  );
}
