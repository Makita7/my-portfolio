import overviewMoodImg from '@/assets/project-previews/mood-garden/Hero mood Garden.png';
import problemMoodImg from '@/assets/project-previews/mood-garden/mood tracker chart.png';
import frameworkMoodImg from '@/assets/project-previews/mood-garden/mood garden process.png';
import designMoodImg from '@/assets/project-previews/mood-garden/mood garden preview.png';
import reflectionMoodImg from '@/assets/project-previews/mood-garden/mood garden reflection.png';

import overviewDailyImg from '@/assets/project-previews/daily-ground/daily ground.png';
import problemDailyImg from '@/assets/project-previews/daily-ground/daily ground - Food Allergies.png';
import designDailyImg from '@/assets/project-previews/daily-ground/daily ground - previews.png';

export const caseStudyContent = {
  "mood-garden": {
    title: "Mood Garden",
    color: '#B80016',
    links: [
      {mobile: '', tablet: '', web: ''},
    ],
    sections: {
      overview: {
        subtitle: 'Mood Tracking App for Mobile',
        scope:`Product vision, UX framework, emotional model design, interaction concepts`,
        prototype: 'link',
        img: overviewMoodImg,
        text: `Mood Garden is designed to help users visualize, understand, and reflect on their emotions over time.
Instead of relying on traditional mood-tracking charts, the experience transforms emotions into a living garden, where each feeling appears as a uniquely colored flower. This approach replaces clinical data with a warm, engaging visual metaphor that makes emotional awareness feel approachable and intuitive.`,
      },
      problem: [
        { type: 'img', img:problemMoodImg },
        { type: 'list', title: "Most Mood-Trackers:", items: [
          "Feel clinical or data heavy",
          "Rely on rigid labels",
          "Focus on tracking rather than processing",
          "Lack emotional warmth",
          "Become abandoned after short-term use",
        ]},
        {type: 'text', content: 'While these tools collect data, they rarely support deeper emotional processing.'},
        {type: 'rich-text', content: 'Users want more than logs — they want clarity.'},
        {type: 'text', content: 'They want to understand why they feel the way they do and how patterns connect over time.'},
        { type: 'list', title: "There is a gap between:", items: [
          "Emotional awareness",
          "Emotional regulation",
          "Daily habit consistency",
        ]},
        {type: 'text', content: 'Mood Garden bridges this gap through gentle interactions and intentional reflection.'},
        { type: 'description-list', title: "Beyond recording emotions, users can log:", items: [
          {label: "Triggers", text: "situations that contributed to negative emotional states"},
          {label: "Glimmers", text: "small positive moments or experiences that sparked joy or comfort"},
        ]},
        {type: 'text', content: 'By capturing both, the system encourages balanced reflection instead of negativity bias.'},
        { type: 'list', title: "This structured yet soft framework supports:", items: [
          "Long-term mental health awareness",
          "Pattern recognition",
          "More productive conversations with therapists",
        ]},
        {type: 'text', content: 'Rather than simply asking “How do you feel?”,'},
        {type: 'text', content: 'Mood Garden helps answer “Why did I feel this way?”'},
      ],
      "goals-constraints": [
        { type: 'list', title: "Product Goals:", items: [
          "Make emotional reflection feel intuitive and non-intimidating",
          "Encourage daily check-ins",
          "Reduce overwhelm",
          "Promote self-regulation through visual feedback",
        ]},
        { type: 'list', title: "User Goals:", items: [
          "Understand how they’re feeling",
          "Track patterns over time",
          "Feel safe engaging with emotions",
          "Avoid clinical or judgmental systems",
        ]},
        { type: 'list', title: "Constraints:", items: [
          "Early-stage conceptual product",
          "No backend yet",
          "Designed as a scalable system that could evolve into a real app",
          "Must remain simple enough to not become another overwhelming tool",
        ]},
      ],
      "research-insight":[
        { type: 'list', title: "Key behavioral insights driving the concept:", items: [
          "People engage more consistently with visual metaphors than abstract data",
          "Emotional self-reflection must feel safe, not analytical",
          "Overly structured mood trackers can increase pressure",
          "Soft feedback systems encourage habit retention",
        ]},
        {type: 'rich-text', content: 'A major insight: Emotions are dynamic — so the interface should feel alive '},
      ],
      strategy:[
        {type: 'text', content: 'The core strategic decision was to use a garden metaphor as the emotional model of the product. Rather than visualizing emotions as data points, Mood Garden translates them into a living environment that evolves over time.'},
        { type: 'list', title: "Why a Garden?", items: [
          "Growth represents emotional patterns and consistency.",
          "Every emotion — positive or negative — becomes a flower.",
          "No emotion is visually “ugly” or degraded.",
          "Visual feedback replaces numeric metrics, reducing performance pressure.",
        ]},
        {type: 'text', content: 'A key design choice was to make all flowers beautiful, regardless of emotional valence.'},
        { type: 'description-list', title: "", items: [
          {label: `Sadness, anger, joy, calm"`, text: `each is represented with care and aesthetic value.`},
        ]},
        {type: 'text', content: "This avoids reinforcing the idea that some emotions are “bad” or should be hidden. Instead, the system communicates that all emotions are valid and part of a healthy inner ecosystem."},
        {type: 'text', content: "The garden does not punish."},
        {type: 'text', content: "It reflects."},
        { type: 'list', title: "Interaction Philosophy", items: [
          "Low-friction daily check-ins",
          "Gentle reflection prompts",
          "Non-judgmental system responses",
          "Continuous visual evolution instead of performance summaries",
        ]},
        {type: 'rich-text', content: 'Instead of:'},
        {type: 'text', content: "“You logged 4 sad days.”"},
        {type: 'text', content: "The interface communicates visually. The garden changes subtly — not to signal failure, but to show emotional diversity and patterns over time."},
        {type: 'text', content: "There are no accusatory prompts, streak counters, or corrective language."},
        { type: 'list', title: "By representing every emotion as something worthy of space, the product reinforces:", items: [
          "Emotional acceptance",
          "Self-compassion",
          "Regulation through awareness",
        ]},
        {type: 'text', content: "The goal is not to eliminate difficult emotions, but to acknowledge and integrate them."},

      ],
      "ux-framework":[
        {type: 'rich-text', content: 'Mood Garden is built around three core layers:'},
        {type: 'rich-text', content: '1. Emotional Input'},
        {type: 'text', content: 'Simple, low-pressure mood selection or reflection prompts.'},
        { type: 'list', title: "2. Visual Translation — Each mood affects the state of a part of the garden:", items: [
          "Color shifts",
          "Growth patterns",
          "Environmental changes",
        ]},
        {type: 'rich-text', content: '3. Long-Term Feedback'},
        {type: 'text', content: 'Users see emotional trends as landscape changes — not charts.'},
        {type: 'rich-text', content: 'This creates:'},
        {type: 'text', content: 'Awareness → Visualization → Reflection → Regulation'},
        { type: 'img', img:frameworkMoodImg },
      ],
      "design-principles":[
        { type: 'list', title: "", items: [
          "Soft visual language",
          "Calm color palette",
          "Organic motion",
          "Minimal cognitive load",
          "Emotion-first interface",
        ]},
        { type: 'list', title: "The system avoids:", items: [
          "Harsh data visuals",
          "Performance metrics",
          "Streak pressure",
        ]},
        {type: 'text', content: 'This is regulation-focused, not productivity-focused.'},
        { type: 'img', img:designMoodImg },
      ],
      "potential-expansion":[
        { type: 'list', title: "Mood Garden could evolve into:", items: [
          "Personalized emotional ecosystems",
          "Guided reflections",
          "Seasonal changes representing emotional cycles",
          "Subtle AI-based insights",
          "Parent-child co-reflection spaces",
          "Shared gardens for couples, allowing partners to voluntarily share the state of their emotional landscape ",
        ]},
        {type: 'text', content: 'It’s designed as a scalable emotional framework, not just a tracking app.'},
      ],
      "reflection":[
        {type: 'rich-text', content: 'Mood Garden reflects a shift in how digital products approach mental wellness:'},
        {type: 'text', content: 'From Judging → To Tending'},
        {type: 'text', content: 'From Self-Monitoring → To Self-Understanding'},
        {type: 'text', content: 'From Optimization → To Self-Regulation.'},
        { type: 'img', img:reflectionMoodImg },
        { type: 'list', title: "This project demonstrates:", items: [
          "Product thinking",
          "Behavioral design strategy",
          "Emotional UX",
          "Systems thinking",
          "Conceptual innovation",
        ]},
        {type: 'text', content: 'It’s not just a UI concept, it’s an interaction philosophy.'},
      ],
    }
  },
  "daily-ground": {
    title: "DailyGround.",
    color: '#1D70C4',
    links: [
      {mobile: 'fdgdfg', tablet: '', web: ''},
    ],
    sections: {
      overview: {
        subtitle: 'A seamless ordering experience for pickup, dine-in, and delivery.',
        scope:`End-to-end product vision, experience strategy, behavioral design principles, and scalable feature roadmap`,
        prototype: 'link',
        img: overviewDailyImg,
        text: `DailyGround is a mobile app designed to simplify how customers order coffee — whether they’re picking up on the go, dining in, or ordering delivery.`,
        text2: `The project explores how thoughtful UX design can reduce friction in high-frequency, time-sensitive transactions while maintaining warmth and brand personality. This case study focuses on building a flexible ordering system that adapts to different contexts without overwhelming the user.`,
        text3: `A key differentiator of the product is its approach to dietary filtering. Many food and beverage apps treat dietary restrictions as an afterthought, making it difficult for users with allergies or preferences to confidently navigate menus. DailyGround integrates dietary filters directly into the browsing experience, allowing users to quickly identify suitable options without needing to inspect every product manually.`,
      },
      "problem":[
        { type: 'img', img:problemDailyImg },
        { type: 'list', title: "Ordering coffee should be quick and satisfying — but digital ordering often introduces friction:", items: [
          "Confusing customization flows",
          "Overloaded menus",
          "Unclear wait times",
          "Too many steps at checkout",
          "Limited support for dietary needs",
        ]},
        {type: 'text' , content: 'Most coffee apps treat dietary restrictions as secondary. Users with allergies or preferences are often forced to open each product individually to verify ingredients, increasing cognitive load and anxiety.'},
        {type: 'rich-text', content: 'Core problem:'},
        {type: 'text', content: ' How might we create one cohesive ordering system that supports pickup, dine-in, and delivery — while also making dietary needs visible, accessible, and effortless to navigate?'},
      ],
      "goals-constraints":[
        { type: 'list', title: "Ordering coffee should be quick and satisfying — but digital ordering often introduces friction:", items: [
          "Complete a first-time order in under 60 seconds",
          "Enable repeat orders in under 15 seconds",
          "Make customization intuitive and transparent",
          "Clearly communicate wait times and status",
          "Provide built-in dietary filtering that reduces the need to inspect each item individually",
          "Maintain a polished, professional aesthetic",
        ]},
        { type: 'list', title: "Constraints:", items: [
          "Mobile-first experience",
          "Multiple ordering modes in one interface",
          "Flexible product customization (size, milk, syrups, add-ons)",
          "Accurate tagging system for dietary categories (e.g., gluten-free, dairy-free, vegan)",
          "Accessibility standards (contrast, tap targets, hierarchy clarity)",
        ]},
      ],
      "research-insight":[
        {type: 'text' , content: 'This project is concept-driven but grounded in common food ordering behaviors:'},

        { type: 'list', title: "Observed Patterns:", items: [
          "Users often reorder the same item",
          "Time pressure increases decision fatigue",
          "Long modifier lists create friction",
          "Users with dietary restrictions spend more time verifying menu items",
        ]},
        {type: 'rich-text', content: 'Key Insight:'},
        {type: 'text', content: 'Coffee ordering is habitual — but dietary verification is cautious.'},
        {type: 'text', content: 'While most users want speed, users with allergies or restrictions prioritize certainty. When dietary information isn’t surfaced clearly, it creates hesitation and slows the entire flow.'},
        {type: 'text', content: 'The system must support both urgency and safety — without making either group feel secondary.'},
      ],
      "strategy":[
        {type: 'text' , content: 'The strategy focused on reducing friction while maintaining flexibility and inclusivity.'},
        {type: 'rich-text', content: '1. One Core System, Three Contexts'},
        {type: 'text', content: 'Pickup, dine-in, and delivery share the same structural flow. Dietary filtering is consistent across all modes to ensure predictability.'},
        {type: 'rich-text', content: '2. Proactive Dietary Filtering'},
        { type: 'list', title: "Instead of burying dietary information within product details:", items: [
          "Users can filter menu items by dietary restriction or preference",
          "Visual badges indicate compatibility at a glance",
          "Filtering persists while browsing to reduce repetitive actions",
        ]},
        {type: 'text', content: 'This transforms dietary needs from an afterthought into a first-class navigation tool.'},
        {type: 'rich-text', content: '3. Modular Customization'},
        {type: 'text', content: 'Modifier groups clearly indicate how changes affect dietary compatibility.'},
        {type: 'text', content: 'For example, switching milk types dynamically updates dietary labels when relevant.'},
        {type: 'rich-text', content: '4. Transparent System Feedback'},
        {type: 'text', content: 'Users receive clear confirmation when selections align with their chosen dietary filters.'},
      ],
      "ux-framework":[
        {type: 'rich-text', content: 'The experience was built around three principles:'},
        { type: 'list', title: "1. Reduce Cognitive Load", items: [
          "Dietary filters remove the need to manually inspect every product",
          "Smart defaults and clear tagging minimize uncertainty",
        ]},
        {type: 'rich-text', content: '2. Maintain Context'},
        { type: 'list', title: "Users always know:", items: [
          "Which ordering mode they’re in",
          "Which store they selected",
          "Whether dietary filters are active",
        ]},
        {type: 'text' , content: 'Active filters remain visible, reinforcing clarity and trust.'},
        { type: 'list', title: "3. Design for Confidence", items: [
          "Speed is important — but confidence is essential",
          "The system supports informed decisions without slowing down the flow",
        ]},
      ],
      "design-principles":[
        {type: 'rich-text', content: '1. Inclusive by Default'},
        {type: 'text' , content: 'Dietary restrictions are not treated as edge cases. The interface supports them as a core navigation layer.'},
        {type: 'rich-text', content: '2. Visible Compatibility'},
        {type: 'text' , content: 'Products clearly display dietary badges (e.g., gluten-free, dairy-free, vegan) to reduce scanning effort.'},
        {type: 'rich-text', content: '3. Progressive Disclosure'},
        {type: 'text' , content: 'Detailed ingredient information is available, but not forced upfront.'},
        {type: 'rich-text', content: '4. System-Level Consistency'},
        {type: 'text' , content: 'Dietary logic remains consistent across pickup, dine-in, and delivery to avoid confusion.'},
        {type: 'rich-text', content: '5. Functional Elegance'},
        {type: 'text' , content: 'Clarity replaces clutter. The design avoids overwhelming users while still surfacing essential information.'},
        { type: 'img', img:designDailyImg },
      ],
      "potential-expansion":[
        {type: 'text' , content: 'DailyGround was designed as a scalable ordering system, with flexibility built into its foundation. Future iterations could expand the product beyond transactional efficiency and into deeper personalization and ecosystem integration.'},
        { type: 'list', title: "Mood Garden could evolve into:", items: [
          "Personalized Dietary Profiles",
          "Smart Re-Order & Habit Learning",
          "Scheduled & Subscription Orders",
          "Loyalty & Rewards Integration",
        ]},
      ],
      "reflection":[
        {type: 'text' , content: 'Integrating dietary filtering across the entire system shifted this project from a standard ordering app to a more inclusive product experience.'},
        {type: 'text' , content: 'Rather than treating dietary needs as a feature, I approached them as a structural layer within the system. This required thinking beyond UI and considering tagging logic, dynamic updates, and how filtering impacts browsing patterns.'},
        { type: 'list', title: "Designing DailyGround strengthened my ability to:", items: [
          "Build scalable systems with embedded accessibility",
          "Design for both speed and certainty",
          "Anticipate edge cases as primary flows",
          "Balance business goals with inclusive UX decisions",
        ]},
        { type: 'list', title: "If expanded further, I would explore:", items: [
          "Personalized dietary profiles",
          "Smart recommendations based on restrictions",
          "Real-time allergen cross-check validation",
        ]},
      ],
  }
}}
