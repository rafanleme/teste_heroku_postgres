var admin = require("firebase-admin");

// var serviceAccount = require("../config/firebase-key.json");

const BUCKET = "senai-overflow2.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "senai-overflow",
    private_key_id: "73066f27e33601b0035117947f795a484b773efe",
    client_id: "105469033790114328493",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-k09tb%40senai-overflow.iam.gserviceaccount.com",
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadImage = (req, res, next) => {
  if (!req.file) return next();

  const imagem = req.file;
  const nomeArquivo = Date.now() + "." + imagem.originalname.split(".").pop();

  const file = bucket.file(nomeArquivo);

  const stream = file.createWriteStream({
    metadata: {
      contentType: imagem.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.error(e);
  });

  stream.on("finish", async () => {
    //tornar o arquivo publico
    await file.makePublic();

    //obter a url publica
    req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;

    next();
  });

  stream.end(imagem.buffer);
};

module.exports = uploadImage;
