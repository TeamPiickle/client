import { useEffect, useState } from "react";

export function useDebounce<T>(defaultValue: T) {
  // debouncedQuery :: 200ms 동안 모인 글자, 최종적으로 사용될 변수
  const [debouncedQuery, setDebouncedQuery] = useState<T>(defaultValue);
  // query :: input value로 사용되면서 변화가 감지될 state
  const [query, setQuery] = useState<T>(defaultValue);

  useEffect(() => {
    const debouncing = setTimeout(() => {
      return setDebouncedQuery(query);
    }, 1500);

    return () => clearTimeout(debouncing);
  }, [query]);

  return { query, setQuery, debouncedQuery };
}
