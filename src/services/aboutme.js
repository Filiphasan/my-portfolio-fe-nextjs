import { API } from ".";

export const getAboutMe = () => {
    return API.get('aboutme/public')
}