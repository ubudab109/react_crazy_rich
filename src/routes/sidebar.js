/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/deposit-withdraw',
    icon: 'Dollar',
    name: 'Deposit & Withdraw',
  },
  {
    path: '/app/investment',
    icon: 'Briefcase',
    name: 'Investment',
  },
  {
    path: '/app/referral',
    icon: 'PeopleIcon',
    name: 'Referral',
  },
  {
    icon: 'FileInvoice',
    name: 'Transactions',
    routes: [
      {
        path: '/app/transactions/profit-trade',
        name: 'Profit Trade',
      },
      {
        path: '/app/transactions/investment-refund',
        name: 'Investment Refund'
      },
      {
        path: '/app/transactions/referral-bonus',
        name: 'Referral Bonus'
      },
      {
        path: '/app/transactions/refund-investment',
        name: 'Refund Finish Investment'
      },

    ]
  },
  {
    icon: 'ProfileCard',
    name: 'Profile & Settings',
    routes: [
      // submenu
      {
        path: '/app/change-password',
        name: 'Change Password'
      }
    ]
  },
  // {
  //   path: '/app/forms',
  //   icon: 'FormsIcon',
  //   name: 'Forms',
  // },
  // {
  //   path: '/app/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  // {
  //   path: '/app/charts',
  //   icon: 'ChartsIcon',
  //   name: 'Charts',
  // },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: '/app/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  // {
  //   icon: 'PagesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //   ],
  // },
]

export default routes
