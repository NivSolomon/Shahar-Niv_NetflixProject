import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Store } from "../../store";
import Card from "./Card";

const SearchResults = () => {
  const { search } = useLocation();
  const searchquery = new URLSearchParams(search);
  const query = searchquery.toString().substring(1);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { contents } = state;

  const mergedArray = Object.values(contents).reduce(
    (result, array) => {
      array.forEach(content => {
        // Check if the content already exists in the mergedArray
        if (!result.some(item => item._id === content._id)) {
          result.push(content);
        }
      });
      return result;
    },
    []
  );

  const [filterContents, setFilterContents] = useState([]);

  useEffect(() => {
    console.log(mergedArray);
    if (query) {
      // Filter contents based on the search query
      const filteredContents = mergedArray.filter((content) =>
        content.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilterContents(filteredContents);
    } else {
      setFilterContents([]);
    }
  }, [query, contents]);

  return (
    <div>
      <h1>Showing results for: "{query}"</h1>
      <div className="grid-container">
        {filterContents &&
          filterContents.map((content) => <div className="grid-item"><Card content={content}/></div>)}
      </div>
    </div>
  );
};

export default SearchResults;
