import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const DetailsModal = ({
  modalIsOpen,
  setIsOpen,
  openModal,
  closeModal,
  details,
  setDetails,
}) => {
  const customStyles = {
    overlay: {
      background: "rgba(130,125,125,0.75)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      height: "70vh",
      width: "700px",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [file, setFile] = useState(0);
  const { register, handleSubmit, watch, errors } = useForm();

  const fileChangeHandeller = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const submitHandeler = (data, e) => {
    console.log("Hitted");
    if (["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      console.log("Admin : ", data);
      const formData = new FormData();

      formData.append("file", file);
      formData.append("sectionInfo", JSON.stringify(data));

      fetch(`https://aka-coin-blockchain.herokuapp.com/updateData`, {
        method: "PATCH",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.errors) {
            alert("Content Change Sucessfully");
          }
        })
        .catch((error) => {
          console.log("Error Occured in adding product");
          console.error(error);
        });
    } else {
      alert("File type jpeg, png, jpg is must required");
    }
    // e.target.reset();
  };
  let buttonPosition = details.length > 6 ? "static" : "fixed";

  return (
    <div className="px-5 mx-5">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={handleSubmit(submitHandeler)}
          className="form-group d-flex mt-3  mx-3"
        >
          <input
            {...register("Title")}
            name="Title"
            placeholder="Description"
            id="description"
            className="form-control col-5 rounded-0"
          />

          <input
            {...register("Description")}
            placeholder="Description"
            id="Description"
            name="Description"
            className="form-control col-4 rounded-0"
          />
          <input
            onChange={fileChangeHandeller}
            accept="image/*"
            className="form-control"
            type="file"
            id="formFile"
          />
          <button
            type="submit"
            style={{ position: buttonPosition, left: "20px", bottom: "20px" }}
            className="btn btn-primary btn-brand"
          >
            Add Full Description
          </button>
        </form>

        <div></div>
      </Modal>
    </div>
  );
};

export default DetailsModal;
