
export default { "status": 0, "msg": "查询成功", "permission": { "isAdmin": true, "isBuyer": true, "isSeller": true, "username": "18800000000" },"menu": [ { "name": "我是买家", "icon": "icon20-order", "link": "/user_address", "sub": [ { "name": "基本信息", "link": "/user_address" } , { "name": "常用地址", "link": "/use_info" } , { "name": "账号绑定", "link": "/use_password" }, { "name": "修改密码", "link": "/use_password" }] }, { "name": "订单管理", "icon": "icon20-order", "link": "/order_manage","sub":null}, { "name": "发票申请", "icon": "icon20-order", "link": "/receipt_application","sub":null}, { "name": "支付记录", "icon": "icon20-order", "link": "/pay_record","sub":null}, { "name": "个人定制", "icon": "icon20-order", "link": "/use_defined","sub":null}
] }
