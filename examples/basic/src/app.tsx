import { useRoutes } from "react-router-dom";
import { EagerLoader } from "vite-plugin-remix-routes/client";
import routes from "virtual:remix-routes";

export default function App() {
  const element = useRoutes(routes);

  return (
    <>
      {/* More info about EagerLoader in the README */}
      <EagerLoader routes={routes} />
      {element}
    </>
  );
}
