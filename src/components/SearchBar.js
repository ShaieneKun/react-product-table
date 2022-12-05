export default function SearchBar({ searchText, inStockOnly, setSearchText, setInStockOnly }) {
  function changeSearchText(event) {
    setSearchText(event.target.value)
  }

  function changeInStockOnly(event) {
    setInStockOnly(event.target.checked)
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={changeSearchText}
          value={searchText}
          placeholder="Search..."
        />
      </div>
      <div>
        <input
          type="checkbox"
          onChange={changeInStockOnly}
          checked={inStockOnly}
          id="showInStockCheck"
        />
        <label htmlFor="showInStockCheck">
          Only show products in stock
        </label>
      </div>
    </>
  )
}