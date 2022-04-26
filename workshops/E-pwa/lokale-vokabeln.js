// override existing function to load from persistent store
window.ladeMeineVokabeln = (listenname) => {
  if (listenname && localStorage.getItem(listenname)) {
    return JSON.parse(localStorage.getItem(listenname))
  }

  return initialeVokabeln || [];
};