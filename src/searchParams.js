import { useState } from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState("London, UK");

  function updateLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
          id="location"
          onChange={updateLocation}
          value={location}
          placeholder="location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
    )
};

export default SearchParams;
