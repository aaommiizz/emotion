'use strict';

FaceDections.prototype.addFace = function(data) {
    var collection = firebase.firestore().collection('Face_Detections');
    return collection.add(data);
};

FaceDections.prototype.getAllFace = function(renderer) {
  var query = firebase.firestore()
  .collection('Face_Detections')
//   .orderBy('avgRating', 'desc')
//   .limit(50);

this.getDocumentsInQuery(query, renderer);
};


FriendlyEats.prototype.getDocumentsInQuery = function(query, renderer) {
    query.onSnapshot(function(snapshot) {
        if (!snapshot.size) return renderer.empty(); // Display "There are no restaurants".
    
        snapshot.docChanges().forEach(function(change) {
          if (change.type === 'removed') {
            renderer.remove(change.doc);
          } else {
            renderer.display(change.doc);
          }
        });
      });
};

FriendlyEats.prototype.getFace = function(id) {
    return firebase.firestore().collection('Face_Detections').doc(id).get();
};

// FriendlyEats.prototype.getFilteredRestaurants = function(filters, renderer) {
//     var query = firebase.firestore().collection('restaurants');

//     if (filters.category !== 'Any') {
//       query = query.where('category', '==', filters.category);
//     }
  
//     if (filters.city !== 'Any') {
//       query = query.where('city', '==', filters.city);
//     }
  
//     if (filters.price !== 'Any') {
//       query = query.where('price', '==', filters.price.length);
//     }
  
//     if (filters.sort === 'Rating') {
//       query = query.orderBy('avgRating', 'desc');
//     } else if (filters.sort === 'Reviews') {
//       query = query.orderBy('numRatings', 'desc');
//     }
  
//     this.getDocumentsInQuery(query, renderer);
// };

// FriendlyEats.prototype.addRating = function(restaurantID, rating) {
//   /*
//     TODO: Retrieve add a rating to a restaurant
//   */
// };

