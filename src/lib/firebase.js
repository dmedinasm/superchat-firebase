import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'superchat-backend-eb0c8.firebaseapp.com',
  projectId: 'superchat-backend-eb0c8',
  storageBucket: 'superchat-backend-eb0c8.firebasestorage.app',
  messagingSenderId: '818293047251',
  appId: '1:818293047251:web:22e188215097f66d24f926',
  measurementId: 'G-BS9W785LBS'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const firestore = getFirestore(app)
const provider = new GoogleAuthProvider()

export { auth, firestore, provider }
