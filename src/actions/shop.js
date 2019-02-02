import {
  SET_SHOP_CATEGORIES,
  SET_NAVBAR_LINKS,
  SET_SHOP_PRODUCTS,
  FILTER_PRODUCTS_WITH_CATEGORY_ID
} from './types';

export function filterProductsWithCategoryId(_id) {
  return ({
      type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
      payload: _id
  })
}

export function fetchShopCategories() {
  return ({
      type: SET_SHOP_CATEGORIES,
      payload: [
          {
              _id: 0,
              title: 'All'
          },
          {
              _id: 1,
              title: 'JavaScript'
          },
          {
              _id: 2,
              title: 'UI/UX'
          },
          {
              _id: 3,
              title: 'Linux'
          },
          {
              _id: 4,
              title: 'Python'
          },
          {
              _id: 5,
              title: 'UML'
          },
          {
              _id: 6,
              title: 'Ruby'
          },
      ]

  })
}


export function fetchShopProducts() {
  return ({
      type: SET_SHOP_PRODUCTS,
      payload: [
          {
              _id: 0,
              title: 'JavaScript in the Browser',
              description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm',
              price: 1.99,
              belongsTo: [0, 1]
          
          },
          {
              _id: 1,
              title: 'Graph Database',
              description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm',
              price: 2.99,
              belongsTo: [0, 6]
             
          },
          {
              _id: 2,
              title: 'Full Stack Development',
              description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm',
              price: 4.78,
              belongsTo: [0, 1, 4]
             
          },
          {
              _id: 3,
              title: 'JavaScript Development',
              description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm',
              price: 3.49,
              belongsTo: [0, 1]
            
          },
          {
              _id: 4,
              title: 'User Interface Design',
              description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm',
              price: 2.09,
              belongsTo: [0, 2]
          
          },
          {
              _id: 5,
              title: 'User Experience Design',
              description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm',
              price: 3.99,
              belongsTo: [0, 1]
              
          },
          {
              _id: 6,
              title: 'Advanced OOP',
              description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm',
              price: 5.99,
              belongsTo: [0, 6]
           
          },
      ]
  })
}