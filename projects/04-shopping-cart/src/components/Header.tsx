import Filters from "./Filters";

const Header = ({ changeFilters }: any) => {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters onChange={changeFilters} />
    </header>
  );
};
export default Header;
