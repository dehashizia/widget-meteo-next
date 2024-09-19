export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 text-white">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">À propos de moi</h1>
        <p className="text-lg mb-6">
          Je suis une développeuse web junior, et cette application météo a été
          réalisée dans le cadre de ma formation pour mettre en pratique les
          compétences que j'ai acquises.
        </p>
        <p className="text-lg mb-6">
          Ce projet m'a permis de mieux comprendre le développement front-end
          avec React et Next.js, ainsi que la consommation d'API pour récupérer
          des données en temps réel, comme les prévisions météo. Mon objectif à
          travers cette application était de renforcer mes connaissances et
          d'apprendre à intégrer diverses fonctionnalités tout en proposant une
          interface utilisateur agréable.
        </p>
        <div className="bg-blue-400 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Pourquoi cette application ?
          </h2>
          <p className="text-lg">
            L'application météo a été un excellent projet pour me familiariser
            avec les API, la gestion des composants, et l'optimisation d'une
            interface web. J'ai choisi ce sujet car il combine plusieurs aspects
            essentiels du développement web tout en étant utile pour les
            utilisateurs.
          </p>
        </div>
      </div>
    </main>
  );
}
