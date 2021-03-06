import Title from './Title'
import MicroServiceToMicroFrontend from './MicroServiceToMicroFrontend'
import WhatIsAMicroFrontend from './WhatIsAMicroFrontend'
import WhatIsAMicroFrontendSchema from './WhatIsAMicroFrontendSchema'
import MicroFrontendExamplesTitle from './MicroFrontendExamplesTitle'
import MicroFrontendExamples from './MicroFrontendExamples'
import WhyNotSPAWithVue from './WhyNotSPAWithVue'
import WhatWeHaveInSPAWithVue from './WhatWeHaveInSPAWithVue'
import FeaturedComponents from './FeaturedComponents'
import HowToConstructAMicroFrontend from './HowToConstructAMicroFrontend'
import FirstStepComposition from './FirstStepComposition'
import SecondStepPrepareMainApp from './SecondStepPrepareMainApp'
import CustomElements from './CustomElements'
import DemoTime from './DemoTime'
import WhatsNext from './WhatsNext'
import End from './End'

const slides = [
  {
    component: Title,
    transition: 'fade'
  },
  {
    component: MicroServiceToMicroFrontend,
    transition: 'fade'
  },
  {
    component: WhatIsAMicroFrontend,
    transition: 'fade'
  },
  {
    component: WhatIsAMicroFrontendSchema,
    transition: 'fade',
    data: {
      step: 0
    }
  },
  {
    component: WhatIsAMicroFrontendSchema,
    transition: 'none',
    data: {
      step: 1
    }
  },
  {
    component: WhatIsAMicroFrontendSchema,
    transition: 'none',
    data: {
      step: 2
    }
  },
  {
    component: WhatIsAMicroFrontendSchema,
    transition: 'none',
    data: {
      step: 3
    }
  },
  {
    component: MicroFrontendExamplesTitle,
    transition: 'fade'
  },
  {
    component: MicroFrontendExamples,
    transition: 'fade'
  },
  {
    component: WhyNotSPAWithVue,
    transition: 'fade'
  },
  {
    component: WhatWeHaveInSPAWithVue,
    transition: 'fade'
  },
  {
    component: FeaturedComponents,
    transition: 'fade'
  },
  {
    component: CustomElements,
    transition: 'fade'
  },
  {
    component: HowToConstructAMicroFrontend,
    transition: 'fade'
  },
  {
    component: FirstStepComposition,
    transition: 'fade',
    data: {
      step: 0
    }
  },
  {
    component: FirstStepComposition,
    transition: 'none',
    data: {
      step: 1
    }
  },
  {
    component: FirstStepComposition,
    transition: 'none',
    data: {
      step: 2
    }
  },
  {
    component: FirstStepComposition,
    transition: 'none',
    data: {
      step: 3
    }
  },
  {
    component: SecondStepPrepareMainApp,
    transition: 'fade',
    data: {
      step: 0
    }
  },
  {
    component: SecondStepPrepareMainApp,
    transition: 'none',
    data: {
      step: 1
    }
  },
  {
    component: SecondStepPrepareMainApp,
    transition: 'none',
    data: {
      step: 2
    }
  },
  {
    component: DemoTime,
    transition: 'fade'
  },
  {
    component: WhatsNext,
    transition: 'fade'
  },
  {
    component: End,
    transition: 'fade'
  }
]

export default slides
