// All site content lives here. Edit this file to update text, photos and links.
// Photos are placeholders from picsum.photos — replace with your own (put files in /public/images).

export const profile = {
  name: 'Abdul Wahab',
  title: 'Biology Teacher',
  levels: 'IGCSE & O Level',
  location: 'Manas, Kyrgyzstan',
  timeZone: 'Asia/Bishkek',
  years: 7,
  photo: 'https://picsum.photos/seed/abdulwahab/600/600',
  headline: ['Teacher of living things,', 'student of them too.'],
  // Home intro. Plain strings, or { text, tip } for a dotted word with a hover note.
  intro: [
    [
      'I’m Abdul Wahab, a Biology teacher in Manas, Kyrgyzstan. For seven years I’ve spent my days turning ',
      { text: 'osmosis', tip: 'Potato cylinders, salt water, and a lot of surprised faces.' },
      ', ',
      { text: 'genetic crosses', tip: 'Punnett squares that finally make sense.' },
      ' and ',
      { text: 'the beating heart', tip: 'Follow one red blood cell all the way round.' },
      ' into things my students find obvious.',
    ],
    [
      'I teach ',
      { text: 'Cambridge IGCSE', tip: 'Biology 0610 — Core and Extended.' },
      ' and ',
      { text: 'O Level', tip: 'Biology 5090 — theory and practical papers.' },
      ' students, run hands-on ',
      { text: 'practicals', tip: 'Microscopes, food tests, enzyme experiments.' },
      ', and write ',
      { text: 'free revision materials', tip: 'Notes, worksheets and past-paper practice.' },
      ' for anyone who needs them.',
    ],
  ],
  tagline: 'Making the science of life clear, curious and memorable.',
  shortBio:
    'I teach IGCSE and O Level Biology in Manas, Kyrgyzstan. For seven years I have helped students move from memorising facts to genuinely understanding how living things work — and walking into their exams with confidence.',
  bio: [
    'I am a Biology teacher with seven years of classroom experience, currently teaching Cambridge IGCSE and O Level students in Manas, Kyrgyzstan. My work sits at the meeting point of rigorous exam preparation and real scientific curiosity.',
    'I believe biology is best learned by looking closely — at a leaf under a microscope, at a data table from an experiment, at the questions students ask when something surprises them. My lessons combine clear explanations, hands-on practicals and regular exam-style practice so that students understand the "why" as well as the "what".',
    'Outside the classroom I design revision materials, mentor students preparing for science competitions and keep developing my own practice through professional training.',
  ],
  // Replace with your real details
  email: 'abdul.wahab@example.com',
  phone: '+996 000 000 000',
  linkedin: 'https://www.linkedin.com/',
  cvUrl: '#', // e.g. '/Abdul-Wahab-CV.pdf' once you add the file to /public
}

export const stats = [
  { value: '7+', label: 'Years teaching' },
  { value: '500+', label: 'Students taught' },
  { value: '2', label: 'Cambridge syllabuses' },
  { value: 'A*–A', label: 'Top grades achieved' },
]

export const philosophy = [
  {
    title: 'Curiosity first',
    text: 'Every topic starts with a question worth asking. When students want to know the answer, the facts stick.',
  },
  {
    title: 'Learn by doing',
    text: 'Practicals, models and real data turn abstract processes like osmosis or inheritance into something students can see.',
  },
  {
    title: 'Exam-ready, not exam-anxious',
    text: 'Regular past-paper practice and clear mark-scheme feedback build confidence long before exam day.',
  },
  {
    title: 'Every student, every level',
    text: 'Lessons are planned so that students who struggle get support and those who excel get stretched.',
  },
]

export const experience = [
  {
    start: 2021,
    end: null, // null = present
    role: 'Biology Teacher (IGCSE & O Level)',
    place: 'School name, Manas (update)',
    text: 'Teaching Cambridge IGCSE and O Level Biology, leading practical work and preparing students for final examinations.',
  },
  {
    start: 2019,
    end: 2021,
    role: 'Science Teacher',
    place: 'Previous school (update)',
    text: 'Taught general science and biology to lower secondary classes and developed practical lab sessions.',
  },
]

export const education = [
  { period: 'Year', title: 'Master’s / Bachelor’s in Biology (update)', place: 'University name' },
  { period: 'Year', title: 'Teaching qualification (update)', place: 'Institution name' },
]

