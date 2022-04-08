import { renderIcon } from '@/utils/utils'
import { PersonOutline, LockClosedOutline } from '@vicons/ionicons5'
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: {
      requiresAuth: false,
      title: 'Login',
      layout: 'full',
    },
    icon: renderIcon(LockClosedOutline),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue'),
    meta: {
      requiresAuth: false,
      title: 'Register',
      layout: 'full',
    },
    icon: PersonOutline,
  },
]
