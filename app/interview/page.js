'use client';

import { useState, useRef, useEffect } from 'react';

const questions = [
  "자기소개를 해보세요.",
  "우리 회사에 지원한 동기는 무엇인가요?",
  "자신의 가장 큰 장점과 단점은 무엇이라고 생각하나요?",
  "입사 후 포부에 대해 말씀해주세요.",
];

export default function InterviewPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => console.error("Error accessing media devices.", err));
    } else {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    }
  }, [isRecording]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setFeedback(null);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // Simulate AI feedback generation
    setTimeout(() => {
      setFeedback({
        clarity: '발음이 명확하고 전달력이 좋습니다.',
        confidence: '자신감 있는 태도가 인상적이지만, 시선 처리가 약간 불안정합니다.',
        content: '답변 내용이 구체적이고 경험과 잘 연결되었습니다.',
      });
    }, 1500);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setFeedback(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-gray-50 text-gray-800">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">실전같은 인터뷰 연습</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">AI 면접관의 질문</h2>
              <div className="bg-gray-100 p-6 rounded-lg min-h-[100px] flex items-center">
                <p className="text-lg">{questions[currentQuestionIndex]}</p>
              </div>
              <div className="mt-6 flex space-x-4">
                {!isRecording ? (
                  <button onClick={handleStartRecording} className="w-full rounded-md bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500">
                    답변 시작
                  </button>
                ) : (
                  <button onClick={handleStopRecording} className="w-full rounded-md bg-red-600 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-red-500">
                    답변 종료
                  </button>
                )}
                <button onClick={handleNextQuestion} className="w-full rounded-md bg-gray-300 px-4 py-3 text-lg font-semibold text-gray-800 shadow-sm hover:bg-gray-400">
                  다음 질문
                </button>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">나의 모습</h2>
              <div className="bg-black rounded-lg w-full aspect-video">
                <video ref={videoRef} autoPlay muted className="w-full h-full rounded-lg"></video>
              </div>
            </div>
          </div>
          {feedback && (
            <div className="mt-8 border-t pt-6">
              <h2 className="text-2xl font-semibold mb-4">AI 피드백</h2>
              <div className="space-y-3">
                <p><strong>전달력:</strong> {feedback.clarity}</p>
                <p><strong>자신감:</strong> {feedback.confidence}</p>
                <p><strong>내용:</strong> {feedback.content}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