export const awards = [
  'Cambridge professional development — Teaching IGCSE Biology (update)',
  'Recognised for outstanding student results (update)',
  'Science fair mentor — student project finalist (update)',
]

export const subjects = [
  {
    level: 'IGCSE Biology',
    code: 'Cambridge 0610',
    text: 'Core and Extended curriculum, practical skills and Paper 6 alternative-to-practical preparation.',
  },
  {
    level: 'O Level Biology',
    code: 'Cambridge 5090',
    text: 'Full syllabus coverage with structured exam technique for multiple-choice, theory and practical papers.',
  },
]

export const topics = [
  { name: 'Cells & Organisation', icon: '🔬', text: 'Cell structure, specialised cells, levels of organisation, size of specimens.' },
  { name: 'Movement In & Out of Cells', icon: '💧', text: 'Diffusion, osmosis and active transport with hands-on practicals.' },
  { name: 'Biological Molecules & Enzymes', icon: '🧪', text: 'Carbohydrates, proteins, fats, food tests and enzyme activity.' },
  { name: 'Plant Nutrition', icon: '🌿', text: 'Photosynthesis, leaf structure, limiting factors and mineral requirements.' },
  { name: 'Human Nutrition & Transport', icon: '❤️', text: 'Digestion, the heart, blood vessels and the circulatory system.' },
  { name: 'Gas Exchange & Respiration', icon: '🫁', text: 'Breathing, aerobic and anaerobic respiration.' },
  { name: 'Disease & Immunity', icon: '🛡️', text: 'Pathogens, transmission, defences and vaccination.' },
  { name: 'Coordination & Response', icon: '🧠', text: 'Nervous system, hormones, homeostasis and tropic responses.' },
  { name: 'Reproduction', icon: '🌸', text: 'Asexual and sexual reproduction in plants and humans.' },
  { name: 'Inheritance & Variation', icon: '🧬', text: 'DNA, genetic crosses, mutation, variation and selection.' },
  { name: 'Ecology & Environment', icon: '🌍', text: 'Food chains, nutrient cycles, populations and human impact.' },
  { name: 'Biotechnology', icon: '⚗️', text: 'Genetic modification and the use of microorganisms.' },
]

export const resources = [
  { title: 'Cell Structure — Lesson Plan', level: 'IGCSE', type: 'Lesson plan', topic: 'Cells & Organisation', url: '#' },
  { title: 'Osmosis in Potato Cylinders — Practical Sheet', level: 'IGCSE', type: 'Practical', topic: 'Movement In & Out of Cells', url: '#' },
  { title: 'Enzymes Revision Notes', level: 'O Level', type: 'Notes', topic: 'Biological Molecules & Enzymes', url: '#' },
  { title: 'Photosynthesis Past-Paper Questions', level: 'IGCSE', type: 'Worksheet', topic: 'Plant Nutrition', url: '#' },
  { title: 'The Heart — Labelling Worksheet', level: 'O Level', type: 'Worksheet', topic: 'Human Nutrition & Transport', url: '#' },
  { title: 'Genetic Crosses Step-by-Step', level: 'IGCSE', type: 'Notes', topic: 'Inheritance & Variation', url: '#' },
  { title: 'Homeostasis Lesson Plan', level: 'O Level', type: 'Lesson plan', topic: 'Coordination & Response', url: '#' },
  { title: 'Ecology Field Study Guide', level: 'O Level', type: 'Practical', topic: 'Ecology & Environment', url: '#' },
  { title: 'Paper 6 Practical Skills Checklist', level: 'IGCSE', type: 'Notes', topic: 'Exam technique', url: '#' },
]

