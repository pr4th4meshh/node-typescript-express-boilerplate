"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT;
if (!PORT) {
    console.log("Port not set in .env file");
    process.exit(1);
}
// * ADD THIS AS WELL FOR MONGODB
// mongoose
//   .connect(process.env.MONGODB_URI as string)
//   .then(() => {
//     console.log("Connected to MongoDB")
//   })
//   .catch((err) => {
//     console.log(err)
//   })
const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.urlencoded({ extended: false }));
// external routes
// app.use('/api/v1/users', "YOURROUTENAME");
app.listen(4000, () => {
    console.log(`Server started on port ${PORT}`);
});
app.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});
