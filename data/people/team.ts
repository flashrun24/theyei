type Member = {
  name: string
  positions: string[]
  linkedin?: string
  github?: string
  email?: string
}

const exec: Member[] = [
  {
    name: 'Kayla Lin',
    positions: ['Chief Executive Officer'],
    linkedin: 'kayla-l-22b603238',
  },
  {
    name: 'Jeffery Liu',
    positions: ['Chief Operating Officer'],
    linkedin: 'jeffery-liu-aba437278',
  },
  {
    name: 'Eric Lin',
    positions: ['Chief of Staff'],
    linkedin: 'eric-lin-579b3134b',
    email: 'ericlin@theyei.org',
  },
  {
    name: 'Sepandar Farhood',
    positions: ['VP of Tech'],
    linkedin: 'sepandar-farhood',
    github: 'flashrun24',
  },
  {
    name: 'Kunyuan Zou',
    positions: ['VP of Marketing'],
    linkedin: 'kunyuan-zou-70869924a',
  },
  {
    name: 'Eric Bagg',
    positions: ['VP of Resources'],
    linkedin: 'eric-bagg-b9180b26a',
  },
  {
    name: 'Abhinav Arun',
    positions: ['VP of Finance'],
    linkedin: 'abhinav-a-2577a2285',
  },
  {
    name: 'Gaathri Chakka',
    positions: ['VP of Events'],
    linkedin: 'gaathri-chakka-b20308279',
  },
  {
    name: 'Matias Buitrago',
    positions: ['VP of Clubs'],
    linkedin: 'matias-buitrago-53129a307',
  },
  {
    name: 'Prasanna Chandankhede',
    positions: ['VP of FLIP'],
    linkedin: 'prasanna-chandankhede-328749287',
  },
]

