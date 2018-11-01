const _import = file => resolve => require([`@views/${file}`], resolve)

export default [{
  path: '/',
  component: _import('layout/login')
}, {
  path: '/backstage',
  component: _import('layout/backstage'),
  children: [
    {
      name: 'certificate',
      path: '/certificate',
      component: _import('certificate')
    }, {
      name: 'collegeintro',
      path: '/collegeIntro/:category',
      component: _import('collegeIntro')
    }, {
      name: 'educationnews',
      path: '/educationNews/:category',
      component: _import('educationNews')
    }, {
      name: 'studentnews',
      path: '/studentNews/:category',
      component: _import('studentNews')
    }, {
      name: 'partynews',
      path: '/partyNews/:category',
      component: _import('partyNews')
    }, {
      name: 'cooperateinfo',
      path: '/cooperateInfo/:category',
      component: _import('cooperateInfo')
    }, {
      name: 'gallery',
      path: '/gallery/:category',
      component: _import('gallery')
    },  {
      name: 'modified',
      path: '/modified/:category',
      component: _import('modified')
    }, {
      name: 'teacherinfo',
      path: '/teacherInfo',
      component: _import('teacherInfo')
    }, {
      name: 'friendlylink',
      path: '/friendlyLink',
      component: _import('friendlyLink')
    }, {
      name: 'collegenews',
      path: '/collegeNews',
      component: _import('collegeNews')
    }, {
      name: 'reportblog',
      path: '/reportBlog',
      component: _import('reportBlog')
    }, {
      name: 'activity',
      path: '/activity',
      component: _import('activity')
    }, {
      name: 'banners',
      path: '/banners',
      component: _import('banners')
    }
  ]
}]
