import { FC } from 'hono/jsx'

export const CompanyHistoryPage: FC = () => {
  const historyData = [
    {
      year: '2024',
      items: [
        { month: '11', content: 'AI 기반 데이터 분석 플랫폼 BeAnalytics 출시' },
        { month: '08', content: '국내 대형 금융기관 클라우드 전환 프로젝트 수주' },
        { month: '03', content: 'ISO 27001 정보보안 국제인증 획득' }
      ]
    },
    {
      year: '2023',
      items: [
        { month: '12', content: '연매출 500억원 돌파' },
        { month: '09', content: '미국 실리콘밸리 지사 설립' },
        { month: '06', content: 'BeSchool 스마트 교육 플랫폼 출시' },
        { month: '02', content: '중소벤처기업부 우수기업 선정' }
      ]
    },
    {
      year: '2022',
      items: [
        { month: '11', content: 'BeMon 실시간 모니터링 솔루션 출시' },
        { month: '07', content: '일본 도쿄 지사 설립' },
        { month: '04', content: '국가 R&D 과제 선정 (AI 기반 데이터 품질 관리)' },
        { month: '01', content: '직원 수 100명 돌파' }
      ]
    },
    {
      year: '2021',
      items: [
        { month: '10', content: 'BePet 펫케어 플랫폼 서비스 개시' },
        { month: '06', content: '클라우드 서비스 파트너십 (AWS, Azure, GCP)' },
        { month: '03', content: '벤처기업 인증 획듍' }
      ]
    },
    {
      year: '2020',
      items: [
        { month: '12', content: 'BeLog 통합 로그 관리 시스템 출시' },
        { month: '08', content: 'AI 연구소 설립' },
        { month: '02', content: '선릉테크노밸리 이전' }
      ]
    },
    {
      year: '2015-2019',
      items: [
        { month: '2019', content: '데이터 품질 관리 솔루션 개발' },
        { month: '2018', content: 'ELK Stack 기반 분석 플랫폼 구축' },
        { month: '2017', content: '중국 상하이 지사 설립' },
        { month: '2016', content: '기업부설 연구소 개소' },
        { month: '2015', content: '코스닥 상장' }
      ]
    },
    {
      year: '2009-2014',
      items: [
        { month: '2014', content: '테스트커버리지 솔루션 출시' },
        { month: '2013', content: '주식회사 전환' },
        { month: '2011', content: '강남 본사 이전' },
        { month: '2009', content: 'IT Solutions 설립' }
      ]
    }
  ]

  return (
    <div class="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">회사 연혁</h1>
        <p class="text-xl text-gray-600">15년의 혁신과 성장의 발자취</p>
      </div>

      {/* Timeline */}
      <div class="relative">
        {/* Vertical Line */}
        <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

        {historyData.map((yearGroup, index) => (
          <div class="mb-12" key={index}>
            {/* Year Badge */}
            <div class="flex justify-center mb-8">
              <div class="bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg">
                {yearGroup.year}
              </div>
            </div>

            {/* History Items */}
            {yearGroup.items.map((item, itemIndex) => (
              <div
                class={`relative flex items-center mb-8 ${
                  itemIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                key={itemIndex}
              >
                <div class="flex-1 md:w-1/2">
                  <div
                    class={`bg-white rounded-lg shadow-lg p-6 ml-16 md:ml-0 ${
                      itemIndex % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div class="text-blue-600 font-bold mb-2">{item.month}월</div>
                    <p class="text-gray-700">{item.content}</p>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Summary */}
      <section class="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <h2 class="text-3xl font-bold mb-6 text-center">성장의 여정</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div class="text-4xl font-bold mb-2">15+</div>
            <div class="text-blue-200">연혁</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">7</div>
            <div class="text-blue-200">글로벌 지사</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">500억+</div>
            <div class="text-blue-200">연매출</div>
          </div>
          <div>
            <div class="text-4xl font-bold mb-2">100+</div>
            <div class="text-blue-200">직원 수</div>
          </div>
        </div>
      </section>
    </div>
  )
}