import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import RequirementsPagePreview from './preview-templates/RequirementsPagePreview'
import SectionsPreview from './preview-templates/SectionsPreview'
import SolutionsPagePreview from './preview-templates/SolutionsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('solutions', SolutionsPagePreview)
CMS.registerPreviewTemplate('sections', SectionsPreview)
CMS.registerPreviewTemplate('requirements', RequirementsPagePreview)
