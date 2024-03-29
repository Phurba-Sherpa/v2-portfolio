import personal from '../assets/v2-personal-website.png'
import omnifood from '../assets/omnifood.png'
import natour from '../assets/natour.png'

type IProject = {
    title: string,
    desc: string,
    techList: string[],
    codePreview: string,
    sitePreview: string,
    imageUrl: string
}
export const PROJECTS: IProject[] = [
    {
        title: 'Personal Website',
        desc: 'Second interation of my personal website built with till date learned techniques and knowldege using Styled Components, React and pure CSS.',
        techList: ['React', 'Styled Components', 'Typescript', 'Vite', 'BEM'],
        imageUrl: personal,
        codePreview: '',
        sitePreview: ''
    },
    {
        title: 'Natour',
        desc: 'It is a modern natour website, a tour and travel that has their different packages available with complete pricing built using best practices and a lot of animations during my learning of advanced css concept and responsive web design. The main motive for building this project was to get confident with css, animation, and responsivness.',
        techList: ['NPM', "SASS", 'HTML', 'BEM'],
        codePreview: 'https://github.com/Phurba-Sherpa/natour',
        sitePreview: 'https://natour.phurbasherpa.name.np/',
        imageUrl: natour
    },
    {
        title: 'Omnifood',
        desc: 'It is a complete  responsive omnifood website, that aims to deliver the food at your door based on the subscrition chosen. This one I build during my online course of basic CSS in early days.',
        techList: ['HTML', 'CSS', 'JS'],
        codePreview: 'https://github.com/Phurba-Sherpa/omnifood',
        sitePreview: "https://omnifood.phurbasherpa.name.np/",
        imageUrl: omnifood
    },
   
]