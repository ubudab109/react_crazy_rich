import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))
const DepoWdData = lazy(()=> import('../pages/DepositWithdraw'))
const Investment = lazy(()=> import('../pages/Investment'))
const MyReferral = lazy(()=> import('../pages/Referral'))
const Transactions = lazy(()  => import('../pages/Transactions'))
const ChangePassword = lazy(() => import('../pages/ChangePassword'))
const ProfitTradePages = lazy(() => import('../pages/ProfitTrade'));
const InvestmentRefund = lazy(() => import('../pages/InvestmentRefund'));
const ReferralBonus = lazy(() => import('../pages/ReferralBonus'));
const RefundFinish = lazy(() => import('../pages/RefundFinish'));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/deposit-withdraw',
    component: DepoWdData
  },
  {
    path: '/investment',
    component: Investment
  },
  {
    path: '/referral',
    component: MyReferral
  },
  {
    path: '/transactions/profit-trade',
    component: ProfitTradePages
  },
  {
    path: '/transactions/investment-refund',
    component: InvestmentRefund
  },
  {
    path: '/transactions/referral-bonus',
    component: ReferralBonus
  },
  {
    path: '/transactions/refund-investment',
    component: RefundFinish
  },
  {
    path: '/change-password',
    component: ChangePassword,
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
