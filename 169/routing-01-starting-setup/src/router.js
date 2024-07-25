import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/pages/TeamsList.vue';
import UsersList from './components/pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/teams' },
      { path: '/users',
        meta: { needsAuth: true },
        components: { default: UsersList, footer: UsersFooter },
        beforeEnter(to, from, next) {
          console.log('Users beforeEnter')
          console.log(to, from)
          next()
        },
      },
      {
        name: 'teams',
        path: '/teams',
        components: { default: TeamsList, footer: TeamsFooter },
        children: [{ name: 'team-members', path: ':teamId', component: TeamMembers, props: true }],
      },
      { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition)
        return savedPosition
      return { left: 0, top: 0 }
    },
  });
  
  router.beforeEach((to, from, next) => {
    console.log('Global beforeEach')
    console.log(to, from)
    if (to.meta.needsAuth) {
      console.log('Needs auth!!')
      next()
    }
    else {
      next()
    }
    // if (to.name === 'team-members') {
    //   next()
    // } else {
    //   next({ name: 'team-members', params: { teamId: 't2' } })
    // }
    next()
  })
  
  router.afterEach((to, from) => {
    console.log('Global aftereach')
    console.log(to, from)
  })

  export default router