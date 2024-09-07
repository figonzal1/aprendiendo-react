import { createContext, useState } from "react";

export interface FilterType {
  category: string;
  minPrice: number;
}

interface FilterContextProps {
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>; // Permite funciones y objetos
}

export const FilterContext = createContext<FilterContextProps | undefined>(
  undefined
);

export const FilterProvider = ({ children }: any) => {
  const [filters, setFilters] = useState<FilterType>({
    category: "all",
    minPrice: 0,
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
