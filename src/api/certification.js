import { api } from "./api"

const sandEmailApi = async (props) => {
  try {
    const response = await api.post(`/api/v1/author`, {
      email: props.email,
    });
    return response.data
  } catch (error) {
    throw new Error()
  }
}
const reSandEmailApi = async (props) => {
  try {
    const response = await api.put(`/api/v1/author/${props.id}/issue-auth-key`);
    return response.data
  } catch (error) {
    throw new Error()
  }
}

const ConfirmationNumber = async (props) => {
  try {
    const response = await api.put(`/api/v1/author/authorize`, {
      id: props.id,
      authKey: props.authKey
    });
    return response.data
  } catch (error) {
    throw new Error()
  }
}

export { sandEmailApi, reSandEmailApi, ConfirmationNumber }