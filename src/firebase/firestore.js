import { firebase } from '@firebase/app';
import '@firebase/firestore'

class Firestore 
{
    constructor() 
    {
        if (!firebase.apps.length) 
        {
        firebase.initializeApp
            (
                {
                apiKey: "AIzaSyAzuVhH9pqpx9Ez0rowdFV0-_7MoUOu3i8",
                authDomain: "klung-chana-inventory.firebaseapp.com",
                projectId: "klung-chana-inventory",
                storageBucket: "klung-chana-inventory.appspot.com",
                messagingSenderId: "1050273407277",
                appId: "1:1050273407277:web:e8c8f8c09a11517fe1f3a4"
                }
            );
        } 
        else 
        {
        console.log('firebase apps already running....');
        }
        this.db = firebase.firestore();
    }

    addUser = (user, success, reject) => {
        firebase
        .firestore()
        .collection('User')
        .add(user)
        .then(function (docRef) 
        {
            success(docRef);
        })
        .catch(function (error) 
        {
            reject(error);
        });
    };

    addProduct= (product, success, reject) => {
        firebase
        .firestore()
        .collection('Product')
        .add(product)
        .then(function (docRef) 
        {
            success(docRef);
        })
        .catch(function (error) 
        {
            reject(error);
        });
    };

    getUser=(email,success,reject)=>{
        firebase
        .firestore()
        .collection('User')
        .where('email','==', email)
        .get()
        .then(function(querySnapshot){
            success(querySnapshot);
        })
        .catch(function(err){
            reject(err);
        });
    }
    
    getProduct=(id,success,reject)=>{
        firebase
        .firestore()
        .collection('Product')
        .where('id','==', id)
        .get()
        .then(function(querySnapshot){
            success(querySnapshot);
        })
        .catch(function(err){
            reject(err);
        });
    }

    getAllUser(success, reject) 
    {
        firebase
        .firestore()
        .collection('User')
        .get()
        .then(function (querySnapshot) 
        {
            success(querySnapshot);
        })
        .catch(function (error) 
        {
            reject(error);
        }); 
    }

    getAllProduct(success, reject) 
    {
        firebase
        .firestore()
        .collection('Product')
        .get()
        .then(function (querySnapshot) 
        {
            success(querySnapshot);
        })
        .catch(function (error) 
        {
            reject(error);
        }); 
    }

    getProductByPrice = (price, success, reject) =>{
    firebase
      .firestore()
      .collection('Product')
      .where('price', '>=', price)
      .orderBy('price', 'desc')
      .limit(1)
      .get()
      .then(function (querySnapshot) 
      {
        success(querySnapshot);
      })
      .catch(function (error) 
      {
        reject(error);
      });
    };

    updateProductarByID = (product, success, reject) => {
    firebase
      .firestore()
      .collection('Product')
      .doc(product.id)
      .update({
        model: product.model,
        description: product.description,
      })
      .then(function () {
        success(null);
      })
      .catch(function (error) {
        reject(error);
      });
    };

    deleteProduct = (id, success, reject) => {
        firebase
        .firestore()
        .collection('Product')
        .doc(id)
        .delete()
        .then(function () {
            success(null);
        })
        .catch(function (error) {
            reject(error);
        });
    };
    deleteUser = (id, success, reject) => {
        firebase
        .firestore()
        .collection('User')
        .doc(id)
        .delete()
        .then(function () {
            success(null);
        })
        .catch(function (error) {
            reject(error);
        });
    };
    addLog=(log,success,reject) =>{
        firebase
        .firestore()
        .collection('Log')
        .add(log)
        .then(function (docRef) 
        {
            success(docRef);
        })
        .catch(function (error) 
        {
            reject(error);
        });
    }
}

const firestore = new Firestore();
export default firestore;