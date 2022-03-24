import renderer from 'react-test-renderer'

import { Header } from './Header'

it('renders correctly header', () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})
