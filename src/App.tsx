import './App.css'

function App() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/myeloid-apc-atlas-landing/myeloid-background.jpg')" }}
    >
      {/* 🔲 Dark overlay */}
      <div className="absolute inset-0 bg-slate-300 opacity-85 z-0"></div>

      {/* 🧬 Main content wrapper */}
      <div className="relative z-10 flex justify-center  w-full">
        <div className="flex min-h-svh flex-col items-center max-w-[1280px] w-full text-white mx-2">

          <h1 className="text-2xl p-4 mb-4 mt-4 font-baseline bg-indigo-700 text-slate-200 w-full rounded-md shadow-md">
            Myeloid APC Atlas
          </h1>

          {/* abstract */}
          <div className="flex w-full flex-col bg-slate-200 h-[150px] shadow-md rounded-md justify-center">
            <p className="text-center text-sm sm:text-baseline md:text-lg  p-5 font-light text-indigo-800">
              A curated single-cell atlas of myeloid antigen-presentation cells (APCs) in human cancer. This atlas was made through integration of myeloid APCs extracted from 36 publicly available datasets. The atlas comprises 498,023 cells from 589 samples across 12 solid tumour types, including primary and metastatic samples and associated healthy tissue.
            </p>
          </div>

          {/* 🔗 Link to the datasets */}
          <div className="flex w-full h-[400px] mt-8 gap-3">
            {[
              {
                title: "Myeloid APC Atlas",
                description: "498,023 cells including macrophages, monocytes and dendritic cells found in human tumours and associated tissues.",
                image: "/myeloid-apc-atlas-landing/myeloid-umap.png",
                link: "https://your-dataset-link.com/myeloid",
              },
              {
                title: "DC Atlas",
                description: "29,887 dendritic cells isolated from the complete Myeloid APC Atlas.",
                image: "/myeloid-apc-atlas-landing/dc-umap2.png",
                link: "https://your-dataset-link.com/dc",
              },
            ].map(({ title, description, image, link }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-slate-700 shadow-md rounded-lg overflow-hidden w-full transition duration-300 cursor-pointer"
              >

                  {/* 🔲 Overlay that darkens on hover */}
              <div className="absolute flex justify-center items-center inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-300 z-10 rounded-lg pointer-events-none">
                <span className="px-4 py-2 bg-indigo-700 text-white rounded-md duration-300 pointer-events-none">
                  View Dataset
                </span>
              </div>

                {/* 🖼️ Image */}
                <div className="relative h-70 w-full bg-white flex z-0">
                  <img
                    src={image}
                    alt={`${title} Cover`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* 📝 Text content */}
                <div className="p-4 relative z-20">
                  <h3 className="text-xl font-semibold text-slate-300">{title}</h3>
                  <p className="text-sm text-slate-300 mt-2">{description}</p>
                </div>
              </a>
            ))}
          </div>


          {/* Info sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
            {/* 📧 Email Section */}
            <ul className="bg-slate-200 shadow-md rounded-lg p-6 space-y-4">
              <li className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                📧 <span>Contact Emails</span>
              </li>
              {[
                { name: "Nikita Rosendahl", email: "n.rosendahl@student.uq.edu.au" },
                { name: "Kristen Radford", email: "kristen.radford@mater.uq.edu.au" },
                { name: "Kelvin Tuong", email: "z.tuong@uq.edu.au" },
                { name: "Norman Yap", email: "norman.yap@uq.edu.au" },
              ].map(({ name, email }) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="text-indigo-600 hover:text-indigo-800 transition underline text-sm"
                  >
                    {name} — {email}
                  </a>
                </li>
              ))}
            </ul>

            {/* 📄 Manuscript */}
            <div className="bg-slate-200 shadow-md rounded-lg p-6 space-y-2">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-10">
                📄 <span>Manuscript</span>
              </h2>
              <p className="text-sm text-slate-900">
                For full details on the dataset and analysis methods, refer to our published manuscript:
              </p>
              <a
                href="https://doi.org/10.1234/example-citation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 underline text-sm"
              >
                Rosendahl et al., 2024 – Spatial transcriptomics in tumor microenvironments
              </a>
            </div>

            {/* 🐙 GitHub */}
            <div className="bg-slate-200 shadow-md rounded-lg p-6 space-y-2">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-10">
                🐙 <span>GitHub Repository</span>
              </h2>
              <p className="text-sm text-slate-800">
                Explore the source code, workflows, and dataset integration tools used in this browser:
              </p>
              <a
                href="https://github.com/nikita-rosendahl/cancermyeloidatlas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 underline text-sm"
              >
                github.com/nikita-rosendahl/cancermyeloidatlas
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full mt-8 bg-slate-700 mb-2 border-t border-slate-800  shadow-md rounded-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="mb-4 md:mb-0">
                <p>© {new Date().getFullYear()} Tuong Lab - Nikita Rosendahl</p>
                <p className="text-xs text-gray-500">Built with Vite + React + TypeScript</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">
                  GitHub
                </a>
                <a href="mailto:norman.yap@uq.edu.au" className="hover:text-indigo-600">
                  Contact
                </a>
                <a href="/privacy" className="hover:text-indigo-600">
                  Privacy
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
