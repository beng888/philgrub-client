import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteMenu } from "../../../../actions/menu";
import { setCurrentId } from "../../../../actions/variables";
import Button from "../../../../components/Button";

const ManageMenu = () => {
  const menus = useSelector((state) => state.menus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  console.log(id);

  const [loading, setLoading] = useState(null);

  const deleteItem = () => {
    dispatch(deleteMenu(id));
    setLoading(id);
    setId(null);
    setShow(false);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 ">
      {menus.map((m) => (
        <div
          key={m._id}
          className="relative overflow-hidden group cursor-pointer"
        >
          <img src={m.image.image_path} alt={m.image.originalname} />
          <div className="flex flex-col justify-between p-4 items-center text-center absolute text-white inset-0 transform trans-out translate-y-full group-hover:-translate-y-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 tracking-widest">
            {loading === m._id ? (
              <img src="/images/preloader.gif" alt="loader" />
            ) : (
              <>
                <div className="text-xs">
                  <p>{m.title}</p>
                  <p>
                    {m.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    .00 ₱
                  </p>
                </div>
                <div className="flex justify-between w-full">
                  <i
                    onClick={() => {
                      // setCurrentId(m._id);
                      dispatch(setCurrentId(m._id));
                      navigate("/dashboard/admin/create");
                    }}
                    className="fas fa-edit"
                    title="Edit"
                  />
                  <i
                    onClick={() => {
                      navigate(`/categories/${m.category}/${m.title}`);
                    }}
                    className="fas fa-info-circle"
                    title="Info"
                  />
                  <i
                    onClick={() => {
                      setShow(true);
                      setId(m._id);
                    }}
                    className="fas fa-trash-alt"
                    title="Delete"
                  />
                </div>{" "}
              </>
            )}
          </div>
        </div>
      ))}
      <div
        className={`${
          show ? "fixed" : "hidden"
        } inset-0 bg-black bg-opacity-30`}
        onClick={() => setShow(false)}
      />
      <div
        className={` ${
          show ? "fixed" : "hidden"
        } inset-0 bg-gray-100 w-fit h-fit m-auto p-6 rounded-xl border-gray-400 border-4 z-50`}
      >
        <span className="absolute right-3 top-1">
          <i className="fas fa-window-close" onClick={() => setShow(false)} />
        </span>
        <p className="pb-3"> Are you sure to delete this Item?</p>
        <div className="flex justify-around">
          <Button btn="btn-primary-sm" onClick={() => setShow(false)}>
            no
          </Button>
          <Button btn="btn-secondary-sm" onClick={deleteItem}>
            yes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageMenu;
