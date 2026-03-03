# The Challenge: Shopping Cart 🛒
## Build a simple shopping cart app using Reducer + Context — no prop drilling allowed.
### What It Should Do
- Display a list of products (at least 4, you pick what they sell)
- Let users add items to the cart
- Let users remove items from the cart
- Let users increase/decrease quantity of items in the cart
- Show a cart summary somewhere on the page (total items, total price)
### The Rules
1. All state must live in a reducer — no standalone useState for cart data
2. No prop drilling — components get what they need via Context only
3. Must have a CartProvider component that wraps everything
4. Must have custom hooks — at minimum useCart() and useCartDispatch()
5. The App component should be nearly empty — just layout and <CartProvider>
6. typescript should be used, no use of any
7. use lighthouse in dev browsers, get all things green.
8. implement a service worker as well
9. make use of this api for your data https://fakestoreapi.com/
 
use a component library
ui should look decent and. everything should be nicely aligned.
Remember mobile 1st, component libraries should help with this, tailwind is mobile 1st as well