const multer = require("multer");
const path = require("path");

// file = aquivo dados como:
//  nome, tipo, extenção, tamanho)
// CallBack/cb = função usada assim que o nome estiver pronto
module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext)
        cb(
        null,
        `${name}-${Date.now()}${ext}`
      );
    }
  })
};
