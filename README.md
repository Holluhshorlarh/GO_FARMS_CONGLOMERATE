# Go Farms Api
---
Go Farms is an Agric conglomerate based in Makurdi, that specializes in the manufacture and distribution of honey made food across Nigeria, using the latest technology to enhance their operations. This project is aimed at creating an endpoint to complement their pre-existing endpoints

---

### Key Features

- User Sign-up.
- User Login.
- User order creation , Order Update and Order deletion. 
- User previlege to see trainings, House consultation, products feed analysis along with research and livestock feeds.
---

### Packages used
The Go Farms API is built using the following packages;

- bcrypt
- body-parser
- dotenv
- express
- Joi
- jsonwebtoken
- mongoose
---

### Usage
To use the Go Farms API, kindly refer to the postman documentation here 👉 **[Go Farms API](https://documenter.getpostman.com/view/25826735/2s93RKzFfV
)**

---

##### Getting Started

Clone the repository to your specified directory in your local machine using the command git clone

**[👍 git clone ](https://github.com/Holluhshorlarh/GO_FARMS_CONGLOMERATE.git)**

---
- Change directory into the project directory using cd go-farms.
- Install the project dependencies using the command **yarn install.**
- Create a **.env** file in the root directory of the project and add the necessary environment variables. See .env.sample for an example.
Start the server using the command yarn start

---

##### API Endpoints
The API endpoints for this project are as follows:

- **POST /signup:** creates a new user account
- **POST /login:** Login a user
- **GET /farm-products:** gets all farm products available for sale.
- **POST /productid:** Creates order
- **PUT /orderid:** Updates order
- **Delete /orderid:** Deletes order

---

##### Contributing
If you'd like to contribute to this project, please fork the **[👍 repository ](https://github.com/Holluhshorlarh/GO_FARMS_CONGLOMERATE.git)** and create a pull request. All kinds of contributions are welcome, including bug fixes, new features, and documentation improvements.