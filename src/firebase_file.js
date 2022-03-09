 import firebase from 'firebase';
   import 'firebase/auth';
   import 'firebase/firestore';
   import 'firebase/storage';
   import * as firebaseui from 'firebaseui'
   const firebaseConfig={
    apiKey: "AIzaSyC20eE_3FGGhzVCL-Hnx2ye0fskZ-UElrs",
    authDomain: "prosport-guru-inc.firebaseapp.com",
    projectId: "prosport-guru-inc",
    storageBucket: "prosport-guru-inc.appspot.com",
    messagingSenderId: "384851572120",
    appId: "1:384851572120:web:6b31c6017fb9b4ac6367ed"
   };

   let app;
   if(firebase.apps.length==0){
       app=firebase.initializeApp(firebaseConfig);
   }else{
       app=firebase.app();
   }


let ui;
if(firebaseui.auth.AuthUI.getInstance()==null){
  ui=new firebaseui.auth.AuthUI(firebase.auth());
}else{
  ui=new firebaseui.auth.AuthUI.getInstance();
}
   const auth=app.auth();
   const db=app.firestore();
   const storage=app.storage();

   export {auth,db,storage,ui};
   