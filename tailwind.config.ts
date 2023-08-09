import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  // theme: { container: { center: true } },
  theme: {
    // https://tailwindcss.com/docs/container#centering-by-default
    container: {
      center: true,
    },
    colors: {
      "primary-color": "#FF137D",
      "purple": "#7e5bef",
      "black": "#131313",
      "pink-primary": "#FF137D",
      "orange": "#ff7849",
      "green": "#13ce66",
      "yellow": "#ffc82c",
      "gray-dark": "#273444",
      "gray": "#8492a6",
      "gray-light": "#d3dce6",
      "text-color": "#3F3F3F",
      "bg-newsletter": "#F5EFEA",
      "top-bar-text": "#FFFFFF",
    },
    extend: {
      animation: {
        "slide-left": "slide-left-frame 0.4s ease normal",
        "slide-right": "slide-right-frame 0.4s ease normal",
        "slide-bottom": "slide-bottom-frame 0.4s ease normal",
        "progress": "progress-frame ease normal",
      },
      keyframes: {
        "slide-left-frame": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-frame": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-bottom-frame": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "progress-frame": {
          from: {
            "--dot-progress": "0%",
          },
          to: {
            "--dot-progress": "100%",
          },
        },
      },
      boxShadow: {
        "menu": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
};
