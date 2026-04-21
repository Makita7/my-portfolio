// Mood Garden
import overviewMoodImg from '@/assets/project-previews/mood-garden/hero-mood-garden.png'
import problemMoodImg from '@/assets/project-previews/mood-garden/mood-tracker-chart.png'
import logIn from '@/assets/project-previews/mood-garden/login-screens.jpg'
import logginMood from '@/assets/project-previews/mood-garden/logging-mood.jpg'
import daily from '@/assets/project-previews/mood-garden/Daily.jpg'
import month from '@/assets/project-previews/mood-garden/Monthly.jpg'
import insight from '@/assets/project-previews/mood-garden/glimmer-Trigger.jpg'
import moodCycle from '@/assets/project-previews/mood-garden/mood-garden-process.png'
import settingMood from '@/assets/project-previews/mood-garden/Settings.jpg'
import moodReflection from '@/assets/project-previews/mood-garden/mood-garden-reflection.png'
import logoMood from '@/assets/project-previews/mood-garden/logo-design.jpg'
import colorsMood from '@/assets/project-previews/mood-garden/color-palette.jpg'
import fontsMood from '@/assets/project-previews/mood-garden/Fonts.jpg'
import animationsMood from '@/assets/project-previews/mood-garden/animation-keyframes.jpg'

// Daily Ground
import overviewDailyImg from '@/assets/project-previews/daily-ground/daily ground.png'
import problemDailyImg from '@/assets/project-previews/daily-ground/daily ground - Food Allergies.png'

import type { CaseStudyBlock } from '@/data/caseStudyTypes'

export type CaseStudyOverview = {
  subtitle: string
  scope: string
  prototype: string
  img: string
  text: string
  text2?: string
  text3?: string
}

export type CaseStudySections = {
  overview: CaseStudyOverview

  problem?: CaseStudyBlock[]
  design?: CaseStudyBlock[]
  reflection?: CaseStudyBlock[]

  goals?: CaseStudyBlock[]
  'UX-decisions'?: CaseStudyBlock[]
  'ux-framework'?: CaseStudyBlock[]
  'design-principles'?: CaseStudyBlock[]
  'potential-expansion'?: CaseStudyBlock[]
}

export type CaseStudy = {
  title: string
  color: string
  links?: {
    mobile?: string
    web?: string
    tablet?: string
  }
  sections: CaseStudySections
}

