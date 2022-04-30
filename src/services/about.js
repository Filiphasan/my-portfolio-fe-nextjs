import { API } from ".";

export const getAboutMe = () => {
    return API.get('aboutme/public')
}

export const getSkillList = () => {
    return API.get('skill/public')
}

export const getEducationList = () => {
    return API.get('education/public')
}

export const getExperienceList = () => {
    return API.get('experience/public')
}

export const getProjectList = () => {
    return API.get('project/public')
}

export const getInterestList = () => {
    return API.get('interest/public')
}