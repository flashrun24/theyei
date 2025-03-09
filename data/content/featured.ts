import SpeakerSlider from '../../components/home/SpeakerSlider'
import WorkshopSlider from '../../components/home/WorkshopSlider'

const featured = [
  {
    title: 'EconBowl',
    content:
      'YEI’s Fall Competition, students compete in teams of 3 or 4 for a $1500 Prize Pool.  Competition consists of a Written Exam and Quiz Bowl Rounds. Presented with the Wen & Yung Family Foundation.',
    href: '/events/econbowl',
    imgTitle: 'econbowl',
    subtitle: 'YEI Event',
  },
  {
    title: 'EconOlympiad',
    content:
      'YEI’s Flagship Competition takes place every Spring.  Students compete in small teams to create comprehensive solutions and answer open ended questions. Exclusively available to YEI Members.',
    href: '/events/econolympiad',
    imgTitle: 'econolympiad',
    subtitle: 'YEI Event',
  },
  {
    title: 'EconTalks',
    content:
      'YEI offers public, free speaker events and workshops featuring industry professionals, professors at prestigious universities, business leaders, and policymakers.',
    href: '/events/econtalks',
    imgTitle: 'econtalks',
    subtitle: 'YEI Event',
    Component: SpeakerSlider,
  },
  {
    title: 'FLIP',
    content:
      'YEI’s Financial Literacy Introduction Program (FLIP) is the service arm of our organization.  Through FLIP, our members are empowered to educate their community on Financial Literacy with our comprehensive curriculum and support network.',
    href: '/flip',
    imgTitle: 'flip',
    subtitle: 'YEI Program',
    Component: WorkshopSlider
  },
  {
    title: 'Learning Portal',
    content:
      'YEI’s Learning Portal provides practice resources for the AP Economics exams, National Economics Challenge, EconBowl, EconOlympiad, and more.',
    href: 'https://learn.theyei.org',
    imgTitle: 'learning-portal',
    subtitle: 'YEI Program',
  },
  {
    title: 'WOWS',
    content:
      'Women of Wall Street (WOWS) empowers young women in economics, finance, and business. Through mentorship, industry insights, and networking, participants gain the skills and confidence to break barriers and succeed in the business world.',
    href: '/events/wows',
    imgTitle: 'wows-white',
    subtitle: 'YEI Program',
  },
  {
    title: 'SELC/WELC',
    content:
      'Every Summer and Winter, YEI hosts a leadership conference to help our student leaders and outstanding staff members network, gain valuable leadership experience, and get the up to date information on YEI Programs.',
    href: '/events',
    subtitle: 'YEI Event',
  },
]

export default featured
