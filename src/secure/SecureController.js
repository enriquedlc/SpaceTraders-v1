import SecureService from "./SecureService";

const saveData = (key, value) => {
    try {
        SecureService.saveSecureData(key, value)
    } catch (error) {
        console.log(error)
    }
}

const getValueFor = (key) => {
    try {
        SecureService.getSecureData(key)
    } catch (error) {
        console.log(error)
    }
}

const deleteData = (key) => {
    try {
        SecureService.deleteSecureData(key)
    } catch (error) {
        console.log(error)
    }
}

const SecureController = {
    saveData,
    getValueFor,
    deleteData
}

export default SecureController