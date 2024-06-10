import BarrierDetail from '@/components/barriers/BarrierDetail';
import Layout from '@/components/layout/Layout';
import stigmaBarrier from '@/components/barriers/data/barrier-1.json';

export default function AccessPage() {
  return (
    <>
      <Layout>
        <BarrierDetail barrier={stigmaBarrier} />
      </Layout>
    </>
  );
}
