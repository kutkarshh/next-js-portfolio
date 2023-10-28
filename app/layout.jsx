import "../styles/globals.css";

import Nav from "../components/Nav";
import Provider from "../components/Provider";

export const metadata = {
  title: "Promptizer",
  description:
    "Discover & Share AI Generated Contents for free. Just login and use the free services.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          src="https://widget.Cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script>
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
