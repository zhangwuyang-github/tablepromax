/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './index.module.css';
import EndButton from "@/components/EndButton";
import mockdata from './data.json';
import StartNode from './StartNode';
import NormalNode from './NormalNode';

export const renderNode = (data: any) => {
  if (data.nodeType === 'START_NODE') {
    return <StartNode data={data} />
  }
  return <NormalNode data={data} />
};

export default function TemplateEditor() {
  return (
    <div className={styles.container}>
      编辑器

      <div className={styles.flowContainer}>
        {renderNode(mockdata.nodeMap)}
        <EndButton />
      </div>
    </div>
  )
}
