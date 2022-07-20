import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHc7FOQt_KGtAU079tcQqsjB-3hc9jSnc",
  authDomain: "nboard-e6bbe.firebaseapp.com",
  projectId: "nboard-e6bbe",
  storageBucket: "nboard-e6bbe.appspot.com",
  messagingSenderId: "689993974780",
  appId: "1:689993974780:web:51b5750a37083df0a2a879",
  measurementId: "G-32RVNY78R4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getBoards() {
  return new Promise((resolve, reject) => {
    const q = query(collection(db, "board"), orderBy("b_write_date", "desc"));
    getDocs(q)
      .then((snapshot) => {
        const boards = [];
        snapshot.forEach((doc) => boards.push({ b_id: doc.id, ...doc.data() }));
        resolve(boards);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export { getBoards };

function getBoardDetail(b_id) {
  return new Promise((resolve, reject) => {
    getDoc(doc(db, "board", b_id))
      .then((snapshot) => {
        resolve(snapshot.data());
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export { getBoardDetail };

function writeBoard(title, content, writer) {
  return new Promise((resolve, reject) => {
    addDoc(collection(db, "board"), {
      b_title: title,
      b_content: content,
      b_writer: writer,
      b_read: 0,
      b_write_date: Timestamp.fromDate(new Date()),
    })
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
export { writeBoard };
