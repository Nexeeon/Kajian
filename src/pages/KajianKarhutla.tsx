import { KajianDetailView } from "../components/KajianDetailView";
import { getKajianById } from "../data/kajianData";

interface KajianKarhutlaProps {
  onBack?: () => void;
}

export function KajianKarhutla({ onBack }: KajianKarhutlaProps) {
  const kajian = getKajianById("karhutla-indonesia-2026");

  if (!kajian) {
    return (
      <div className="py-20 text-center">
        <p className="font-mono text-sm text-[#777266]">Kajian Karhutla 2026 tidak ditemukan.</p>
      </div>
    );
  }

  const handleBack = onBack ?? (() => {
    window.location.hash = "#kajian-terkini";
  });

  return <KajianDetailView kajian={kajian} onBack={handleBack} />;
}

export default KajianKarhutla;
