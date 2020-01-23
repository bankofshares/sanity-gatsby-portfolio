export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e29916931d777018993feaa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5hsf3wnn',
                  apiId: '42727bf1-31f8-461f-a5ee-350607177fa6'
                },
                {
                  buildHookId: '5e29916963ec64018674c63f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ubcd5qp4',
                  apiId: '1c766f5c-a290-426f-854b-4ac4bcd925b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bankofshares/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ubcd5qp4.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
