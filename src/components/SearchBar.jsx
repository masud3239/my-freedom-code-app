

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {

  return (
    <form >
      <input className="border-2 rounded-2xl p-2 mt-2"
      type='text'
      value={filterText}
      placeholder="Search..."
      onChange={(e)=> onFilterTextChange(e.target.value)}
      />
      <label>
        <input 
        
        type="checkbox" 
        checked={inStockOnly}
        onChange={(e) =>
          onInStockOnlyChange(e.target.checked)}
        />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;