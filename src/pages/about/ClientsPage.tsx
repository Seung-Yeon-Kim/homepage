import { FC } from 'hono/jsx'

export const ClientsPage: FC = () => {
  const clients = [
    { category: '금융', companies: ['삼성카드', '신한은행', 'KB국민은행', '하나은행', '우리은행', 'NH농협'] },
    { category: '제조', companies: ['삼성전자', 'LG전자', '현대자동차', 'SK하이닉스', '포스코', '롯데케미칼'] },
    { category: '통신/IT', companies: ['SKT', 'KT', 'LG U+', '네이버', '카카오', '쿠팡'] },
    { category: '유통', companies: ['롯데마트', '신세계백화점', '현대백화점', 'CJ올리브영', 'GS리테일', '이마트'] },
    { category: '공공', companies: ['한국전력', '한국가스공사', '한국수자원공사', '한국도로공사', '한국철도공사', '서울메트로'] },
    { category: '교육', companies: ['서울대학교', '연세대학교', '고려대학교', 'KAIST', '포항공대', '성균관대학교'] }
  ]

  return (
    <div class="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">주요 고객사</h1>
        <p class="text-xl text-gray-600">신뢰를 바탕으로 함께 성장하는 파트너</p>
      </div>

      {/* Stats */}
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-blue-50 rounded-xl p-8 text-center">
            <div class="text-blue-600 text-5xl font-bold mb-2">150+</div>
            <div class="text-gray-700 text-lg">총 고객사</div>
          </div>
          <div class="bg-green-50 rounded-xl p-8 text-center">
            <div class="text-green-600 text-5xl font-bold mb-2">95%</div>
            <div class="text-gray-700 text-lg">고객 만족도</div>
          </div>
          <div class="bg-purple-50 rounded-xl p-8 text-center">
            <div class="text-purple-600 text-5xl font-bold mb-2">80%</div>
            <div class="text-gray-700 text-lg">재계약률</div>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">산업분야별 고객사</h2>
        <div class="space-y-8">
          {clients.map((category) => (
            <div class="bg-white rounded-xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span class="bg-blue-600 text-white px-4 py-2 rounded-lg mr-4">
                  {category.category}
                </span>
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.companies.map((company) => (
                  <div class="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition duration-200">
                    <span class="text-gray-700 font-medium">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">성공 사례</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-4">
              <div class="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                <i class="fas fa-chart-line text-2xl"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-800">대형 금융기관 A사</h4>
                <p class="text-gray-600">클라우드 전환 프로젝트</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              레거시 시스템을 클라우드 환경으로 성공적으로 이전하여
              운영 비용 40% 절감 및 시스템 성능 300% 향상
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <i class="fas fa-calendar mr-2"></i>
              2024년 8월 완료
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-4">
              <div class="bg-green-100 text-green-600 p-3 rounded-lg mr-4">
                <i class="fas fa-robot text-2xl"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-800">제조업체 B사</h4>
                <p class="text-gray-600">AI 기반 품질 검사 시스템</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              딥러닝 기반 비전 검사 시스템 도입으로
              불량률 85% 감소 및 검사 속도 10배 향상
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <i class="fas fa-calendar mr-2"></i>
              2024년 6월 완료
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-4">
              <div class="bg-purple-100 text-purple-600 p-3 rounded-lg mr-4">
                <i class="fas fa-database text-2xl"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-800">유통업체 C사</h4>
                <p class="text-gray-600">빅데이터 분석 플랫폼</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              실시간 고객 행동 분석 시스템 구축으로
              매출 25% 증가 및 고객 만족도 향상
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <i class="fas fa-calendar mr-2"></i>
              2024년 3월 완료
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-8">
            <div class="flex items-center mb-4">
              <div class="bg-red-100 text-red-600 p-3 rounded-lg mr-4">
                <i class="fas fa-shield-alt text-2xl"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-800">공공기관 D</h4>
                <p class="text-gray-600">통합 보안 관제 시스템</p>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              차세대 보안 관제 시스템 구축으로
              보안 위협 탐지율 95% 달성 및 사고 대응 시간 80% 단축
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <i class="fas fa-calendar mr-2"></i>
              2023년 12월 완료
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">고객의 소리</h2>
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
          <div class="max-w-3xl mx-auto text-center">
            <i class="fas fa-quote-left text-4xl mb-4 opacity-50"></i>
            <p class="text-xl mb-6 italic">
              "BEYOND CORP.와 함께한 디지털 전환 프로젝트는 저희 회사의 미래를 바꾸어 놓았습니다.
              전문적인 기술력과 헌신적인 지원 덕분에 목표를 초과 달성할 수 있었습니다."
            </p>
            <div>
              <div class="font-bold text-lg">김영수 상무</div>
              <div class="text-blue-200">대형 금융기관 A사 IT본부</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}