export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 text-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">À propos de l’application</h1>
        <p className="text-lg mb-6">
          Cette application météo a été développée dans le but d’offrir un accès rapide, fiable et intuitif aux conditions météorologiques en temps réel. Elle s’appuie sur des technologies modernes pour garantir performance et simplicité d’utilisation.
        </p>
        <p className="text-lg mb-6">
          Elle permet aux utilisateurs de consulter les prévisions locales et internationales avec une interface claire, responsive et pensée pour une expérience fluide sur tous les appareils.
        </p>
        <div className="bg-blue-400 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Notre vision</h2>
          <p className="text-lg">
            L’objectif de cette application est de proposer un service utile au quotidien, combinant précision des données, rapidité d’affichage et design épuré. Elle démontre le potentiel du web moderne pour créer des outils accessibles et performants.
          </p>
        </div>
      </div>
    </main>
  );
}