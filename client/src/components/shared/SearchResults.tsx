import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Card from "./Card";
import { useSelector } from "react-redux";
import { userInfo } from "os";
import style from "./styles/SearchResults.module.css";

const SearchResults = () => {
  const { search } = useLocation();
  const searchquery = new URLSearchParams(search);
  const query = searchquery.toString().substring(1);
  const [mergedArray, setMergedArray] = useState([]);
  const [filterContents, setFilterContents] = useState([]);

  // const { state, dispatch: ctxDispatch } = useContext(Store);
  const contents = useSelector((state) => state.contents.contents);

  useEffect(() => {
  if(contents) {
  const mergedArrayResult = Object.values(contents).reduce((result, array) => {
    array.forEach((content) => {
      if (!result.some((item) => item._id === content._id)) {
        result.push(content);
      }
    });
    return result;
  }, [])

  setMergedArray(mergedArrayResult);
}
  }, [contents])


  useEffect(() => {
    
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
    <div className={style.resultsTitle}> 
      <h1>Showing results for: "{query}"</h1>
      <div className="grid-container">
        {filterContents &&
          filterContents.map((content) => (
            <div className="grid-item">
              <Card content={content} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
