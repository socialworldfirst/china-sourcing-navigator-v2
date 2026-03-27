"use client";

export default function DownloadFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-semibold text-wf-text mb-4">Download coming soon</h3>
        <p className="text-sm text-wf-text-secondary mb-6">The download form is being set up. Check back shortly.</p>
        <button onClick={onClose} className="btn-pill px-6 py-2.5 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover">Close</button>
      </div>
    </div>
  );
}
