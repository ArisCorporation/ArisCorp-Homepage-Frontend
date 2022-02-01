import Layout from "./layout";

export default function VerseExkursIndex() {
  return <div>index</div>;
}

VerseExkursIndex.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
