import { useState } from 'react'

const questions = [
  {
    q: 'What is the IUPAC name of table salt?',
    a: 'Sodium chloride',
    choices: ['Sodium carbonate', 'Sodium chloride', 'Potassium chloride', 'Sodium chlorate'],
  },
  {
    q: 'Which GHS symbol may apply to concentrated NaCl irritation?',
    a: 'Exclamation mark',
    choices: ['Flame', 'Skull and crossbones', 'Exclamation mark', 'Corrosion'],
  },
  {
    q: 'Which is a recommended storage condition for NaCl?',
    a: 'Keep container tightly closed in a dry place',
    choices: [
      'Store next to strong oxidizers in humid area',
      'Keep container open for air circulation',
      'Keep container tightly closed in a dry place',
      'Store in direct sunlight',
    ],
  },
]

export default function SelfCheck() {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleSelect = (idx, choice) => {
    setAnswers(prev => ({ ...prev, [idx]: choice }))
  }

  const score = Object.entries(answers).reduce((acc, [i, v]) => acc + (questions[i].a === v ? 1 : 0), 0)

  return (
    <section id="self-check" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Self-check</h2>
      <div className="space-y-6">
        {questions.map((item, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
            <details open={!submitted}>
              <summary className="cursor-pointer font-medium text-slate-800">{idx + 1}. {item.q}</summary>
              <div className="mt-4 grid gap-2">
                {item.choices.map(choice => (
                  <label key={choice} className={`flex items-center gap-3 p-2 rounded border ${answers[idx] === choice ? 'border-blue-500 bg-blue-50' : 'border-slate-200'}`}>
                    <input
                      type="radio"
                      name={`q-${idx}`}
                      value={choice}
                      checked={answers[idx] === choice}
                      onChange={() => handleSelect(idx, choice)}
                    />
                    <span className="text-sm text-slate-700">{choice}</span>
                  </label>
                ))}
              </div>
            </details>
            {submitted && (
              <div className={`mt-3 text-sm ${answers[idx] === item.a ? 'text-green-600' : 'text-red-600'}`}>
                Correct answer: <span className="font-semibold">{item.a}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700"
        >
          Submit
        </button>
        {submitted && (
          <div className="text-slate-700 text-sm">Score: {score} / {questions.length}</div>
        )}
      </div>
    </section>
  )
}
