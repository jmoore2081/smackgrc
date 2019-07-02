import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import RequirementsPagePreview from './preview-templates/RequirementsPagePreview'
import SolutionsPagePreview from './preview-templates/SolutionsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('requirements', RequirementsPagePreview)
CMS.registerPreviewTemplate('solutions', SolutionsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
