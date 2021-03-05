export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60429956af6d9c00bd774546',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fcteiees',
                  apiId: 'bbc8f0b8-0e27-4c66-93e8-6276a831ad3e'
                },
                {
                  buildHookId: '6042995655d36900c7d54da5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-t9vn1q48',
                  apiId: 'f3ec5d2f-a57f-4960-8df4-87169e42e6cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nikolas-haug/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-t9vn1q48.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
