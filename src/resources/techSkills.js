import projectInfo from "./projectInfo";

const projectSkills = [...new Set(projectInfo.flatMap(project => project.skills))]

const techSkills = []

const addSkillstoArray = () => {
    for(let i = 0; i < projectSkills.length; i++) {
        techSkills.push({
            id: i+1,
            skill: projectSkills[i]
        })
    }
}

addSkillstoArray()

const newSkills = ['Redux', 'Back-End']
const currentlyLearning = []

const addLearningText = () => {
    for(let j = 0; j < newSkills.length; j++) {
        currentlyLearning.push(newSkills[j] + ' (Currently learning)')
    }
}

addLearningText()
/*
const addCurrentlyLearning = () => {
    for(let k = 0; k < currentlyLearning.length; k++) {
        techSkills.push({
            id: k+techSkills.length, (SOMETHING WRONG HERE, USE CONSOLE LOG TO CHECK!)
            skill: currentlyLearning[k]
        })
    }
}

addCurrentlyLearning()

console.log(techSkills)
*/
export default techSkills;
