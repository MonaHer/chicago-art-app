import { useGetAllArtworksQuery } from "./apiSlice";

export default function ArtworksList() {
  const { data, isLoading, isError } = useGetAllArtworksQuery();

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <h1>Artworks</h1>
      <ul>
        {data.data.map((artwork) => (
          <h2 key={artwork.id}>{artwork.title}</h2>
        ))}
      </ul>
    </>
  );
}
