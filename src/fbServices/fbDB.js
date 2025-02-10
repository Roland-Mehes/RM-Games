import { db } from './fb';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
} from 'firebase/firestore';

export const writeUserData = async (userId, data) => {
  const docsRef = doc(db, 'users', userId);
  const docsSnap = await getDoc(docsRef);
  if (docsSnap.exists()) {
    await updateDoc(docsRef, { ...data });
  } else {
    // docSnap.data() will be undefined in this case
    await setDoc(docsRef, { ...data });
  }
};

export const readUserData = async (userId) => {
  const docsRef = doc(db, 'users', userId);
  const docsSnap = await getDoc(docsRef);
  if (docsSnap.exists()) {
    return docsSnap.data();
  } else {
    console.log('No user data found for UID: ', userId);
    return null;
  }
};

export const readAllUsersData = async () => {
  const usersCollectionRef = collection(db, 'users'); // "users" collection
  try {
    const querySnapshot = await getDocs(usersCollectionRef);
    let usersData = {};
    querySnapshot.forEach((doc) => {
      usersData[doc.id] = doc.data(); // UID kulcsként
    });
    return usersData;
  } catch (error) {
    console.error('Error fetching all users data:', error);
    return {};
  }
};
