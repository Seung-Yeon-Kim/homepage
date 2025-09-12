import { FC } from 'hono/jsx'

export const OrganizationPage: FC = () => {
  return (
    <div class="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">조직도</h1>
        <p class="text-xl text-gray-600">전문성과 협업을 바탕으로 한 효율적인 조직 구조</p>
      </div>

      {/* Organization Chart */}
      <section class="mb-16">
        <div class="bg-white rounded-xl shadow-lg p-8">
          {/* CEO */}
          <div class="text-center mb-12">
            <div class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg">
              <div class="text-xl font-bold">CEO</div>
              <div class="text-sm mt-1">대표이사</div>
            </div>
          </div>

          {/* Executive Level */}
          <div class="flex justify-center mb-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="bg-purple-600 text-white px-6 py-3 rounded-lg">
                  <div class="font-bold">CTO</div>
                  <div class="text-sm">기술총괄</div>
                </div>
              </div>
              <div class="text-center">
                <div class="bg-green-600 text-white px-6 py-3 rounded-lg">
                  <div class="font-bold">CFO</div>
                  <div class="text-sm">재무총괄</div>
                </div>
              </div>
              <div class="text-center">
                <div class="bg-red-600 text-white px-6 py-3 rounded-lg">
                  <div class="font-bold">COO</div>
                  <div class="text-sm">운영총괄</div>
                </div>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Technology Division */}
            <div class="bg-blue-50 rounded-lg p-6">
              <h3 class="text-lg font-bold text-blue-800 mb-4">기술본부</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="pl-4 border-l-2 border-blue-300">AI 연구소</li>
                <li class="pl-4 border-l-2 border-blue-300">클라우드팀</li>
                <li class="pl-4 border-l-2 border-blue-300">데이터팀</li>
                <li class="pl-4 border-l-2 border-blue-300">보안팀</li>
                <li class="pl-4 border-l-2 border-blue-300">QA팀</li>
              </ul>
            </div>

            {/* Business Division */}
            <div class="bg-green-50 rounded-lg p-6">
              <h3 class="text-lg font-bold text-green-800 mb-4">사업본부</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="pl-4 border-l-2 border-green-300">영업팀</li>
                <li class="pl-4 border-l-2 border-green-300">마케팅팀</li>
                <li class="pl-4 border-l-2 border-green-300">전략기획팀</li>
                <li class="pl-4 border-l-2 border-green-300">해외사업팀</li>
                <li class="pl-4 border-l-2 border-green-300">파트너십팀</li>
              </ul>
            </div>

            {/* Support Division */}
            <div class="bg-purple-50 rounded-lg p-6">
              <h3 class="text-lg font-bold text-purple-800 mb-4">경영지원본부</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="pl-4 border-l-2 border-purple-300">인사팀</li>
                <li class="pl-4 border-l-2 border-purple-300">재무팀</li>
                <li class="pl-4 border-l-2 border-purple-300">총무팀</li>
                <li class="pl-4 border-l-2 border-purple-300">법무팀</li>
                <li class="pl-4 border-l-2 border-purple-300">IT지원팀</li>
              </ul>
            </div>

            {/* Customer Service Division */}
            <div class="bg-red-50 rounded-lg p-6">
              <h3 class="text-lg font-bold text-red-800 mb-4">고객서비스본부</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="pl-4 border-l-2 border-red-300">고객지원팀</li>
                <li class="pl-4 border-l-2 border-red-300">기술지원팀</li>
                <li class="pl-4 border-l-2 border-red-300">컨설팅팀</li>
                <li class="pl-4 border-l-2 border-red-300">교육팀</li>
                <li class="pl-4 border-l-2 border-red-300">품질관리팀</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">조직 현황</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 text-center">
            <div class="text-blue-600 text-4xl mb-3">
              <i class="fas fa-users"></i>
            </div>
            <div class="text-3xl font-bold text-gray-800 mb-2">150+</div>
            <div class="text-gray-600">총 직원 수</div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 text-center">
            <div class="text-green-600 text-4xl mb-3">
              <i class="fas fa-code"></i>
            </div>
            <div class="text-3xl font-bold text-gray-800 mb-2">80+</div>
            <div class="text-gray-600">개발 인력</div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 text-center">
            <div class="text-purple-600 text-4xl mb-3">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <div class="text-3xl font-bold text-gray-800 mb-2">15+</div>
            <div class="text-gray-600">박사급 인력</div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6 text-center">
            <div class="text-red-600 text-4xl mb-3">
              <i class="fas fa-globe"></i>
            </div>
            <div class="text-3xl font-bold text-gray-800 mb-2">7</div>
            <div class="text-gray-600">글로벌 지사</div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">조직 문화</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <div class="text-blue-600 text-3xl mb-4">
              <i class="fas fa-rocket"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">도전과 혁신</h3>
            <p class="text-gray-600">
              새로운 기술과 아이디어에 대한 끊임없는 도전을 통해
              혁신적인 솔루션을 창출합니다.
            </p>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
            <div class="text-green-600 text-3xl mb-4">
              <i class="fas fa-hands-helping"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">협업과 소통</h3>
            <p class="text-gray-600">
              부서 간 및 구성원 간의 원활한 소통과 협업을 통해
              최고의 성과를 만들어갑니다.
            </p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
            <div class="text-purple-600 text-3xl mb-4">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3">성장과 발전</h3>
            <p class="text-gray-600">
              개인의 성장이 회사의 성장으로 이어지도록
              다양한 교육과 경험의 기회를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Career Development */}
      <section>
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">경력 개발 프로그램</h2>
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-user-graduate text-blue-600 mr-2"></i>
                교육 프로그램
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>신입사원 온보딩 프로그램</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>직무별 전문 교육 과정</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>리더십 개발 프로그램</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>해외 연수 및 컨퍼런스 참가 지원</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-award text-purple-600 mr-2"></i>
                복지 혜택
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>유연 근무제 및 재택근무</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>건강검진 및 의료비 지원</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>자기계발비 지원</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check text-green-500 mr-2 mt-1"></i>
                  <span>휴양시설 및 동호회 지원</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}