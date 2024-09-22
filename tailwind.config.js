/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],    
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Montserrat', 'sans-serif'], 
            }
        },
    },
    plugins: [],
    safelist: [
        'bg-indigo-100', 'text-indigo-600', 'fill-indigo-400',
        'bg-purple-100', 'text-purple-600', 'fill-purple-400',
        'bg-blue-100', 'text-blue-600', 'fill-blue-400',
        'bg-sky-100', 'text-sky-600', 'fill-sky-400',
        'bg-pink-100', 'text-pink-600', 'fill-pink-400',
        'bg-red-100', 'text-red-600', 'fill-red-400',
        'bg-green-100', 'text-green-600', 'fill-green-400',
        'bg-yellow-100', 'text-yellow-600', 'fill-yellow-400',
        'bg-white', 'text-white', 'fill-white'  // For default case if necessary
    ],
}

