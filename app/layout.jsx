import '../styles/globals.css';
import '../styles/typography.css';
import '../styles/colors.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;