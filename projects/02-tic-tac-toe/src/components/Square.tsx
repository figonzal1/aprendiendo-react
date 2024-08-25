const Square = ({
  children,
  isSelected,
  updateBoard,
  index,
}: {
  children: any;
  isSelected: boolean;
  updateBoard: any;
  index: number;
}) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default Square;
