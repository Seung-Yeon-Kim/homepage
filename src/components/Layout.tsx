import { FC } from 'hono/jsx'

interface LayoutProps {
  title: string
  currentPath: string
  children?: any
}

export const Layout: FC<LayoutProps> = ({ title, currentPath, children }) => {
  const menuItems = [
    {
      name: '회사소개',
      path: '/about',
      submenu: [
        { name: '회사소개', path: '/about/intro' },
        { name: '회사 연혁', path: '/about/history' },
        { name: '주요 고객사', path: '/about/clients' },
        { name: '대외인증', path: '/about/certifications' },
        { name: '조직도', path: '/about/organization' }
      ]
    },
    {
      name: '사업분야',
      path: '/business',
      submenu: [
        { name: 'AI', path: '/business/ai' },
        { name: 'DB&Cloud', path: '/business/dbcloud' },
        { name: '데이터 품질&거버넌스', path: '/business/data-quality' },
        { name: '시스템 구축', path: '/business/system-integration' },
        { name: 'IT 컨설팅', path: '/business/it-consulting' }
      ]
    },
    {
      name: '제품소개',
      path: '/products',
      submenu: [
        { name: 'BeLog', path: '/products/belog' },
        { name: 'BePet', path: '/products/bepet' },
        { name: 'BeSchool', path: '/products/beschool' },
        { name: 'BeMon', path: '/products/bemon' },
        { name: '테스트커버리지', path: '/products/test-coverage' },
        { name: 'ELK Stack', path: '/products/elk-stack' }
      ]
    },
    {
      name: '고객지원',
      path: '/support',
      submenu: [
        { name: '문의하기', path: '/support/contact' },
        { name: '오시는 길', path: '/support/location' }
      ]
    }
  ]

  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} - BEYOND CORP.</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/styles.css" rel="stylesheet" />
      </head>
      <body class="bg-gray-50">
        {/* Header */}
        <header class="bg-white shadow-md sticky top-0 z-50">
          <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-20">
              {/* Logo */}
              <div class="flex items-center">
                <a href="/" class="flex items-center">
                  <img src="/static/images/logo.png" alt="BEYOND CORP." class="h-12 w-auto" />
                </a>
              </div>

              {/* Navigation */}
              <nav class="hidden lg:block">
                <ul class="flex space-x-8">
                  {menuItems.map((item) => (
                    <li class="group relative">
                      <a
                        href={item.submenu[0].path}
                        class={`py-6 px-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                          currentPath.startsWith(item.path) ? 'text-blue-600' : ''
                        }`}
                      >
                        {item.name}
                      </a>
                      {/* Dropdown */}
                      <div class="absolute left-0 top-full w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <ul class="py-2">
                          {item.submenu.map((subitem) => (
                            <li>
                              <a
                                href={subitem.path}
                                class={`block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${
                                  currentPath === subitem.path ? 'bg-blue-50 text-blue-600' : ''
                                }`}
                              >
                                {subitem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile menu button */}
              <button class="lg:hidden" onclick="toggleMobileMenu()">
                <i class="fas fa-bars text-2xl text-gray-700"></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav id="mobileMenu" class="lg:hidden hidden bg-white border-t">
            <div class="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <div class="mb-4">
                  <div class="font-semibold text-gray-800 mb-2">{item.name}</div>
                  <ul class="ml-4 space-y-2">
                    {item.submenu.map((subitem) => (
                      <li>
                        <a
                          href={subitem.path}
                          class={`block py-2 text-gray-600 hover:text-blue-600 ${
                            currentPath === subitem.path ? 'text-blue-600 font-medium' : ''
                          }`}
                        >
                          {subitem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main class="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer class="bg-gray-800 text-white mt-20">
          <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 class="text-xl font-bold mb-4">BEYOND CORP.</h3>
                <p class="text-gray-400 mb-4">
                  혁신적인 IT 솔루션으로<br />
                  고객의 비즈니스 성공을 지원합니다.
                </p>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-400 hover:text-white">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-white">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 class="text-lg font-semibold mb-4">빠른 링크</h4>
                <ul class="space-y-2">
                  <li><a href="/about/intro" class="text-gray-400 hover:text-white">회사소개</a></li>
                  <li><a href="/business/ai" class="text-gray-400 hover:text-white">사업분야</a></li>
                  <li><a href="/products/belog" class="text-gray-400 hover:text-white">제품소개</a></li>
                  <li><a href="/support/contact" class="text-gray-400 hover:text-white">고객지원</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 class="text-lg font-semibold mb-4">연락처</h4>
                <ul class="space-y-2 text-gray-400">
                  <li class="flex items-center">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    서울특별시 강남구 테헤란로 123
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-phone mr-2"></i>
                    02-1234-5678
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-envelope mr-2"></i>
                    info@beyondcorp.co.kr
                  </li>
                </ul>
              </div>

              {/* Business Hours */}
              <div>
                <h4 class="text-lg font-semibold mb-4">영업시간</h4>
                <ul class="space-y-2 text-gray-400">
                  <li>평일: 09:00 - 18:00</li>
                  <li>토요일: 09:00 - 13:00</li>
                  <li>일요일 및 공휴일: 휴무</li>
                </ul>
              </div>
            </div>

            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 BEYOND CORP. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* JavaScript */}
        <script>{`
          function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
          }
        `}</script>
      </body>
    </html>
  )
}