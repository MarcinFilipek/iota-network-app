import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#E6E7EE",
      },
      {
        name: "dark",
        value: "#000000",
      },
    ],
  },
};
