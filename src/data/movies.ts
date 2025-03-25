import { Movie } from '../types.ts';

export const movies: Movie[] = [
  {
    id: 1,
    img: 'src/assets/inception.jpg',
    title: 'Inception',
    descr: 'Inception is a thrilling, mind-bending movie directed by Christopher Nolan, where a skilled thief who steals secrets through the use of dream-sharing technology is given a chance to have his criminal record erased if he can successfully perform an inception: planting an idea in someone\'s mind without them realizing it.',
    genre: 'Sci-Fi',
    sessions: [
      { id: 's1', time: '2025-04-10 19:00', hall: 'Hall 1', availableSeats: 40 },
      { id: 's2', time: '2025-04-12 20:30', hall: 'Hall 2', availableSeats: 30 },
    ],
  },
  {
    id: 2,
    img: 'src/assets/interstellar.jpg',
    title: 'Interstellar',
    descr: 'In this visually stunning and emotionally charged adventure, a group of astronauts journey through a wormhole to find a new home for humanity as Earth faces environmental collapse. Directed by Christopher Nolan, the film explores themes of love, sacrifice, and the survival of the human race across time and space.',
    genre: 'Adventure',
    sessions: [
      { id: 's3', time: '2025-04-12 20:30', hall: 'Hall 1', availableSeats: 30 },
    ],
  },
  {
    id: 3,
    img: 'src/assets/matrix.jpg',
    title: 'The Matrix',
    descr: 'In this groundbreaking action-packed sci-fi thriller, a computer hacker named Neo discovers that the reality he lives in is actually a simulated construct created by sentient machines to subjugate humanity. With the help of a group of rebels, he sets out to destroy the matrix and uncover the truth about his existence.',
    genre: 'Action',
    sessions: [
      { id: 's4', time: '2025-04-15 18:45', hall: 'Hall 2', availableSeats: 20 },
    ],
  },
  {
    id: 4,
    img: 'src/assets/avatar.jpg',
    title: 'Avatar',
    descr: 'James Cameron’s epic sci-fi adventure transports viewers to the lush, alien world of Pandora, where a paraplegic ex-marine is sent to infiltrate the native Na’vi population. As he forms bonds with the indigenous people and falls in love with their culture, he is forced to choose between serving humanity and protecting the planet\'s fragile ecosystem.',
    genre: 'Fantasy',
    sessions: [
      { id: 's5', time: '2025-04-18 21:00', hall: 'Hall 1', availableSeats: 30 },
    ],
  },
  {
    id: 5,
    img: 'src/assets/joker.jpg',
    title: 'Joker',
    descr: 'A gritty, dark take on the origin of Gotham’s infamous villain, "Joker" follows the descent of Arthur Fleck, a failed comedian with a troubled past, into madness. The film paints a chilling portrait of how societal neglect and personal trauma can lead to the creation of a notorious criminal mastermind.',
    genre: 'Drama',
    sessions: [
      { id: 's6', time: '2025-04-20 22:15', hall: 'Hall 2', availableSeats: 20 },
      { id: 's7', time: '2025-04-22 20:00', hall: 'Hall 1', availableSeats: 30 },
    ],
  },
  {
    id: 6,
    img: 'src/assets/pulp_fiction.jpg',
    title: 'Pulp Fiction',
    descr: 'Quentin Tarantino’s groundbreaking crime drama weaves together multiple interconnected stories about crime, betrayal, and redemption in Los Angeles. Featuring memorable characters, sharp dialogue, and a non-linear narrative, "Pulp Fiction" has become a defining film of the 1990s and a cornerstone of Tarantino’s filmmaking style.',
    genre: 'Crime',
    sessions: [
      { id: 's8', time: '2025-04-22 20:00', hall: 'Hall 2', availableSeats: 20 },
    ],
  },
  {
    id: 7,
    img: 'src/assets/gran_torino.jpg',
    title: 'Gran Torino',
    descr: 'Directed by and starring Clint Eastwood, "Gran Torino" follows the story of Walt Kowalski, a Korean War veteran who develops an unlikely friendship with a young Hmong neighbor. Through their bond, the film explores themes of racial tension, personal redemption, and the power of human connection in overcoming prejudice.',
    genre: 'Drama',
    sessions: [
      { id: 's9', time: '2025-04-25 19:30', hall: 'Hall 1', availableSeats: 40 },
      { id: 's10', time: '2025-04-22 20:30', hall: 'Hall 2', availableSeats: 30 },
    ],
  },
];