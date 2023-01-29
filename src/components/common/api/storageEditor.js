let newStorage = []

const storageEditor = () => {
  let storage = JSON.parse(localStorage.getItem('localTrips'));
  console.log(storage);
  // const storageArr = [storage[0], storage[1], storage[2]];
  // storageArr.map(item => {
  //   delete item.place;
  //   item.seats = 2;
  //   return true
  // });
  newStorage = storage.map((item, index) => {
    if (index === 0 || index === 1 || index === 2) {
      delete item.place;
      item.seats = "2";

    }
    return item;
  })

  console.log(newStorage);

  localStorage.setItem('localOffers', JSON.stringify(newStorage));
}

export default storageEditor;