export const updateCart = (cart, setCart, b, e) => {
  if (!cart.some((current) => current._id === b._id)) {
    const newItem = Object.assign(b, { quantity: 1 });
    setCart([...cart, newItem]);
  } else if (e) {
    const newQuantity = parseInt(e.target.value);
    const newCart = cart.map((item) =>
      item._id === b._id ? { ...item, quantity: newQuantity } : item
    );
    setCart(newCart);
  } else {
    setCart(cart.filter((current) => current._id !== b._id));
  }
};

export const groupBy = (objectArray, property) => {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

export const registerObserver = (ref, setShowImage) => {
  const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      setShowImage(true);
      observer.disconnect();
    });
  });
  observer.observe(ref);
};
