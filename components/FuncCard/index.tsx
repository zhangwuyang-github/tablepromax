import cs from 'classnames';
import styles from './index.module.css';

const tipMap: Record<string, string> = {
    CONNECTOR: '连接器节点',
    FETCH_SINGLE: '获取单条数据'
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FuncCard = (props: any) => {
    const { data } = props;

    return (
        <div className={styles.container}>
            <div className={styles.subtraction}>
                <span className={styles.delIcon} />
            </div>

            <div className={cs({
                [styles.title]: true,
                [styles.greenTitle]: data.nodeType === 'FETCH_SINGLE',
                [styles.blueTitle]: data.nodeType === 'CONNECTOR',
            })}>
                {data.nodeName}
            </div>
            
            <div className={styles.content}>
                点击配置
                {tipMap[data.nodeType]}
            </div>
        </div>
    )
};

export default FuncCard;
