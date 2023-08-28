import auth from '@react-native-firebase/auth';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


GoogleSignin.configure({
    webClientId: '969657043864-6frfvvordr0mf7delfro250qqikqnvea.apps.googleusercontent.com',
});

export const CreateAccountWithEmailAndPassword = ({email, password}) => {
    return auth().createUserWithEmailAndPassword(email, password)
}

export const SignOutUser = () => {
    return auth().signOut();
}

export const SignInWithEmailAndPassword = ({email, password}) => {
    return auth().signInWithEmailAndPassword(email, password)
}

export const SignInWithGoogle = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

export const SignInWithFacebook = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
        throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
        throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
}


export const SignInWithAnonymously = () => {
    return auth().signInAnonymously();
}