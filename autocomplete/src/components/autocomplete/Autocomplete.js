import { useCallback, useEffect, useState } from "react";
import "./autocomplete.css";
import _ from "lodash";
/* 
  server/client side autocomplete


*/
//helper function
const searchAPI = async (keyword, limit = 10) => {
    return fetch(
        `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}`
    )
        .then((res) => res.json())
        .then((data) =>
            data.products.map((item) => ({ id: item.id, title: item.title }))
        );
};

/* 
  debouncing
  1. each action, start a timer, 
  2. if another action happens within the timer period, then remove the old and start a new timer
  3. if nothing happens during the timer period, then fire callback

  throttling
  1. start a timer, on first action
  2. if action happens within the timer period, it's not going to restart the timer
  3. fire callback on the timer end

  function get redeclared on each render
  make the function survive render

  variable get redeclared on each render
  variable survive the render: ref, useMemo

  closure
    function inside another function 
    child function have access variable declared in parent function
*/

export default function Autocomplete() {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const memodDebouncedSearch = useCallback(
        _.debounce(async (keyword, limit) => {
            if (keyword.trim() === "") {
                setSuggestions([]);
            } else {
                const list = await searchAPI(keyword, limit);
                setSuggestions(list);
            }
        }, 2000),
        []
    );

    useEffect(() => {
        memodDebouncedSearch(input);
    }, [input]);

    const func2 = () => {
        console.log("1111");
    };

    return (
        <div className="autocomplete">
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button>search</button>
            {suggestions.length !== 0 && (
                <div className="suggestions">
                    <ul>
                        {suggestions.map((item) => {
                            return <li key={item.id}>{item.title}</li>;
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}
