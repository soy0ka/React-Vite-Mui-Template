/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios'
import { getCookie } from 'react-use-cookie'

export const api = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
})

export const fetcher = async (url: string) => {
  const token = getCookie('Authorization')

  try {
    const { data } = await api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return data
  } catch (error: any) {
    return error.response?.data
  }
}

export const postFetcher = async (url: string, body: object) => {
  const token = getCookie('Authorization')

  try {
    const { data } = await api.post(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return data
  } catch (error: any) {
    return error.response?.data
  }
}

export const apiUrl = (path: string) =>
  `${import.meta.env.VITE_API_BASE}${path}`
