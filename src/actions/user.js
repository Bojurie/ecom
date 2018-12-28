import {
    SET_USER_PURCHASES
}from './types';

export function fetchUserPurchases(){
    return({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.00,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Bojurie Rogers-Wright',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'A0048266552',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Chester Brown',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 22.46,
                orderNumber: 'A0048998878',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Sam Smith',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total:15.70,
                orderNumber: 'A004826489',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Idris Rogers-Wright',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 12.40,
                orderNumber: 'A0048267832',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Kamen Rogers-Wright',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 35.40,
                orderNumber: 'A004822345',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Ariana Rogers-Wright',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 35.40,
                orderNumber: 'A004822333',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Nala Wright',
                    shippingAddress: '34 east State Street'
                }
            },
            {
                _id: 7,
                total: 39.91,
                orderNumber: 'A004820098',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Paul Abban',
                    shippingAddress: '1234 West State Street'
                }
            },   
        ]
    })
}