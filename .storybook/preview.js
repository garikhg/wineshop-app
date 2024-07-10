/** @type { import('@storybook/react').Preview } */
import '../src/styles/globals.css'; // Import Tailwind CSS stylesheet

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
