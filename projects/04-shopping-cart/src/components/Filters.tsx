import { useId, useState } from "react";
import "./Filters.css";
import useFilters from "../hooks/useFilters";
import { FilterType } from "../context/filters";

const Filters = () => {
  const { setFilters } = useFilters();

  const [minPrice, setMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event: any) => {
    const value = parseFloat(event.target.value); // Convertir a número

    setMinPrice(value);

    setFilters((prevState: FilterType) => ({
      ...prevState,
      minPrice: value,
    }));
  };

  const handleChangeCategory = (event: any) => {
    setFilters((prevState: any) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio mínimo</label>
        <input
          type="range"
          name="price"
          id={minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select
          name="category"
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
