import Layout from "./layout";

export default function test() {
  return <div className="bg-red-600">starmap site</div>
}

test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};