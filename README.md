The goal of this enhancement project is to understand the existing <a href="https://learning.ccbp.in/question/d51bb3e2-c4f7-4e1a-bcdb-b0970b57be00" target="_blank_">Restaurant</a> code, and add the given functionalities within the existing <a href="https://learning.ccbp.in/question/d51bb3e2-c4f7-4e1a-bcdb-b0970b57be00" target="_blank_">Restaurant</a> code.

Your existing <a href="https://learning.ccbp.in/question/d51bb3e2-c4f7-4e1a-bcdb-b0970b57be00" target="_blank_">Restaurant</a> app, which you have developed, allows users to view a list of dish items in different tabs of menu items. Users can also increase or decrease the quantity of a particular dish item.

### Enhancement Functionality

<details>
<summary>Functionality to be added</summary>

- Keep the existing code in **Home Route** and add a **Login Route** and a **Cart Route** to the application.
- **Login Route Functionality**
  - When a valid username and password are provided and the Login button is clicked, navigate the user to the Home route. Else, display the error message. Use `js-cookie` to maintain Cookies for authentication.
  - If an authenticated user attempts to access either the **Home Route** or **Cart Route**, they should be redirected to the corresponding route. Else, should be redirected to the **Login Route**.
- **Home Route Functionality**

  - When the Cart icon button in the header is clicked, then the page should be navigated to the **Cart** route.
  - When the restaurant name in the header is clicked, then the page should be navigated to the **Home** route.
  - Add a `Logout` button in the header of the **Home Route** and add corresponding functionality.
  - Add a feature to add items to the cart with a click of a button. The `ADD TO CART` button should be displayed only if the dish items are available and the dish quantity is greater than **0**.
    - When the `ADD TO CART` button of a particular dish item is clicked, that dish item should be added to the **Cart Route** and the count should be increased by one at the cart icon.
    - When the user clicks the `ADD TO CART` button multiple times, the count should not increase at the cart icon as it is the same item and count in the **Cart Route** should be increased for that particular dish.

- **Cart Route Functionality**

  - The `Cart` Route should have a header similar to the Home Route.
  - Add a `Remove All` button in the `Cart Route`. Implement this by adding a button.
    - When a user clicks on the **Remove All** button, all the cart items should be removed from the cart and an <a href="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png" target="_blank_">Empty Cart Image</a> should be displayed.
  - Each cart item on the cart page should include the dish name, dish image, dish price, plus (`+`) button, minus (`-`) button, quantity of the dish item, and a remove button.
  - In each cart item in the cart
    - When the plus button is clicked, then the quantity of the dish should be increased and when minus button is clicked, then the quantity of the dish should be decresed.
    - When the quantity of a dish reaches zero, the dish item should be removed from the cart.
    - Based on the quantity of the dish, the dish price should be updated accordingly.
    - When a user clicks on the remove button, the cart item should be removed from the cart list.

- You need to use **React Context** to maintain that sync between the **Home Route** and **Cart Route**. Use the context as given below for the test cases to pass.

  - The `CartContext` has an object with the following properties
    - `cartList`- this key stores the cart items
    - `removeAllCartItems`- this method is used to remove all the cart items in the cartList
    - `addCartItem`- this method adds the cart item to the cartList
    - `removeCartItem`- this method removes the cart item from the cartList
    - `incrementCartItemQuantity`- this method increases the quantity of a dish in the cartList
    - `decrementCartItemQuantity`- this method decreases the quantity of a dish in the cartList

- Make sure your application maintains a good CSS styling.

<MultiLineNote>
Generally, in the interviews, the interviewer will not specify you to use context to solve the question. You need to decide based on the use case.
</MultiLineNote>

</details>

### API Details

<details>
<summary>Login API</summary>

- Use this API for authentication
  - https://apis.ccbp.in/login Request:
  ```json
  {
    "username": "rahul",
    "password": "rahul@2021"
  }
  ```
  Success Response:
  ```json
  {
    "jwt_token": "token_string"
  }
  ```
  Failure Response:
  ```json
  {
    "status_code": 404,
    "error_msg": "Username is not found"
  }
  ```

</details>

### Setup Instructions

<details>
<summary>Follow these steps before starting to code for this project. (**Important**)</summary>

- After setting up this project delete the `README.md` file in the CCBP IDE.
- Clone the existing <a href="https://learning.ccbp.in/question/d51bb3e2-c4f7-4e1a-bcdb-b0970b57be00" target="_blank_">Restaurant</a> code from your GitHub account to add new functionalities to it.
  - If the existing <a href="https://learning.ccbp.in/question/d51bb3e2-c4f7-4e1a-bcdb-b0970b57be00" target="_blank_">Restaurant</a> code is not available in your git, push your code to git.
    - <a href="https://learning.ccbp.in/3da6f1a6-0892/course?c_id=ade6e642-cd5c-4896-9edd-3f06d3dc2069&s_id=49896a46-f484-4b42-b459-2626f77e6796&t_id=9f27b553-4bbe-400f-9025-9044f79acda0" target="_blank_">Click here to learn how to push your code to git</a>
  - Once the code is pushed to git, clone it into this project using the below command.

```cmd
git clone {git repository URL} /home/workspace/reactjs/coding-practices/enhancementOfRestaurantApp
```

<MultiLineNote>
In the above command, replace this `{git repository URL}` with your actual Git URL.
</MultiLineNote>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

<MultiLineNote>

- You must clone the existing <a href="https://learning.ccbp.in/question/d51bb3e2-c4f7-4e1a-bcdb-b0970b57be00" target="_blank_">Restaurant App</a> repo, as test cases are added for both the existing Restaurant app and the new functionality.
- These projects are introduced to help you prepare well for similar questions asked during interviews. </MultiLineNote>

### Submission Form:

<center>Click the below button and submit your git URL and published URL of the current coding assignment</center>
<br>
<a  href="https://forms.ccbp.in/restaurant-app-enhancement-project-submission-form" target="_blank_">
  <center><button style="color: #fff; border: none; cursor: pointer; width: 218px; height: 34px; background-color: rgb(22, 101, 216); border-radius: 5.4px; box-shadow: rgb(0 0 0 / 36%) 0px 2px 4px 0px;font-family: Inter;font-size: 14px;color: rgb(255, 255, 255);font-weight: 500;letter-spacing: 0.5px;text-transform: uppercase;">
    SUBMIT
  </button>
  </center>
</a>

<br/>
<center>**Follow the clean code guidelines**</center>
