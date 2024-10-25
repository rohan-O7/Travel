/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
       'travel':"url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D')",
       'travel2':"url('https://www.shutterstock.com/shutterstock/photos/794087983/display_1500/stock-vector-travel-doodle-on-black-background-794087983.jpg')"

      },
      colors:{
        'blue':"#1f218f",
        'green':"#e94f26",
        'lightblue':"#4cb6ce",
        'purple':"#835d9c",
        'cream':"	#fffdd0",
        'yellow':"#4B0082",
        'lavender':"#E6E6FA"
      }
    },
  },
  plugins: [],
}

