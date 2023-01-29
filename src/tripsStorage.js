


// export async function getTrips() {
//   let trips = await localforage.getItem("trips");
//   if (!trips) {
//     trips = [];
//   }
//   console.log(trips);
//   return trips;
// }

// export function createTrip(trip) {
//   // fakeNetwork();
//   // let id = Math.random().toString(36).substring(2, 9);
//   // let trip = { id, createdAt: Date.now() };
//   let trips = getTrips();
//   trips.push(trip);
//   console.log(trips)
//   set(trips);
//   console.log(`createTrip Worked: ${trip}`);
//   return trip;
// }

// export function getTrip(id) {
//   // await fakeNetwork(`trip:${id}`);
//   let trips = localforage.getItem("trips");
//   let trip = trips.find(trip => trip.id === id);
//   return trip ?? null;
// }

// // export function updateTrip(id, payload) {
// //   // await fakeNetwork();
// //   let trips = localforage.getItem("trips");
// //   let trip = trips.find(trip => trip.id === id);
// //   if (!trip) {
// //     throw new Error(`No contact find for id ${id}`)
// //   }
// //   Object.assign(trip, payload);
// //   set(trip);
// //   return trip;
// // }

// export function deleteTrip(id) {
//   let trips = localforage.getItem("trips");
//   let index = trips.findIndex(trip => trip.id === id);
//   if (index > -1) {
//     trips.splice(index, 1);
//     set(trips);
//     return true;
//   }
//   return false;
// }

// export function set(trip) {
//   const trips = localforage.getItem("trips");
//   console.log(trips)
//   if (trips.length === 0) return localforage.setItem("trips", [trip]);

//   return localforage.setItem("trips", [...trips, trip]);
// }

// // fake a cache so we don't slow down stuff we've already seen
// // let fakeCache = {};

// // async function fakeNetwork(key) {
// //   if (!key) {
// //     fakeCache = {};
// //   }

// //   if (fakeCache[key]) {
// //     return;
// //   }

// //   fakeCache[key] = true;
// //   return new Promise(res => {
// //     setTimeout(res, Math.random() * 800);
// //   });
// // }