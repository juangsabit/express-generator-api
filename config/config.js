require('dotenv').config();

const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_DIALECT,
} = process.env

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIALECT,
    "timezone": '+07:00',
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIALECT,
    "timezone": '+07:00',
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": DB_DIALECT,
    "timezone": '+07:00',
  }
}
const firebaseConfig = {
  apiKey: "AIzaSyBehLPjbQjOr0np4MQAH0YIkmsUNFZ16Vk",
  authDomain: "tutorial-95c18.firebaseapp.com",
  projectId: "tutorial-95c18",
  storageBucket: "tutorial-95c18.appspot.com",
  messagingSenderId: "445580050711",
  appId: "1:445580050711:web:06579ef95d59ae14697752",
  measurementId: "G-JQQLYE119E"
};
