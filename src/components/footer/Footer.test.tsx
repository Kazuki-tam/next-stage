import renderer from 'react-test-renderer'

import { Footer } from './Footer'

it('renders correctly footer', () => {
  const tree = renderer.create(<Footer />).toJSON()
  expect(tree).toMatchSnapshot()
})