export const caseStudyContent = {
  'mood-garden': {
    title: 'Mood Garden',
    color: '#B80016',
    links: {
      mobile:
        'https://www.figma.com/proto/yD9JmMrtMHLTVK6LogI0Q3/Mood-Garden?node-id=78-1499&p=f&viewport=268%2C356%2C0.07&t=q4m3oi0pNAuyzREH-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=341%3A3657',
    },
    sections: {
      overview: {
        subtitle: 'Mood Tracking App for Mobile',
        scope: `Product vision, UX framework, emotional model design, interaction concepts`,
        prototype: 'link',
        img: overviewMoodImg,
        text: `Mood garden is designed to help users visualize, understand and reflect on their emotions over time. Traditional mood tracking charts can be rigid and boring at times, many people struggle to stay consistent, specially in an era where everything is stimulating. That's why in this app the emotions are represented by colorful flowers to help the user connect with them instead of it being just some letters on a page.`,
        text2: ``,
        text3: ``,
      },
      problem: [
        { type: 'img', img: problemMoodImg },
        {
          type: 'list',
          title: 'Most Mood-Trackers:',
          items: [
            'Feel clinical or data heavy',
            'Rely on rigid labels',
            'Focus on tracking rather than processing',
            'Lack emotional warmth',
            'Become abandoned after short-term use',
          ],
        },
      ],
      goals: [
        {
          type: 'list',
          title: 'Product Goals:',
          items: [
            'Reduce Overwhelm',
            'Accessibility for logging emotions',
            'Help with emotional regulation',
            'Give awareness by tracking the emotions and logging their causes',
            'Help user accept their emotions, by using colorful visuals',
            'Track patterns over time',
          ],
        },
      ],
      'UX-decisions': [
        {
          type: 'text',
          content:
            'The purpose of the app is to interact gently with the user and help them do self reflection. Most people who start using mood trackers usually are either struggling with their emotions or they want to better understand them. ',
        },
        {
          type: 'text',
          content:
            'The idea was to make this app gentle for it to be more inclusive. Many people who struggle with mental illness, or have some level of neurodivergence are more sensitive to stimulus. So this was a big consideration in the design, it was also meant to be for all ages and in general people that enjoy colorful designs.',
        },
        {
          type: 'text',
          content:
            "The first thing that comes up in the app is the register and login, it's meant to be easy and straight forward. Once that is completed the user will see a welcome animation and then be brought directly to their garden.",
        },
        { type: 'img', img: logIn },
        {
          type: 'text',
          content:
            "Initially their won't be any flowers, but that doesn't last long as soon as they input their first emotion the screen will change into a flower in a vase, representing the emotion.",
        },
        {
          type: 'text',
          content:
            "To add their emotions they press the button and go straight into another screen where multiple cards are shown each with a flower and a label, after that depending if the emotion is positive of negative another page will fade in and they will be able to fill out the reason for their emotion, either a Glimmer if it's positive and Trigger if negative.",
        },
        {
          type: 'description-list',
          title: '',
          items: [
            {
              label: `Triggers`,
              text: `situations that contributed to negative emotional states`,
            },
            {
              label: `Glimmers`,
              text: `small positive moments or experiences that sparked joy or comfort`,
            },
          ],
        },
        {
          type: 'text',
          content:
            "It's important for self reflection to understand why I feel a certain emotion not just identifying which emotion it was.",
        },
        { type: 'img', img: logginMood },
        {
          type: 'text',
          content: 'The navigation in the app is simple, comes down into only four pages',
        },
        {
          type: 'text',
          content:
            "Daily: it's we're as the name says only the emotions of today can be seen, by pressing the vase a log will all the daily emotions will pop up with all the details: flower, emotion label, and the glimmer or trigger if the user wrote something, here they can choose to modify their description but not the emotion.",
        },
        { type: 'img', img: daily },
        {
          type: 'text',
          content:
            'Month:  Here the flowers selected through out the month can be seen in two ways. One is in a beautiful bouquet, where the prominent flower of each day is visible and the other  way is a calendar format seeing which day each flower belong to. In the calendar option the user will be able to click on any specific day and see the log with the details of each emotion and the description. This will allow them to be able to see an overlook of the whole month without losing the detailed information that was written. ',
        },
        { type: 'img', img: month },
        {
          type: 'text',
          content:
            'Insight: The purpose of this page is to help the user have a general eyes view of what the information that they have inputted says about that month or their mental state. They can see what flower was more prevalent that month and a percentage so that they can understand how much more one flower was selected over the rest.A simple counter for glimmers and triggers is available, and a simple card that shows the most selected flower. If they press the Glimmer and Trigger counter cards they will be directed to another page where all there is a list with the date and detail of each log. This helps them go back and read what happened if needed',
        },
        { type: 'img', img: insight },
        {
          type: 'text',
          content: 'This generates a cycle of Awareness, Visualization, Reflection and Regulation.',
        },
        { type: 'img', img: moodCycle },
        {
          type: 'text',
          content:
            "Setting: Here the users can modify the name of their garden, customize the flowers and their labels, even add new flowers if the ones available are insufficient. It's important for users to be able to feel their garden their own, so customization is very important in this regard, it won't offer unlimited options because of scope but enough that it fulfils it's purpose.",
        },
        { type: 'img', img: settingMood },
        {
          type: 'text',
          content:
            "One of the key features is that note of the flowers are ugly, it's not meant to shame the user just identify and therefor reward them for doing so. That way they are incentivized to continue logging their emotions. Logging itself is growth",
        },
        { type: 'img', img: moodReflection },
        {
          type: 'list',
          title: "That's why I avoided:",
          items: ['Harsh data visuals', 'Performance metrics', 'Streak pressure'],
        },
        {
          type: 'text',
          content:
            "This helps the interaction with the app calmer and more relaxed, in setting their is the option to add a notification but the user isn't pressured into it.",
        },
      ],
      design: [
        {
          type: 'subtitle',
          subtitle: 'Logo:',
        },
        {
          type: 'text',
          content:
            "For the logo design I wanted to make the center of attention a cute toony flower, that stood out. That's why a vibrant red that is to make it pop out next to the pink flower. Since both are warm colors it stands out against the white background and green leaves.",
        },
        { type: 'img', img: logoMood },
        {
          type: 'text',
          content:
            "two logos we're made for different screen, for the header the logotype is used alone, but for more decorative screens the combination mark, which makes the app more identifiable if you only see the logo on it's own. Following the idea that the emotions are flowers I decided to make the logomark a flower.",
        },
        {
          type: 'subtitle',
          subtitle: 'Colors:',
        },
        {
          type: 'text',
          content:
            "The pallete is meant to be vibrant and cheery, and with a lot of contrast with the white background. This helps it look cleaner and more cheerful, because the flowers are of many colors I decided to choose a slightly darker less saturated color for primary, this way the interface and the background don't oversaturate the design.",
        },
        { type: 'img', img: colorsMood },
        {
          type: 'subtitle',
          subtitle: 'Fonts:',
        },
        {
          type: 'text',
          content:
            'The fonts chosen to combine with a cheerful toony style of animations were "Sour Gummy" and "Noto Sans".',
        },
        {
          type: 'text',
          content:
            "Sour Gummy for titles and headers because it's a more rounded and less formal more playful font that went well with the concept and stood out.",
        },
        {
          type: 'text',
          content:
            'Noto Sans for general texts and labels because of it not being formal but very legible, this helps with readability. I choose a font sans serif so it would match better with Sour Gummy giving a general calm and fun aesthetic to the design.',
        },
        { type: 'img', img: fontsMood },
        {
          type: 'subtitle',
          subtitle: 'Animations:',
        },
        {
          type: 'text',
          content:
            'I used a lot of text animations for in-between screens with fade ins and out transitions. Following the pattern of wanting to reward logging an emotion I decided to make the reward a soft animation of the flower fading in and it having an idle loop movement.',
        },
        {
          type: 'text',
          content:
            'I also added text animation when saving changes or logging an emotion to the app, so the person is sure when changes have occurred also creating a feedback loop that feels satisfying.',
        },
        { type: 'img', img: animationsMood },
      ],
      'potential-expansion': [
        {
          type: 'list',
          title: 'In the future the app could grow in the following ways:',
          items: [
            'More personation availability, like dark mode or more muted colors',
            'Sharing options for therapists ',
            'Parent-child co-reflection spaces',
            'Shared gardens for couples, so both parties know how the other is doing',
          ],
        },
      ],
    },
  },
  'daily-ground': {
    title: 'DailyGround.',
    color: '#1D70C4',
    links: {
      mobile:
        'https://www.figma.com/proto/iiQMBW71CFwwjwxsDChSqy/DailyGround.?node-id=66-477&p=f&viewport=3364%2C640%2C0.19&t=5PXRrZGuiBvFjJ2H-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=66%3A717',
      web: 'https://www.figma.com/proto/iiQMBW71CFwwjwxsDChSqy/DailyGround.?node-id=783-16999&p=f&viewport=3064%2C680%2C0.19&t=5PXRrZGuiBvFjJ2H-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=783%3A17738',
    },
    sections: {
      overview: {
        subtitle: 'A seamless ordering experience for pickup, dine-in, and delivery.',
        scope: `End-to-end product vision, experience strategy, behavioral design principles, and scalable feature roadmap`,
        prototype: 'link',
        img: overviewDailyImg,
        text: `DailyGround is a mobile app designed to simplify how customers order coffee, whether they’re picking up on the go, dining in, or ordering delivery.`,
        text2: `The project explores how thoughtful UX design can reduce friction in high-frequency, time-sensitive transactions while maintaining warmth and brand personality. This case study focuses on building a flexible ordering system that adapts to different contexts without overwhelming the user.`,
        text3: `A key differentiator of the product is its approach to dietary filtering. Many food and beverage apps treat dietary restrictions as an afterthought, making it difficult for users with allergies or preferences to confidently navigate menus. DailyGround integrates dietary filters directly into the browsing experience, allowing users to quickly identify suitable options without needing to inspect every product manually.`,
      },
      problem: [
        { type: 'img', img: problemDailyImg },
        {
          type: 'list',
          title:
            'Ordering coffee should be quick and satisfying, but digital ordering often introduces friction:',
          items: [
            'Confusing customization flows',
            'Overloaded menus',
            'Unclear wait times',
            'Too many steps at checkout',
            'Limited support for dietary needs',
          ],
        },
        {
          type: 'text',
          content:
            'Most coffee apps treat dietary restrictions as secondary. Users with allergies or preferences are often forced to open each product individually to verify ingredients, increasing cognitive load and anxiety.',
        },
        { type: 'rich-text', content: 'Core problem:' },
        {
          type: 'text',
          content:
            ' How might we create one cohesive ordering system that supports pickup, dine-in, and delivery. While also making dietary needs visible, accessible, and effortless to navigate?',
        },
      ],
      goals: [
        {
          type: 'list',
          title:
            'Ordering coffee should be quick and satisfying, but digital ordering often introduces friction:',
          items: [
            'Complete a first-time order in under 60 seconds',
            'Enable repeat orders in under 15 seconds',
            'Make customization intuitive and transparent',
            'Clearly communicate wait times and status',
            'Provide built-in dietary filtering that reduces the need to inspect each item individually',
            'Maintain a polished, professional aesthetic',
          ],
        },
        {
          type: 'list',
          title: 'Constraints:',
          items: [
            'Mobile-first experience',
            'Multiple ordering modes in one interface',
            'Flexible product customization (size, milk, syrups, add-ons)',
            'Accurate tagging system for dietary categories (e.g., gluten-free, dairy-free, vegan)',
            'Accessibility standards (contrast, tap targets, hierarchy clarity)',
          ],
        },
      ],
      'research-insight': [
        {
          type: 'text',
          content: 'This project is concept-driven but grounded in common food ordering behaviors:',
        },

        {
          type: 'list',
          title: 'Observed Patterns:',
          items: [
            'Users often reorder the same item',
            'Time pressure increases decision fatigue',
            'Long modifier lists create friction',
            'Users with dietary restrictions spend more time verifying menu items',
          ],
        },
        { type: 'rich-text', content: 'Key Insight:' },
        {
          type: 'text',
          content: 'Coffee ordering is habitual, but dietary verification is cautious.',
        },
        {
          type: 'text',
          content:
            'While most users want speed, users with allergies or restrictions prioritize certainty. When dietary information isn’t surfaced clearly, it creates hesitation and slows the entire flow.',
        },
        {
          type: 'text',
          content:
            'The system must support both urgency and safety, without making either group feel secondary.',
        },
      ],
      design: [
        {
          type: 'text',
          content:
            'The strategy focused on reducing friction while maintaining flexibility and inclusivity.',
        },
        { type: 'rich-text', content: '1. One Core System, Three Contexts' },
        {
          type: 'text',
          content:
            'Pickup, dine-in, and delivery share the same structural flow. Dietary filtering is consistent across all modes to ensure predictability.',
        },
        { type: 'rich-text', content: '2. Proactive Dietary Filtering' },
        {
          type: 'list',
          title: 'Instead of burying dietary information within product details:',
          items: [
            'Users can filter menu items by dietary restriction or preference',
            'Visual badges indicate compatibility at a glance',
            'Filtering persists while browsing to reduce repetitive actions',
          ],
        },
        {
          type: 'text',
          content:
            'This transforms dietary needs from an afterthought into a first-class navigation tool.',
        },
        { type: 'rich-text', content: '3. Modular Customization' },
        {
          type: 'text',
          content: 'Modifier groups clearly indicate how changes affect dietary compatibility.',
        },
        {
          type: 'text',
          content:
            'For example, switching milk types dynamically updates dietary labels when relevant.',
        },
        { type: 'rich-text', content: '4. Transparent System Feedback' },
        {
          type: 'text',
          content:
            'Users receive clear confirmation when selections align with their chosen dietary filters.',
        },
      ],
      'ux-framework': [
        { type: 'rich-text', content: 'The experience was built around three principles:' },
        {
          type: 'list',
          title: '1. Reduce Cognitive Load',
          items: [
            'Dietary filters remove the need to manually inspect every product',
            'Smart defaults and clear tagging minimize uncertainty',
          ],
        },
        { type: 'rich-text', content: '2. Maintain Context' },
        {
          type: 'list',
          title: 'Users always know:',
          items: [
            'Which ordering mode they’re in',
            'Which store they selected',
            'Whether dietary filters are active',
          ],
        },
        { type: 'text', content: 'Active filters remain visible, reinforcing clarity and trust.' },
        {
          type: 'list',
          title: '3. Design for Confidence',
          items: [
            'Speed is important, but confidence is essential',
            'The system supports informed decisions without slowing down the flow',
          ],
        },
      ],
      'design-principles': [
        { type: 'rich-text', content: '1. Inclusive by Default' },
        {
          type: 'text',
          content:
            'Dietary restrictions are not treated as edge cases. The interface supports them as a core navigation layer.',
        },
        { type: 'rich-text', content: '2. Visible Compatibility' },
        {
          type: 'text',
          content:
            'Products clearly display dietary badges (e.g., gluten-free, dairy-free, vegan) to reduce scanning effort.',
        },
        { type: 'rich-text', content: '3. Progressive Disclosure' },
        {
          type: 'text',
          content: 'Detailed ingredient information is available, but not forced upfront.',
        },
        { type: 'rich-text', content: '4. System-Level Consistency' },
        {
          type: 'text',
          content:
            'Dietary logic remains consistent across pickup, dine-in, and delivery to avoid confusion.',
        },
        { type: 'rich-text', content: '5. Functional Elegance' },
        {
          type: 'text',
          content:
            'Clarity replaces clutter. The design avoids overwhelming users while still surfacing essential information.',
        },
      ],
      'potential-expansion': [
        {
          type: 'text',
          content:
            'DailyGround was designed as a scalable ordering system, with flexibility built into its foundation. Future iterations could expand the product beyond transactional efficiency and into deeper personalization and ecosystem integration.',
        },
        {
          type: 'list',
          title: 'Mood Garden could evolve into:',
          items: [
            'Personalized Dietary Profiles',
            'Smart Re-Order & Habit Learning',
            'Scheduled & Subscription Orders',
            'Loyalty & Rewards Integration',
          ],
        },
      ],
      reflection: [
        {
          type: 'text',
          content:
            'Integrating dietary filtering across the entire system shifted this project from a standard ordering app to a more inclusive product experience.',
        },
        {
          type: 'text',
          content:
            'Rather than treating dietary needs as a feature, I approached them as a structural layer within the system. This required thinking beyond UI and considering tagging logic, dynamic updates, and how filtering impacts browsing patterns.',
        },
        {
          type: 'list',
          title: 'Designing DailyGround strengthened my ability to:',
          items: [
            'Build scalable systems with embedded accessibility',
            'Design for both speed and certainty',
            'Anticipate edge cases as primary flows',
            'Balance business goals with inclusive UX decisions',
          ],
        },
        {
          type: 'list',
          title: 'If expanded further, I would explore:',
          items: [
            'Personalized dietary profiles',
            'Smart recommendations based on restrictions',
            'Real-time allergen cross-check validation',
          ],
        },
      ],
    },
  },
} satisfies Record<string, CaseStudy>
