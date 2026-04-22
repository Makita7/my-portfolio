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
import overviewDailyImg from '@/assets/project-previews/daily-ground/daily-ground.png'
import problemDailyImg from '@/assets/project-previews/daily-ground/daily-ground-food-allergies.png'
import chooseSeatingDailyGround from '@/assets/project-previews/daily-ground/choose-seating-options.png'
import menuDailyGround from '@/assets/project-previews/daily-ground/menu-dailyground.png'
import menufilteredDailyGround from '@/assets/project-previews/daily-ground/menu-filters-dailyground.png'
import menuDetailsDailyGround from '@/assets/project-previews/daily-ground/product-detail-dailyground.png'
import myOrderDailyGround from '@/assets/project-previews/daily-ground/my-order-dailyground.png'
import checkoutDailyGround from '@/assets/project-previews/daily-ground/checkout-dailyground.png'
import deliveryDailyGround from '@/assets/project-previews/daily-ground/receiving-order.png'
import referencesDailyGround from '@/assets/project-previews/daily-ground/references-dailyground.png'
import mascotDailyGround from '@/assets/project-previews/daily-ground/mascot-dailyground.png'
import logoDailyGround from '@/assets/project-previews/daily-ground/logo-dailyground.png'
import colorsDailyGround from '@/assets/project-previews/daily-ground/color-palette-dailyground.png'
import fontsDailyGround from '@/assets/project-previews/daily-ground/fonts-dailyground.png'

