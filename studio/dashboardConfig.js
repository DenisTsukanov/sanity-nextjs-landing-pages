export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4919f10d32de3eeebc091e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ndfpi513',
                  apiId: '0dbf1433-17f4-44f9-8987-169232d7ad56'
                },
                {
                  buildHookId: '5e4919f108ec7ba5d53fc32d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z7pm84yz',
                  apiId: '171b4a53-0db0-49fe-9256-1d8b54a62b8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DenisTsukanov/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z7pm84yz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
