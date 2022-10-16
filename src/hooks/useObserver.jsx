import { useEffect } from 'react';

// https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/
// https://davidwalsh.name/detect-sticky
// Provide comments
// Control stick-search with lifted state
const useObserver = (ref, setState, state) => {
  useEffect(() => {
    const observerCallback = entriesList => {
      const entry = entriesList[0];
      entry.target.classList.toggle(
        'sticky-search',
        !entry.isIntersecting
      );
      entry.isIntersecting ? setState(true) : setState(false);
    };

    const oberverOptions = {
      root: null,
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      oberverOptions
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [state]);
};

export default useObserver;
