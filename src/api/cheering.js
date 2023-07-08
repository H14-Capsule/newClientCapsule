import { api } from "./api"

const cheeringMessageList = async () => {
  try {
    const response = await api.get(`/api/v1/cheering-message`, {
      headers: {
        'Content-Type': `application/json`,
        'ngrok-skip-browser-warning': '69420',
      },
    })
    return response.data
  } catch (error) {
    throw new Error()
  }
}

const cheeringMessageEditor = async (props) => {
  try {
    const response = await api.post(`/api/v1/cheering-message`, {
      nickname: props.nickname,
      content: props.content
    });
    return response.data
  } catch (error) {
    throw new Error()
  }
}

export { cheeringMessageList, cheeringMessageEditor }