import { useState, useEffect } from 'react';
import Checkboxes from './Checkboxes/checkboxes';

import {
  data,
  listCheckboxesRating,
  listCheckboxesGenre,
  category,
  price,
} from './data';

const App = () => {
  //main array
  const [movies, setMovies] = useState(data);

  //evaluation array
  const [selected, setSelected] = useState({
    rating: [],
    genre: [],
    category: [],
    price: [],
  });

  /**
   * This function will perform the filtration process based on the key value.
   *
   * @param {number[]} checkboxState - It will take the final state of checkboxes
   * @param {string} key - It will help us to determine the type of filtration
   */
  const handleFilters = (checkboxState, key) => {
    const logic = 'AND';
    //This is how we filter based on category, it holds the array value
    //checkboxState gives the index of the newFiltered state using indexOf
    const newFilters = { ...selected };
    // key is the array index from the checkbox state
    newFilters[key] = checkboxState;

    const hasRatings = newFilters.rating.length > 0;
    const hasGenres = newFilters.genre.length > 0;
    const hasCategory = newFilters.category.length > 0;
    const hasPrice = newFilters.price.length > 0;
    //advanced pattern to ensure strict criteria
    const hasFilters = hasRatings || hasGenres || hasCategory || hasPrice;
    const filterRating = (module) =>
      newFilters.rating.includes(0) ||
      newFilters.rating.includes(module.rating);
    const filterGenre = (module) =>
      newFilters.genre.includes('') || newFilters.genre.includes(module.genre);

    const filterCategory = (module) =>
      newFilters.category.includes('') ||
      newFilters.category.includes(module.category);

    const filterPrice = (module) =>
      newFilters.price.includes('') || newFilters.price.includes(module.price);

    //this filteredMovies simply extracts the movies based on the categories
    const filteredMovies = data.filter(
      logic === 'OR'
        ? (m) =>
            !hasFilters ||
            filterRating(m) ||
            filterGenre(m) ||
            filterCategory(m) ||
            filterPrice(m) // OR
        : (m) =>
            !hasFilters ||
            ((!hasRatings || filterRating(m)) &&
              (!hasPrice || filterPrice(m)) &&
              (!hasGenres || filterGenre(m)) &&
              (!hasCategory || filterCategory(m))) // AND
    );

    setMovies(filteredMovies);
    setSelected(newFilters);
  };

  let [query, setQuery] = useState('');

  let [sortBy, setSortBy] = useState('title');
  let [orderBy, setOrderBy] = useState('asc');

  const movieArray = [...movies];
  const filteredAppointments = movieArray.sort((a, b) => {
    let order = orderBy === 'asc' ? 1 : -1;

    return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
      ? -1 * order
      : 1 * order;
  });

  const orderByChange = () => {
    setOrderBy('asc');
  };
  const onOrderByDesc = () => {
    setOrderBy('desc');
  };

  return (
    <div>
      <button onClick={orderByChange}>SORT BY TITLE ASC</button>
      <button onClick={onOrderByDesc}>SORT BY TITLE DESC</button>
      <button>SORT BY Category</button>

      {filteredAppointments.map((movie) => (
        <div key={movie.id}>
          <div>Name: {movie.title}</div>
          <div>Genre :{movie.genre}</div>
          <div>Rating: {movie.rating}</div>
          <div>Category: {movie.category}</div>
          <div>Price: {movie.price}</div>

          <hr />
        </div>
      ))}

      <div className="row">
        <div className="col">
          <h1>Filter by Rating</h1>
          <Checkboxes
            list={listCheckboxesRating}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'rating')
            }
          />
        </div>

        <div className="col">
          <h1>Filter by Genre</h1>
          <Checkboxes
            list={listCheckboxesGenre}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'genre')
            }
          />
        </div>
        <div className="col">
          <h1>Filter by Genre</h1>
          <Checkboxes
            list={category}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'category')
            }
          />
        </div>

        <div className="col">
          <h1>Filter by Price</h1>
          <Checkboxes
            list={price}
            handleFilters={(checkboxState) =>
              handleFilters(checkboxState, 'price')
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
