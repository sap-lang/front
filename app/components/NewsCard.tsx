import { Card, CardContent, CardHeader } from "@/app/components/ui/card"
import Image from "next/image"

export function NewsCard() {
  return (
    <Card className="shadow-md hover:shadow-lg bg-white text-blue-900">
      <CardHeader>
        <Image
          src="/SAP_trans_bg.png"
          width={100}
          height={100}
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

