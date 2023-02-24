import * as SecureStore from 'expo-secure-store';

const saveSecureData = async (key, value) => {
    await SecureStore.setItemAsync(key, value).catch((error) => console.log(error))
}

const getSecureData = async (key) => {
    const value = await SecureStore.getItemAsync(key).catch((error) => console.log(error))
    return value
}

const deleteSecureData = async (key) => {
    await SecureStore.deleteItemAsync(key).catch((error) => console.log(error))
}

const SecureService = {
    saveSecureData,
    getSecureData,
    deleteSecureData
}

export default SecureService