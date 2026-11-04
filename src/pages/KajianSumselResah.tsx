import { KajianDetailView } from "../components/KajianDetailView";
import { getKajianById } from "../data/kajianData";

interface KajianSumselResahProps {
  onBack?: () => void;
}

export function KajianSumselResah({ onBack }: KajianSumselResahProps) {
  const kajian = getKajianById("sumsel-resah-seruan-aksi");

  if (!kajian) {
    return (
      <div className="py-20 text-center">
        <p className="font-mono text-sm text-[#777266]">Kajian Sumsel Resah tidak ditemukan.</p>
      </div>
    );
  }

  const handleBack = onBack ?? (() => {
    window.location.hash = "#kajian-terkini";
  });

  return <KajianDetailView kajian={kajian} onBack={handleBack} />;
}

export default KajianSumselResah;