const team: Member[] = [
  {
    name: 'Michael Zhao',
    positions: ['Director of FLIP'],
    linkedin: 'michael-zhao-bb051b256',
  },
  {
    name: 'Yelim Lee',
    positions: ['Club Associate'],
    linkedin: 'yelim-lee-354894239',
  },
  {
    name: 'Drona Gaddam',
    positions: [
      'Finance Team and Curriculum Developer and YEI Podcast Co-Director',
    ],
    linkedin: 'drona-gaddam-359a07281',
  },
  {
    name: 'Deniz Yaveroglu',
    positions: ['FLIP partnership manager'],
    linkedin: 'deniz-yaveroglu-b194bb2ba',
  },
  {
    name: 'Kioni Chong',
    positions: ['Sponsorship and Grant Coordinator'],
  },
  {
    name: 'Sricharan Bala',
    positions: [
      'Sponsorship and Grant Coordinator & FLIP Curriculum Developer',
    ],
    linkedin: 'sricharan-bala-1a717b2bb',
  },
  {
    name: 'Ava Jerman',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'ava-jerman-0b326b2a2',
  },
  {
    name: 'Aahaan Jain',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'aahaan-jain-703794380',
  },
  {
    name: 'Lake Zhou',
    positions: ['Curriculum Developer'],
    linkedin: 'lake-zhou-3183902a8',
  },
  {
    name: 'Auritro Chakraborty',
    positions: ['Curriculum Developer'],
    linkedin: 'auritro-chakraborty-01a4bb245',
  },
  {
    name: 'Shivam Gupta',
    positions: ['Curriculum Developer'],
    linkedin: 'shivam-gupta-878792216',
  },
  {
    name: 'Linus Li',
    positions: ['YEI Podcast Co-Director'],
    linkedin: 'linus-li-6295042a2',
  },
  {
    name: 'Manan Dua',
    positions: ['Head Event Coordinator'],
    linkedin: 'manan-dua-9329172bb',
  },
  {
    name: 'Akshat Ranjan',
    positions: ['Event Coordinator'],
    linkedin: 'akshat-ranjan-b42416358',
  },
  {
    name: 'Eli Orbach',
    positions: ['Event Coordinator'],
    linkedin: 'eli-orbach-92a0b2341',
  },
  {
    name: 'William Kozoman',
    positions: ['Event Coordinator'],
    linkedin: 'william-kozoman',
  },
  {
    name: 'Chriselle Varghese',
    positions: ['Team Ambassador'],
    linkedin: 'chriselle-varghese-541744220',
  },
  {
    name: 'Alex Park',
    positions: ['Team Ambassador'],
    linkedin: 'alex-park-93b155286',
  },
  {
    name: 'Saasthra Bojja',
    positions: ['Team Ambassador'],
    linkedin: 'saasthra-bojja-4b31a3303',
  },
  {
    name: 'Maite Miguez',
    positions: ['Team Ambassador'],
    linkedin: 'maite-miguez-00948a2b1',
  },
  {
    name: 'Satya Dindi',
    positions: ['Team Ambassador'],
    linkedin: 'satya-dindi',
  },
  {
    name: 'Akash Dubey',
    positions: ['Team Ambassador'],
    linkedin: 'akash-dubey-912241311',
  },
  {
    name: 'Aditi Gandhi',
    positions: ['Team Ambassador'],
    linkedin: 'aditi-gandhi-086132399',
  },
  {
    name: 'Lucas Jiang',
    positions: ['Team Ambassador'],
    linkedin: 'lucas-jiang-18a232396',
  },
  {
    name: 'Kayla Anderson',
    positions: ['Marketing Specialist'],
    linkedin: '-kayla-anderson-',
  },
  {
    name: 'Emili Nguyen',
    positions: ['Marketing Specialist'],
    linkedin: 'emili-nguyen-0ab2b638b',
  },
  {
    name: 'Anushka Ramchander',
    positions: ['Marketing Specialist'],
    linkedin: 'anushka-ramchander-b279b8376',
  },
  {
    name: 'Kaitlyn Kwong',
    positions: ['Marketing Specialist'],
    linkedin: 'kaitlyn-kwong-6136212aa',
  },
  {
    name: 'Emma Awoseyi',
    positions: ['Sponsorship and Grant Coordinator', 'Regional Ambassador'],
    linkedin: 'emma-awoseyi',
  },
  {
    name: 'Nikhil Kumar',
    positions: ['Sponsorship and Grant Coordinator', 'Regional Ambassador'],
    linkedin: 'nikhilkumarusa',
  },
  {
    name: 'Peter Yang',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'peter-yang26',
  },
  {
    name: 'Afra Miao',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'afra-miao-0080a2396',
  },
  {
    name: 'Elizabeth Holmes',
    positions: ['Sponsorship and Grant Coordinator'],
    linkedin: 'elizabeth-holmes-29aa9b370',
  },
  {
    name: 'Pratyaksha Sharma',
    positions: ['Regional Ambassador'],
    linkedin: 'pratyaksha-sharma-30a60a23b',
  },
  {
    name: 'Sean Young',
    positions: ['Regional Ambassador'],
    linkedin: 'sean-young-4504531a2',
  },
  {
    name: 'Samay Sikri',
    positions: ['Regional Ambassador'],
    linkedin: 'samaysikri',
  },
  {
    name: 'Tarun Bhuyan',
    positions: ['Regional Ambassador'],
    linkedin: 'tarunbhuyan',
  },
  {
    name: 'Ayush Sharma',
    positions: ['Regional Ambassador'],
  },
  {
    name: 'Alex Melendy',
    positions: ['Regional Ambassador'],
    linkedin: 'alexmelendy',
  },
  {
    name: 'Dinassyl Smadil',
    positions: ['Regional Ambassador'],
    linkedin: 'dinassyl-smadil',
  },
  {
    name: 'Nikhil Godbole',
    positions: ['Team Ambassador'],
  },
]

export { team, exec }
