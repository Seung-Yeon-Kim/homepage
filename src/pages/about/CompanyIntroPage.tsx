import { FC } from 'hono/jsx'

export const CompanyIntroPage: FC = () => {
  return (
    <div class="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">회사소개</h1>
        <p class="text-xl text-gray-600">혁신과 신뢰를 바탕으로 성장하는 IT 전문 기업</p>
      </div>

      {/* Company Overview */}
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">IT Solutions Company</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            IT Solutions는 2009년 설립 이래 15년간 축적된 기술력과 노하우를 바탕으로
            고객의 디지털 혁신을 선도하는 IT 전문 기업입니다.
          </p>
          <p class="text-gray-600 leading-relaxed mb-6">
            AI, 빅데이터, 클라우드 컴퓨팅 등 최신 기술을 활용하여
            각 산업 분야에 최적화된 솔루션을 제공하며,
            고객의 비즈니스 가치 창출과 경쟁력 강화를 지원합니다.
          </p>
          <p class="text-gray-600 leading-relaxed">
            우리는 기술의 힘으로 더 나은 미래를 만들어가며,
            고객과 함께 성장하는 신뢰받는 파트너가 되고자 합니다.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">비전 & 미션</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-blue-50 rounded-xl p-8">
            <div class="text-blue-600 text-4xl mb-4">
              <i class="fas fa-eye"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">비전</h3>
            <p class="text-gray-600 leading-relaxed">
              "기술 혁신을 통해 모든 기업이 디지털 시대의 리더가 되도록 돕는 글로벌 IT 파트너"
            </p>
          </div>
          <div class="bg-green-50 rounded-xl p-8">
            <div class="text-green-600 text-4xl mb-4">
              <i class="fas fa-bullseye"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-4">미션</h3>
            <p class="text-gray-600 leading-relaxed">
              "최고의 기술력과 전문성을 바탕으로 고객 맞춤형 IT 솔루션을 제공하여
              비즈니스 혁신과 지속 가능한 성장을 실현합니다"
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">핵심 가치</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-lightbulb text-3xl"></i>
            </div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">혁신</h4>
            <p class="text-gray-600">끊임없는 기술 혁신으로 새로운 가치 창출</p>
          </div>
          <div class="text-center">
            <div class="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-handshake text-3xl"></i>
            </div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">신뢰</h4>
            <p class="text-gray-600">고객과의 약속을 지키는 믿을 수 있는 파트너</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 text-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-users text-3xl"></i>
            </div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">협력</h4>
            <p class="text-gray-600">함께 성장하는 상생의 파트너십 구축</p>
          </div>
          <div class="text-center">
            <div class="bg-red-100 text-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-award text-3xl"></i>
            </div>
            <h4 class="text-xl font-bold text-gray-800 mb-2">전문성</h4>
            <p class="text-gray-600">최고 수준의 기술력과 전문 지식 보유</p>
          </div>
        </div>
      </section>

      {/* Business Areas */}
      <section>
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">주요 사업 영역</h2>
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="border-l-4 border-blue-600 pl-4">
              <h4 class="font-bold text-lg mb-2">AI & 머신러닝</h4>
              <p class="text-gray-600">지능형 비즈니스 솔루션 개발</p>
            </div>
            <div class="border-l-4 border-green-600 pl-4">
              <h4 class="font-bold text-lg mb-2">클라우드 & 인프라</h4>
              <p class="text-gray-600">안정적인 클라우드 환경 구축</p>
            </div>
            <div class="border-l-4 border-purple-600 pl-4">
              <h4 class="font-bold text-lg mb-2">데이터 분석</h4>
              <p class="text-gray-600">빅데이터 기반 인사이트 도출</p>
            </div>
            <div class="border-l-4 border-red-600 pl-4">
              <h4 class="font-bold text-lg mb-2">시스템 통합</h4>
              <p class="text-gray-600">엔터프라이즈 시스템 구축</p>
            </div>
            <div class="border-l-4 border-yellow-600 pl-4">
              <h4 class="font-bold text-lg mb-2">IT 컨설팅</h4>
              <p class="text-gray-600">디지털 전환 전략 수립</p>
            </div>
            <div class="border-l-4 border-indigo-600 pl-4">
              <h4 class="font-bold text-lg mb-2">솔루션 개발</h4>
              <p class="text-gray-600">맞춤형 소프트웨어 개발</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}