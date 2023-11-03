import axios from "axios";

export const sendEmail = (payload) => {
    return axios.post("/api/contactme", payload)
}

export const sendSMS = (payload) => {
    return axios.post("/api/sms", payload)
}