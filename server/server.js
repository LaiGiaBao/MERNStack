const express = require("express");
let port = process.env.PORT || 9000;

const cors = require("cors");
let app = express();

//App instance initialization
let userApp = express();
let cartApp = express();
//Router initialization
let cartRouter = require("./Routes/CartRouter");
let userRouter = require("./Routes/UserRouter");
let productRouter = require("./Routes/ProductRouter");

app.use(cors());
app.use("/static", express.static("public"));
app.use(express.json({ limit: "2mb", extended: false }));
// Routers
app.use("/", productRouter);

app.use("/user", userApp);
userApp.use("/", userRouter);

app.use("/cart", cartApp);
cartApp.use("/", cartRouter);

// port
app.listen(port, () => console.log(`server is listening at port ${port}`));
