export default [
    {
        "id": 1,
        "name": "Brown Shoes",
        "description": "A brown shirt made from fine cotton.",
        "price": {
          "base": "USD",
          "amount": 50
        },
        "relatedProducts": [2]
      },
      {
        "id": 2,
        "name": "Green Pants",
        "description": "A super slick pair of green pants, hand crafted by artisan clothmakers in the Amazon.",
        "price": {
          "base": "USD",
          "amount": 30
        },
        "relatedProducts": [1, 4]
      },
      {
        "id": 3,
        "name": "Green Pants",
        "description": "A super slick pair of green pants, hand crafted by artisan clothmakers in the Amazon.",
        "price": {
          "base": "USD",
          "amount": 25
        },
        "relatedProducts": [1, 4]
      },
      {
        "id": 4,
        "name": "White Shirt",
        "description": "A pristine white shirt, sure to look great with any outfit.",
        "price": {
          "base": "USD",
          "amount": 20
        },
        "relatedProducts": [3, 5]
      },
      {
        "id": 5,
        "name": "Blue Shirt",
        "description": "You haven't seen a blue shirt like this before.",
        "price": {
          "base": "CNY",
          "amount": 300
        },
        "relatedProducts": [4, 1]
      }
]