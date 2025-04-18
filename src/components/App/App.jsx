import s from "./App.module.css";
import { useEffect, useState, useRef } from "react";
import fetchImages from "../../services/images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
        if (error.code !== "ERR_CANCELED") {
          setError(true);
          // toast.error("Try again later...");
        }
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangeSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (page <= 1) return;
    const liEl = galleryRef.current?.firstElementChild;
    if (!liEl) return;
    const { height } = liEl.getBoundingClientRect();
    window.scrollBy({
      top: height * 2,
      behavior: "smooth",
    });
  }, [images]);

  return (
    <div className={s.section}>
      <SearchBar onSubmit={handleChangeSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <div ref={galleryRef}>
          <ImageGallery images={images} openModal={openModal} />
        </div>
      )}
      {page < totalPages && !loading && (
        <LoadMoreBtn
          // page={page}
          // totalPages={totalPages}
          onClick={handleLoadMore}
        />
      )}
      {loading && <Loader />}
      <ImageModal
        isOpen={isModalOpen}
        image={modalImage}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
