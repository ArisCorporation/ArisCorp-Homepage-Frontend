import Layout from "./layout";

export default function test() {
  return <div className="bg-red-600">test</div>
}

test.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};