"use client";

export default function ScrollToTop() {
  setTimeout(() => {
    window.document.body.scrollIntoView();
  }, 10);
  return null;
}