// Fleur Patisserie
import overviewFleurImg from '@/assets/project-previews/fleur-patisserie/hero-fleur.jpg'

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
  goals?: CaseStudyBlock[]
  'UX-decisions'?: CaseStudyBlock[]
  design?: CaseStudyBlock[]
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
        text: `DailyGround is a mobile app designed to simplify how customers order coffee whether they’re picking up on the go, dining in, or ordering delivery.`,
        text2: `This project is designed to show how thoughtful UX design can help user by lowering friction when ordering on an app, by adapting to different situations that the client might have. From ordering as someone with allergies or just a busy person that needs something on the go or even simplifying reservations for groups.`,
        text3: `A key differentiator of the product is its approach to dietary filtering. Many food ordering apps treat dietary restrictions as an afterthought, making it difficult for users with allergies or preferences to confidently navigate menus. DailyGround integrates dietary filters directly into the browsing experience, allowing users to quickly identify suitable options without needing to check every product manually or ask the waiter multiple times.`,
      },
      problem: [
        { type: 'img', img: problemDailyImg },
        {
          type: 'list',
          title:
            'Ordering coffee should be quick and satisfying but digital ordering often introduces friction:',
          items: [
            'Confusing flows',
            'Overloaded menus',
            'Unclear wait times',
            'Limited support for dietary needs',
          ],
        },
        {
          type: 'text',
          content:
            'Most coffee apps treat dietary restrictions as secondary. Users with allergies or preferences are often forced to open each product individually to verify ingredients, increasing cognitive load and anxiety. Many clients end up not ordering due to the stress induced by this pain point.',
        },
      ],
      goals: [
        {
          type: 'list',
          title: '',
          items: [
            'Dietary Restriction Filtering',
            "Dietary tags so even if the client hasn't chosen a filter they can know what it contains",
            'Clear and simple navigation to specific product categories',
            'Mobile first',
            'Flexible Customization (size, milk, syrups, add-ons)',
            'Accessibility standards (contrast, tap targets, hierarchy clarity)',
          ],
        },
      ],
      'UX-decisions': [
        {
          type: 'text',
          content:
            'The login is meant to be easy so that the client can navigate quickly to the menu for ordering.',
        },
        {
          type: 'text',
          content:
            'Once you log in you can choose whether you are dining in alone or with a group, delivery or in-store pickup. Making it easier for the app to choose what user flow is more relevant for the client.',
        },
        { type: 'img', img: chooseSeatingDailyGround },
        {
          type: 'text',
          content:
            'The menu is divided into separate pages that the clients can navigate using the the tabs with clear descriptive labels so clients can get quickly to the products they actually want to purchase.',
        },
        { type: 'img', img: menuDailyGround },
        {
          type: 'text',
          content:
            'At the blow the tabs are the active filters and also the button to select or unselect filters, this makes it easy and less stressful.',
        },
        { type: 'img', img: menufilteredDailyGround },
        {
          type: 'text',
          content:
            "As a person with celiac disease it is very difficult to find clear information online if a product is or isn't gluten free. I've talked with other people that have other eating restrictions and they also face difficulty when eating out or ordering from apps. That's why the filtering in this app is very important and intentional, cute icons we're designed for each restriction accompanied by a clear label so that people can know what they each mean. It makes it clear and easy to understand.",
        },
        {
          type: 'text',
          content:
            "The product cards display a photo of said product, the name and the price, once you click on one of them  you will navigate to another page where the product detail can be seen, here is where client can see add-ons, dietary restriction labels, and other customizations that related to the specific product. One the product is customized they can add it on to their order, and if they don't want it or were just curious then they can press the back button at the top left corner to go back to the menu.",
        },
        { type: 'img', img: menuDetailsDailyGround },
        {
          type: 'text',
          content:
            'This helps the clients navigate quickly and without stress trough the menu items until they find what they want to order.',
        },
        {
          type: 'text',
          content:
            'The Navigation at the bottom is composed of two buttons, one being "My Order" and the other "Checkout".',
        },
        {
          type: 'text',
          content:
            '"My Order" button navigates to the products already selected by the client, they can also remove any product, or simply adjust the amount if they want more or less of a product. This helps avoid friction because otherwise the client would have to remove the product and go back to the menu and do all customization again.',
        },
        { type: 'img', img: myOrderDailyGround },
        {
          type: 'text',
          content: `"Checkout" is self explanatory, it's a list of the products with the price and the option to pay the order, this leads to a simple checkout flow where the client will be able to select their payment method, If in their account they already have a payment method associated they the transaction will happen automatically after the client chooses to checkout. Making it easier and faster for regulars. If it's tedious every time the clients eventually stop using the app, this way after the first time it becomes easier to order again.`,
        },
        { type: 'img', img: checkoutDailyGround },
        {
          type: 'text',
          content: `I added a screen that shows in what status the order is in, depending on what the client chose before different relevant information will be shown. In the case of dining-in it'll show an estimate of how long it will take for order to be at your table and who is your server; for in-store pickup it'll show time estimate so you can go to the counter when the order is ready; and finally, in the case of delivery it'll show a real-time tracking of where your order is and in how much time you will be receiving it.`,
        },
        {
          type: 'text',
          content: `This part varies a lot depending on what the customer chose at the beginning`,
        },
        { type: 'img', img: deliveryDailyGround },
        {
          type: 'text',
          content: `Once order is received, the app will ask if everything was ok with the order and if they want or not to tip. This helps because it avoids waiters having to ask for tips and clients have less anxiety in the interaction.`,
        },
      ],
      design: [
        {
          type: 'text',
          content:
            'For this design I was inspired by coffee shops aesthetic from Korea, they usually use a simplified cartoons with the logo written besides it. Color palletes tend to be vibrant primary colors accompanied with white or very light background.',
        },
        { type: 'img', img: referencesDailyGround },
        {
          type: 'text',
          content: `Following this inspiration I designed a cute fox mascot inspired on a barista, the target clients are coffee shops, cafes or ice créame shops. For this reason the mascot aligns with it's target stores.`,
        },
        { type: 'img', img: mascotDailyGround },
        {
          type: 'subtitle',
          subtitle: 'Logo:',
        },
        {
          type: 'text',
          content: `For this logo I went for a combination mark, I wanted to combine a illustration with a name for the app. Because the target stores are coffee shops and cafes I decided to choose a coffee bean as the Logomark, following the same idea for the Logotype I chose the name "DailyGround.", on of the nice things of going to a coffee shop is being to drink freshly grounded coffee, it's less acidic more aromatic it gives a better experience specially if made by a barista.`,
        },
        { type: 'img', img: logoDailyGround },
        {
          type: 'subtitle',
          subtitle: 'Colors:',
        },
        {
          type: 'text',
          content: `The color palette is meant to be vibrant, but calming at the same time, so I stayed away from warm colors like reds, oranges and pinks. Soft greens and blues we're chosen with a more vibrant blue as the primary for Mascot lineart, Titles and important details. but paired with the more pastel colors to make the design more robust and not look empty but still within minimalism.`,
        },
        { type: 'img', img: colorsDailyGround },
        {
          type: 'subtitle',
          subtitle: 'Fonts:',
        },
        {
          type: 'text',
          content: `I choose Nunito for Headers; Manrope for regular text, labels, buttons, etc. ; and Merriweather for special titles that are only located on more animated screens that needed a more decorative title.`,
        },
        {
          type: 'text',
          content: `The selection of these three fonts was to keep a more minimalistic design feel, that's why both Nunito and Manrope are non serif because I wanted the app to feel more relaxed and informal. And Merriweather was chosen for the logo and special titles because it's more unique and easy to identify. Between the both I was able to build a clean design that is easy to read and doesn't generate visual noise.`,
        },
        { type: 'img', img: fontsDailyGround },
        {
          type: 'subtitle',
          subtitle: 'Animations:',
        },
        {
          type: 'text',
          content: `The animations are soft fade ins and outs, with some whimsical mascot animations here and there. The idea is to not overstimulate the users but at the same time make the app look more polished, many people like cute aesthetic indifferently of their age so it appeals to a large demographic.`,
        },
      ],
    },
  },
  'fleur-patisserie': {
    title: 'Fleur Patisserie',
    color: '#984C3E',
    links: {
      mobile:
        'https://www.figma.com/proto/yD9JmMrtMHLTVK6LogI0Q3/Mood-Garden?node-id=78-1499&p=f&viewport=268%2C356%2C0.07&t=q4m3oi0pNAuyzREH-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=341%3A3657',
    },
    sections: {
      overview: {
        subtitle: 'Botanical inspired French Cafe',
        scope: `Product Design, UX framework, UI Design, Prototype in Figma, and Development of Page`,
        prototype: 'link',
        img: overviewFleurImg,
        text: `Fleur Patisserie is a high-end, botanical-inspired cafe that blends nature, French pastries, and signature coffee blends. Reflecting the connection with nature by combining French pastry traditions and seasonal ingredient.`,
        text2: ``,
        text3: ``,
      },
      problem: [
        {
          type: 'text',
          content: `Most cafe sites are either to complex and hard to navigate, are missing crucial information or have clutter where more information isn't needed, in other words not easy to use. This leaves clients confused and annoyed.`,
        },
        {
          type: 'text',
          content: `The idea specially in this cafe because of what the identity is for the clients to have  a pleasant and relaxing experience from start to finish. That will make them want to engage with the space more and become regulars. Which for any business is an ideal circumstance.`,
        },
        {
          type: 'text',
          content: `In this design I wanted to break away from cluttered sites or making in look overly commercial, that's why the color pallete for the design is selected to be calming and harmonious.`,
        },
        {
          type: 'text',
          content: `Clear navigation and clean sections help the clients to understand where they are and how to navigate to other areas of the Site.`,
        },
      ],
      goals: [
        {
          type: 'list',
          title: '',
          items: [
            'The site is meant to be primarily the menu',
            'Make a site design that reflected the identity of the cafe, a calm space with fresh seasonal ingredients',
            `Have an easy navigation to that clients don't have pain points while finding what they want, but allowing them to freely explore`,
            `Contact information for interested parties`,
            `Display other activities carried out at the cafe`,
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
} satisfies Record<string, CaseStudy>
