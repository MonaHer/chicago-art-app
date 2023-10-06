import { useGetAllArtworksQuery } from "./apiSlice";
import { useState } from "react";

export default function ArtworksList() {
  const { data, isLoading, isError } = useGetAllArtworksQuery();
  const [isVisible, setIsVisible] = useState(3);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  function showMoreArtworks() {
    setIsVisible(isVisible + 3);
  }

  function showLessArtworks() {
    setIsVisible(isVisible - 3);
  }

  return (
    <>
      <h1>Artworks</h1>
      <ul>
        {data.data.slice(0, isVisible).map((artwork) => (
          <h2 key={artwork.id}>{artwork.title}</h2>
        ))}
      </ul>
      <button onClick={showLessArtworks} disabled={isVisible <= 3}>
        Show Less
      </button>
      <button
        onClick={showMoreArtworks}
        disabled={isVisible >= data.data.length}
      >
        Show More
      </button>
    </>
  );
}
