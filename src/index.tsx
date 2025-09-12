import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'

// About pages
import { CompanyIntroPage } from './pages/about/CompanyIntroPage'
import { CompanyHistoryPage } from './pages/about/CompanyHistoryPage'
import { ClientsPage } from './pages/about/ClientsPage'
import { CertificationsPage } from './pages/about/CertificationsPage'
import { OrganizationPage } from './pages/about/OrganizationPage'

// Business pages
import { AIPage } from './pages/business/AIPage'
import { DBCloudPage } from './pages/business/DBCloudPage'
import { DataQualityPage } from './pages/business/DataQualityPage'
import { SystemIntegrationPage } from './pages/business/SystemIntegrationPage'
import { ITConsultingPage } from './pages/business/ITConsultingPage'

// Product pages
import { BeLogPage } from './pages/products/BeLogPage'
import { BePetPage } from './pages/products/BePetPage'
import { BeSchoolPage } from './pages/products/BeSchoolPage'
import { BeMonPage } from './pages/products/BeMonPage'
import { TestCoveragePage } from './pages/products/TestCoveragePage'
import { ELKStackPage } from './pages/products/ELKStackPage'

// Support pages
import { ContactPage } from './pages/support/ContactPage'
import { LocationPage } from './pages/support/LocationPage'

const app = new Hono()

// Enable CORS for API endpoints
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Homepage
app.get('/', (c) => {
  return c.html(
    <Layout title="홈" currentPath="/">
      <HomePage />
    </Layout>
  )
})

// About section
app.get('/about/intro', (c) => {
  return c.html(
    <Layout title="회사소개" currentPath="/about/intro">
      <CompanyIntroPage />
    </Layout>
  )
})

app.get('/about/history', (c) => {
  return c.html(
    <Layout title="회사 연혁" currentPath="/about/history">
      <CompanyHistoryPage />
    </Layout>
  )
})

app.get('/about/clients', (c) => {
  return c.html(
    <Layout title="주요 고객사" currentPath="/about/clients">
      <ClientsPage />
    </Layout>
  )
})

app.get('/about/certifications', (c) => {
  return c.html(
    <Layout title="대외인증" currentPath="/about/certifications">
      <CertificationsPage />
    </Layout>
  )
})

app.get('/about/organization', (c) => {
  return c.html(
    <Layout title="조직도" currentPath="/about/organization">
      <OrganizationPage />
    </Layout>
  )
})

// Business section
app.get('/business/ai', (c) => {
  return c.html(
    <Layout title="AI" currentPath="/business/ai">
      <AIPage />
    </Layout>
  )
})

app.get('/business/dbcloud', (c) => {
  return c.html(
    <Layout title="DB&Cloud" currentPath="/business/dbcloud">
      <DBCloudPage />
    </Layout>
  )
})

app.get('/business/data-quality', (c) => {
  return c.html(
    <Layout title="데이터 품질&거버넌스" currentPath="/business/data-quality">
      <DataQualityPage />
    </Layout>
  )
})

app.get('/business/system-integration', (c) => {
  return c.html(
    <Layout title="시스템 구축" currentPath="/business/system-integration">
      <SystemIntegrationPage />
    </Layout>
  )
})

app.get('/business/it-consulting', (c) => {
  return c.html(
    <Layout title="IT 컨설팅" currentPath="/business/it-consulting">
      <ITConsultingPage />
    </Layout>
  )
})

// Products section
app.get('/products/belog', (c) => {
  return c.html(
    <Layout title="BeLog" currentPath="/products/belog">
      <BeLogPage />
    </Layout>
  )
})

app.get('/products/bepet', (c) => {
  return c.html(
    <Layout title="BePet" currentPath="/products/bepet">
      <BePetPage />
    </Layout>
  )
})

app.get('/products/beschool', (c) => {
  return c.html(
    <Layout title="BeSchool" currentPath="/products/beschool">
      <BeSchoolPage />
    </Layout>
  )
})

app.get('/products/bemon', (c) => {
  return c.html(
    <Layout title="BeMon" currentPath="/products/bemon">
      <BeMonPage />
    </Layout>
  )
})

app.get('/products/test-coverage', (c) => {
  return c.html(
    <Layout title="테스트커버리지" currentPath="/products/test-coverage">
      <TestCoveragePage />
    </Layout>
  )
})

app.get('/products/elk-stack', (c) => {
  return c.html(
    <Layout title="ELK Stack" currentPath="/products/elk-stack">
      <ELKStackPage />
    </Layout>
  )
})

// Support section
app.get('/support/contact', (c) => {
  return c.html(
    <Layout title="문의하기" currentPath="/support/contact">
      <ContactPage />
    </Layout>
  )
})

app.get('/support/location', (c) => {
  return c.html(
    <Layout title="오시는 길" currentPath="/support/location">
      <LocationPage />
    </Layout>
  )
})

// API endpoints
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // Here you would handle the contact form submission
  // For now, we'll just return success
  return c.json({ success: true, message: '문의가 성공적으로 접수되었습니다.' })
})

export default app