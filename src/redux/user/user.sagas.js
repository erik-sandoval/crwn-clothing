import { takeLatest, put } from "redux-saga/effects";
import UserActionTypes from "./user.types";


export function* onGoogleSignInSuccess() {

}

export function* onGoogleSignInStart() {
    yield 
}

// this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//     if (userAuth) {
//       const userRef = await createUserProfileDocument(userAuth);

//       userRef.onSnapshot(snapShot => {
//         setCurrentUser({
//           currentUser: {
//             id: snapShot.id,
//             ...snapShot.data()
//           }
//         });
//       });
//     } else {
//       setCurrentUser(userAuth);
//     }
//   });
