import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-gray-800 -mt-16">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            AI와 함께 당신의 커리어 여정을 새롭게 시작하세요
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            취업 준비에 지치셨나요? AI 커리어 코치가 당신의 자신감을 되찾고, 잠재력을 발견하며, 꿈의 직업을 찾을 수 있도록 도와드립니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/aptitude"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              지금 시작하기
            </Link>
            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
              더 알아보기 <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <Link
          href="/aptitude"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            관심사 및 소질 파악{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            AI 기반 분석을 통해 당신의 숨겨진 재능과 관심사를 발견하고, 가장 적합한 직업 경로를 찾아보세요.
          </p>
        </Link>

        <Link
          href="/guide"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            맞춤형 진로 가이드{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            당신의 목표와 역량에 맞춘 체계적인 진로 계획을 제공받고, 성공적인 취업을 위한 전략을 수립하세요.
          </p>
        </Link>

        <Link
          href="/interview"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            실전같은 인터뷰 연습{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            AI와 함께하는 모의 면접을 통해 자신감을 키우고, 어떤 질문에도 완벽하게 대비할 수 있습니다.
          </p>
        </Link>
      </div>
    </main>
  );
}
