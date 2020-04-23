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
                  buildHookId: '5ea1d9698ca38c1af6696e9b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5hu8rfwq',
                  apiId: 'dbfe22c4-3aed-4c4f-b483-e7aa697f0211'
                },
                {
                  buildHookId: '5ea1d9692470480179fad54a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-nuzyz7sc',
                  apiId: 'bd4705ce-1655-407d-9793-6faa9a5b1075'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gmaclennan/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-nuzyz7sc.netlify.app', category: 'apps' }
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
