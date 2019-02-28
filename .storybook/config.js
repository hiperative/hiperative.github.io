import { configure } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

global.__PATH_PREFIX__ = ''
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

configure(loadStories, module)
