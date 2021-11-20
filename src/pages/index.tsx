import styles from './index.less';
import { ButtonComponent } from '../components/Button';

export default function IndexPage() {

const button_type = 'primary';
const button_label = 'hello world'

  return (
    <div>
      <h1 className={styles.title}>Page index</h1><br />
      <ButtonComponent type={button_type} label={button_label} />
    </div>
  );
}
