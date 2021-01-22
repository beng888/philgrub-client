import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createMenu, updateMenu } from "../../../../actions/menu";
import { setCurrentId } from "../../../../actions/variables";
import Button from "../../../../components/Button";
import UploadImage from "./UploadImage";

import FormField from "../../../../components/FormField";
import Dropdown from "./Dropdown";
import { SET_ERRORS } from "../../../../actions/actionTypes";

const CreateMenu = () => {
  const { errors } = useSelector((state) => state.errors);
  const { currentId } = useSelector((state) => state.variables);
  const menus = useSelector((state) => state.menus);
  const menu = useSelector((state) =>
    currentId ? state.menus.find((m) => m._id === currentId) : null
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryOptions = ["prepared", "bistro"];
  const servingsOptions = ["For 1 Person", "For 2 People", "For 3 People"];

  const [loading, setLoading] = useState(false);
  const [menuData, setMenuData] = useState({
    title: "",
    category: "prepared",
    servings: "For 1 Person",
    price: "",
    image: null,
    ingredients: "",
    contain: "",
    mayContain: "",
    captions: [],
  });

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      if (menu) setMenuData(menu);
      isFirstRun.current = false;
      return;
    }
    dispatch(setCurrentId(null));
    navigate("/dashboard/admin");
  }, [menus]);

  const onChange = (e) => {
    setMenuData({
      ...menuData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: SET_ERRORS, payload: null });

    if (currentId) {
      dispatch(updateMenu(currentId, menuData));
    } else {
      dispatch(createMenu(menuData));
    }
    errors !== null ? console.log("ERRORS!!!") : console.log("No Errors!");

    // errors === null && navigate("/dashboard/menus");
  };

  const setCaption = (cap) => {
    setMenuData((prevState) => ({
      ...prevState,
      captions: cap,
    }));
  };

  return (
    <div className="px-8 sm:px-16 lg:px-32 w-full">
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="whitespace-nowrap"
      >
        <UploadImage
          loading={loading}
          image={menuData.image}
          setMenuData={setMenuData}
          setLoading={setLoading}
        />
        <h5 className="text-red-600 text-center"> {errors && errors.image}</h5>
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            value={menuData.title}
            onChange={onChange}
            type={"text"}
            name={"title"}
            required
          />
          <FormField
            value={menuData.price}
            onChange={onChange}
            type={"number"}
            name={"price"}
            label={"price (₱)"}
            required
          />
          <FormField
            value={menuData.servings}
            onChange={onChange}
            type={"select"}
            name={"servings"}
            required
            options={servingsOptions}
          />
          <FormField
            value={menuData.category}
            onChange={onChange}
            type={"select"}
            name={"category"}
            required
            options={categoryOptions}
          />
        </div>
        <FormField
          value={menuData.ingredients}
          onChange={onChange}
          type={"textarea"}
          name={"ingredients"}
          required
        />
        <FormField
          value={menuData.contain}
          onChange={onChange}
          type={"text"}
          name={"contain"}
        />
        <FormField
          value={menuData.mayContain}
          onChange={onChange}
          type={"text"}
          name={"mayContain"}
        />
        <h5 className="text-secondary py-2">Captions</h5>
        <Dropdown setData={setCaption} menu={menu} />
        <h5 className="text-red-600"> {errors && errors.captions}</h5>
        <br />
        <Button btn="btn-primary-sm">Submit Menu</Button>
      </form>
      <Button
        btn="btn-secondary-sm"
        onClick={() =>
          setMenuData({
            title: "",
            category: "prepared",
            servings: "For 1 Person",
            price: "",
            image: null,
            ingredients: "",
            contain: "",
            mayContain: "",
            captions: [],
          })
        }
      >
        clear
      </Button>
    </div>
  );
};

export default CreateMenu;
