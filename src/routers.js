const Account = resolve => require(['./pages/user/user_account'], resolve);
const Address = resolve => require(['./pages/user/user_address'], resolve);
const Info = resolve => require(['./pages/user/user_info'], resolve);
const Password = resolve => require(['./pages/user/user_password'], resolve);
export default [
  {
    path : '/',
    name: 'index',
    component : resolve => require(['./pages/index'],resolve)
  },
  {
    path : '/user/',
    component:resolve => require(['./pages/user/user'],resolve),
    children:[
      {path:'account', component : Account},
      {path:'address', component:Address },
      {path:'info', component: Info},
      {path:'password', component:Password }
    ]
  },
  {
    path : '/user_address',
    name: 'user_address',
    component : resolve => require(['./pages/user/user_address'],resolve)
  },
  {
    path : '/user_account',
    name: 'user_account',
    component : resolve => require(['./pages/user/user_account'],resolve)
  },
  {
    path : '/use_info',
    name: 'use_info',
    component : resolve => require(['./pages/user/user_info'],resolve)
  },
  {
    path : '/use_password',
    name: 'use_password',
    component : resolve => require(['./pages/user/user_password'],resolve)
  },
  {
    path : '/order_manage',
    name: 'order_manage',
    component : resolve => require(['./pages/order_manage'],resolve)
  },
  {
    path : '/receipt_application',
    name: 'receipt_application',
    component : resolve => require(['./pages/receipt_application'],resolve)
  },
  {
    path : '/pay_record',
    name: 'pay_record',
    component : resolve => require(['./pages/pay_record'],resolve)
  },
  {
    path : '/use_defined',
    name: 'use_defined',
    component : resolve => require(['./pages/user_defined'],resolve)
  }
]
