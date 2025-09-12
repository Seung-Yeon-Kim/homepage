import { FC } from 'hono/jsx'

export const HomePage: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section class="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div class="container mx-auto px-4 py-24">
          <div class="max-w-3xl">
            <h1 class="text-5xl font-bold mb-6">
              혁신적인 IT 솔루션으로<br />
              비즈니스의 미래를 열어갑니다
            </h1>
            <p class="text-xl mb-8 text-blue-100">
              AI, 클라우드, 빅데이터 기술을 통해 고객의 디지털 전환을 선도하며,
              지속 가능한 성장을 지원합니다.
            </p>
            <div class="flex space-x-4">
              <a href="/about/intro" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-200">
                회사 소개
              </a>
              <a href="/support/contact" class="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200">
                문의하기
              </a>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 opacity-10">
          <i class="fas fa-network-wired text-[400px]"></i>
        </div>
      </section>

      {/* Features Section */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">핵심 사업분야</h2>
            <p class="text-xl text-gray-600">최첨단 기술력으로 고객의 성공을 지원합니다</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI */}
            <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-200">
              <div class="text-blue-600 text-4xl mb-4">
                <i class="fas fa-brain"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">AI 솔루션</h3>
              <p class="text-gray-600 mb-4">
                머신러닝과 딥러닝 기술을 활용한 지능형 비즈니스 솔루션을 제공합니다.
              </p>
              <a href="/business/ai" class="text-blue-600 font-semibold hover:text-blue-800">
                자세히 보기 <i class="fas fa-arrow-right ml-1"></i>
              </a>
            </div>

            {/* DB & Cloud */}
            <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-200">
              <div class="text-blue-600 text-4xl mb-4">
                <i class="fas fa-cloud"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">DB & Cloud</h3>
              <p class="text-gray-600 mb-4">
                안정적이고 확장 가능한 클라우드 인프라와 데이터베이스 솔루션을 구축합니다.
              </p>
              <a href="/business/dbcloud" class="text-blue-600 font-semibold hover:text-blue-800">
                자세히 보기 <i class="fas fa-arrow-right ml-1"></i>
              </a>
            </div>

            {/* Data Quality */}
            <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-200">
              <div class="text-blue-600 text-4xl mb-4">
                <i class="fas fa-database"></i>
              </div>
              <h3 class="text-2xl font-bold mb-3">데이터 품질 & 거버넌스</h3>
              <p class="text-gray-600 mb-4">
                데이터의 정확성과 일관성을 보장하는 체계적인 관리 시스템을 구현합니다.
              </p>
              <a href="/business/data-quality" class="text-blue-600 font-semibold hover:text-blue-800">
                자세히 보기 <i class="fas fa-arrow-right ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">주요 제품</h2>
            <p class="text-xl text-gray-600">비즈니스 혁신을 위한 검증된 솔루션</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* BeLog */}
            <div class="bg-white rounded-lg p-6 hover:shadow-lg transition duration-200">
              <div class="flex items-center mb-4">
                <div class="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                  <i class="fas fa-file-alt text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-xl font-bold">BeLog</h4>
                  <p class="text-gray-600">통합 로그 관리 시스템</p>
                </div>
              </div>
              <a href="/products/belog" class="text-blue-600 hover:text-blue-800">
                더 알아보기 →
              </a>
            </div>

            {/* BePet */}
            <div class="bg-white rounded-lg p-6 hover:shadow-lg transition duration-200">
              <div class="flex items-center mb-4">
                <div class="bg-green-100 text-green-600 p-3 rounded-lg mr-4">
                  <i class="fas fa-paw text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-xl font-bold">BePet</h4>
                  <p class="text-gray-600">펫케어 통합 플랫폼</p>
                </div>
              </div>
              <a href="/products/bepet" class="text-blue-600 hover:text-blue-800">
                더 알아보기 →
              </a>
            </div>

            {/* BeSchool */}
            <div class="bg-white rounded-lg p-6 hover:shadow-lg transition duration-200">
              <div class="flex items-center mb-4">
                <div class="bg-purple-100 text-purple-600 p-3 rounded-lg mr-4">
                  <i class="fas fa-graduation-cap text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-xl font-bold">BeSchool</h4>
                  <p class="text-gray-600">스마트 교육 관리 시스템</p>
                </div>
              </div>
              <a href="/products/beschool" class="text-blue-600 hover:text-blue-800">
                더 알아보기 →
              </a>
            </div>

            {/* BeMon */}
            <div class="bg-white rounded-lg p-6 hover:shadow-lg transition duration-200">
              <div class="flex items-center mb-4">
                <div class="bg-red-100 text-red-600 p-3 rounded-lg mr-4">
                  <i class="fas fa-chart-line text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-xl font-bold">BeMon</h4>
                  <p class="text-gray-600">실시간 모니터링 솔루션</p>
                </div>
              </div>
              <a href="/products/bemon" class="text-blue-600 hover:text-blue-800">
                더 알아보기 →
              </a>
            </div>

            {/* Test Coverage */}
            <div class="bg-white rounded-lg p-6 hover:shadow-lg transition duration-200">
              <div class="flex items-center mb-4">
                <div class="bg-yellow-100 text-yellow-600 p-3 rounded-lg mr-4">
                  <i class="fas fa-vial text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-xl font-bold">테스트커버리지</h4>
                  <p class="text-gray-600">코드 품질 분석 도구</p>
                </div>
              </div>
              <a href="/products/test-coverage" class="text-blue-600 hover:text-blue-800">
                더 알아보기 →
              </a>
            </div>

            {/* ELK Stack */}
            <div class="bg-white rounded-lg p-6 hover:shadow-lg transition duration-200">
              <div class="flex items-center mb-4">
                <div class="bg-indigo-100 text-indigo-600 p-3 rounded-lg mr-4">
                  <i class="fas fa-layer-group text-2xl"></i>
                </div>
                <div>
                  <h4 class="text-xl font-bold">ELK Stack</h4>
                  <p class="text-gray-600">통합 데이터 분석 플랫폼</p>
                </div>
              </div>
              <a href="/products/elk-stack" class="text-blue-600 hover:text-blue-800">
                더 알아보기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section class="py-20 bg-blue-600 text-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-5xl font-bold mb-2">150+</div>
              <div class="text-blue-200">고객사</div>
            </div>
            <div>
              <div class="text-5xl font-bold mb-2">500+</div>
              <div class="text-blue-200">프로젝트</div>
            </div>
            <div>
              <div class="text-5xl font-bold mb-2">50+</div>
              <div class="text-blue-200">전문가</div>
            </div>
            <div>
              <div class="text-5xl font-bold mb-2">15+</div>
              <div class="text-blue-200">년 경력</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
            <h2 class="text-4xl font-bold mb-4">
              비즈니스 혁신을 시작하세요
            </h2>
            <p class="text-xl mb-8 text-blue-100">
              전문가와 함께 귀사에 최적화된 IT 솔루션을 찾아보세요
            </p>
            <a href="/support/contact" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-200">
              무료 상담 신청하기
            </a>
          </div>
        </div>
      </section>
    </>
  )
}