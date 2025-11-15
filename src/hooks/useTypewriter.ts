import { useState, useEffect } from 'react';

export function useTypewriter(roles, speed = 100, pause = 1500) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const currentRole = roles[roleIndex] ?? '';

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    let timer;

    // Typing forward
    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, speed);
    }
    // Pause at full word
    else if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    }
    // Deleting backward
    else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, Math.max(50, speed / 2));
    }
    // Move to next role
    else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole, roles.length, speed, pause]);

  // Reset safely if the roles list changes length
  useEffect(() => {
    setDisplayedText('');
    setIsDeleting(false);
    setRoleIndex(0);
  }, [roles.length]);

  return displayedText;
}
