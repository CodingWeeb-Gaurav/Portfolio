// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path is correct for your files
  ],
  theme: {
    extend: {
      colors: {
        // Map your CSS variables to Tailwind color names
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Navy Palette
        navy: {
          "900": "hsl(var(--navy-900))", // Note: you might have to remove "var" from these if they're direct hsl()
          "800": "hsl(var(--navy-800))", // Make sure the HSL values are just numbers if passed to hsl()
          "700": "hsl(var(--navy-700))",
          "600": "hsl(var(--navy-600))",
          "500": "hsl(var(--navy-500))",
        },
        cyber: {
          "400": "hsl(var(--cyber-400))",
          "500": "hsl(var(--cyber-500))",
          "600": "hsl(var(--cyber-600))",
        }
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
    },
  },
  plugins: [], // Add any other plugins you might have here
}