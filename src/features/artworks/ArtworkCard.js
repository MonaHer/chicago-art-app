import Modal from "react-modal";
import { useState } from "react";

export default function ArtworkCard({ artwork }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <h2>{artwork.title}</h2>
      <h3>by {artwork.artist_display}</h3>
      <p>Price: {artwork.thumbnail.width}€</p>
      <button onClick={handleOpenModal}>Show more Info</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Info Modal"
      >
        <p>{artwork.thumbnail.alt_text}</p>
        <p>{artwork.dimensions}</p>
        <img alt={artwork.title} src={artwork.thumbnail.lqip} />
        <button onClick={handleCloseModal}>Close Info</button>
      </Modal>
    </>
  );
}
