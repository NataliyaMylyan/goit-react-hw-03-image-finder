import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "../Searchbar/Searchbar.jsx";
import api from "../../api/api.js";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";
import Button from "../Button/Button.jsx";
import Modal from "../Modal/Modal.jsx";
import s from "./App.module.css";

class App extends Component {
  state = {
    currentPage: 1,
    gallery: [],
    searchQuery: "",
    loading: false,
    showModal: false,
    largeImageUrl: "",
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      await this.fetchImagesGallery();
    }
  }

  fetchImagesGallery = async () => {
    const { currentPage, searchQuery } = this.state;
    this.setState({ loading: true });

    try {
      const { hits } = await api.fetchImages(searchQuery, currentPage);
      this.setState((prevState) => ({
        gallery: [...prevState.gallery, ...hits],
        currentPage: prevState.currentPage + 1,
      }));
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleQueryChange = (query) => {
    this.setState({ gallery: [], searchQuery: query, currentPage: 1 });
  };

  openModal = (event) => {
    if (event.target.nodeName === "IMG") {
      this.setState({
        showModal: true,
        largeImageUrl: event.target.dataset.source,
      });
    }
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageUrl: "" });
  };

  render() {
    const {
      gallery,
      loading,
      largeImageUrl,
      showModal,
      searchQuery,
      currentPage,
    } = this.state;
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.handleQueryChange} />
        <ImageGallery
          gallery={gallery}
          searchQuery={searchQuery}
          currentPage={currentPage}
          onClick={this.openModal}
        />
        {showModal && (
          <Modal onClose={this.closeModal} largeImageURL={largeImageUrl}>
            <img src={largeImageUrl} alt={this.state.tags} />
          </Modal>
        )}
        {loading && <Loader />}
        {gallery.length > 0 && !loading && (
          <Button onClick={this.fetchImagesGallery} />
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
