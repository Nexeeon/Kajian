import { KajianDetailView } from "../components/KajianDetailView";
import { getKajianById } from "../data/kajianData";

interface KajianAndrieYunusProps {
  onBack?: () => void;
}

export function KajianAndrieYunus({ onBack }: KajianAndrieYunusProps) {
  const kajian = getKajianById("andrie-yunus-mimbar-bebas");

  if (!kajian) {
    return (
      <div className="py-20 text-center">
        <p className="font-mono text-sm text-[#777266]">Kajian Andrie Yunus tidak ditemukan.</p>
      </div>
    );
  }

  const handleBack = onBack ?? (() => {
    window.location.hash = "#kajian-terkini";
  });

  return <KajianDetailView kajian={kajian} onBack={handleBack} />;
}

export default KajianAndrieYunus;
