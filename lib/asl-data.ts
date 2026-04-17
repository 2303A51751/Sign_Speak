export const alphabet = [
  { letter: 'A', image: '/images/asl/letter-a.jpg', description: 'Make a fist with your thumb resting on the side of your index finger.' },
  { letter: 'B', image: '/images/asl/letter-b.jpg', description: 'Hold your palm flat with fingers extended upward and thumb tucked across your palm.' },
  { letter: 'C', image: '/images/asl/letter-c.jpg', description: 'Curve your hand to form a C shape, like you\'re holding a cup.' },
  { letter: 'D', image: '/images/asl/letter-d.jpg', description: 'Point your index finger up while touching your thumb to your other fingers forming a circle.' },
  { letter: 'E', image: '/images/asl/letter-e.jpg', description: 'Curl your fingers with your thumb tucked under your fingertips.' },
  { letter: 'F', image: '/images/asl/letter-f.jpg', description: 'Touch your thumb and index finger to form a circle, extend your other three fingers.' },
  { letter: 'G', image: '/images/asl/letter-g.jpg', description: 'Point your index finger and thumb sideways, parallel to each other.' },
  { letter: 'H', image: '/images/asl/letter-h.jpg', description: 'Extend your index and middle finger horizontally, side by side.' },
  { letter: 'I', image: '/images/asl/letter-i.jpg', description: 'Make a fist with your pinky finger extended upward.' },
  { letter: 'J', image: '/images/asl/letter-j.jpg', description: 'Start with I hand shape and draw a J in the air with your pinky.' },
  { letter: 'K', image: '/images/asl/letter-k.jpg', description: 'Extend index and middle finger in a V, place thumb between them.' },
  { letter: 'L', image: '/images/asl/letter-l.jpg', description: 'Form an L shape with your thumb extended sideways and index finger pointing up.' },
  { letter: 'M', image: '/images/asl/letter-m.jpg', description: 'Place three fingers over your thumb in a fist position.' },
  { letter: 'N', image: '/images/asl/letter-n.jpg', description: 'Place two fingers over your thumb in a fist position.' },
  { letter: 'O', image: '/images/asl/letter-o.jpg', description: 'Curve all fingers to touch your thumb, forming an O shape.' },
  { letter: 'P', image: '/images/asl/letter-p.jpg', description: 'Make a K hand shape and point it downward.' },
  { letter: 'Q', image: '/images/asl/letter-q.jpg', description: 'Make a G hand shape and point it downward.' },
  { letter: 'R', image: '/images/asl/letter-r.jpg', description: 'Cross your index and middle finger, keep other fingers in a fist.' },
  { letter: 'S', image: '/images/asl/letter-s.jpg', description: 'Make a fist with your thumb over your fingers.' },
  { letter: 'T', image: '/images/asl/letter-t.jpg', description: 'Make a fist with your thumb tucked between index and middle finger.' },
  { letter: 'U', image: '/images/asl/letter-u.jpg', description: 'Extend index and middle finger together pointing up.' },
  { letter: 'V', image: '/images/asl/letter-v.jpg', description: 'Extend index and middle finger apart in a V shape.' },
  { letter: 'W', image: '/images/asl/letter-w.jpg', description: 'Extend index, middle, and ring fingers spread apart.' },
  { letter: 'X', image: '/images/asl/letter-x.jpg', description: 'Hook your index finger with other fingers in a fist.' },
  { letter: 'Y', image: '/images/asl/letter-y.jpg', description: 'Extend your pinky and thumb, curl other fingers.' },
  { letter: 'Z', image: '/images/asl/letter-z.jpg', description: 'Draw a Z in the air with your index finger.' },
];

export interface Phrase {
  word: string;
  image: string;
  description: string;
  category: string;
}

export const phrases: Phrase[] = [
  { word: 'Hello', image: '/images/asl/phrase-hello.jpg', description: 'Start with a flat hand at your forehead (like a salute) and move it outward in a wave motion.', category: 'Greetings' },
  { word: 'Thank You', image: '/images/asl/phrase-thankyou.jpg', description: 'Touch your chin with the fingertips of a flat hand, then move your hand forward and down.', category: 'Greetings' },
  { word: 'Please', image: '/images/asl/phrase-please.jpg', description: 'Place your flat hand on your chest and move it in a circular motion.', category: 'Greetings' },
  { word: 'Sorry', image: '/images/asl/phrase-sorry.jpg', description: 'Make a fist with your hand (A handshape) and rub it in a circular motion on your chest.', category: 'Emotions' },
  { word: 'Yes', image: '/images/asl/phrase-yes.jpg', description: 'Make a fist and nod it up and down, like a head nodding yes.', category: 'Basic' },
  { word: 'No', image: '/images/asl/phrase-no.jpg', description: 'Extend your index and middle finger and thumb, then snap them together quickly.', category: 'Basic' },
  { word: 'Help', image: '/images/asl/phrase-help.jpg', description: 'Make a thumbs up with one hand, place it on your flat palm, and lift both hands up.', category: 'Emergency' },
  { word: 'I Love You', image: '/images/asl/phrase-love.jpg', description: 'Extend your thumb, index finger, and pinky while keeping your middle and ring fingers down.', category: 'Emotions' },
  { word: 'Food/Eat', image: '/images/asl/phrase-food.jpg', description: 'Bunch your fingers and thumb together and move them toward your mouth repeatedly.', category: 'Daily Life' },
  { word: 'Water', image: '/images/asl/phrase-water.jpg', description: 'Make a W hand shape and tap your index finger on your chin twice.', category: 'Daily Life' },
  { word: 'Friend', image: '/images/asl/phrase-friend.jpg', description: 'Hook your index fingers together, then reverse their positions.', category: 'People' },
];

export const categories = [
  { name: 'Greetings', icon: '👋', description: 'Common greetings and polite expressions' },
  { name: 'Basic', icon: '✓', description: 'Essential yes/no responses' },
  { name: 'Emotions', icon: '❤️', description: 'Express your feelings' },
  { name: 'Emergency', icon: '🆘', description: 'Important emergency signs' },
  { name: 'Daily Life', icon: '🏠', description: 'Everyday needs and activities' },
  { name: 'People', icon: '👥', description: 'Family, friends, and relationships' },
];
