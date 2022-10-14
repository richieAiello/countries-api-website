import { useEffect } from 'react';

// https://css-tricks.com/how-to-detect-when-a-sticky-element-gets-pinned/
// https://davidwalsh.name/detect-sticky
// Provide comments
const useObserver = ref => {
  useEffect(() => {
    const observerCallback = entriesList => {
      const entry = entriesList[0];
      entry.target.classList.toggle(
        'sticky-search',
        !entry.isIntersecting
      );
      console.log(entry.isIntersecting);
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
  }, []);
};

export default useObserver;
