"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./backButton";
interface CardWapperProps {
  children: React.ReactNode;
  headerLabel: string;
  baclButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
const CardWapper = ({
  children,
  headerLabel,
  baclButtonLabel,
  backButtonHref,
  showSocial,
}: CardWapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={baclButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
export default CardWapper;
