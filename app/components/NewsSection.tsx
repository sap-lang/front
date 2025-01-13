import { NewsCard } from "./NewsCard"

export function NewsSection() {
  return (
    <section className="bg-blue-50 py-6">
      <div className="container w-[95%] md:w-full mx-auto">
            <div className=" mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Latest NEWS for Sap-Lang</h2>
                <p className="text-blue-600 text-lg"> Sap-Lang is evolving~! </p>
            </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <NewsCard key={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

