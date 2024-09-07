import { useContext } from "react";
import { FilterContext } from "../context/filterProvider";

const useFilters = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }

  const { filters, setFilters } = context;

  const filterProducts = (products: any) => {
    return products.filter((product: any) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
};

export default useFilters;
