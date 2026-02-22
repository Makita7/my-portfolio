import overviewMoodImg from '@/assets/project-previews/mood-garden/Hero mood Garden.png';
import problemMoodImg from '@/assets/project-previews/mood-garden/mood tracker chart.png';
import frameworkMoodImg from '@/assets/project-previews/mood-garden/mood garden process.png';
import designMoodImg from '@/assets/project-previews/mood-garden/mood garden preview.png';
import reflectionMoodImg from '@/assets/project-previews/mood-garden/mood garden reflection.png';

export const caseStudyContent = {
  "mood-garden": {
    title: "Mood Garden",
    color: '#B80016',
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
      "potential-expension":[
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
    sections: {
      overview: {
        text: "DailyGround optimiza la experiencia de compra de café...",
      },
      problem: {
        text: "El principal inconveniente detectado fue el tiempo de espera...",
      }
    }
  }
};
