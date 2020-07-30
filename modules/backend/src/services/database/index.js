import Firestore from '@google-cloud/firestore'

let firestore

const connect = async ()=> {
  firestore = new Firestore()
  console.log('Connected to firestore')
  return true
}
const fieldValue = Firestore.FieldValue

export { connect, firestore, fieldValue }