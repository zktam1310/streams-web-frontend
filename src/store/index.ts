import Vue from 'vue'
import Vuex from 'vuex'
import { IUser, IClient } from '@/interfaces/index';

Vue.use(Vuex)

let userData: IUser = {
  id: '10013',
  name: 'Streamer',
  email: 'streamer@email.com',
}

let clientData: IClient[] =  [
  {
    id: "1",
    name: "Cherry",
    title: "Ms.",
    budget: 900000,
    type: "Condo",
    status: [
      {
        title: "Appointment",
        result: "neutral",
        updated_at: 1660368715
      }
    ],
    updated_at: 1660368715
},
  {
    id: "2",
    name: "Chan",
    title: "Mr.",
    budget: 1200000,
    type: "Terrace",
    status: [
      {
        title: "Booking",
        result: "positive",
        updated_at: 1660290415
      }
    ],
    updated_at: 1660290415
  },
  {
    id: "3",
    name: "Jack",
    title: "Mr.",
    budget: 800000,
    type: "Terrace",
    status: [
      {
        title: "Scheduled",
        result: "negative",
        updated_at: 1660267815
      }
    ],
    updated_at: 1660267815
  },
];

export default new Vuex.Store({
  state: {
    user: userData,
    client: clientData
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
