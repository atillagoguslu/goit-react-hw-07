//İşlemler

// redux klasöründe, asenkron eylem yaratıcılarını saklamak için contactsOps.js dosyasını oluşturun.

// İşlemleri duyurmak için createAsyncThunk işlevini kullanın.
// HTTP istekleri için axios kütüphanesini kullanın.

// Tanımlanması Gereken işlemler:

// fetchContacts - GET yöntemi ile kişi dizisini alma. Temel eylem türü "contacts/fetchAll" satırıdır.
// addContact - Yeni bir kişi ekleme (POST yöntemi) Temel eylem türü "contacts/addContact" satırıdır.
// deleteContact - ID’ye göre bir kişiyi silme (DELETE yöntemi). Temel eylem türü "contacts/deleteContact" satırıdır.

// HTTP istek hatalarını düzgün şekilde işlemek için işlemlerin içinde try...catch yapısını kullanın ve catch bloğunda thunkAPI.rejectWithValue yönteminin çağrılma sonucunu döndürün.

// Example API DATA:
// const exampleData = {
//   id: "1", // Backend will generate this
//   name: "John Doe", // User input
//   number: "123-45-67", // User input
//   createdAt: "2024-01-01", // Backend will generate this
//   avatar: "https://via.placeholder.com/150", // Backend will generate this
// };

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_PREFIX = "67acb2553f5a4e1477db8b91";
const API_URL = `https://${API_PREFIX}.mockapi.io/`;
const API_RESOURCE = "contacts";

const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/${API_RESOURCE}`);
      console.log("Fetching contacts:", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}/${API_RESOURCE}`, contact);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_URL}/${API_RESOURCE}/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export { fetchContacts, addContact, removeContact };
