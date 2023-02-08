/* eslint-disable */ 
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      "sm": {"max": "640px"},
      "md": {"min": "640px", "max": "780px"},
      "lg": {"min": "780px", "max": "980px"},
      "sm-h": {'raw': '(max-height: 815px)'},
      "md-h": {'raw': '(min-height: 815px) and (max-height: 956px) and (min-width: 980px)'}
    },
    extend: {
      colors: {
        "accent1": "var(--color-accent1)",
        "accent2": "var(--color-accent2)",
        "accent3": "var(--color-accent3)",
        "accent4": "var(--color-accent4)",
        "accent5": "var(--color-accent5)",
        "accent6": "var(--color-accent6)",
        "accent7": "var(--color-accent7)",
        "accent8": "var(--color-accent8)",
        "accent9": "var(--color-accent9)",
        "accent10": "var(--color-accent10)",
        "accent11": "var(--color-accent11)",
        "accent12": "var(--color-accent12",
        
        "appBackground1": "var(--color-accent5)",
        "appBackground2": "var(--color-accent6)",

        "danger1": "hsl(358, 75.0%, 59.0%)",
        "danger2": "hsl(358, 85.3%, 64.0%)",
        
      },
      "transitionTimingFunction": {
        "basic-transition": "cubic-bezier(.25,.46,.45,.94)"
      },
      "gridTemplateColumns": {
        'app-grid': '1fr 1.35fr',
        'header-grid': 'max-content 1fr'
      },
      "backgroundImage": {
        "vertical-line": "linear-gradient(180deg, rgba(80,79,87,0) 0%, var(--color-gray9) 2%, var(--color-gray9) 98%, rgba(80,79,87,0) 100%);",
        "horizontal-line": "linear-gradient(90deg, rgba(80,79,87,0) 0%, var(--color-gray9) 8%, var(--color-gray9) 92%, rgba(80,79,87,0) 100%);"
      },
      "keyframes": {
        "revealFromLeft": {
          "0%": {
            opacity: "0",
            transform: "translate(-30%, 0%) scale(0.96)"
          },
          "100%": {
            opacity: "1",
            transform: "translate(0, 0) scale(1)"
          }
        },
        "revealOpacity": {
          "from": { opacity: "0" },
          "to": { opacity: "1" }
        },
        "contentSubtleReveal": {
          "from": {
            opacity: "0",
            transform: "scale(0.96)",
          },
          "to": {
            opacity:" 1",
            transform: "scale(1)",
          }
          
        }
      },
      "animation": {
        "reveal-from-left": "revealFromLeft 550ms cubic-bezier(.46,.27,.41,.94) forwards",
        "reveal-opacity": "revealOpacity 550ms var(--transition-basic) forwards",
        "subtle-content-reveal": "contentSubtleReveal 550ms var(--transition-basic)"
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}