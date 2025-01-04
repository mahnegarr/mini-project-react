import firstPic from "../src/assets/1.png"
import { books } from "../src/constants/mockData"
import Books from "./components/Books";
import Layout from "./layouts/Layout";


function App() {
  return (
    <>
      <Layout>
        <Books />
      </Layout>
    </>
  );
}

export default App;
