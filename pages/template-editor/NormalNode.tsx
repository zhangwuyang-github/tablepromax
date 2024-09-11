import AddButton from "@/components/AddButton";
import FuncCard from "@/components/FuncCard";
import { renderNode } from ".";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NormalNode = (props: any) => {
    const { data } = props;

    return (
        <>
            <AddButton />
            <FuncCard data={data} />
            {data.nextNode && renderNode(data.nextNode)}
            {!data.nextNode && <AddButton />}
        </>
    )
};

export default NormalNode;