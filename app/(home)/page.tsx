import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="py-4 ">
      <Input placeholder="here input" />

      <Checkbox />
      <div>
        <Button variant={"elevated"}>I am button</Button>
      </div>

      <div>
        <Progress value={50} />
      </div>

      <div>
        <Textarea placeholder="here" />
      </div>
    </div>
  );
}
