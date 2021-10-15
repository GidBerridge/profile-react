import { useState } from 'react';

const SearchParams = () => {

  for (let i = 0; i < Math.floor(Math.random()* 3); i++) {
    const [animal, setAnimal] = useState("dog");
  }

  const [location, setLocation] = useState("London, UK");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
          id="location"
          onChange= {(e) => setLocation(e.target.value)}
          value={location}
          placeholder="location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
    )
};

export default SearchParams;
