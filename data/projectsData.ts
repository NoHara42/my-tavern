const projectsData = [
  {
    title: '3D Street-Art Simulator',
    description: `I built a 3D game which runs in the browser using the three.js library.
      It supports multi-touch and can be used best on an android phone.
      In future, I plan to extend the game to be usable on iOS devices and make the game collaborative (ie. multiplayer).
    `,
    imgSrc: '/static/images/csas1.gif',
    href: 'https://collaborative-street-art-sim.herokuapp.com/',
  },
  {
    title: 'Stopping Cues',
    description: `We built a digitally-humane firefox extension, that combats the habits people form when using the infinite scroll.
      It displays a stopwatch that times how long you have been scrolling - it also randomly presents you with funny little messages that politely remind you to stop scrolling.
    `,
    imgSrc: '/static/images/perfect.gif',
    href: 'https://addons.mozilla.org/en-US/firefox/addon/stoppingcues-alpha/',
  },
  {
    title: 'Semantic Movie Recommender',
    description: `(Under reconstruction.) We built a web-app that prompts the user with a small dialogue, asking for the film the user is looking for. Following this, a semantic comparison is made between the user-input and aggregated descriptions of various movie DB APIs.
    `,
    imgSrc: '/static/images/thatOneMovie.gif',
    href: 'https://nohara42.github.io/ThatOneMovie-Front-End/',
  },
  {
    title: 'Brexit Crawler',
    description: `We built a Twitter crawler, (a program that collects data from an API) to analyse the sentiment (reaction) of tweets of various UK newspaper publisher's followers - throughout the Brexit saga.
    `,
    imgSrc: '/static/images/idhPage8.png',
    href: '/static/BrexitTwitterCrawler_DigitalHumanitiesProject.pdf',
  },
]

export default projectsData
