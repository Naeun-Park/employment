'use client';

import { useState } from 'react';

export default function AptitudePage() {
  const [testStarted, setTestStarted] = useState(false);
  const [results, setResults] = useState(null);

  const handleStartTest = () => {
    setTestStarted(true);
    // Simulate API call and result fetching
    setTimeout(() => {
      setResults({
        topInterest: '데이터 분석',
        topAptitude: '논리적 사고',
        recommendedJobs: ['데이터 사이언티스트', '비즈니스 분석가', 'AI 전문가'],
      });
    }, 2000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50 text-gray-800">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">관심사 및 소질 파악</h1>
        
        {!testStarted ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">나의 잠재력 발견하기</h2>
            <p className="text-lg mb-6">간단한 테스트를 통해 당신의 관심사와 소질을 파악하고, AI가 추천하는 맞춤 직업을 확인해보세요.</p>
            <button
              onClick={handleStartTest}
              className="rounded-md bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              검사 시작하기
            </button>
          </div>
        ) : !results ? (
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">분석 중...</h2>
            <p className="text-lg">AI가 당신의 답변을 분석하고 있습니다. 잠시만 기다려주세요.</p>
            {/* You can add a spinner or loading animation here */}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">검사 결과</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-indigo-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800">주요 관심사</h3>
                <p className="text-2xl mt-2">{results.topInterest}</p>
              </div>
              <div className="bg-sky-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-sky-800">대표 소질</h3>
                <p className="text-2xl mt-2">{results.topAptitude}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">추천 직업</h3>
              <ul className="space-y-2">
                {results.recommendedJobs.map((job, index) => (
                  <li key={index} className="bg-gray-100 p-4 rounded-md text-lg">{job}</li>
                ))}
              </ul>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setTestStarted(false)}
                className="text-indigo-600 font-semibold"
              >
                다시 검사하기
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
