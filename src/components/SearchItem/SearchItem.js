import './SearchItem.css';

function SearchItem(props) {
  return (
    <div>
      <div className="Search-Item">
        <img src="https://placehold.co/300" alt="Search Item" {...props.url} />
      </div>
    </div>
  );
}

export default SearchItem;
