'use client';

import { useState } from 'react';

const steps = [
  { id: 1, name: '자기 분석', description: '나의 강점, 약점, 가치관 파악하기' },
  { id: 2, name: '직업 탐색', description: '관심 분야의 다양한 직업 정보 수집' },
  { id: 3, name: '역량 강화', description: '필요한 기술 및 자격증 준비' },
  { id: 4, name: '이력서/자소서 작성', description: 'AI 첨삭을 통한 서류 완성' },
  { id: 5, name: '지원 및 면접', description: '실전 면접 준비 및 지원' },
];

export default function GuidePage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50 text-gray-800">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">맞춤형 진로 가이드</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">성공적인 취업을 위한 5단계 로드맵</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3">
              <nav className="space-y-1">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      currentStep === step.id
                        ? 'bg-indigo-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {step.id}단계: {step.name}
                  </button>
                ))}
              </nav>
            </div>
            <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{steps[currentStep - 1].name}</h3>
                <p className="text-lg">{steps[currentStep - 1].description}</p>
                <div className="mt-4">
                  {/* Placeholder for step-specific content */}
                  <p className="text-gray-500">여기에 {steps[currentStep - 1].name} 단계에 대한 구체적인 가이드와 팁이 표시됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
