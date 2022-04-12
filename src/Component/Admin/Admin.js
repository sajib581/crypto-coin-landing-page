import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import '../../styles/Admin.css';
import Nav from "../Nav";
Modal.setAppElement("#root");

const Admin = () => {
  const [file, setFile] = useState(0);
  const [headerData, setHeaderData] = useState({})
  const [currentData, setCurrentData] = useState({})
  const {    register,    handleSubmit,    watch,    formState: { errors },  } = useForm();
  
  useEffect(()=>{
    fetch('http://localhost:5000/getHeader')
    .then(res => res.json() )
    .then(data =>{
      setHeaderData(data)
      setCurrentData(data)
    })
  }, [])

  const fileChangeHandeller = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const submitHandeler = (data, e) => {
    const goForNext = data.title && data.description && file;

    if (goForNext) {
      if (["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
        const formData = new FormData();

        formData.append("file", file);
        formData.append("sectionInfo", JSON.stringify(data));

        fetch(`http://localhost:5000/addData`, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.success ) {
              setHeaderData({
                ...headerData,
                title:data.title,
                description : data.description,
                img : result.img
              })
              setCurrentData({
                title:data.title,
                description : data.description,
                img : result.img
              })
              alert("Content added Sucessfully");              
              // history.push('/')
            }
          })
          .catch((error) => {
            console.log("Error Occured in adding Image");
            console.error(error);
          });
      } else {
        alert("File type jpeg, png, jpg is must required");
      }
    } else {
      alert("Fillup all fields");
    }
  };

  const handelSubmit = handleSubmit(submitHandeler);

  //Update Section
  function updateTitle(e){
    setHeaderData({...headerData, title: e.target.value})
  }
  function updateDescription(e){
    setHeaderData({...headerData, description: e.target.value})
  }
  
  function updateHandler(e, isDelete){
    const caseName = e.target.name

    fetch(`http://localhost:5000/editTitleDescription`, {
          method: "PATCH",
          headers: {'Content-Type': "application/json"},
          body: JSON.stringify({id : headerData._id, [caseName]: headerData[caseName], isDelete })
        })
          .then((response) => response.json())
          .then(data => {
            if(data){              
              setHeaderData({
                ...headerData, 
                [caseName] : data[caseName]
              })
              setCurrentData({...headerData})
              alert(`${caseName} Update Successfully`)
            }
          })
  }
  const imageUpdateHandeler = () => {
    if (["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      const formData = new FormData();

        formData.append("file", file);
        formData.append("id", JSON.stringify({id : headerData._id}));

      fetch(`http://localhost:5000/updateImage`, {
        method: "PATCH",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.errors) {
            setHeaderData({...headerData, img: data.updatedImage})
            alert("Product added Sucessfully");            
          }
        })
        .catch((error) => {
          console.log("Error Occured in update Image");
          console.error(error);
        });
    } else {
      alert("File type jpeg, png, jpg is must required");
    }
  }

  return (
    <div>
      <Nav />
      <h1 className="text-center">Admin Page</h1>
      <div>
        <div className="container-fluid">
          <div className="mx-md-5 p-4 pr-3">
            <form style={{ width: "100%" }}>
              <div className="row">
                <div className="form-group col-6">
                  <label>Title</label>
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                    placeholder="title"
                  />
                  <span className="text-danger">
                    {errors.name && "This Field is required"}
                  </span>
                </div>

                <div className="form-group col-6">
                  <label>Description</label>
                  <input
                    {...register("description", { required: true })}
                    type="text"
                    name="description"
                    className="form-control"
                    id="description"
                    aria-describedby="emailHelp"
                    placeholder="Enter Description"
                  />
                  <span className="text-danger">
                    {errors.quantity && "This Field is required"}
                  </span>
                </div>

                <div className="mb-3 col-6">
                  <label htmlFor="formFile" className="form-label">
                    Set Image
                  </label>
                  <input
                    onChange={fileChangeHandeller}
                    accept="image/*"
                    className="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
              <button onClick={handelSubmit} className="btn btn-info px-5 py-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* EDIT SECTION */}
      <div className="ml-5 pl-5 edit">
      <h3>Title  :   </h3>  <input onChange={updateTitle}  type="text" value={headerData.title} /> {currentData.title !== headerData.title 
      && <><button onClick={updateHandler} className="btn btn-primary" name="title">Update Title</button>
                      <button onClick={(e)=> updateHandler(e, true)} className="btn btn-danger ml-3" name="title">Delete Title</button></>
      } <br />
      <h3>Description : </h3> <input onChange={updateDescription} type="text" value={headerData.description} /> {currentData.description !== headerData.description && <>
            <button onClick={updateHandler} className="btn btn-primary" name="description">Update Description</button>
            <button onClick={(e)=> updateHandler(e, true)} className="btn btn-danger ml-3" name="description">Delete Description</button> </> } <br />
       <div className="d-flex align-items-center">
       <h2 className="my-auto">Image</h2> <img src={headerData.img} alt="" /> 
       <input
                    onChange={fileChangeHandeller}
                    accept="image/*"
                    className="form-control my-auto w-25"   
                    type="file"
                  />
          <button onClick={imageUpdateHandeler} className="btn btn-primary ml-3 cng">Change Image</button>
       </div>
       
      </div>
    </div>
  );
};

export default Admin;
