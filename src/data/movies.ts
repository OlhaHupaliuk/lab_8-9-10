import { Movie } from '../types.ts';

export const movies: Movie[] = [
  {
    id: 1,
    img: 'src/assets/superman.jpg',
    title: 'Superman',
    descr: 'Directed by James Gunn, this bold reimagining of the Man of Steel follows Clark Kent as he balances his Kryptonian heritage with his human upbringing. Starring David Corenswet as Superman and Rachel Brosnahan as Lois Lane, the film explores truth, justice, and hope in a world that questions traditional heroism.',
    genre: 'Action',
    sessions: [
      { id: 's1', time: '19:00', hall: 'Hall 1', availableSeats: 40 },
      { id: 's2', time: '20:30', hall: 'Hall 2', availableSeats: 40 },
    ],
  },
  {
    id: 2,
    img: 'src/assets/risk.jpg',
    title: 'Flight Risk',
    descr: 'Directed by Mel Gibson, this high-octane thriller stars Mark Wahlberg as a pilot transporting a dangerous fugitive (Topher Grace). When a storm and betrayal collide, survival hangs in the balance. Michelle Dockery adds intensity to this claustrophobic action ride.',
    genre: 'Thriller',
    sessions: [
      { id: 's16', time: '21:00', hall: 'Hall 1', availableSeats: 35 },
    ],
  },
  {
    id: 3,
    img: 'src/assets/mickey.jpg',
    title: 'Mickey 17',
    descr: 'Bong Joon-ho’s sci-fi thriller stars Robert Pattinson as Mickey, a disposable space colonist cloned after each deadly mission. When one clone survives, chaos ensues, unraveling the truth behind his existence. Packed with dark humor and existential twists, it’s a mind-bending journey through identity and survival.',
    genre: 'Sci-Fi',
    sessions: [
      { id: 's4', time: '18:45', hall: 'Hall 2', availableSeats: 40 },
    ],
  },
  {
    id: 4,
    img: 'src/assets/presence.jpg',
    title: 'Presence',
    descr: 'Directed by Steven Soderbergh, this supernatural thriller tells the story of a family (Lucy Liu, Chris Sullivan) haunted by an unseen entity in their new home. Shot from the perspective of the presence itself, the film delivers a unique and unsettling experience.',
    genre: 'Horror',
    sessions: [
      { id: 's17', time: '21:45', hall: 'Hall 3', availableSeats: 20 },
    ],
  },
  {
    id: 5,
    img: 'src/assets/sinners.jpg',
    title: 'Sinners',
    descr: 'Ryan Coogler’s supernatural horror stars Michael B. Jordan as twin brothers caught in a chilling mystery. Returning to their hometown, they face a malevolent force tied to their past. With Hailee Steinfeld and Delroy Lindo, this gripping tale blends psychological dread with visceral thrills.',
    genre: 'Horror',
    sessions: [
      { id: 's6', time: '22:15', hall: 'Hall 2', availableSeats: 40 },
      { id: 's7', time: '20:00', hall: 'Hall 1', availableSeats: 40 },
    ],
  },
  {
    id: 6,
    img: 'src/assets/lion.jpg',
    title: 'Mufasa: The Lion King',
    descr: 'Directed by Barry Jenkins, this prequel to The Lion King explores the rise of Mufasa, the beloved king of the Pride Lands. With stunning visuals and a powerful voice cast including Aaron Pierre and Kelvin Harrison Jr., the film delves into themes of legacy and leadership.',
    genre: 'Adventure',
    sessions: [
      { id: 's8', time: '17:30', hall: 'Hall 1', availableSeats: 60 },
      { id: 's9', time: '19:45', hall: 'Hall 3', availableSeats: 55 },
    ],
  },
  {
    id: 7,
    img: 'src/assets/Moana.jpg',
    title: 'Moana 2',
    descr: 'Disney’s sequel follows Moana (voiced by Auliʻi Cravalho) on a new oceanic adventure, joined by Maui (Dwayne Johnson) and a fresh crew. Directed by David G. Derrick Jr., this vibrant animated tale explores courage, discovery, and Polynesian culture.',
    genre: 'Animation',
    sessions: [
      { id: 's10', time: '16:30', hall: 'Hall 2', availableSeats: 70 },
      { id: 's11', time: '18:45', hall: 'Hall 1', availableSeats: 65 },
    ],
  },
  {
    id: 8,
    img: 'src/assets/unknown.jpg',
    title: 'A Complete Unknown',
    descr: 'Directed by James Mangold, this biographical drama stars Timothée Chalamet as Bob Dylan, chronicling his rise to fame in the 1960s folk scene. With a stellar cast including Elle Fanning and Boyd Holbrook, the film captures the raw energy of a cultural icon.',
    genre: 'Biography',
    sessions: [
      { id: 's12', time: '20:00', hall: 'Hall 3', availableSeats: 30 },
      { id: 's13', time: '21:30', hall: 'Hall 2', availableSeats: 25 },
    ],
  },
  {
    id: 9,
    img: 'src/assets/heretic.jpg',
    title: 'Heretic',
    descr: 'This chilling horror from A24, directed by Scott Beck and Bryan Woods, stars Hugh Grant as a sinister host who traps two missionaries (Sophie Thatcher and Chloe East). A twisted game of faith and survival unfolds in this unsettling psychological thriller.',
    genre: 'Horror',
    sessions: [
      { id: 's14', time: '22:00', hall: 'Hall 2', availableSeats: 20 },
      { id: 's15', time: '20:15', hall: 'Hall 3', availableSeats: 25 },
    ],
  },
  {
    id: 10,
    img: 'src/assets/jurrasic.png',
    title: 'Jurassic World Rebirth',
    descr: 'The latest chapter in the Jurassic saga, directed by Gareth Edwards, introduces a new team led by Scarlett Johansson and Jonathan Bailey. Tasked with extracting DNA from ancient creatures, they uncover secrets that could reshape life on Earth. This thrilling adventure blends cutting-edge visuals with primal danger.',
    genre: 'Adventure',
    sessions: [
      { id: 's3', time: '20:30', hall: 'Hall 1', availableSeats: 40 },
    ],
  },
  {
    id: 11,
    img: 'src/assets/snowwhite.jpg',
    title: 'Snow White',
    descr: 'Disney’s live-action remake of the 1937 classic brings Rachel Zegler as Snow White and Gal Gadot as the Evil Queen. Directed by Marc Webb, this lush retelling dives into the fairy tale’s magic and menace, exploring themes of courage and envy in a visually spectacular world.',
    genre: 'Fantasy',
    sessions: [
      { id: 's5', time: '21:00', hall: 'Hall 1', availableSeats: 40 },
    ],
  },
  {
    id: 12,
    img: 'src/assets/man.jpg',
    title: 'Better Man',
    descr: 'This unconventional biopic, directed by Michael Gracey, chronicles the life of pop star Robbie Williams, portrayed by a CGI chimpanzee voiced by Jonno Davies. With vibrant musical numbers and a surreal lens, it explores fame, addiction, and redemption.',
    genre: 'Musical',
    sessions: [
      { id: 's18', time: '19:15', hall: 'Hall 2', availableSeats: 45 },
      { id: 's19', time: '20:45', hall: 'Hall 1', availableSeats: 40 },
    ],
  },
];