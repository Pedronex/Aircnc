const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectionController = require("./controllers/RejectionController");

const routes = express.Router();
const upload = multer(uploadConfig);
/* Tipos de requisição: 
    Get = Coletar os dados
    Post = Criar uma nova informação
    Put = Ediar um dado
    Delete = Realizar uma deleção  
*/

// req.query = coleta de parametros usado para filtros
// req.params = Acessar rota params para edições e deleções
// req.body = Acessar o corpo da requisição para edição e criação

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.post("/booking/:booking_id/approvals", ApprovalController.store);
routes.post("/booking/:booking_id/rejections", RejectionController.store);
module.exports = routes;
