import { useState, useEffect } from 'react';

export function useTypewriter(text, speed = 100) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayedText === text) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // pause before deleting
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [text, displayedText, isDeleting, speed]);

  return { displayedText, isDeleting };
}
