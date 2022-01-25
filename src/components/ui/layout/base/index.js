import Header from "../header";
import { Web3Provider } from "../../../providers/";

const BaseLayout = ({ children }) => {
  return (
    <Web3Provider>
      <div className="min-h-screen bg-light-primary">
        <Header />
        {children}
      </div>
    </Web3Provider>
  );
};

export default BaseLayout;