// Interactive simulators. Each file lives in /public/simulators/<slug>.html
export const simulators = [
  { slug: 'cells-at-work', title: 'Cells at Work', topic: 'Specialised cells', icon: '🔬',
    text: 'Change a cell’s structure — red blood cell, neurone, ciliated or palisade — and watch what happens to its function.' },
  { slug: 'animal-cell-lab', title: 'Animal Cell Lab', topic: 'Specialised cells', icon: '🩸',
    text: 'Reshape red blood cells, neurones and ciliated cells to see how each adaptation helps the cell do its job.' },
  { slug: 'plant-cell-lab', title: 'Plant Cell Lab', topic: 'Specialised cells', icon: '🌱',
    text: 'Palisade and root hair cells: change one feature at a time and measure light trapped and sugar made.' },
  { slug: 'specialised-cells-lab', title: 'Specialised Cells Lab', topic: 'Cell structure', icon: '🧫',
    text: 'Animated microscope views of specialised cells. Tap an adaptation to light it up and see how it fits the job.' },
  { slug: 'living-plant-cell', title: 'The Living Plant Cell', topic: 'Cell structure', icon: '🍃',
    text: 'A moving leaf cell under the microscope. Tap any part to learn what it does, take the tour, or try the quiz.' },
  { slug: 'cell-injury-lab', title: 'Cell Injury Lab', topic: 'Cell biology · extension', icon: '⚠️',
    text: 'Choose an insult, set its severity and watch one cell move toward recovery, necrosis or apoptosis.' },
  { slug: 'blood-transport-lab', title: 'Blood Transport Lab', topic: 'Transport in animals', icon: '🧪',
    text: 'Five models: mass flow, size and diffusion, a centrifuge, a blood smear and a blood detective challenge.' },
  { slug: 'circulation-lab', title: 'Circulation Lab', topic: 'Transport in animals', icon: '🔄',
    text: 'Double vs single circulation, vessel explorer, vein valves, blood pressure and a name-the-vessels game.' },
  { slug: 'beating-heart', title: 'The Beating Heart', topic: 'Transport in animals', icon: '❤️',
    text: 'See how contraction and valves keep blood flowing one way, and follow a red blood cell round the body.' },
  { slug: 'phagocyte-clotting-lab', title: 'Phagocyte & Clotting Lab', topic: 'Defence against disease', icon: '🛡️',
    text: 'Step through phagocytosis, put the clotting steps in order and run the amplification cascade.' },
  { slug: 'germ-lab', title: 'Germ Lab', topic: 'Disease & food hygiene', icon: '🦠',
    text: 'Grow bacteria at different temperatures, sort risky foods and hygiene rules, and finish with an exit quiz.' },
  { slug: 'fertilisation-in-motion', title: 'Fertilisation in Motion', topic: 'Reproduction', icon: '🌸',
    text: 'Watch a male gamete meet a female gamete, step by step, in humans and in flowering plants.' },
]

export const testimonials = [
  {
    quote: 'Mr. Wahab made genetics finally make sense. I went from a C in mocks to an A* in my final IGCSE.',
    name: 'Student, IGCSE',
  },
  {
    quote: 'Our daughter started looking forward to biology lessons. His feedback on exam papers was detailed and encouraging.',
    name: 'Parent',
  },
  {
    quote: 'The practical lessons were the best part — we actually saw osmosis happen instead of just reading about it.',
    name: 'Student, O Level',
  },
]

export const achievements = [
  { value: '90%', label: 'of students achieved A*–B (update)' },
  { value: '12', label: 'science fair projects mentored (update)' },
  { value: '3', label: 'olympiad participants (update)' },
]

export const gallery = [
  { src: 'https://picsum.photos/seed/biolab1/900/600', caption: 'Microscopy practical' },
  { src: 'https://picsum.photos/seed/biofield2/900/1100', caption: 'Ecology field trip' },
  { src: 'https://picsum.photos/seed/bioclass3/900/600', caption: 'Classroom discussion' },
  { src: 'https://picsum.photos/seed/bioplant4/900/900', caption: 'Plant growth experiment' },
  { src: 'https://picsum.photos/seed/biofair5/900/600', caption: 'Science fair' },
  { src: 'https://picsum.photos/seed/biolab6/900/1100', caption: 'Enzyme investigation' },
  { src: 'https://picsum.photos/seed/bioleaf7/900/600', caption: 'Leaf structure study' },
  { src: 'https://picsum.photos/seed/bioteam8/900/900', caption: 'Student group project' },
  { src: 'https://picsum.photos/seed/bionature9/900/600', caption: 'Outdoor learning' },
]

export const services = [
  { title: 'For students', text: 'Free revision notes, worksheets and practical guides for IGCSE and O Level Biology.', to: '/resources' },
  { title: 'For parents', text: 'Private tutoring and exam preparation sessions, online or in person.', to: '/contact' },
  { title: 'For schools', text: 'An experienced Cambridge Biology teacher. View my CV and teaching approach.', to: '/about' },
]
