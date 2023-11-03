import renderer from 'react-test-renderer';
import App from './App';
import getWeather from './App';

test('renders correctly', () => {
  const tree = renderer.create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Unit test for the getWeather component
describe('getWeather', () => {
  test('should return a function', () => {
      expect(typeof getWeather).toBe('function');
  })
})

test('MyComponent renders correctly with data from API', async () => {
  // Mock the fetch() function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: 'Mocked data' }), // Replace with your mocked data
    })
  );

  // Render your component
  const component = renderer.create(<App />);

  // Wait for the fetch to resolve
  await Promise.resolve();

  // Capture the snapshot of the rendered output
  const tree = component.toJSON();

  // Compare the snapshot with previous snapshot (if available)
  expect(tree).toMatchSnapshot();
});
