import { FC } from 'hono/jsx'

export const CertificationsPage: FC = () => {
  const certifications = [
    {
      category: '국제인증',
      items: [
        {
          name: 'ISO 27001',
          description: '정보보안 경영시스템 국제표준',
          date: '2024.03',
          icon: 'shield-alt'
        },
        {
          name: 'ISO 9001',
          description: '품질경영시스템 국제표준',
          date: '2023.11',
          icon: 'award'
        },
        {
          name: 'ISO 14001',
          description: '환경경영시스템 국제표준',
          date: '2023.08',
          icon: 'leaf'
        },
        {
          name: 'CMMI Level 5',
          description: '소프트웨어 개발 역량 성숙도',
          date: '2022.12',
          icon: 'chart-line'
        }
      ]
    },
    {
      category: '기술인증',
      items: [
        {
          name: 'AWS Partner',
          description: 'AWS Advanced Technology Partner',
          date: '2023.06',
          icon: 'cloud'
        },
        {
          name: 'Microsoft Gold Partner',
          description: 'Microsoft Gold Cloud Platform',
          date: '2023.04',
          icon: 'microsoft'
        },
        {
          name: 'Google Cloud Partner',
          description: 'Google Cloud Premier Partner',
          date: '2023.02',
          icon: 'google'
        },
        {
          name: 'Oracle Partner',
          description: 'Oracle Gold Partner',
          date: '2022.10',
          icon: 'database'
        }
      ]
    },
    {
      category: '정부인증',
      items: [
        {
          name: '벤처기업 인증',
          description: '중소벤처기업부',
          date: '2021.03',
          icon: 'certificate'
        },
        {
          name: '우수기업 선정',
          description: '중소벤처기업부 우수기업',
          date: '2023.02',
          icon: 'trophy'
        },
        {
          name: '기업부설연구소',
          description: '한국산업기술진흥협회',
          date: '2016.09',
          icon: 'flask'
        },
        {
          name: 'INNO-BIZ',
          description: '기술혁신형 중소기업',
          date: '2020.06',
          icon: 'lightbulb'
        }
      ]
    }
  ]

  const awards = [
    {
      year: '2024',
      items: [
        '대한민국 IT 혁신대상 - 과학기술정보통신부',
        'AI 기술 우수기업상 - 한국인공지능협회',
        '디지털 혁신 경영대상 - 한국정보화진흥원'
      ]
    },
    {
      year: '2023',
      items: [
        '클라우드 서비스 우수기업상 - 한국클라우드산업협회',
        '빅데이터 활용 우수사례상 - 한국데이터산업진흥원',
        '소프트웨어 품질대상 - 한국소프트웨어산업협회'
      ]
    },
    {
      year: '2022',
      items: [
        '디지털 전환 우수기업상 - 산업통상자원부',
        'IT 서비스 혁신상 - 한국IT서비스산업협회',
        '기술혁신 대상 - 한국산업기술진흥협회'
      ]
    }
  ]

  return (
    <div class="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">대외인증</h1>
        <p class="text-xl text-gray-600">글로벌 수준의 품질과 기술력을 인정받고 있습니다</p>
      </div>

      {/* Certifications */}
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">보유 인증</h2>
        {certifications.map((category) => (
          <div class="mb-12">
            <h3 class="text-2xl font-bold text-blue-600 mb-6">{category.category}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((cert) => (
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-200">
                  <div class="text-blue-600 text-3xl mb-4">
                    <i class={`fas fa-${cert.icon}`}></i>
                  </div>
                  <h4 class="text-lg font-bold text-gray-800 mb-2">{cert.name}</h4>
                  <p class="text-gray-600 text-sm mb-3">{cert.description}</p>
                  <div class="text-sm text-gray-500">
                    <i class="fas fa-calendar-check mr-2"></i>
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Awards */}
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">수상 실적</h2>
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          {awards.map((yearGroup) => (
            <div class="mb-8">
              <div class="flex items-center mb-4">
                <div class="bg-blue-600 text-white px-4 py-2 rounded-full font-bold mr-4">
                  {yearGroup.year}
                </div>
                <div class="flex-1 h-0.5 bg-blue-200"></div>
              </div>
              <ul class="space-y-3 ml-8">
                {yearGroup.items.map((award) => (
                  <li class="flex items-start">
                    <i class="fas fa-trophy text-yellow-500 mr-3 mt-1"></i>
                    <span class="text-gray-700">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">컴플라이언스</h2>
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-red-100 text-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-user-shield text-3xl"></i>
              </div>
              <h4 class="text-lg font-bold mb-2">개인정보보호</h4>
              <p class="text-gray-600 text-sm">
                GDPR, 개인정보보호법 준수
              </p>
            </div>
            <div class="text-center">
              <div class="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-lock text-3xl"></i>
              </div>
              <h4 class="text-lg font-bold mb-2">보안 규정</h4>
              <p class="text-gray-600 text-sm">
                국제 보안 표준 및 규정 준수
              </p>
            </div>
            <div class="text-center">
              <div class="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-balance-scale text-3xl"></i>
              </div>
              <h4 class="text-lg font-bold mb-2">윤리 경영</h4>
              <p class="text-gray-600 text-sm">
                투명하고 윤리적인 기업 경영
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management */}
      <section>
        <h2 class="text-3xl font-bold text-gray-800 mb-8">품질 관리 체계</h2>
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">100%</div>
              <div class="text-blue-200">프로젝트 품질 보증</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">24/7</div>
              <div class="text-blue-200">보안 모니터링</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">99.9%</div>
              <div class="text-blue-200">서비스 가용성</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold mb-2">0</div>
              <div class="text-blue-200">보안 사고</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}