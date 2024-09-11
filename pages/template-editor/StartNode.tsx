import AddButton from "@/components/AddButton";
import StartButton from "@/components/StartButton";
import { renderNode } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StartNode = (props: any) => {
    const { data } = props;
  
    return (
      <>
        <StartButton />
        {!data.nextNode && <AddButton />}
        {data.nextNode && renderNode(data.nextNode)}
      </>
    )
  };

  export default StartNode;
