import { useState } from 'react';
import styles from './styles.module.scss';

const QA = [
  {
    question: 'What happens if I forget my GhostDrive password?',
    answer:
      '1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius quod eos provident facere neque magnam exercitationem molestias illo veniam.',
  },
  {
    question: 'How to sell your file?',
    answer:
      '2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius quod eos provident facere neque magnam exercitationem molestias illo veniam.',
  },
  {
    question: 'How often do we release updates?',
    answer:
      '3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius quod eos provident facere neque magnam exercitationem molestias illo veniam.',
  },
  {
    question: 'Where are your files stored?',
    answer:
      '4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius quod eos provident facere neque magnam exercitationem molestias illo veniam.',
  },
  {
    question: 'How many document protection options are there?',
    answer:
      '5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eius quod eos provident facere neque magnam exercitationem molestias illo veniam.',
  },
];

export const QuestionsAndAnswers = () => {
  const [opened, setOpened] = useState<number | null>(null);

  const openQuestion = (event: { target: any }) => {
    const { target } = event;
    const current = Number(target.closest('div').id);
    if (opened !== current) {
      setOpened(current);
      return;
    }
    setOpened(null);
  };

  return (
    <div onClick={openQuestion} className={styles.container}>
      {QA.map(({ question, answer }, index) => {
        return (
          <div key={index} id={index.toString()} className={styles.item}>
            <span
              className={`${styles.question} ${
                opened === index ? styles.opened : ''
              }`}
            >
              {question}
            </span>
            {opened === index && (
              <span className={styles.answer}>{answer}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
