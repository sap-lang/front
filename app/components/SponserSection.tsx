import { SponserLogo } from "./SponserLogo"

export function SponserSection() {
  return (
    <section className="bg-blue-50 py-6">
      <div className="container w-[95%] md:w-full mx-auto">
      <div className=" mb-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4"> Sap in Action ~</h2>
                <p className="text-blue-600 text-lg"> These People and Companies like Sap as you do! </p>
            </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {['LyZH', 'AkaraChen', 'Dannypsnl', 'VitalyR'].map((company) => (
            <SponserLogo key={company} name={company} comment={
              ["So good", "I love it", "I'm a fan", "So powerful"][Math.floor(Math.random() * 4)]
            } />
          ))}
        </div>
      </div>
    </section>
  )
}

