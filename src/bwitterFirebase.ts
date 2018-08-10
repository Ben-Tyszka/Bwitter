import * as firebase from 'firebase'

import { AUTH_DOMAIN, DATABASE_URL ,FIREBASE_API_KEY, MESSAGING_SENDER_ID, PROJECT_ID } from './settings'

const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    messagingSenderId: MESSAGING_SENDER_ID,
    projectId: PROJECT_ID,
    storageBucket: '',
}

firebase.initializeApp(config)

export default firebase