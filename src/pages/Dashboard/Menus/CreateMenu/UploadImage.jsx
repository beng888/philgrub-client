import React from "react";

import API from "../../../../utils/API";

const UploadImage = ({ setMenuData, setLoading, image, loading }) => {
  //* DELETE IMAGE *\\
  const handleDestroy = async () => {
    setLoading(true);

    await API.post(`${process.env.REACT_APP_URL}/fileupload/destroy`, {
      image,
    })
      .then((res) => console.log("res", res.data))
      .catch((error) => console.error(error));
    setMenuData((prevState) => ({
      ...prevState,
      image: null,
    }));
    setLoading(false);
  };

  //* ASSIGN IMAGE *\\
  const handleFileChange = async (e) => {
    const fileData = e.target.files[0];
    if (fileData) {
      setLoading(true);
    }

    console.log(fileData);
    const formdata = new FormData();

    formdata.append("image", fileData);

    await API.post("/fileupload/image", formdata)
      .then((res) => {
        setMenuData((prevState) => ({
          ...prevState,
          image: res.data,
        }));
        console.log("res", res.data);
      })
      .catch((error) => console.error(error));
    // setFileData(target.files[0]);
    // setFile(target.value);
    setLoading(false);
  };

  return (
    <div className="w-full h-auto px-4 sm:px-12 md:px-24 center-content m-auto">
      <div className="relative">
        <label htmlFor="upload-file" className="cursor-pointer">
          {" "}
          {loading ? (
            <img
              src="/images/preloader.gif"
              alt="loading-gif"
              className="w-1/2 m-auto pt-12"
            />
          ) : (
            <div>
              <img
                src={image ? image.image_path : "/images/select.webp"}
                alt="fileimage"
              />{" "}
              {!image && (
                <h5 className="text-secondary text-center">Select an Image</h5>
              )}
            </div>
          )}{" "}
        </label>{" "}
        <b
          className={`${
            !image || loading === true ? "hidden" : "block"
          } absolute top-4 right-6 z-10`}
          onClick={handleDestroy}
        >
          <i className="fas fa-times-circle"></i>
        </b>
        <input
          type="file"
          //   value={menuData.image ? menuData.image : ""}
          id="upload-file"
          name="file"
          accept="image/*"
          onChange={handleFileChange}
          multiple={false}
          className="opacity-0 absolute w-full"
        />
      </div>
    </div>
  );
};

export default UploadImage;
