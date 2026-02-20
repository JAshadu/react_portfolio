import mixedMessagesImg from './mixedMessages_ss.jpeg'
import calculatorImg from './calculator_ss.png'
import jammmingImg from './jammming ss copy.png'
import portfolioImg from './portfolio ss.jpeg'

const projectInfo = [
    {
        id: 1,
        title: 'Mixed Messages',
        img: mixedMessagesImg,
        links: {
            project: 'https://jaa-mixedmessages.netlify.app/',
            github: 'https://github.com/JAshadu/mixed-messages-codecademyPortfolioProject',
        },
        description: 'A random sentence generator.',
        skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 2,
        title: 'Calculator',
        img: calculatorImg,
        links: {
            project: 'https://jaa-calculator.netlify.app/',
            github: '',
        },
        description: 'Your standard calculator.',
        skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 3,
        title: 'Jammming',
        img: jammmingImg,
        links: {
            project: 'https://jaa-jammming.netlify.app/',
            github: '',
        },
        description: 'Search for songs from Spotify, and add them to a new playlist in your library.',
        skills: ['HTML', 'CSS', 'JavaScript', 'APIs', 'React'],
    },
    {
        id: 4,
        title: 'Portfolio',
        img: portfolioImg,
        links: {
            project: '/#',
            github: 'https://github.com/JAshadu/react_portfolio',
        },
        description: 'My portfolio.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
]

/*
    {
        id: number,
        title: 'example',
        img: exampleImg,
        links: {
            project: '',
            github: '',
        },
        description: 'TEMPLATE',
        skills: [],
    },
*/

export default projectInfo
