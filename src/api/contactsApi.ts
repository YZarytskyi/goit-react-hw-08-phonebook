import { Contact } from './../types/types';
import axios from "axios"

axios.defaults.baseURL = 'https://63bd5b55ce8cd0789c956f0b.mockapi.io'

export const getAllContacts = async () => {
  const response = await axios.get('/contacts')
  return response.data
}

export const addNewContact = async (contact: Contact) => {
  const response = await axios.post('/contacts', contact)
  return response.data
}

export const deleteSelectedContact = async (id: string) => {
  const response = await axios.delete(`/contacts/${id}`)
  return response.data
}

