export type Lang = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      voice: 'VoicePulse',
      insight: 'InsightAI',
      action: 'ActionSync',
      resources: 'Resources',
      discover: 'Try and discover',
      login: 'Login',
      demo: 'Request Demo',
      explore: 'Explore Kasaji&',
      contact: 'Contact'
    },
    common: {
      brand: 'Kasaji AI',
      homeAria: 'Kasaji AI home',
      logoAlt: 'Kasaji AI logo',
      logoWordmarkAlt: 'Kasaji AI Human Experience',
      switchLanguageAria: 'Switch language',
      toggleMenuAria: 'Toggle menu',
      switchToArabic: 'العربية',
      switchToEnglish: 'English',
      learnMore: 'Learn more',
      previousSolutionAria: 'Previous solution',
      nextSolutionAria: 'Next solution',
      bookDemo: 'Book a Demo',
      requestDemo: 'Request Demo'
    },
    hero: {
      titleLine1: 'Every patient experience',
      titleLine2Before: 'deserves to be truly ',
      titleBase: 'Every patient experience deserves to be truly',
      words: ['understood', 'improved', 'measured', 'personalized', 'transformed'],
      body: 'Kasaji AI helps healthcare organizations understand patient journeys, turn feedback into coordinated action, and improve care experiences with measurable impact.',
      primary: 'Request Demo',
      secondary: 'Explore the platform',
      quote: 'The right signal, at the right moment, before experience becomes a complaint.',
      imageAlt: 'Human-centered healthcare experience',
      signalLabel: 'Experience signal',
      signalStatus: 'Detected early, routed clearly'
    },
    proof: ['Real-time listening', 'Human-centered AI', 'Actionable intelligence', 'Measurable outcomes'],
    story: {
      label: 'The patient experience gap',
      title: 'Healthcare hears patient feedback. Few systems turn it into timely action.',
      body: 'Patient experience is not just a survey score. It is a continuous journey shaped by emotions, expectations, delays, communication, and moments of trust. Yet most healthcare organizations still manage feedback through disconnected tools, delayed reports, and reactive workflows.',
      showDetails: 'Show the gap details',
      hideDetails: 'Hide gap details',
      imageAlt: 'Healthcare team reviewing fragmented patient experience feedback',
      points: [
        'Feedback arrives late, scattered, or without clear ownership',
        'Patient signals are measured, but not always understood in context',
        'Teams see the score, but miss the root cause behind the experience',
        'Issues become complaints before they become improvement opportunities'
      ]
    },
    narrative: {
      label: 'The Kasaji AI platform',
      title: 'Listen. Understand. Act.',
      body: 'A complete experience loop that turns patient voices into better care, stronger loyalty, and smarter operations.',
      flow: ['Listen', 'Understand', 'Act'],
      steps: [
        { title: 'Listen', text: 'Capture patient signals across key moments and channels.' },
        { title: 'Understand', text: 'Reveal themes, emotions, risks, and hidden drivers.' },
        { title: 'Act', text: 'Coordinate the right response with the right team.' }
      ]
    },
    solutions: {
      label: 'Solutions',
      title: 'Three layers. One connected experience system.',
      body: 'The product story is simple: listen deeply, understand intelligently, and act with confidence.',
      learnMore: 'Learn more',
      voice: {
        tag: 'Listening layer',
        title: 'VoicePulse',
        text: 'Capture real patient voices across surveys, interviews, social listening, and care journey touchpoints.'
      },
      insight: {
        tag: 'Intelligence layer',
        title: 'InsightAI',
        text: 'Transform raw feedback into sentiment, themes, predictive signals, and improvement priorities.'
      },
      action: {
        tag: 'Execution layer',
        title: 'ActionSync',
        text: 'Turn insight into coordinated outreach, care recommendations, and operational follow-through.'
      }
    },
    serve: {
      label: 'Whom do we serve',
      title: 'We partner with healthcare leaders shaping better care',
      body: 'We partner with healthcare leaders who strive to deliver exceptional care, improve patient journeys, and build trust through insight-driven innovation.',
      items: [
        {
          title: 'Hospitals and Healthcare Systems',
          text: 'Empowering large-scale institutions with unified data intelligence to streamline operations and enhance patient care across all departments.',
          cta: 'Partner With Us',
          image: 'images/serve-hospitals.png'
        },
        {
          title: 'Healthcare Professionals and Administrators',
          text: 'Equipping decision-makers with real-time insights to drive efficiency, reduce burnout, and lead with confidence.',
          cta: 'Partner With Us',
          image: 'images/serve-professionals.png'
        },
        {
          title: 'Clinics and Specialized Medical Centers',
          text: 'Tailoring precision solutions for specialized care providers to deliver personalized patient experiences and optimize resource allocation.',
          cta: 'Partner With Us',
          image: 'images/serve-clinic.png'
        },
        {
          title: 'Pharmacies & Drug Distributors',
          text: 'Connecting pharmacy networks and distribution chains with intelligent supply analytics to optimize inventory, eliminate waste, and ensure the right medication reaches the right place at the right time.',
          cta: 'Partner With Us',
          image: 'images/serve-pharmacy.png'
        }
      ]
    },
    advantage: {
      label: 'Why Kasaji AI',
      title: 'Human enough for care. Intelligent enough for scale.',
      body: 'Designed for healthcare organizations that want more than reporting. Kasaji AI helps them move from listening to measurable improvement through one connected operating model.',
      stats: [
        { value: '01', label: 'Human-first experience design' },
        { value: '02', label: 'Real-time patient signal intelligence' },
        { value: '03', label: 'Action layer that closes the loop' }
      ]
    },
    faq: {
      label: 'Common Questions',
      title: 'Everything you need to know about Kasaji.AI',
      body: 'Clear answers for healthcare leaders exploring how Kasaji.AI can support patient experience, operations, and measurable improvement.',
      whyLabel: 'Why Kasaji.AI',
      whyTitle: 'Built for healthcare. Designed for measurable impact.',
      whyBody: 'Kasaji.AI connects patient voice, operational signals, and AI-powered intelligence into one practical system that helps healthcare teams understand what is happening, act faster, and improve care experiences with confidence.',
      whyPoints: [
        'Healthcare-specialized intelligence, not generic AI',
        'Built around patient experience, operations, and trust',
        'Turns insight into action across teams and departments'
      ],
      questions: [
        {
          question: 'What exactly is Kasaji.AI?',
          answer: 'Kasaji.AI is a healthcare-specialized intelligence platform that combines AI, behavioral science, and clinical expertise to improve patient experience, streamline operations, and drive measurable outcomes across hospitals, clinics, and healthcare networks.'
        },
        {
          question: 'Who is Kasaji.AI built for?',
          answer: 'Kasaji.AI is built for hospitals, healthcare systems, clinics, specialty centers, healthcare professionals, administrators, pharmacies, and care teams that want to understand patient journeys, improve operational decisions, and deliver more trusted care experiences.'
        },
        {
          question: 'How does the AI integrate with existing systems?',
          answer: 'Kasaji.AI is designed to connect with existing healthcare workflows and data sources through secure integrations, APIs, and configurable implementation paths. The goal is to enhance current systems rather than replace everything your teams already use.'
        },
        {
          question: 'Is patient data safe and compliant?',
          answer: 'Yes. Kasaji.AI is designed with privacy, security, and responsible data handling at the core. Access controls, secure data practices, and compliance-oriented architecture help protect sensitive patient and organizational information.'
        },
        {
          question: 'How long does implementation take?',
          answer: 'Implementation depends on the organization size, selected modules, integrations, and data readiness. Many teams can begin with a focused pilot around one journey, department, or use case before scaling across the organization.'
        },
        {
          question: 'What languages does the platform support?',
          answer: 'Kasaji.AI is designed for multilingual healthcare environments, with support for Arabic and English experiences. Additional language support can be planned based on the organization’s patient population and operating needs.'
        },
        {
          question: 'Can we see a live demo before committing?',
          answer: 'Yes. You can request a live demo to see how Kasaji.AI fits your organization, your patient experience goals, and your operational priorities before making a commitment.'
        }
      ]
    },
    cta: {
      title: 'Ready to turn patient voice into measurable impact?',
      body: 'Start with one journey, one audience, or one experience challenge and see how Kasaji AI connects the whole picture.',
      primary: 'Request Demo',
      secondary: 'Contact us'
    },
    footer: {
      body: 'AI-powered human experience intelligence for healthcare organizations.',
      copyright: 'All rights reserved.'
    },
    requestDemo: {
      kicker: 'Kasaji AI',
      steps: ['We review your needs', 'We prepare a relevant walkthrough', 'We suggest a practical starting point'],
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        phone: { label: 'Phone number', placeholder: '+962 7X XXX XXXX' },
        email: { label: 'Email', placeholder: 'name@company.com' },
        message: { label: 'Message / notes', placeholder: 'Add any details or specific request' }
      },
      submit: 'Submit demo request',
      note: 'The UI is ready and can be connected later to email or an API'
    },
    pages: {
      voice: {
        name: 'VoicePulse',
        kicker: 'The system for modern experience measurement',
        title: 'Hear what patients are really experiencing',
        heroTitleBase: 'The system for modern',
        heroTitleAccent: 'experience measurement.',
        body: 'VoicePulse streamlines feedback collection across the entire care journey, from initial consultation to post-treatment recovery.',
        image: 'images/voicepulse-human.png',
        primaryCta: 'Book a Demo',
        secondaryCta: 'Explore the flow',
        floatingBadge: 'Live patient signal',
        flowHeadingLabel: 'VoicePulse Structure',
        flowHeadingTitle: 'From scattered feedback to a living experience system.',
        quoteLines: ['Are you hearing everything that’s being said —', 'or only what’s being said to you?'],
        visual: {
          patientJourney: 'Patient journey',
          experienceSignalMap: 'Experience Signal Map',
          journeySignals: ['Consultation', 'Admission', 'Treatment', 'Discharge', 'Recovery'],
          metrics: [
            { title: 'NPS', value: '+42' },
            { title: 'CSAT', value: '91%' },
            { title: 'CES', value: 'Low' }
          ],
          feedbackReceived: 'Feedback received',
          surveyEngineTitle: 'Adaptive Survey Engine',
          surveyNodes: ['Patient type', 'Visit context', 'Smart question', 'Follow-up path'],
          logicBranch: 'logic branch',
          recordingLabel: 'REC',
          recordingTime: '00:04:12',
          guidedInterview: 'Guided interview',
          qualitativeCapture: 'Qualitative capture',
          workshopPeople: ['Patient', 'Nurse', 'Doctor', 'Admin'],
          coDesign: 'Co-design',
          monitoringLabel: 'Real-time monitoring',
          sentimentRadar: 'Sentiment Radar',
          channels: ['Reviews', 'Chats', 'Calls', 'Surveys', 'Social'],
          finalEngineTitle: 'Unified Experience Engine',
          finalEngineBody: 'Every signal becomes a measurable operational action.',
          finalEngineItems: ['Feedback', 'Voice', 'Social', 'Insights', 'Actions', 'Reports']
        },
        capabilities: [
          {
            icon: 'survey',
            tag: 'Structure',
            title: 'Intelligent Survey Design',
            text: 'Dynamic frameworks that adapt to patient context. Move beyond static questionnaires with responsive logic that digs deeper into specific care experiences.',
            outcome: 'Better questions, clearer signals'
          },
          {
            icon: 'interview',
            tag: 'Outreach',
            title: 'Computer-Assisted Interviews',
            text: 'Guided telephone interactions for high-touch feedback. Captures nuanced qualitative data alongside standard metrics.',
            outcome: 'Human conversations at scale'
          },
          {
            icon: 'workshop',
            tag: 'Collaboration',
            title: 'Co-Design Workshops',
            text: 'Collaborative sessions bringing patients and staff together to solve systemic issues and design better pathways.',
            outcome: 'Shared ownership of improvement'
          },
          {
            icon: 'sentiment',
            tag: 'Intelligence',
            title: 'Digital Sentiment Monitoring',
            text: 'Real-time analysis of public channels. Detect emerging trends and reputation risks before they impact operational performance.',
            outcome: 'Early warning before escalation'
          }
        ],
        flow: {
          label: 'How VoicePulse works',
          title: 'From scattered feedback to an experience operating system',
          body: 'VoicePulse does not only collect responses. It structures every patient signal so leaders can understand what happened, where it happened, and what needs attention next.',
          steps: [
            { title: 'Capture every relevant signal', text: 'Collect feedback from surveys, calls, workshops, and public digital channels across the full care journey.' },
            { title: 'Preserve context behind the voice', text: 'Connect each signal to the patient moment, service touchpoint, emotional tone, and operational pattern behind it.' },
            { title: 'Prepare insight for action', text: 'Organize patient feedback into a clean intelligence layer ready for analysis, prioritization, and follow-through.' }
          ]
        },
        lead: {
          label: 'Take The Lead',
          title: 'Don’t just measure experience. Engineer it.',
          body: 'Transform scattered feedback into a cohesive strategy for clinical and operational excellence.'
        },
        features: ['Intelligent Survey Design', 'Computer-Assisted Interviews', 'Co-Design Workshops', 'Digital Sentiment Monitoring']
      },
      insight: {
        name: 'InsightAI',
        kicker: 'Advanced insights connecting experience to outcomes',
        title: 'Turn patient sentiment into measurable intelligence',
        heroTitleBase: 'Advanced insights connecting',
        heroTitleAccent: 'experience to outcomes.',
        body: 'Connect experience to behavior, outcomes, and future expectations. A deep analytical approach designed to turn feedback into measurable indicators.',
        image: 'images/insightai-human.png',
        primaryCta: 'Book a Demo',
        secondaryCta: 'Explore insights',
        floatingBadge: 'Outcome signal found',
        flowHeadingLabel: 'InsightAI Intelligence',
        flowHeadingTitle: 'From patient signals to decisions that improve care.',
        human: {
          label: 'Human Understanding',
          title: 'Behind every review',
          accent: 'a person who simply wants to be understood — now and always.'
        },
        cta: {
          label: 'Actionable Intelligence',
          title: 'Turn insights into better outcomes.',
          body: 'Ready to transform experience data into a competitive advantage?'
        },
        quoteLines: ['Every insight here was once a feeling —', 'now it’s the reason you move forward.'],
        visual: {
          pipelineLabel: 'Insight pipeline',
          mapTitle: 'Experience Intelligence Map',
          stages: ['Feedback', 'Behavior', 'Outcome', 'Forecast'],
          rawSignal: 'raw signal',
          processed: 'processed',
          metrics: [
            { title: 'Trust', value: 'High' },
            { title: 'Risk', value: 'Low' },
            { title: 'Next', value: '+18%' }
          ],
          connectedOutcome: 'Experience signal connected to measurable outcome.',
          dataLabel: 'Multi-source data',
          feedbackIndicators: 'Feedback to Indicators',
          streams: ['Surveys', 'Reviews', 'Calls', 'Chats'],
          measurableIndicators: 'Measurable indicators',
          signalsConverted: 'Signals converted into operational insight.',
          languageTone: 'Language and tone',
          emotionInterpreter: 'Emotion Interpreter',
          patientSampleLabel: 'Patient language sample',
          patientSample: 'I felt worried at first, but the nurse explained everything clearly and I finally felt safe.',
          emotions: [
            { label: 'Trust', value: '82%' },
            { label: 'Anxiety', value: '18%' },
            { label: 'Relief', value: '74%' },
            { label: 'Concern', value: '26%' }
          ],
          forecastLabel: 'Forecast: Positive',
          predictiveCurve: 'Predictive Insight Curve',
          positiveTrend: 'Positive trend detected',
          patientIntelligence: 'Patient intelligence',
          behaviorMap: 'Behavior Signal Map',
          behaviorSignals: ['Visits', 'Perception', 'Service', 'Journey'],
          targetReality: 'Target vs Reality',
          gapDetector: 'Experience Gap Detector',
          tableHeaders: ['Metric', 'Target', 'Reality', 'Status'],
          strategyRows: [
            { label: 'Safety', target: '92%', reality: '84%', gap: true },
            { label: 'Satisfaction', target: '88%', reality: '74%', gap: true },
            { label: 'Wait Time', target: '20m', reality: '38m', gap: true },
            { label: 'Outcome', target: 'High', reality: 'Stable', gap: false }
          ],
          gapDetected: 'Gap Detected',
          aligned: 'Aligned',
          expectationCompared: 'Expectations compared with delivered service reality.',
          finalEngineTitle: 'Actionable Intelligence Engine',
          finalEngineBody: 'Insight becomes priority, direction, and measurable action.',
          finalEngineItems: ['Analysis', 'Emotion', 'Forecast', 'Behavior', 'Strategy', 'Action']
        },
        capabilities: [
          {
            icon: 'analysis',
            tag: 'Analysis',
            title: 'Patient Feedback Insights',
            text: 'A deep analytical approach to multi-source experience data, designed to turn feedback into measurable indicators.',
            outcome: 'Feedback becomes measurable intelligence'
          },
          {
            icon: 'emotion',
            tag: 'Emotion',
            title: 'Sentiment & Emotion Insights',
            text: 'Advanced interpretation of patient language and tone to uncover emotional drivers behind the experience, including trust, anxiety, relief, or concern.',
            outcome: 'Emotion becomes visible'
          },
          {
            icon: 'forecast',
            tag: 'Forecast',
            title: 'Predictive Insights',
            text: 'AI-powered forecasting that anticipates what may happen next—before patterns become visible operationally or clinically.',
            outcome: 'Signals become forecasts'
          },
          {
            icon: 'behavior',
            tag: 'Behavior',
            title: 'Patient Intelligence & Experience',
            text: 'A blended analysis of behavioral signals, personal perceptions, and service interactions to reveal deeper layers of the care journey.',
            outcome: 'Behavior becomes context'
          },
          {
            icon: 'strategy',
            tag: 'Strategy',
            title: 'Perspective Insights for Care Improvement',
            text: 'Compares patient expectations with delivered service reality to bridge the gap between perception and operational performance.',
            outcome: 'Gaps become priorities'
          }
        ],
        map: {
          label: 'Insights map',
          title: 'See the gap between what patients expected and what they actually experienced',
          leftLabel: 'Expectation versus reality',
          leftTitle: 'A visual map from perception to performance'
        },
        flow: {
          label: 'Actionable intelligence',
          title: 'Turn insight into better outcomes.',
          steps: [
            { title: 'Read the feeling', text: 'Understand the real emotion behind every experience signal.' },
            { title: 'Find the gap', text: 'Compare expectations, reality, and operational performance.' },
            { title: 'Set the priority', text: 'Reveal what needs attention before it becomes a bigger issue.' }
          ]
        },
        lead: {
          label: 'Actionable intelligence',
          title: 'Turn insights into better outcomes.',
          body: 'Ready to transform experience data into a competitive advantage?'
        },
        features: ['Patient Feedback Insights', 'Sentiment & Emotion Insights', 'Predictive Insights', 'Patient Intelligence & Experience', 'Perspective Insights for Care Improvement']
      },
      action: {
        name: 'ActionSync',
        kicker: 'Real-time execution layer',
        title: 'Move from understanding to execution without delay',
        heroTitleBase: 'A real-time execution layer',
        heroTitleAccent: 'powered by AI.',
        body: 'Turn insights into immediate actions across the care journey. Unlock the full potential of patient experience with an intelligent action layer.',
        image: 'images/actionsync-human.png',
        primaryCta: 'Book a Demo',
        secondaryCta: 'Watch the system move',
        visual: {
          heroSteps: ['Insight', 'Alert', 'Outreach', 'Care Action', 'Resolved'],
          liveSystem: 'Live execution system',
          actionMotion: 'Insight becomes action in motion',
          executionLive: 'Execution live',
          priorityScored: 'Priority scored',
          outreachTriggered: 'Outreach triggered',
          recommendations: ['Adjust care plan', 'Refine service flow', 'Prioritize follow-up', 'Improve responsiveness'],
          assistantMessages: ['I need help with my appointment.', 'I can reschedule it instantly.', 'Can I get Arabic support?', 'Multilingual support is active.'],
          teams: ['Clinical', 'Admin', 'Support', 'Operations'],
          synced: 'Synced',
          bottlenecks: 'Bottlenecks routed automatically',
          navigatorSteps: ['Appointment', 'Visit', 'Follow-up', 'Adherence'],
          realTimeGuidance: 'Real-time guidance',
          navigatorResult: 'Navigator result',
          navigatorContinuity: 'Less confusion. Better continuity.',
          activeGuidance: 'Active journey guidance',
          finalRows: [
            { label: 'Alert', status: 'Triggered' },
            { label: 'Outreach', status: 'In motion' },
            { label: 'Care action', status: 'Recommended' },
            { label: 'Coordination', status: 'Synced' },
            { label: 'Navigator', status: 'Guiding' }
          ]
        },
        execution: {
          label: 'ActionSync Execution Layer',
          title: 'Not a dashboard. A system that moves when insight appears.',
          story: [
            { eyebrow: 'Alert Automation • Patient Interaction', title: 'Proactive Patient Outreach & Complaint Resolution', body: 'Preemptive intervention reduces escalation and transforms potential complaints into opportunities for increased trust and satisfaction.' },
            { eyebrow: 'Clinical Intelligence • Care Optimization', title: 'Experience-Driven Care Recommendations', body: 'Transform experience insights into actionable clinical and operational decisions in real time.' },
            { eyebrow: 'Conversational AI • Chatbots', title: 'Virtual Health Assistants', body: 'Instant, multilingual support across digital and physical channels — anytime, anywhere.' },
            { eyebrow: 'Team Coordination • Workflow Automation', title: 'AI-Powered Care Coordination Agents', body: 'Automate coordination across clinical, administrative, and support teams without bottlenecks.' }
          ]
        },
        quoteLines: ['This is where understanding becomes motion —', 'and motion becomes lasting change.'],
        navigator: {
          label: 'Journey Mapping • Autonomous Agents',
          title: 'Agentic AI–Enabled Care Navigator',
          body: 'Guide patients through their care journey with intelligent, real-time navigation — from appointments to follow-up reminders.'
        },
        human: {
          label: 'Human Understanding',
          title: 'Behind every review',
          accent: 'a person who simply wants to be understood — now and always.'
        },
        cta: {
          label: 'Actionable Intelligence',
          title: 'Turn insights into better outcomes.',
          body: 'Ready to transform experience data into a competitive advantage?'
        },
        features: [
          'Proactive Patient Outreach & Complaint Resolution',
          'Experience-Driven Care Recommendations',
          'Virtual Health Assistants',
          'AI-Powered Care Coordination Agents',
          'Agentic AI–Enabled Care Navigator'
        ]
      }
    },
    simple: {
      kicker: 'Kasaji AI',
      resources: {
        title: 'Resources',
        body: 'Articles, events, customer stories, and practical knowledge will live here as the Kasaji AI knowledge hub grows.'
      },
      discover: {
        title: 'Try and discover',
        body: 'Interactive experiences for survey building, patient journey intelligence, social listening, and outreach agents.'
      },
      login: {
        title: 'Login',
        body: 'A secure access area for Kasaji AI users will be available here.'
      },
      demo: {
        title: 'Request Demo',
        body: 'Tell us about your organization and we will show you how Kasaji AI can support your patient experience goals.'
      },
      explore: {
        title: 'Explore Kasaji&',
        body: 'Return to the wider Kasaji ecosystem and explore connected services.'
      }
    },
    solutionPage: {
      howItHelps: 'How it helps',
      designedTitle: 'Designed around real human moments',
      designedBody: 'A standalone page structure makes this service easy to edit, extend, and localize without touching the rest of the website',
      fallbackStep: 'Connects the moment to a measurable improvement pathway',
      operatingFlow: 'Operating flow',
      flows: {
        voice: ['Define the experience moment', 'Select audience and channel', 'Capture signals while context is fresh', 'Feed intelligence into the platform'],
        insight: ['Unify feedback and operational context', 'Detect sentiment, themes, and hidden drivers', 'Predict risk before escalation', 'Prioritize the highest-impact opportunities'],
        action: ['Classify the issue and urgency', 'Recommend the next best response', 'Coordinate clinical and operational owners', 'Close the loop and measure impact']
      }
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      voice: 'VoicePulse',
      insight: 'InsightAI',
      action: 'ActionSync',
      resources: 'الموارد',
      discover: 'جرّب واكتشف',
      login: 'تسجيل الدخول',
      demo: 'طلب عرض',
      explore: 'استكشف Kasaji&',
      contact: 'تواصل معنا'
    },
    common: {
      brand: 'Kasaji AI',
      homeAria: 'العودة إلى الصفحة الرئيسية لـ Kasaji AI',
      logoAlt: 'شعار Kasaji AI',
      logoWordmarkAlt: 'Kasaji AI Human Experience',
      switchLanguageAria: 'تغيير اللغة',
      toggleMenuAria: 'فتح أو إغلاق القائمة',
      switchToArabic: 'العربية',
      switchToEnglish: 'English',
      learnMore: 'اعرف أكثر',
      previousSolutionAria: 'الحل السابق',
      nextSolutionAria: 'الحل التالي',
      bookDemo: 'احجز عرضًا',
      requestDemo: 'طلب عرض'
    },
    hero: {
      titleLine1: 'كل تجربة مريض',
      titleLine2Before: 'تستحق أن تكون ',
      titleBase: 'كل تجربة مريض تستحق أن تكون',
      words: ['مفهومة', 'محسّنة', 'مقاسة', 'شخصية', 'متحوّلة'],
      body: 'تساعد Kasaji AI مؤسسات الرعاية الصحية على فهم رحلات المرضى، وتحويل الملاحظات إلى إجراءات منسقة، وتحسين تجارب الرعاية بأثر قابل للقياس.',
      primary: 'طلب عرض',
      secondary: 'استكشف المنصة',
      quote: 'الإشارة الصحيحة، في اللحظة الصحيحة، قبل أن تتحول التجربة إلى شكوى.',
      imageAlt: 'تجربة صحية إنسانية تتمحور حول المريض',
      signalLabel: 'إشارة تجربة',
      signalStatus: 'تم اكتشافها مبكرًا وتوجيهها بوضوح'
    },
    proof: ['استماع لحظي', 'ذكاء إنساني التوجه', 'رؤى قابلة للتنفيذ', 'نتائج قابلة للقياس'],
    story: {
      label: 'فجوة تجربة المريض',
      title: 'الرعاية الصحية تسمع ملاحظات المرضى. لكن القليل من الأنظمة يحولها إلى إجراء في الوقت المناسب.',
      body: 'تجربة المريض ليست مجرد نتيجة استبيان. إنها رحلة مستمرة تتشكل عبر المشاعر، التوقعات، التأخير، التواصل، ولحظات الثقة. ومع ذلك، ما زالت معظم مؤسسات الرعاية الصحية تدير الملاحظات عبر أدوات منفصلة وتقارير متأخرة وسير عمل تفاعلي.',
      showDetails: 'عرض تفاصيل الفجوة',
      hideDetails: 'إخفاء تفاصيل الفجوة',
      imageAlt: 'فريق رعاية صحية يراجع ملاحظات متفرقة حول تجربة المرضى',
      points: [
        'تصل الملاحظات متأخرة أو متفرقة أو بدون ملكية واضحة',
        'تُقاس إشارات المرضى لكن لا تُفهم دائمًا ضمن سياقها',
        'ترى الفرق النتيجة لكنها تفوّت السبب الجذري خلف التجربة',
        'تتحول المشاكل إلى شكاوى قبل أن تصبح فرصًا للتحسين'
      ]
    },
    narrative: {
      label: 'منصة Kasaji AI',
      title: 'استمع. افهم. تحرّك.',
      body: 'حلقة تجربة متكاملة تحول أصوات المرضى إلى رعاية أفضل وولاء أقوى وعمليات أذكى.',
      flow: ['استمع', 'افهم', 'تحرّك'],
      steps: [
        { title: 'استمع', text: 'التقط إشارات المرضى عبر اللحظات والقنوات الأساسية.' },
        { title: 'افهم', text: 'اكشف المواضيع والمشاعر والمخاطر والمحركات المخفية.' },
        { title: 'تحرّك', text: 'نسّق الاستجابة المناسبة مع الفريق المناسب.' }
      ]
    },
    solutions: {
      label: 'الحلول',
      title: 'ثلاث طبقات. نظام تجربة واحد متصل.',
      body: 'قصة المنتج بسيطة: استمع بعمق، افهم بذكاء، وتحرّك بثقة.',
      learnMore: 'اعرف أكثر',
      voice: {
        tag: 'طبقة الاستماع',
        title: 'VoicePulse',
        text: 'التقط أصوات المرضى الحقيقية عبر الاستبيانات والمقابلات والاستماع الاجتماعي ونقاط رحلة الرعاية.'
      },
      insight: {
        tag: 'طبقة الذكاء',
        title: 'InsightAI',
        text: 'حوّل الملاحظات الخام إلى مشاعر ومواضيع وإشارات تنبؤية وأولويات تحسين.'
      },
      action: {
        tag: 'طبقة التنفيذ',
        title: 'ActionSync',
        text: 'حوّل الرؤى إلى تواصل منسق وتوصيات رعاية ومتابعة تشغيلية.'
      }
    },
    serve: {
      label: 'من نخدم',
      title: 'نشارك قادة الرعاية الصحية في صناعة رعاية أفضل',
      body: 'نشارك قادة الرعاية الصحية الذين يسعون لتقديم رعاية مميزة، وتحسين رحلات المرضى، وبناء الثقة عبر الابتكار المعتمد على الرؤى.',
      items: [
        {
          title: 'المستشفيات والأنظمة الصحية',
          text: 'تمكين المؤسسات واسعة النطاق بذكاء بيانات موحد لتسهيل العمليات وتحسين رعاية المرضى عبر جميع الأقسام.',
          cta: 'تعاون معنا',
          image: 'images/serve-hospitals.png'
        },
        {
          title: 'المهنيون الصحيون والإداريون',
          text: 'تزويد صناع القرار برؤى لحظية لرفع الكفاءة وتقليل الإرهاق والقيادة بثقة.',
          cta: 'تعاون معنا',
          image: 'images/serve-professionals.png'
        },
        {
          title: 'العيادات والمراكز الطبية المتخصصة',
          text: 'تخصيص حلول دقيقة لمقدمي الرعاية المتخصصة لتقديم تجارب مرضى شخصية وتحسين توزيع الموارد.',
          cta: 'تعاون معنا',
          image: 'images/serve-clinic.png'
        },
        {
          title: 'الصيدليات وموزعو الأدوية',
          text: 'ربط شبكات الصيدليات وسلاسل التوزيع بتحليلات توريد ذكية لتحسين المخزون وتقليل الهدر وضمان وصول الدواء المناسب إلى المكان المناسب في الوقت المناسب.',
          cta: 'تعاون معنا',
          image: 'images/serve-pharmacy.png'
        }
      ]
    },
    advantage: {
      label: 'لماذا Kasaji AI',
      title: 'إنساني بما يكفي للرعاية. وذكي بما يكفي للتوسع.',
      body: 'مصمم لمؤسسات الرعاية الصحية التي تريد أكثر من التقارير. تساعد Kasaji AI على الانتقال من الاستماع إلى تحسين قابل للقياس عبر نموذج تشغيلي واحد متصل.',
      stats: [
        { value: '01', label: 'تصميم تجربة يتمحور حول الإنسان' },
        { value: '02', label: 'ذكاء لحظي لإشارات المرضى' },
        { value: '03', label: 'طبقة تنفيذ تغلق الحلقة' }
      ]
    },
    faq: {
      label: 'الأسئلة الشائعة',
      title: 'كل ما تحتاج معرفته عن Kasaji.AI',
      body: 'إجابات واضحة لقادة الرعاية الصحية حول كيف يمكن لـ Kasaji.AI دعم تجربة المريض والعمليات والتحسين القابل للقياس.',
      whyLabel: 'لماذا Kasaji.AI',
      whyTitle: 'مصمم للرعاية الصحية. ومبني لتحقيق أثر قابل للقياس.',
      whyBody: 'تربط Kasaji.AI صوت المريض والإشارات التشغيلية والذكاء الاصطناعي ضمن نظام عملي واحد يساعد فرق الرعاية الصحية على فهم ما يحدث، والتحرك بشكل أسرع، وتحسين تجارب الرعاية بثقة.',
      whyPoints: [
        'ذكاء متخصص في الرعاية الصحية وليس ذكاءً عامًا',
        'مبني حول تجربة المريض والعمليات والثقة',
        'يحوّل الرؤى إلى إجراءات قابلة للتنفيذ عبر الفرق والأقسام'
      ],
      questions: [
        {
          question: 'ما هي Kasaji.AI بالضبط؟',
          answer: 'Kasaji.AI هي منصة ذكاء متخصصة في الرعاية الصحية تجمع بين الذكاء الاصطناعي وعلم السلوك والخبرة السريرية لتحسين تجربة المريض وتسهيل العمليات وتحقيق نتائج قابلة للقياس عبر المستشفيات والعيادات وشبكات الرعاية الصحية.'
        },
        {
          question: 'لمن تم بناء Kasaji.AI؟',
          answer: 'تم بناء Kasaji.AI للمستشفيات والأنظمة الصحية والعيادات والمراكز المتخصصة والمهنيين الصحيين والإداريين والصيدليات وفرق الرعاية التي تريد فهم رحلات المرضى وتحسين القرارات التشغيلية وتقديم تجارب رعاية أكثر ثقة.'
        },
        {
          question: 'كيف يتكامل الذكاء الاصطناعي مع الأنظمة الحالية؟',
          answer: 'تم تصميم Kasaji.AI للتكامل مع سير العمل ومصادر البيانات الحالية من خلال تكاملات آمنة وواجهات API ومسارات تنفيذ قابلة للتخصيص. الهدف هو تعزيز الأنظمة الحالية بدلًا من استبدال كل ما تستخدمه الفرق.'
        },
        {
          question: 'هل بيانات المرضى آمنة ومتوافقة؟',
          answer: 'نعم. تم تصميم Kasaji.AI مع التركيز على الخصوصية والأمان والتعامل المسؤول مع البيانات. تساعد ضوابط الوصول والممارسات الآمنة والبنية الموجهة للامتثال على حماية بيانات المرضى والمؤسسة.'
        },
        {
          question: 'كم يستغرق التنفيذ؟',
          answer: 'يعتمد وقت التنفيذ على حجم المؤسسة والوحدات المختارة والتكاملات وجاهزية البيانات. يمكن للعديد من الفرق البدء بتجربة مركزة حول رحلة واحدة أو قسم واحد أو حالة استخدام محددة قبل التوسع.'
        },
        {
          question: 'ما اللغات التي تدعمها المنصة؟',
          answer: 'تم تصميم Kasaji.AI لبيئات الرعاية الصحية متعددة اللغات، مع دعم للتجارب العربية والإنجليزية. ويمكن التخطيط لدعم لغات إضافية حسب احتياجات المؤسسة وفئات المرضى.'
        },
        {
          question: 'هل يمكننا مشاهدة عرض حي قبل الالتزام؟',
          answer: 'نعم. يمكنك طلب عرض حي لرؤية كيف تناسب Kasaji.AI مؤسستك وأهداف تجربة المريض وأولوياتك التشغيلية قبل اتخاذ القرار.'
        }
      ]
    },
    cta: {
      title: 'جاهز لتحويل صوت المريض إلى أثر قابل للقياس؟',
      body: 'ابدأ برحلة واحدة أو جمهور واحد أو تحدٍ واحد في التجربة، وشاهد كيف تربط Kasaji AI الصورة كاملة.',
      primary: 'طلب عرض',
      secondary: 'تواصل معنا'
    },
    footer: {
      body: 'ذكاء اصطناعي للتجربة الإنسانية في المؤسسات الصحية.',
      copyright: 'جميع الحقوق محفوظة.'
    },
    requestDemo: {
      kicker: 'Kasaji AI',
      steps: ['نراجع احتياجك', 'نجهّز عرض مناسب', 'نقترح بداية عملية قابلة للتطبيق'],
      fields: {
        name: { label: 'الاسم', placeholder: 'اكتب اسمك' },
        phone: { label: 'رقم الهاتف', placeholder: '+962 7X XXX XXXX' },
        email: { label: 'الإيميل', placeholder: 'name@company.com' },
        message: { label: 'رسالة / ملاحظات', placeholder: 'اكتب أي تفاصيل أو طلب محدد' }
      },
      submit: 'إرسال طلب العرض',
      note: 'النموذج جاهز للواجهة، ويمكن ربطه لاحقًا بالإيميل أو API'
    },
    pages: {
      voice: {
        name: 'VoicePulse',
        kicker: 'نظام حديث لقياس التجربة',
        title: 'اسمع ما يعيشه المرضى فعلًا',
        heroTitleBase: 'النظام الحديث لـ',
        heroTitleAccent: 'قياس التجربة.',
        body: 'يساعد VoicePulse على تنظيم جمع الملاحظات عبر رحلة الرعاية كاملة، من الاستشارة الأولى وحتى مرحلة التعافي بعد العلاج.',
        image: 'images/voicepulse-human.png',
        primaryCta: 'احجز عرضًا',
        secondaryCta: 'استكشف المسار',
        floatingBadge: 'إشارة مريض مباشرة',
        flowHeadingLabel: 'هيكل VoicePulse',
        flowHeadingTitle: 'من ملاحظات متفرقة إلى نظام تجربة حي.',
        quoteLines: ['هل تسمع كل ما يُقال فعلًا —', 'أم فقط ما يُقال لك مباشرة؟'],
        visual: {
          patientJourney: 'رحلة المريض',
          experienceSignalMap: 'خريطة إشارات التجربة',
          journeySignals: ['الاستشارة', 'الدخول', 'العلاج', 'الخروج', 'التعافي'],
          metrics: [
            { title: 'NPS', value: '+42' },
            { title: 'CSAT', value: '91%' },
            { title: 'CES', value: 'منخفض' }
          ],
          feedbackReceived: 'تم استلام ملاحظة',
          surveyEngineTitle: 'محرك استبيانات تكيفي',
          surveyNodes: ['نوع المريض', 'سياق الزيارة', 'سؤال ذكي', 'مسار متابعة'],
          logicBranch: 'فرع منطقي',
          recordingLabel: 'تسجيل',
          recordingTime: '00:04:12',
          guidedInterview: 'مقابلة موجهة',
          qualitativeCapture: 'التقاط نوعي',
          workshopPeople: ['مريض', 'ممرضة', 'طبيب', 'إداري'],
          coDesign: 'تصميم تشاركي',
          monitoringLabel: 'رصد لحظي',
          sentimentRadar: 'رادار المشاعر',
          channels: ['التقييمات', 'المحادثات', 'المكالمات', 'الاستبيانات', 'التواصل الاجتماعي'],
          finalEngineTitle: 'محرك تجربة موحد',
          finalEngineBody: 'كل إشارة تتحول إلى إجراء تشغيلي قابل للقياس.',
          finalEngineItems: ['ملاحظات', 'صوت', 'اجتماعي', 'رؤى', 'إجراءات', 'تقارير']
        },
        capabilities: [
          {
            icon: 'survey',
            tag: 'الهيكلة',
            title: 'تصميم استبيانات ذكية',
            text: 'أطر ديناميكية تتكيف مع سياق المريض. انتقل من الأسئلة الثابتة إلى منطق تفاعلي يكشف تفاصيل أعمق عن تجربة الرعاية.',
            outcome: 'أسئلة أفضل وإشارات أوضح'
          },
          {
            icon: 'interview',
            tag: 'التواصل',
            title: 'مقابلات مدعومة بالحاسوب',
            text: 'تفاعلات هاتفية موجهة للحصول على ملاحظات عالية اللمسة. تلتقط بيانات نوعية دقيقة إلى جانب المؤشرات القياسية.',
            outcome: 'محادثات إنسانية قابلة للتوسع'
          },
          {
            icon: 'workshop',
            tag: 'التعاون',
            title: 'ورش تصميم تشاركية',
            text: 'جلسات تجمع المرضى والموظفين معًا لحل المشكلات النظامية وتصميم مسارات أفضل للرعاية.',
            outcome: 'ملكية مشتركة للتحسين'
          },
          {
            icon: 'sentiment',
            tag: 'الذكاء',
            title: 'رصد المشاعر الرقمية',
            text: 'تحليل لحظي للقنوات العامة. يرصد الاتجاهات الناشئة ومخاطر السمعة قبل أن تؤثر على الأداء التشغيلي.',
            outcome: 'إنذار مبكر قبل التصعيد'
          }
        ],
        flow: {
          label: 'كيف يعمل VoicePulse',
          title: 'من ملاحظات متفرقة إلى نظام تشغيلي للتجربة',
          body: 'لا يكتفي VoicePulse بجمع الإجابات، بل ينظم كل إشارة من المريض بحيث تفهم القيادات ماذا حدث، وأين حدث، وما الذي يحتاج إلى انتباه.',
          steps: [
            { title: 'التقاط كل إشارة مهمة', text: 'جمع الملاحظات من الاستبيانات والمكالمات والورش والقنوات الرقمية عبر رحلة الرعاية كاملة.' },
            { title: 'الحفاظ على سياق الصوت', text: 'ربط كل إشارة بلحظة المريض ونقطة الخدمة والنبرة العاطفية والنمط التشغيلي خلفها.' },
            { title: 'تجهيز الرؤى للتنفيذ', text: 'تنظيم ملاحظات المرضى ضمن طبقة ذكاء واضحة وجاهزة للتحليل وتحديد الأولويات والمتابعة.' }
          ]
        },
        lead: {
          label: 'قد التجربة',
          title: 'لا تكتفِ بقياس التجربة. صمّمها.',
          body: 'حوّل الملاحظات المتفرقة إلى استراتيجية متماسكة للتميز السريري والتشغيلي.'
        },
        features: ['تصميم استبيانات ذكية', 'مقابلات مدعومة بالحاسوب', 'ورش تصميم تشاركية', 'رصد المشاعر الرقمية']
      },
      insight: {
        name: 'InsightAI',
        kicker: 'رؤى متقدمة تربط التجربة بالنتائج',
        title: 'حوّل مشاعر المرضى إلى ذكاء قابل للقياس',
        heroTitleBase: 'رؤى متقدمة تربط',
        heroTitleAccent: 'التجربة بالنتائج.',
        body: 'اربط التجربة بالسلوك والنتائج والتوقعات المستقبلية. نهج تحليلي عميق مصمم لتحويل الملاحظات إلى مؤشرات قابلة للقياس.',
        image: 'images/insightai-human.png',
        primaryCta: 'احجز عرضًا',
        secondaryCta: 'استكشف الرؤى',
        floatingBadge: 'تم العثور على إشارة نتيجة',
        flowHeadingLabel: 'ذكاء InsightAI',
        flowHeadingTitle: 'من إشارات المرضى إلى قرارات تحسن الرعاية.',
        human: {
          label: 'فهم إنساني',
          title: 'خلف كل تقييم',
          accent: 'شخص يريد ببساطة أن يُفهم — الآن ودائمًا.'
        },
        cta: {
          label: 'ذكاء قابل للتنفيذ',
          title: 'حوّل الرؤى إلى نتائج أفضل.',
          body: 'جاهز لتحويل بيانات التجربة إلى ميزة تنافسية؟'
        },
        quoteLines: ['كل رؤية هنا كانت شعورًا في البداية —', 'والآن أصبحت سببًا للتحرك.'],
        visual: {
          pipelineLabel: 'مسار الرؤى',
          mapTitle: 'خريطة ذكاء التجربة',
          stages: ['ملاحظات', 'سلوك', 'نتيجة', 'توقع'],
          rawSignal: 'إشارة خام',
          processed: 'معالجة',
          metrics: [
            { title: 'الثقة', value: 'عالية' },
            { title: 'الخطر', value: 'منخفض' },
            { title: 'التالي', value: '+18%' }
          ],
          connectedOutcome: 'تم ربط إشارة التجربة بنتيجة قابلة للقياس.',
          dataLabel: 'بيانات متعددة المصادر',
          feedbackIndicators: 'من الملاحظات إلى المؤشرات',
          streams: ['استبيانات', 'تقييمات', 'مكالمات', 'محادثات'],
          measurableIndicators: 'مؤشرات قابلة للقياس',
          signalsConverted: 'تم تحويل الإشارات إلى رؤية تشغيلية.',
          languageTone: 'اللغة والنبرة',
          emotionInterpreter: 'مفسر المشاعر',
          patientSampleLabel: 'عينة من لغة المريض',
          patientSample: 'شعرت بالقلق في البداية، لكن الممرضة شرحت كل شيء بوضوح وشعرت أخيرًا بالأمان.',
          emotions: [
            { label: 'الثقة', value: '82%' },
            { label: 'القلق', value: '18%' },
            { label: 'الارتياح', value: '74%' },
            { label: 'الانزعاج', value: '26%' }
          ],
          forecastLabel: 'التوقع: إيجابي',
          predictiveCurve: 'منحنى الرؤية التنبؤية',
          positiveTrend: 'تم رصد اتجاه إيجابي',
          patientIntelligence: 'ذكاء المريض',
          behaviorMap: 'خريطة إشارات السلوك',
          behaviorSignals: ['زيارات', 'انطباع', 'خدمة', 'رحلة'],
          targetReality: 'الهدف مقابل الواقع',
          gapDetector: 'كاشف فجوة التجربة',
          tableHeaders: ['المؤشر', 'الهدف', 'الواقع', 'الحالة'],
          strategyRows: [
            { label: 'السلامة', target: '92%', reality: '84%', gap: true },
            { label: 'الرضا', target: '88%', reality: '74%', gap: true },
            { label: 'وقت الانتظار', target: '20د', reality: '38د', gap: true },
            { label: 'النتيجة', target: 'عالية', reality: 'مستقرة', gap: false }
          ],
          gapDetected: 'تم رصد فجوة',
          aligned: 'متوافق',
          expectationCompared: 'تمت مقارنة التوقعات مع واقع الخدمة المقدمة.',
          finalEngineTitle: 'محرك ذكاء قابل للتنفيذ',
          finalEngineBody: 'الرؤية تتحول إلى أولوية واتجاه وإجراء قابل للقياس.',
          finalEngineItems: ['تحليل', 'مشاعر', 'توقع', 'سلوك', 'استراتيجية', 'إجراء']
        },
        capabilities: [
          {
            icon: 'analysis',
            tag: 'تحليل',
            title: 'رؤى ملاحظات المرضى',
            text: 'نهج تحليلي عميق لبيانات التجربة متعددة المصادر، مصمم لتحويل الملاحظات إلى مؤشرات قابلة للقياس.',
            outcome: 'الملاحظات تصبح ذكاءً قابلًا للقياس'
          },
          {
            icon: 'emotion',
            tag: 'المشاعر',
            title: 'تحليل المشاعر والعواطف',
            text: 'تفسير متقدم للغة المريض ونبرته لكشف الدوافع العاطفية خلف التجربة، مثل الثقة أو القلق أو الارتياح أو الانزعاج.',
            outcome: 'المشاعر تصبح واضحة'
          },
          {
            icon: 'forecast',
            tag: 'التوقع',
            title: 'رؤى تنبؤية',
            text: 'توقعات مدعومة بالذكاء الاصطناعي تستبق ما قد يحدث قبل أن تظهر الأنماط تشغيليًا أو سريريًا.',
            outcome: 'الإشارات تصبح توقعات'
          },
          {
            icon: 'behavior',
            tag: 'السلوك',
            title: 'ذكاء تجربة المريض',
            text: 'تحليل يمزج بين الإشارات السلوكية والانطباعات الشخصية وتفاعلات الخدمة لكشف طبقات أعمق من رحلة الرعاية.',
            outcome: 'السلوك يصبح سياقًا'
          },
          {
            icon: 'strategy',
            tag: 'استراتيجية',
            title: 'رؤى لتحسين الرعاية',
            text: 'يقارن توقعات المرضى مع واقع الخدمة المقدمة لسد الفجوة بين الانطباع والأداء التشغيلي.',
            outcome: 'الفجوات تصبح أولويات'
          }
        ],
        map: {
          label: 'خريطة الرؤى',
          title: 'شاهد الفجوة بين ما توقعه المرضى وما عاشوه فعليًا',
          leftLabel: 'التوقع مقابل الواقع',
          leftTitle: 'خريطة بصرية من الانطباع إلى الأداء'
        },
        flow: {
          label: 'ذكاء قابل للتنفيذ',
          title: 'حوّل الرؤى إلى نتائج أفضل.',
          steps: [
            { title: 'اقرأ الشعور', text: 'افهم الإحساس الحقيقي خلف كل إشارة تجربة.' },
            { title: 'اكتشف الفجوة', text: 'قارن بين التوقعات والواقع والأداء التشغيلي.' },
            { title: 'حدّد الأولوية', text: 'اكشف ما يحتاج إلى اهتمام قبل أن يتحول إلى مشكلة أكبر.' }
          ]
        },
        lead: {
          label: 'ذكاء قابل للتنفيذ',
          title: 'حوّل الرؤى إلى نتائج أفضل.',
          body: 'جاهز لتحويل بيانات التجربة إلى ميزة تنافسية؟'
        },
        features: ['رؤى ملاحظات المرضى', 'تحليل المشاعر والعواطف', 'رؤى تنبؤية', 'ذكاء تجربة المريض', 'رؤى لتحسين الرعاية']
      },
      action: {
        name: 'ActionSync',
        kicker: 'طبقة التنفيذ اللحظي',
        title: 'انتقل من الفهم إلى التنفيذ دون تأخير',
        heroTitleBase: 'طبقة تنفيذ لحظية',
        heroTitleAccent: 'مدعومة بالذكاء الاصطناعي.',
        body: 'حوّل الرؤى إلى إجراءات فورية عبر رحلة الرعاية. أطلق الإمكانات الكاملة لتجربة المريض من خلال طبقة إجراء ذكية.',
        image: 'images/actionsync-human.png',
        primaryCta: 'احجز عرضًا',
        secondaryCta: 'شاهد النظام يتحرك',
        visual: {
          heroSteps: ['رؤية', 'تنبيه', 'تواصل', 'إجراء رعاية', 'تم الحل'],
          liveSystem: 'نظام تنفيذ مباشر',
          actionMotion: 'الرؤية تتحول إلى إجراء متحرك',
          executionLive: 'التنفيذ مباشر',
          priorityScored: 'تم تقييم الأولوية',
          outreachTriggered: 'تم تشغيل التواصل',
          recommendations: ['تعديل خطة الرعاية', 'تحسين مسار الخدمة', 'أولوية للمتابعة', 'تحسين سرعة الاستجابة'],
          assistantMessages: ['أحتاج مساعدة بموعدي.', 'أستطيع إعادة جدولته فورًا.', 'هل يمكنني الحصول على دعم بالعربية؟', 'الدعم متعدد اللغات مفعل.'],
          teams: ['سريري', 'إداري', 'دعم', 'عمليات'],
          synced: 'متزامن',
          bottlenecks: 'يتم توجيه الاختناقات تلقائيًا',
          navigatorSteps: ['الموعد', 'الزيارة', 'المتابعة', 'الالتزام'],
          realTimeGuidance: 'توجيه لحظي',
          navigatorResult: 'نتيجة الملاح',
          navigatorContinuity: 'ارتباك أقل. استمرارية أفضل.',
          activeGuidance: 'توجيه رحلة نشط',
          finalRows: [
            { label: 'تنبيه', status: 'تم تشغيله' },
            { label: 'تواصل', status: 'قيد التنفيذ' },
            { label: 'إجراء رعاية', status: 'موصى به' },
            { label: 'تنسيق', status: 'متزامن' },
            { label: 'ملاح', status: 'يوجه' }
          ]
        },
        execution: {
          label: 'طبقة تنفيذ ActionSync',
          title: 'ليس لوحة مؤشرات. بل نظام يتحرك عندما تظهر الرؤية.',
          story: [
            { eyebrow: 'أتمتة التنبيهات • تفاعل المريض', title: 'تواصل استباقي مع المرضى وحل الشكاوى', body: 'التدخل المبكر يقلل التصعيد ويحوّل الشكاوى المحتملة إلى فرص لزيادة الثقة والرضا.' },
            { eyebrow: 'ذكاء سريري • تحسين الرعاية', title: 'توصيات رعاية مبنية على التجربة', body: 'حوّل رؤى التجربة إلى قرارات سريرية وتشغيلية قابلة للتنفيذ في الوقت الحقيقي.' },
            { eyebrow: 'ذكاء محادثي • روبوتات محادثة', title: 'مساعدون صحيون افتراضيون', body: 'دعم فوري متعدد اللغات عبر القنوات الرقمية والمادية — في أي وقت ومن أي مكان.' },
            { eyebrow: 'تنسيق الفرق • أتمتة سير العمل', title: 'وكلاء تنسيق رعاية مدعومون بالذكاء الاصطناعي', body: 'أتمتة التنسيق بين الفرق السريرية والإدارية وفرق الدعم دون اختناقات.' }
          ]
        },
        quoteLines: ['هنا يتحول الفهم إلى حركة —', 'وتتحول الحركة إلى تغيير مستدام.'],
        navigator: {
          label: 'رسم الرحلة • وكلاء مستقلون',
          title: 'ملاح رحلة رعاية مدعوم بالذكاء الوكيلي',
          body: 'وجّه المرضى خلال رحلة الرعاية بتوجيه ذكي ولحظي — من المواعيد إلى تذكيرات المتابعة.'
        },
        human: {
          label: 'فهم إنساني',
          title: 'خلف كل تقييم',
          accent: 'شخص يريد ببساطة أن يُفهم — الآن ودائمًا.'
        },
        cta: {
          label: 'ذكاء قابل للتنفيذ',
          title: 'حوّل الرؤى إلى نتائج أفضل.',
          body: 'جاهز لتحويل بيانات التجربة إلى ميزة تنافسية؟'
        },
        features: [
          'تواصل استباقي وحل الشكاوى',
          'توصيات رعاية مبنية على التجربة',
          'مساعدون صحيون افتراضيون',
          'وكلاء تنسيق رعاية بالذكاء الاصطناعي',
          'ملاح ذكي لرحلة الرعاية'
        ]
      }
    },
    simple: {
      kicker: 'Kasaji AI',
      resources: {
        title: 'الموارد',
        body: 'هنا ستكون المقالات والفعاليات وقصص العملاء والمعرفة العملية مع نمو مركز معرفة Kasaji AI.'
      },
      discover: {
        title: 'جرّب واكتشف',
        body: 'تجارب تفاعلية لبناء الاستبيانات، وذكاء رحلة المريض، والاستماع الاجتماعي، ووكلاء التواصل.'
      },
      login: {
        title: 'تسجيل الدخول',
        body: 'منطقة دخول آمنة لمستخدمي Kasaji AI مستقبلًا.'
      },
      demo: {
        title: 'طلب عرض',
        body: 'أخبرنا عن مؤسستك وسنعرض لك كيف تدعم Kasaji AI أهداف تجربة المريض.'
      },
      explore: {
        title: 'استكشف Kasaji&',
        body: 'العودة إلى منظومة Kasaji الأوسع واستكشاف الخدمات المتصلة.'
      }
    },
    solutionPage: {
      howItHelps: 'كيف يساعد',
      designedTitle: 'مصمم حول لحظات إنسانية حقيقية',
      designedBody: 'صفحة مستقلة قابلة للتعديل والتوسعة والترجمة بدون التأثير على باقي صفحات الموقع',
      fallbackStep: 'ربط اللحظة بمسار تحسين قابل للقياس',
      operatingFlow: 'مسار التشغيل',
      flows: {
        voice: ['تحديد لحظة التجربة', 'اختيار الجمهور والقناة', 'التقاط الإشارات في وقتها', 'تغذية الذكاء داخل المنصة'],
        insight: ['توحيد الملاحظات والسياق التشغيلي', 'كشف المشاعر والمواضيع والدوافع', 'توقع المخاطر قبل التصعيد', 'ترتيب أولويات التحسين الأعلى أثرًا'],
        action: ['تصنيف المشكلة ودرجة الاستعجال', 'اقتراح أفضل استجابة تالية', 'تنسيق المالكين التشغيليين والسريريين', 'إغلاق الحلقة وقياس الأثر']
      }
    }
  }
} as const;
