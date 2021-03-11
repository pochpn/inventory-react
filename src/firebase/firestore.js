import { firebase } from '@firebase/app';
import '@firebase/firestore'

class Firestore {
    constructor() {
        if (!firebase.apps.length) {
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
        else {
            console.log('firebase apps already running....');
        }
        this.db = firebase.firestore();
    }

    /*---------------------User----------------------*/
    addUser = (user, success, reject) => {
        firebase
            .firestore()
            .collection('User')
            .add(user)
            .then(function (docRef) {
                success(docRef);
            })
            .catch(function (error) {
                reject(error);
            });
    };
    getUser = (email, success, reject) => {
        firebase
            .firestore()
            .collection('User')
            .where('email', '==', email)
            .get()
            .then(function (querySnapshot) {
                success(querySnapshot);
            })
            .catch(function (err) {
                reject(err);
            });
    }
    getAllUser(success, reject) {
        firebase
            .firestore()
            .collection('User')
            .orderBy('employeeID')
            .get()
            .then(function (querySnapshot) {
                success(querySnapshot);
            })
            .catch(function (error) {
                reject(error);
            });
    }
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
    updateUserByID = (user, success, reject) => {
        firebase
            .firestore()
            .collection('User')
            .doc(user.id)
            .update({
                firstnameTH: user.firstnameTH,
                lastnameTH: user.lastnameTH,
                firstnameEN: user.firstnameEN,
                lastnameEN: user.lastnameEN,
                tel: user.tel,
                address: user.address,
                pass: user.pass,
                pic: user.pic,
            })
            .then(function () {
                success(null);
            })
            .catch(function (error) {
                reject(error);
            });
    };

    /*-------------------Product--------------------*/
    addProduct = (product, success, reject) => {
        firebase
            .firestore()
            .collection('Products')
            .add(product)
            .then(function (docRef) {
                success(docRef);
            })
            .catch(function (error) {
                reject(error);
            });
    };
    getProductByShelf = (shelf, success, reject) => {
        firebase
            .firestore()
            .collection('Products')
            .where('shelf', '==', shelf)
            .get()
            .then(function (querySnapshot) {
                success(querySnapshot);
            })
            .catch(function (err) {
                reject(err);
            });
    }
    getProductByType = (type, success, reject) => {
        firebase
            .firestore()
            .collection('Products')
            .where('type', '==', type)
            .get()
            .then(function (querySnapshot) {
                success(querySnapshot);
            })
            .catch(function (err) {
                reject(err);
            });
    }
    getAllProduct(success, reject) {
        firebase
            .firestore()
            .collection('Products')
            .get()
            .then(function (querySnapshot) {
                success(querySnapshot);
            })
            .catch(function (error) {
                reject(error);
            });
    }
    updateProductByID = (product, success, reject) => {
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

    /*-----------productProfile---------------*/
    addProductProfile = (productProfile, success, reject) => {
        firebase
            .firestore()
            .collection('ProductProfile')
            .add(productProfile)
            .then(function (docRef) {
                success(docRef);
            })
            .catch(function (error) {
                reject(error);
            });
    };
    getAllProductProfile(success, reject) {
        firebase
            .firestore()
            .collection('ProductProfile')
            .get()
            .then(function (querySnapshot) {
                success(querySnapshot);
            })
            .catch(function (error) {
                reject(error);
            });
    }
    updateProductProfileByID = (productProfile, success, reject) => {
        firebase
            .firestore()
            .collection('ProductProfile')
            .doc(productProfile.id)
            .update({
                
            })
            .then(function () {
                success(null);
            })
            .catch(function (error) {
                reject(error);
            });
    };
    deleteProductProfile = (id, success, reject) => {
        firebase
            .firestore()
            .collection('ProductProfile')
            .doc(id)
            .delete()
            .then(function () {
                success(null);
            })
            .catch(function (error) {
                reject(error);
            });
    };

    /*-------------Log---------------*/
    addLog = (log, success, reject) => {
        firebase
            .firestore()
            .collection('Log')
            .add(log)
            .then(function (docRef) {
                success(docRef);
            })
            .catch(function (error) {
                reject(error);
            });
    }
}

const firestore = new Firestore();
export default firestore;