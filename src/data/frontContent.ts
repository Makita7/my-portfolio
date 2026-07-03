
// Step Form
import headerStepForm from '@/assets/project-previews/step-form header.jpg'
import previewStepForm from '@/assets/project-previews/step-form.jpg'

// Tip Calculator
import headerSplitterImg from '@/assets/project-previews/tip-calculator-splitter-header.png'
import previewSplitterImg from '@/assets/project-previews/tip-calculator-splitter.png'

//Space Tourism
import headerSpaceImg from '@/assets/project-previews/space-tourism-header.jpg'
import previewSpaceImg from '@/assets/project-previews/space-tourism.jpg'


import type { FrontBlock } from './frontContentTypes'

export type FrontOverview = {
  imgHeader: string
  subtitle: string
  tags: string[]
  prototype: string
  imgPreview?: string
  text: string
  text2?: string
  text3?: string
}

export type frontSections = {
  overview: FrontOverview
  goals?: FrontBlock[]
  challange?: FrontBlock[]
  tech?: FrontBlock[]
}

export type FrontPiece = {
  title: string
  color: string
  links?: string
  sections: frontSections
}

export const FrontContent = {
  'step-form': {
    title: 'Step Form',
    color: '#483eff',
    links: 'https://makita7.github.io/stepForm/',
    sections: {
      overview: {
        imgHeader: headerStepForm,
        imgPreview: previewStepForm,
        subtitle: 'Sign Up form for with steps and diferent preferences for user',
        tags: [`Vue`, 'HTML', 'CSS'],
        prototype: 'link',
        text: `FrontendMentor.io challange to create a tip calculator.`,
        text2: ``,
        text3: ``,
      },
      challange: [
        {
          type: 'list',
          title: 'Users should be able to:',
          items: [
            'Complete each step of the sequence',
            'Go back to a previous step to update their selections',
            'See a summary of their selections on the final step and confirm their order',
            "View the optimal layout for the interface depending on their device's screen size",
            'See hover and focus states for all interactive elements on the page',
            'Receive form validation messages if: a field has been missed, the email address is not formatted correctly, a step is submitted, but no selection has been made',
            'I made use of Pinia to store states and methods that were going to be used thought the app'
          ],
        },
      ],
      tech: [
        {
          type: 'list',
          title: '',
          items: [
            'Vue.js',
            'Vite',
            'Pinia',
            'Vuetify 3',
            'HTML5 markup',
            'PNPM - Package Manager',
          ],
        },
      ],
    },
  },
  'space-tourism': {
    title: 'Space Tourism',
    color: '#0e1f3d',
    links: 'https://makita7.github.io/stepForm/',
    sections: {
      overview: {
        imgHeader: headerSpaceImg,
        imgPreview: previewSpaceImg,
        subtitle: 'Landing page for a fictional page about space tourism',
        tags: [`Vue`, 'HTML', 'CSS'],
        prototype: 'link',
        text: `I made this project in order to challange myself to create animated elements for all screen sizes.`,
        text2: ``,
        text3: ``,
      },
      challange: [
        {
          type: 'list',
          title: 'Users should be able to:',
          items: [
            "View the optimal layout for each of the website's pages depending on their device's screen size",
            'See hover states for all interactive elements on the page',
            'View each page and be able to toggle between the tabs to see new information',
            'Animate screen and element transitions',
          ],
        },
      ],
      tech: [
        {
          type: 'list',
          title: '',
          items: [
            'Vue.js',
            'Vite',
            'Vue Router 4',
            'HTML5 markup',
            'SCSS custom properties',
            'Font Awesome',
            'Flexbox',
            'PNPM - Package Manager',
          ],
        },
      ],
    },
  },
  'tip-calculator': {
    title: 'Tip Calculator',
    color: '#00474b',
    links: 'https://makita7.github.io/stepForm/',
    sections: {
      overview: {
        imgHeader: headerSplitterImg,
        imgPreview: previewSplitterImg,
        subtitle: 'Sign Up form for with steps and diferent preferences for user',
        tags: [`Vue`, 'HTML', 'CSS'],
        prototype: 'link',
        text: `FrontendMentor.io challange to create a tip calculator.`,
        text2: ``,
        text3: ``,
      },
      challange: [
        {
          type: 'list',
          title: 'Users should be able to:',
          items: [
            "View the optimal layout for the app depending on their device's screen size",
            'See hover states for all interactive elements on the page',
            'Calculate the correct tip and total cost of the bill per person',
          ],
        },
      ],
      tech: [
        {
          type: 'list',
          title: '',
          items: [
            'Vue.js',
            'Vite',
            'HTML5 markup',
            'Vuetify 3',
            'Flexbox',
            'SCSS custom properties',
            'PNPM - Package Manager',
          ],
        },
      ],
    },
  },
} satisfies Record<string, FrontPiece>
