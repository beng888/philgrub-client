import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { sitemap } from "../../static";

const SiteMap = () => {
  const menus = useSelector((state) => state.menus);
  return (
    <div className="min-h-screen pt-48 pb-24 px-6 sm:pl-12 lg:pl-24 xl:pl-48 flex flex-col">
      <h1>SiteMap</h1>
      <div className="mt-12 flex flex-col">
        <h3 className="text-primary">Pages</h3>
        {sitemap.map((s, i) => (
          <Link
            to={s.link}
            key={i}
            className="text-xl leading-loose hov-link-text3 w-fit"
          >
            {s.name}
          </Link>
        ))}
      </div>
      <div className="mt-12 flex flex-col">
        <h3 className="text-primary">Products</h3>
        {menus.map((m) => (
          <Link
            to={`/categories/${m.category}/${m.title}`}
            key={m._id}
            className="text-xl leading-loose hov-link-text3 w-fit"
          >
            {m.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SiteMap;
