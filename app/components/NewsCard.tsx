import { Card, CardContent, CardHeader } from "@/app/components/ui/card"
import Image from "next/image"

export function NewsCard() {
  return (
    <Card className="bg-white text-blue-900 shadow-md">
      <CardHeader>
        <Image
          src="/SAP_trans_bg.png"
          width={300}
          height={150}
          alt="News thumbnail"
          className="rounded-lg"
        />
      </CardHeader>
      <CardContent>
        <h3 className="mb-2 text-xl font-semibold">Sap-Lang News</h3>
        <p className="text-sm text-blue-400">
          Latest updates and announcements from the Sap-Lang team.
        </p>
      </CardContent>
    </Card>
  )
}

