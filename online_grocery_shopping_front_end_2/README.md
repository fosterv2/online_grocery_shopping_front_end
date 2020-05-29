# NotSoFresh Online Grocery Shopping App

The front-end of a mock online grocery shopping application (in no way inspired by Amazon Fresh).
[Link to Back-End Repo](https://github.com/fosterv2/online-grocery-shopping-backend)

## Getting Started

To use this app you should fork and clone this repository and the the backend repository

### Prerequisites

To run this project you have to have rails installed on your computer

### Installing

#### back-end

To get the back-end running, you should run all of these commands in the back-end folder

```
rails db:create"
rails db:migrate
rails db:seed"
```
then `rails s` to start the server

#### front-end

To get the front-end running, you should run all of these commands in the front-end folder

```
npm install
npm install react-router-dom
npm start
```

### In the App

Before login/ signup, you can see the "about us", "home", "login/signup" page, you can sort, filter and search the items. You can click on each item image to see the item details. 

After login/sign up, on home page, you can click on "add to cart" to add item to cart, or click on it's image to go to the single item page, to adjust the amount you want to add to the cart.

You can click on Cart on the NavBar to checkout or adjust items in the cart. After click "checkout", you can put in name and address, or add money to wallet before place order. After order is placed. The cart will be cleared out.

You can also change user data in profile page.

The items in the cart are unique to the user. If you log out, and log back in, the items in the cart before will still stay in the cart till you checkout.
