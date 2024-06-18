import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

let questionsCollection = collection(db,"QuizzApp_Questions")

async function getQuizData(){
    let quizData = await getDocs(questionsCollection)
    return quizData.docs.map(item => ({...item.data()}))
}

export {getQuizData}