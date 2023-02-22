import CONSTANTS from '../../../constants';
import styles from '../RegistrationPage.module.sass';

const { PHONE_NUMBER } = CONSTANTS;

const { orangeSpan } = styles;

const answer = () => (
  <>
    Check out our <span className={orangeSpan}>FAQs</span> or send us a 
    <span className={orangeSpan}> message</span>. For assistance with
    launching a contest, you can also call us at <a href={`tel: ${PHONE_NUMBER}`}>          <span className={orangeSpan}>{PHONE_NUMBER}</span></a> or schedule a{' '}
    <span className={orangeSpan}>Branding Consultation</span>
  </>
);

const QuestionAnswersItem = [
  [
    {
      question: 'Why should I use Squadhelp?',
      answer:
        '  You always have an option of hiring a consultant or coming up with the name yourself. However, Squadhelp builds great brands that succeed faster by connecting you with the most creative people across the globe. Most importantly, Squadhelp provides you with choice: you get to see ideas from dozens (in some cases, hundreds) of contestants before you select a winner. Typically, you would spend far less money with Squadhelp (our contests start at $199) than hiring an agency. Also, you will receive immediate results - most contests begin receiving submissions within minutes of starting.',
    },
    {
      question: 'How is Squadhelp Different?',
      answer: `Since 2011, we have been committed to disrupting the traditional agency model. Our platform offers much more than a typical crowdsourcing experience. From Machine Learning to Audience Testing to Comprehensive Trademark Validation, you receive best-in-class support for your branding projects. Breadth: Our Contest-Based Crowdsourcing approach allows you to receive an unmatched breadth of name ideas from dozens of unique, creative
      minds while working with the world's largest branding community. Quality and Collaboration: Using an advanced Quality Scoring Algorithm, we ensure that you receive more ideas from our top-quality creatives, and we use Gamification best practices to encourage high-quality brainstorming and two-way communication throughout your contest. We don’t stop at ideation: Choose your name with confidence through our high-end validation services.
      Poll your target demographics to get unbiased feedback on your favorite names, and receive Trademark Risk and Linguistics Analysis Reports developed by a Licensed Trademark Attorney.`,
    },
  ],
  [
    {
      question: "I've never used Squadhelp before. What should I expect?",
      answer:
        '  Most customers tell us that Squadhelp’s process is effective, easy, fast, and even fun. We constantly hear extremely positive feedback with respect to the breadth of ideas submitted to each contest, and many customers are surprised at how insightful working with dozens of creative individuals from across the globecan be.',
    },
    {
      question: 'How much does it cost?',
      answer: ` Our naming competitions start at $199, and our logo design
      competitions start at $299. Also, there are three additional
      contest level that each offer more features and benefits. See our
      Pricing Page for details.`,
    },
    {
      question: 'Do you offer any discount for multiple contests?',
      answer:
        '  Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our Pricing Page.',
    },
    {
      question: 'Will you help me validate my name?',
      answer: ` Yes! We believe that validating and securing your name is a
      critical part of your branding process. Squadhelp offers domain
      checks, Trademark support, linguistics analysis, and professional
      audience testing to help you choose your name with confidence. We
      even have special prices for Trademark filing for our customers.`,
    },
    {
      question:
        'I have other questions! How can I get in touch with Squadhelp?',
      answer: answer(),
    },
  ],
];

export default QuestionAnswersItem;