const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./confiq.env" });



app.listen(process.env.RUNNING_PORT, () => {
  console.log(`Server is running on port ${process.env.RUNNING_PORT}`);
});
;
