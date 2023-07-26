import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://recruit-pro-server-shafaet-j.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <section className=" py-20 container mx-auto px-4">
      <h1 className=" text-4xl font-bold mb-10">Popular Job Categories</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </section>
  );
};

export default JobCategory;
