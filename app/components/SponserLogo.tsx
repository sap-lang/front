import { Card, CardContent } from "@/app/components/ui/card"
import Image from "next/image"

interface SponserLogoProps {
  name: string,
  comment?: string,
  logo?: string
}

export function SponserLogo({ name, comment, logo }: SponserLogoProps) {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="flex items-center gap-4 p-6">
        <Image
          src={logo || "/SAP_trans_bg.png"}
          width={40}
          height={40}
          alt={`${name} logo`}
          className="h-10 w-10"
        />
        <div>
          <h3 className="font-semibold text-blue-900">{name}</h3>
          <p className="text-sm text-blue-400">
            {comment || 'Sap-Lang contributor'}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

